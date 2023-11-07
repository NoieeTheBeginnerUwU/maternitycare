import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Touchable, StatusBar, AppRegistry } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//Navigation
import { createStackNavigator } from '@react-navigation/stack';
//Pages
import Tools from './Tools';
import Appointment from './Appointment';
import Home from './Home';
import Child from './tools/Child';
import Events from './tools/Events';
import Lab from './tools/Lab';
import Staff from './tools/Staff';
import History from './tools/History';
import Milestone from './tools/Milestone';
import Profile from './home/Profile';
import Notification from './Notification';
import Edit from './home/Edit';
import Settings from './home/Settings';
import Changepass from './home/Changepass';
import Childimmunization from './Immunization/Childimmunization';
import Nochild from './Immunization/Nochild';
import Registerchild from './Immunization/Registerchild';
import Reminder from './tools/Reminder';
import Users from './home/User';
import Articles from './home/Articles';
import Log from './log/Log';
import Addreminder from './reminder/Addreminder';
import About from './home/About';
import Terms from './home/Terms';
import Messages from './Messages';
import Eddcalc from './tools/Eddcalc';
import Bmicalc from './tools/Bmicalc';
import Watch from './tools/Watch';
//Global styling
const Stack = createStackNavigator();
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faCirclePlus, } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons/faTools';
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
//For navigation between inner pages
import { useNavigation } from '@react-navigation/native';
import LoggingIn from './animations/LoggingIn';
//import firebase
import { getDocs, collection, getDoc, doc, where, query, onSnapshot, orderBy } from 'firebase/firestore';
import { authentication } from '../config/firebase';
import { database } from '../config/firebase';
//animation
import Fetchdata from './animations/Fetchdata';
import Suspended from './animations/Suspended';
import Notfound from './animations/Notfound';
import Loading from './animations/Loading';
//import moment js
import moment from 'moment'
//Expo notif
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';
//import background handler
import BackgroundFetch from 'react-native-background-fetch';
import { getFormatedDate } from 'react-native-modern-datepicker';
//permission
import { PermissionsAndroid } from 'react-native';
import { AppState } from 'react-native';
import { FirebaseApp } from 'firebase/app';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
const Dashboard = () => {
  const id = authentication.currentUser.uid;
  const navigation = useNavigation();
  const [active, setActive] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [documents, setDocument] = useState([]);
  const [accountStatus, setAccountStatus] = useState("");
  const [alarm, setAlarm] = useState([]);
  const [registered, isRegistered] = useState(false);
  let today = new Date();
  const today1 = moment(today, "YYYY/MM/DD");
  const [note, setNote] = useState("");
  const [userPic, setUserPic] = useState("");
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const [sound, setSound] = useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/success5.wav')
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
          ;
        }
      : undefined;
  }, [sound]);

  const [uid, setUid] = useState("");
  const [message, setMessage] = useState("");

  async function fetchUser(){
    const userData = [];
    const querySnapshot = await getDocs(query(collection(database, 'userData'),where("userNumber","==",id)));
    querySnapshot.forEach((doc)=>{
      setUid(doc.id);
    })
  }

  useEffect(() => {
    fetchUser();
    const unsubscribe = onSnapshot(query(collection(database, "messages")),orderBy("createdAt","asc"), (snapshot) => {
      snapshot.docs.forEach((doc)=>{
        if(doc.data().receiverId===uid){
          setMessage(doc.data().message)
        }
      })
    });

    return () => {
      unsubscribe();
    };
  }, [uid]);

  async function schedulePushNotificationNow() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You have a new message from Daet RHU III Birthing Center.",
        message: message
      },
      trigger: { seconds: 1 },
    });
  }
  
  async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    return token;
  }


  useEffect(()=>{

    async function fetchUser(){
      const userData = [];
      const querySnapshot = await getDocs(query(collection(database, 'userData'),where("userNumber","==",id)));
      querySnapshot.forEach((doc)=>{
        setUid(doc.id);
        setUserPic(doc.data().userPic);
      })
    }
    fetchUser();
    const messagesCollection = query(collection(database, "messages"),where("receiverId","==",uid));
    const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
      schedulePushNotificationNow(); 
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current === "inactive"|"background" &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      } 

      ////////////////////////////////////////////////////
     

      /////////////////////////////////////////////////////
      async function makeMeDate(){

          let date = new Date()
          console.log(date);
    
      }
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      if(nextAppState==="active"){
        try{

        }catch(e){
          console.log(e);
        }
      }
      if(nextAppState==="background"||"inactive"){
        try{
          let date = new Date()
          console.log("wew")
        }catch(e){
          console.log(e)
        }
      }
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(()=>{
              // Step 1:  Configure BackgroundFetch as usual.
              let status =  BackgroundFetch.configure({
                minimumFetchInterval: 15
              }, async (taskId) => {  // <-- Event callback
                // This is the fetch-event callback.
                console.log("[BackgroundFetch] taskId: ", taskId);
          
                // Use a switch statement to route task-handling.
                switch (taskId) {
                  case 'com.foo.customtask':
                    fetchReminders().then(console.log("fetched from reminders"))
                    useEffect(()=>{
                      const messagesCollection = query(collection(database, "messages"),where("receiverId","==",uid));
                      const unsubscribe = onSnapshot(messagesCollection, (snapshot) => {
                        schedulePushNotificationNow(); 
                      });
                      return unsubscribe
                    },[])
                    break;
                  default:
                    print("Default fetch task");
                }
                // Finish, providing received taskId.
                BackgroundFetch.finish(taskId);
              }, async (taskId) => {  // <-- Task timeout callback
                // This task has exceeded its allowed running-time.
                // You must stop what you're doing and immediately .finish(taskId)
                BackgroundFetch.finish(taskId);
              });
          
              // Step 2:  Schedule a custom "oneshot" task "com.foo.customtask" to execute 5000ms from now.
              BackgroundFetch.scheduleTask({
                taskId: "com.foo.customtask",
                forceAlarmManager: true,
                delay: 5000  // <-- milliseconds
              });
          
  },[])

  useEffect(()=>{
    async function fetchData(){
      const querySnapshot = await getDoc(doc(database, "userData", id));;
      console.log(querySnapshot.data().status);
      setAccountStatus(querySnapshot.data().status);
    };
    fetchData();
  },[])

  useEffect(()=>{
    setSignIn(true);
    setTimeout(()=>{
      setSignIn(false)
    },2000)
  },[]);

  console.log(accountStatus)
  const navigateTo = (active) => { 
    navigation.navigate(active)
    setActive(active);
  }
  //Reminders 

  const [reminderDate, setReminderDate] = useState("");
  const [reminderTimes, setReminderTime] = useState("");
  const [timesIn, setTimesIn] = useState([]);
  const [reminderNote, setReminderNote] = useState(""); 

  async function fetchReminders(){
    let thisDay = moment(today1, "YYYY/MM/DD")
    const querySnapshot = await getDocs(query(collection(database, 'reminders'),where("user","==",id),where("status","==","enabled")));
    
    const userData = [];
    const times = [];
    const notes = [];
    let date_ = "";
    let time_ = "";
    let remind_ = "";
    let alarms = [];
    let i = 1;
    let reminders = querySnapshot;
    reminders.docs.map((doc)=>{
      //console.log("fetched " + i + " times from reminders")
      userData.push(doc.data().dates);
      userData.map((date)=>{
        setReminderNote(doc.data().note);
        for(let a = 0; a <= date.length-1; a++){
          let dateNowYeah = new Date();
          const startDate = getFormatedDate(
            dateNowYeah.setDate(dateNowYeah.getDate()),
            "YYYY-MM-DD"
          );
          if(date[a]===startDate){
            times.push(doc.data().times);
            setReminderNote(doc.data().note);
            setReminderDate(date[a]);
            //console.log("HIT");
            //console.log("date: "+ reminderDate + " times: "  + reminderTimes);
            //console.log(date[a]);
           times.map((time)=>{ 
              for(let b = 0; b <= time.length-1; b++){
                if(moment(date[a],"YYYY/MM/DD").diff(startDate)===0){
                  notes.push({date:date[a], time:time[b], reminderNote:doc.data().note})
                }
                var hours = moment().utcOffset('+08:00').format('hh:mm a');
                let hour = startDate+" "+time[b];
                //console.log(moment(hour, "YYYY/mm/dd hh:mm a").diff(moment(startDate,"YYYY/MM/DD hh:mm a"),"minutes")+" minutes: "+ time[b]);
                //console.log(moment(date[a]+" "+time[b],"YYYY/MM/DD hh:mm a")+ " "+(moment(today1,"YYYY/MM/DD hh:mm a")));
                      //console.log("date[a]: "+date[a] + " | startDate: " + startDate+" | " + moment(time[b],"hh:mm a").diff(moment(today1,"hh:mm a"),'minutes')+" minutes: "+ time[b]+ " | note: " + reminderNote)
                        if(moment(time[b],"hh:mm a").diff(moment(today1,"hh:mm a"),'minutes')<10&&moment(time[b],"hh:mm a").diff(moment(today1,"hh:mm a"),'minutes')>0){
                          try{
                            date_ = date[a];
                            time_ = time[b];
                            remind_ = reminderNote;
                           console.log("TEST: ", date[a],time[b],reminderNote)
                          }catch(e){
                            console.log(e);
                          }
                      }
                } 
            })
          }
        }
      })
      console.log(notes)
      sendNotifNow(date_,time_,remind_);
      i++;
    })
  };

  

  function sendNotifNow(date,time,note){
    let timeNow = new Date();
    let timeout = moment(timeNow,"hh:mm a").diff(moment(time,"hh:mm a"),"seconds")
    console.log("Date: " + date + "Time left " + timeout + " seconds" + " Note: " + note)
    try{
      schedulePushNotification(date, time, note, timeout);
    }catch(e){
      console.log(e);
    }
  }

  //console.log("times: " + timesIn + " reminder: " + reminderNote + " Date: " + reminderDate);

  useEffect(()=>{
    try{
      fetchReminders();
    }catch(e){  
      console.log(e);
    }
  },[])

  return (
              <>
              <StatusBar animated={true} backgroundColor="black"/>
                <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerShown:false,headerLeftLabelVisible:false,headerTintColor: 'white',headerStyle:{backgroundColor: 'navy',}}}>  
                  <Stack.Screen name='Home' component={Home}/>
                  <Stack.Screen name='Appointment' component={Appointment}/>
                  <Stack.Screen name='Tools' component={Tools}/>
                  <Stack.Screen name='Child' component={Child}/>
                  <Stack.Screen name='History' component={History}/>
                  <Stack.Screen name='Staff' component={Staff}/>
                  <Stack.Screen name='Milestone' component={Milestone}/>
                  <Stack.Screen name='Lab' component={Lab}/>
                  <Stack.Screen name='Events' component={Events}/>
                  <Stack.Screen name='Notification' component={Notification}/>
                  <Stack.Screen name='Profile' component={Profile}/>
                  <Stack.Screen name='Edit' component={Edit}/>
                  <Stack.Screen name='Password' component={Changepass}/>
                  <Stack.Screen name='Settings' component={Settings}/>
                  <Stack.Screen name='Childimmunization' component={Childimmunization}/>
                  <Stack.Screen name='Nochild' component={Nochild}/>
                  <Stack.Screen name='Registerchild' component={Registerchild}/>
                  <Stack.Screen name='Reminder' component={Reminder}/>
                  <Stack.Screen name='Users' component={Users}/>
                  <Stack.Screen name='Articles' component={Articles}/>
                  <Stack.Screen name='AddReminder' component={Addreminder}/>
                  <Stack.Screen name='Log' component={Log}/>
                  <Stack.Screen name='About' component={About}/>
                  <Stack.Screen name='Terms' component={Terms}/>
                  <Stack.Screen name='Messages' component={Messages}/>
                  <Stack.Screen name='BMI Calculator' component={Bmicalc}/>
                  <Stack.Screen name='EDD Calculator' component={Eddcalc}/>
                  <Stack.Screen name='Watch' component={Watch}/>
                </Stack.Navigator>

                <View style={style.bottomNav}>
                  <View  style={{width:'25%', height: 10,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'center' }}>
                  <TouchableOpacity style={{width: "100%", height: 40, backgroundColor: 'transparent',alignItems: 'center',justifyContent: 'center'}} onPress={()=> navigateTo("Home")}>
                    <View style={{width: 75, height: 30, borderRadius: 40,backgroundColor: active === "Home"? 'navy': 'transparent', alignItems: 'center', justifyContent: 'center',}}> 
                      <View style={{width: 60, height: active === "Home"?30: 0, borderRadius: 30, backgroundColor: active === "Home"? 'navy': 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={ faHome } size={24} style={{color:active==="Home"? "white":'navy'}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View  style={{width:'25%', height: 10,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'center' }}>
                  <TouchableOpacity style={{width: "100%", height: 40, backgroundColor: 'transparent',alignItems: 'center',justifyContent: 'center'}} onPress={()=> navigateTo("Appointment")}>
                    <View style={{width: 75, height: 30, borderRadius: 40,backgroundColor: active === "Appointment"? 'navy': 'transparent', alignItems: 'center', justifyContent: 'center',}}> 
                      <View style={{width: 60, height: active === "Appointment"?30: 0, borderRadius: 30, backgroundColor: active === "Appointment"? 'navy': 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={ faCirclePlus } size={24} style={{color:active==="Appointment"? "white":'navy'}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View  style={{width:'25%', height: 10,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'center' }}>
                  <TouchableOpacity style={{width: "100%", height: 40, backgroundColor: 'transparent',alignItems: 'center',justifyContent: 'center'}} onPress={()=> navigateTo("Messages")}>
                    <View style={{width: 75, height: 30, borderRadius: 40,backgroundColor: active === "Messages"? 'navy': 'transparent', alignItems: 'center', justifyContent: 'center', }}> 
                      <View style={{width: 60, height: active === "Messages"?30: 0, borderRadius: 30, backgroundColor: active === "Messages"? 'navy': 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={ faMessage } size={24} style={{color:active==="Messages"? "white":'navy'}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View  style={{width:'25%', height: 10,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'center' }}>
                  <TouchableOpacity style={{width: "100%", height: 40, backgroundColor: 'transparent',alignItems: 'center',justifyContent: 'center'}} onPress={()=> navigateTo("Tools")}>
                    <View style={{width: 75, height: 30, borderRadius: 40,backgroundColor: active === "Tools"? 'navy': 'transparent', alignItems: 'center', justifyContent: 'center', }}> 
                      <View style={{width: 60, height: active === "Tools"?30: 0, borderRadius: 30, backgroundColor: active === "Tools"? 'navy': 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={ faTools } size={24} style={{color:active==="Tools"? "white":'navy'}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                </View>
                </>

  )

  async function schedulePushNotificationNow() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You have a new message from Health center.",
        body: message,
      },
      trigger: { seconds: 1 },
    });
  }
  

async function schedulePushNotification(date, time, note, timeout) {
  try{
    await Notifications.scheduleNotificationAsync({
      content: {
        title: note,
        body: time,
        data: { data: 'dont forget~' },
      },
      trigger: { seconds: timeout },
    });
  }catch(e){
    console.log(e);
  }
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}
}


export default Dashboard

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  bottomNav: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    alignSelf: 'center',
    borderRadius: 80,
    width: '100%',
    marginVertical: 10,
    elevation:20,
    shadowColor:'skyblue'
  },
  bottomNavInside: {
    width: "100%",
    height: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomNavOutside: {
    width: '33.3%',
    height: '100%',
  },
  navText: {
    color: 'white'
  }
})
