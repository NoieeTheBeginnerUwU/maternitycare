import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { registerIndieID } from 'native-notify';
import axios from 'axios';
//Firebase 
import { authentication } from '../../config/firebase';
//firebase authentication
import { signOut } from 'firebase/auth';
import { User } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
//firestore
import { database } from '../../config/firebase';
import { addDoc, 
  getDocs,
  doc,
  add,
  set,
  map,
  setDoc,
  collection,
  getDoc,
  query,
  DocumentSnapshot,
  updateDoc}
from 'firebase/firestore';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Firestore , onSnapshot} from 'firebase/firestore';
//Navigation
import { useNavigation } from '@react-navigation/native';
//Pages
import Dashboard from '../Dashboard';
import Signup from './Signup';
import OnBoarding from '../OnBoarding';
//Global styling => style.js
import { style } from '../../style';
//Lottie
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faLock, faUserAlt, faUserLock } from '@fortawesome/free-solid-svg-icons';
//Icons

const Login = () => {

  const animationRef = useRef(); // The <> is for TypeScript, but can be removed for JavaScript
  useEffect(() => {
      animationRef.current?.play();
  }, []);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const [isSignedIn, setIsSignedIn] = useState(false); 

  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
    .then((re) =>{
      alert("Signing in.");
      setIsSignedIn(true)
    })
    .catch((re)=>{
      alert("Failed to sign in, please try again")
      setEmail("")
      setPassword("")
    })
  }

  return (
    <View style={style.container}>
      <View style={style.btnContainer}>
        <TouchableOpacity style={style.buttonBack} onPress={()=> navigation.navigate("OnBoarding")}>
          <Text style={style.buttonBackText}>Go back</Text>
        </TouchableOpacity>
      </View>
      <View>
          <AnimatedLottieView ref={animationRef} style={style.lottie} source={lotties.lottie12}  autoPlay loop/>
      </View>
      <View style={{alignSelf: 'center', marginTop: '-10%'}}>
        <Text style={{fontSize: 32, color: 'black', fontWeight: 800}}>Login with your account</Text>
      </View>
      <View style={style.inputs}>
        <View style={{marginRight:30,borderRightWidth:1,borderColor:"black"}}><FontAwesomeIcon style={{marginRight:10}} icon={faUserAlt} size={24} color="navy"/></View>
        <TextInput placeholder='Email' onChangeText={(text)=> setEmail(text)}/>
      </View>
      <View style={style.inputs}>
        <View style={{marginRight:30,borderRightWidth:1,borderColor:"black"}}><FontAwesomeIcon style={{marginRight:10}} icon={faLock} size={24} color="navy"/></View>
        <TextInput placeholder='Password' secureTextEntry={true} onChangeText={(text)=> setPassword(text)}/>
      </View>
      <View style={{width: '90%', alignSelf: 'center', height: 60}}>
        <TouchableOpacity style={style.loginBtn} onPress={()=> signInUser()}>
          <Text style={style.loginBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={style.redirectContainer}>
        <Text>Don't have an account yet?</Text>
        <Text style={style.redirect} onPress={()=> navigation.navigate("Signup")}>Sign up</Text>
      </View>
    </View>
  )
}

export default Login