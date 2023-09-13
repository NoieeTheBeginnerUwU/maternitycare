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
import { getDocs, collection, getDoc, doc, where, query } from 'firebase/firestore';
import { authentication } from '../config/firebase';
import { database } from '../config/firebase';
import messaging from '@react-native-firebase/messaging';
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
import { AppState } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Dashboard = () => {
  const id = authentication.currentUser.uid;
  const navigation = useNavigation();
  const [active, setActive] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [documents, setDocument] = useState([]);
  const [accountStatus, setAccountStatus] = useState("");
  const [registered, isRegistered] = useState(false);
  let today = new Date();
  const today1 = moment(today, "YYYY/MM/DD");
 
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current === "inactive"|"background" &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      } 

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      if(nextAppState==="active"){
        try{
          schedulePushNotificationForeground();
        }catch(e){
          console.log(e);
        }
      }
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

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
  
  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // useEffect(() => {
  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open

  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;

  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //     navigation.navigate("Home");
  //   });

  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then(async(remoteMessage) => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });

  //   // Register background handler
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });

  // }, []);



  console.log(accountStatus)
  const navigateTo = (active) => { 
    navigation.navigate(active)
    setActive(active);
  }
  //Reminders 
  const [sound, setSound] = useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/notif2.wav')
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

  const [reminderDate, setReminderDate] = useState("");
  const [reminderTimes, setReminderTime] = useState("");
  const [timesIn, setTimesIn] = useState([]);
  const [reminderNote, setReminderNote] = useState(""); 

  async function fetchReminders(){
    let thisDay = moment(today1, "YYYY/MM/DD")
    const querySnapshot = await getDocs(query(collection(database, 'reminders'),where("user","==",id),where("status","==","enabled")));
    const userData = [];
    const times = [];
    let i = 1;
    let reminders = querySnapshot;
    reminders.docs.map((doc)=>{
      //console.log("fetched " + i + " times from reminders")
      userData.push(doc.data().dates);
      if(moment(doc.data().times,"hh:mm a").diff(moment(today,"hh:mm a"),"minutes")>0){
        setReminderNote(doc.data().note); 
        times.push(doc.data().times);
      userData.map((date)=>{
        for(let a = 0; a <= date.length-1; a++){
          let dateNowYeah = new Date();
          const startDate = getFormatedDate(
            dateNowYeah.setDate(dateNowYeah.getDate()),
            "YYYY-MM-DD"
          );
          if(date[a]===startDate){
            setReminderDate(date[a]);
            //console.log("HIT");
            //console.log("date: "+ reminderDate + " times: "  + reminderTimes);
            //console.log(date[a]);
           times.map((time)=>{ 
              for(let b = 0; b <= time.length-1; b++){
                var hours = moment().utcOffset('+08:00').format('hh:mm a');
                console.log("date[a]: "+date[a] + " | startDate: " + startDate+" | " + moment(time[b],"hh:mm a").diff(moment(today1,"hh:mm a"),'minutes')+" minutes: "+ time[b]+ " | note: " + reminderNote)
                let hour = startDate+" "+time[b];
                //console.log(moment(hour, "YYYY/mm/dd hh:mm a").diff(moment(startDate,"YYYY/MM/DD hh:mm a"),"minutes")+" minutes: "+ time[b]);
                //console.log(moment(date[a]+" "+time[b],"YYYY/MM/DD hh:mm a")+ " "+(moment(today1,"YYYY/MM/DD hh:mm a")));
                    if(moment(time[b],"hh:mm a").diff(moment(today1,"hh:mm a"),'minutes')<10&&moment(time[b],"hh:mm a").diff(moment(today1,"hh:mm a"),'minutes')>0){
                        try{
                          setInterval(sendNotifNow(date[a],time[b]),60000)
                        }catch(e){
                          console.log(e);
                        }
                    }
                } 
            })
          }
        }
      })
      }
      setTimesIn(times) 
      i++;
    })
  };

  function printDate(){
    let dateNowYeah = new Date();
    const startDate = getFormatedDate(
      dateNowYeah.setDate(dateNowYeah.getDate()),
      "YYYY/MM/DD"
    );
     console.log(startDate);
  }

  function sendNotifNow(date,time){
    try{
      setReminderDate(date);
      setReminderTime(time);
      schedulePushNotification();
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
      <>
      {
        accountStatus==="pending"&&
        <Fetchdata/>
      }
            {
        accountStatus==="suspended"&&
        <Suspended/>
      }
        {
          accountStatus==="approved"&&
          <>
            {
            signIn?
              <LoggingIn/>
            :
              <>
              <StatusBar animated={true} backgroundColor="black"/>
                <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerTintColor: 'white',headerStyle:{backgroundColor: 'pink',}}}>  
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
                </Stack.Navigator>

                <View style={style.bottomNav}>
                  <View  style={{width:'33%', height: 10,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'center' }}>
                  <TouchableOpacity style={{width: "100%", height: 40, backgroundColor: 'transparent',alignItems: 'center',justifyContent: 'center'}} onPress={()=> navigateTo("Home")}>
                    <View style={{width: 75, height: 30, borderRadius: 40,backgroundColor: active === "Home"? '#F0F2F5': 'transparent', alignItems: 'center', justifyContent: 'center',}}> 
                      <View style={{width: 60, height: active === "Home"?30: 0, borderRadius: 30, backgroundColor: active === "Home"? '#Ffc1cc': 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={ faHome } size={24} style={{color:active==="Home"? "white":'#Ffc1cc'}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View  style={{width:'33%', height: 10,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'center' }}>
                  <TouchableOpacity style={{width: "100%", height: 40, backgroundColor: 'transparent',alignItems: 'center',justifyContent: 'center'}} onPress={()=> navigateTo("Appointment")}>
                    <View style={{width: 75, height: 30, borderRadius: 40,backgroundColor: active === "Appointment"? '#F0F2F5': 'transparent', alignItems: 'center', justifyContent: 'center',}}> 
                      <View style={{width: 60, height: active === "Appointment"?30: 0, borderRadius: 30, backgroundColor: active === "Appointment"? '#Ffc1cc': 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={ faCirclePlus } size={24} style={{color:active==="Appointment"? "white":'#Ffc1cc'}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View  style={{width:'33%', height: 10,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'center' }}>
                  <TouchableOpacity style={{width: "100%", height: 40, backgroundColor: 'transparent',alignItems: 'center',justifyContent: 'center'}} onPress={()=> navigateTo("Tools")}>
                    <View style={{width: 75, height: 30, borderRadius: 40,backgroundColor: active === "Tools"? '#F0F2F5': 'transparent', alignItems: 'center', justifyContent: 'center', }}> 
                      <View style={{width: 60, height: active === "Tools"?30: 0, borderRadius: 30, backgroundColor: active === "Tools"? '#Ffc1cc': 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesomeIcon icon={ faTools } size={24} style={{color:active==="Tools"? "white":'#Ffc1cc'}}/>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                </View>
                </>
              }
          </>
        }    
      </>
    </>
  )
  

async function schedulePushNotification() {
  try{
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Drink medicine ",
        body: reminderNote,
        data: { data: 'dont forget~' },
      },
      trigger: { seconds: 1 },
    });
  }catch(e){
    console.log(e);
  }
}

async function schedulePushNotificationForeground() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Welcome Back!",
      body: documents.length>0? "You have appointments this week":"You don't have appointments this week",
      data: { data: 'dont forget~' },
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
}


export default Dashboard

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  bottomNav: {
    width: '94%',
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    alignSelf: 'center',
    borderRadius: 40,
    marginBottom: '2%',
    borderColor:'#Ffc1cc',
    borderWidth:2 ,
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
