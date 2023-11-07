import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { authentication } from "../config/firebase";
import { database } from "../config/firebase";
import { collection, getDocs, onSnapshot, addDoc, query, orderBy, doc, where, updateDoc } from "firebase/firestore";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage, faPaperPlane, faPlane, faPlaneUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "react-native-gesture-handler";
//Expo notifations';
import * as Notifications from 'expo-notifications';
//sound

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
});

const Messages = () => {
  let id = authentication.currentUser.phoneNumber;
  const [uid, setUid] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [documents, setDocument] = useState([]);
  const [active, setActive] = useState("sojekRCqvsZrB5vZMzO3oyAbDbJ2");
  const [name, setName] = useState("");
  const [received, setReceived] = useState("");
  const [picture, setPicture] = useState("");
  let pic = "../../RHU.jpg"
  let date = new Date();
  let currentDate = moment(date).format("YYYY/MM/DD");
  const [receiver, setReceiver] = useState("");
  const [prof, setPic] = useState("")
  const scrll = useRef();
  const [nameOfUser, setNameOfUser] = useState("");

  useEffect(() => {
    authentication.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);


  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  async function fetchUser(){
    const userData = [];
    const querySnapshot = await getDocs(query(collection(database, 'userData'),where("userNumber","==",id)));
    querySnapshot.forEach((doc)=>{
      setPic(doc.data().userPic)
      setNameOfUser(doc.data().userFname+ " " + doc.data().userMname+ " " +doc.data().userLname)
      setUid(doc.id);
    })
  }

  useEffect(() => {
    fetchUser();
    let appointments = [];
    const unsubscribe = onSnapshot(query(collection(database, "messages"),orderBy("createdAt","asc")), (snapshot) => {
      snapshot.forEach((doc)=>{
        if(doc.data().receiverId===uid&&doc.data().status==="unread"){
          handleRead(doc.id)
        }
      })
      setMessages(snapshot.docs)
    });


    const handleRead = async(id) => {
      try {
          updateDoc(doc(database,"messages",id),{
            status:"read"
          }).then(console.log("updated"))
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  

    return () => {
      unsubscribe();
    };
  }, [uid]);

  const refScrollView = useRef(null);
  const moveTo = () => {
    refScrollView.current.scrollTo({x: value1, y: value2});
    // or just refScrollView.current.scrollTo({x: value1}); if you want to scroll horizontally
    // or just refScrollView.current.scrollTo({y: value2}); if you want to scroll vertically
  }

  const sendMessage = async (message) => {
    
    const messagesCollection = collection(database, "messages");
    let now = moment(date).format("YYYY/MM/DD hh:mm a");
    await addDoc(messagesCollection, {
      text: message,
      createdAt: now,
      senderId: uid,
      receiverId: receiver,
      status: "unread",
      readAt: null
    });
    await addDoc(collection(database, "onlineAppointments"),{
      dateMade:moment(new Date()).format("MMMM DD, YYYY hh:mm a"),
      name: nameOfUser,
      status:'pending',
      time: moment(new Date()).format("hh:mm aa"),
      uid: uid,
      purpose:"messaged you",
      read:false,
      appointmentDate:moment(new Date()).format("MMMM DD, YYYY hh:mm a")
    })
    moveTo
    setMessage("");
  };

  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'column',display:'flex',alignItems:'center',justifyContent:'end',overflow:'hidden'}}>
      <View style={{width:'100%',height:'10%',flexDirection:'row',backgroundColor:'navy',alignItems:'center',justifyContent:'start'}}>
        <View style={{width:40,height:40,borderRadius:40,marginRight:10,backgroundColor:'navy',borderRadius:50,marginLeft:30}}>
                        <Image
                    style={{width:'100%',height:'100%',borderRadius:50}}
                    source={require('../assets/rhulogo.jpg')}/>
                        </View>
        <Text style={{color:'white',fontSize:18}}>DAET RHU III</Text>
      </View>

        <ScrollView style={{width:'96%',height:'80%',}}ref={ref => {this.scrollView = ref}} onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})} showsVerticalScrollIndicator={false}>
        {

            messages.map((doc)=>(
            <>
                {
                     doc.data().receiverId===uid&&
                     <>
                     <View key={doc.id} style={{width:"50%",height:50,listStyleType:'none',color:'black',margin:'.5%',marginTop:20,marginBottom:40,display:'flex',flexDirection:'row',justifyContent:"end",alignItems:"end",backgroundColor:'transparent',}}>
                         <View style={{width:50,height:50,borderRadius:50,backgroundColor:'white',}}>
                         <Image
                             style={{width:'100%',height:'100%',}}
                             source={require('../assets/rhulogo.jpg')}/>
                         </View>
                         <View style={{width:'100%',marginLeft:10}}>
                           <Text style={{color:'black',fontSize:12,fontWeight:700,marginBottom:5,color:'gray',margin:0}}>DAET RHU III</Text>
                           <Text style={{width:'100%',height:'100%',padding:10,backgroundColor:'navy',borderRadius:10,fontSize:14,fontWeight:700,color:'white'}}>{doc.data().text}</Text>
                           <Text style={{color:'black',fontSize:10,marginBottom:10,color:'gray',margin:0}}>{doc.data().createdAt}</Text>
                         </View>
                     </View>
                     </>                    
                }
                {
                  doc.data().senderId===uid&&
                  <View key={doc.id} style={{width:"50%",marginLeft:'44%',height:50,listStyleType:'none',color:'black',margin:'.5%',marginTop:20,marginBottom:40,display:'flex',flexDirection:'row',justifyContent:"start",alignItems:"start",backgroundColor:'transparent',}}>
                      <View style={{width:'100%',marginLeft:10}}>
                        <Text style={{color:'black',fontSize:12,fontWeight:700,marginBottom:5,marginLeft:'80%',color:'gray',margin:0}}>YOU</Text>
                        <Text style={{width:'100%',height:'100%',padding:10,backgroundColor:'navy',borderRadius:10,fontSize:14,fontWeight:700,color:'white',textAlign:'right',marginRight:'10%'}}>{doc.data().text}</Text>
                        <Text style={{color:'black',fontSize:10,marginBottom:10,color:'gray',margin:0}}>{doc.data().createdAt}</Text>
                      </View>
                    </View>
                }
                <View ref={ref => {this.scrollView = ref}}
    onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}></View>
            </>
            ))
            }
        </ScrollView>
        <View style={{width:'100%',height:'10%',backgroundColor:'navy',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'77%',height:'70%',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
             <TextInput onChangeText={(text)=> setMessage(text)} value={message} placeholder="type message here" style={{width:'96%',height:'90%',color:'black',backgroundColor:'white'}}/>
            </View>
                <TouchableOpacity onPress={()=> [sendMessage(message),]}  style={{width:'20%',height:'70%',backgroundColor:'navy',alignItems:'center',justifyContent:'center'}}>
                    <FontAwesomeIcon icon={faPaperPlane} size={20} color="white"/>
                </TouchableOpacity>
        </View>
    </View>
  );
  
  async function schedulePushNotificationNow() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You have a new message from Health center.",
        body: message,
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

};

export default Messages;