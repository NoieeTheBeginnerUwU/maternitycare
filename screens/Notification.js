import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
//Firebase
//import useNavigaton to navigate between pages
import { useNavigation } from "@react-navigation/native";
//import firebase
import { authentication } from '../config/firebase';
import { database } from '../config/firebase';
import { addDoc,getDocs,query,collection,where, doc, updateDoc, orderBy, onSnapshot } from "firebase/firestore";
//Pages
import Allnotif from '../Notification/Allnotif';
import Monthnotif from '../Notification/Monthnotif';
import Notifsettings from '../Notification/Notifsettings';
//play sound notification
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';
import moment from "moment";
//marked all as read
import MarkedAllAsRead from './animations/MarkedAllAsRead';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Notification = () => {

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

  const id = authentication.currentUser.phoneNumber;
  const [uid, setUid] = useState("");
  const [user, setUser] = useState(null)
  const [byDate, setByDate] = useState("");
  const [documents, setDocuments] = useState([]);
  const [active, setActive] = useState("");
  const [status, setStatus] = useState("");
  const [body, setBody] = useState("");
  const [noData, setNoData] = useState(false);
  const [ids, setIds] = useState([])

 
    async function fetchData(){
      const queryUser = await getDocs(query(collection(database, "userData"),where("userNumber","==",id)));
      queryUser.forEach((doc)=>{
        setUid(doc.id)
      })

    };

    console.log("Data"+ documents)

  useEffect(() => {
    fetchData();
    let userData = [];
    let IDS = [];
    onSnapshot(query(collection(database, 'notifications'),where("uid","==",uid)),orderBy("dateMade",'desc'),(snapshot)=>{
      snapshot.forEach((doc)=>{
        userData.push({id:doc.id,body:doc.data().body,dateMade:doc.data().dateMade,status:doc.data().status,title:doc.data().title, dateMade:doc.data().dataMade});//pakibago nalang kapag may collection na ng notifications
        if(doc.data().status==="unread"){
          schedulePushNotification()
          playSound()
        }
        IDS.push(doc.id)
      })
      setDocuments(userData)
      setIds(IDS)
    });
  }, [uid]);

  const handleRead = async (id) => {
    const querySnapshot = await updateDoc(doc(database,"notifications",id),{
      status: "read"
    });
  }

  const [read, setRead] = useState(false)

  const handleMarkAllAsRead = async() => {
  
      ids.forEach((docs)=>{
        updateDoc(doc(database,"notifications",docs),{
          status:'read'
        })
        setRead(true)
        setTimeout(()=>{
          setRead(false);
        },3000)
      })
    
  }



  const markAllAsRead = async (id) => {
    try{
      const querySnapshot = await updateDoc(collection(database,"notifications"),where("uid","==",id),{
        status: "read"
      });
      alert("Marked all as read.")
    }catch(e){
      console.log(e);
    }
  }

   //Notifications
   const [expoPushToken, setExpoPushToken] = useState('');
   const [notification, setNotification] = useState(false);
   const notificationListener = useRef();
   const responseListener = useRef();
   useEffect(() => {
     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
 
     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
       setNotification(notification);
     });
 
     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
       console.log(response);
     });
 
     return () => {
       Notifications.removeNotificationSubscription(notificationListener.current);
       Notifications.removeNotificationSubscription(responseListener.current);
     };
   }, []);
 
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={()=> [setActive(item.id),handleRead(item.id)] }>
        <View style={{width:'96%',height:80,backgroundColor:item.status==="unread"?'navy':"grey",alignSelf:'center',flexDirection:'column',marginTop:'3%'}}>
          <Text style={{color:'white',marginLeft:10,fontSize:18}}>{item.title}</Text>
          <Text style={{color:'white',marginLeft:10,fontSize:12}}>{item.body}</Text>
          <Text style={{color:'white',marginLeft:10,fontSize:12}}>{item.dateMade} | {item.timeMade}</Text>
        </View>
      </TouchableOpacity>
    );

    var message = "";
    if(documents.length<=0){
      message = "No notification to mark as read."
    }else{
      message = "Marked all as read"
    }
  
  return (
    <View style={style.content}>
      {
        read===true?
        <MarkedAllAsRead/>
        :
        <>
          <View style={style.contentUpper}>
          <TouchableOpacity onPress={()=> handleMarkAllAsRead()}>
            <Text>Mark all as read</Text>
          </TouchableOpacity>
          <FontAwesomeIcon icon={ faGear } style={{marginLeft: '2%'}} />
        </View>
        <View
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
          />
          <View style={{width:'100%',height:'100%'}}>
              <View style={{width:'100%',height:600,marginBottom:20}}>
                <View style={{width:'100%',height:"100%",marginBottom:'2%',overflow:'scroll'}}>
                  {
                    documents.map((doc)=>(
                      <TouchableOpacity onPress={()=> [setActive(doc.id),handleRead(doc.id)] }>
                        <View style={{width:'96%',height:80,backgroundColor:doc.status==="unread"?'navy':"grey",alignSelf:'center',flexDirection:'column',marginTop:'3%'}}>
                          <Text style={{color:'white',marginLeft:10,fontSize:18}}>{doc.title}</Text>
                          <Text style={{color:'white',marginLeft:10,fontSize:12}}>{doc.body}</Text>
                          <Text style={{color:'white',marginLeft:10,fontSize:12}}>{doc.dateMade}</Text>
                        </View>
                      </TouchableOpacity>
                    ))
                  }
                </View>
              </View>
          </View>
        </>
      }
    </View>
  )

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Maternity Care App",
        body: "You have 1 new notification.",
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

export default Notification

const style = StyleSheet.create({
  welcome: {
    alignSelf: 'center',
    fontSize: 20,
  },
  content: {
    overflow: 'scroll',
    width: '100%',
    height: 1000,
  },
  contentUpper: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    padding: '4%',
  },
  toggle: {
    flexDirection: 'row',
    marginLeft:'4%'
  },
  none: {
    alignSelf: 'center',
    marginTop:'50%',
  },
  
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
  },

})

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Notification 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Notification 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Notification 3',
  },
  
];