import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Touchable, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 //Firebase
import { authentication } from '../config/firebase';
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
import { getDocs, collection, doc, where, query } from 'firebase/firestore';
//animation
import Fetchdata from './animations/Fetchdata';

const Dashboard = () => {
  const id = authentication.currentUser.uid;
  const navigation = useNavigation();
  const [active, setActive] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [registered, isRegistered] = useState(false);

  useEffect(()=>{
    setSignIn(true)
    setTimeout(()=>{
      setSignIn(false)
    },2000)
  },[])

  const navigateTo = (active) => { 
    navigation.navigate(active)
    setActive(active);
  }

  return (
    <>
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
    </>
  )
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
