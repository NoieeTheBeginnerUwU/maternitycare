import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
//Firebase 
import { authentication } from '../../config/firebase';
import { app } from '../../config/firebase';
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
  where,
  query,
  DocumentSnapshot,
  updateDoc}
from 'firebase/firestore';
import { Firestore , onSnapshot} from 'firebase/firestore';
//Navigation
import { useNavigation } from '@react-navigation/native';
import {FirebaseRecaptchaVerifierModal,FirebaseRecaptchaBanner} from 'expo-firebase-recaptcha';
import {PhoneAuthProvider,signInWithCredential} from 'firebase/auth';
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
import { faLock, faUserAlt, faUserLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPersonPregnant } from '@fortawesome/free-solid-svg-icons';
//Icons
import LoggingIn from '../animations/LoggingIn';

const Login = () => {

  const animationRef = useRef(); // The <> is for TypeScript, but can be removed for JavaScript
  useEffect(() => {
      animationRef.current?.play();
  }, []);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //
  const recaptchaVerifier = useRef(null);
  const [phoneNumber,setPhoneNumber] = useState('');
  const [verificationId,setVerificationID] = useState('');
  const [verificationCode,setVerificationCode] = useState('');
  const firebaseConfig = app ? app.options : undefined;
  const [info,setInfo] = useState("");
  const attemptInvisibleVerification = false;
  const [exists, setExists] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); 
  const [docId, setDocId] = useState("");



  const handleSendVerificationCode = async () => {
    try{
        const phoneProvider = new PhoneAuthProvider(authentication); // initialize the phone provider.
        const verificationId = await phoneProvider.verifyPhoneNumber(
            phoneNumber,
            recaptchaVerifier.current
        ); // get the verification id
        setVerificationID(verificationId)
         // set the verification id
        setInfo('Success : Verification code has been sent to your phone'); // If Ok, show message.
    }catch(error){
        setInfo(`Error : ${error.message}`); // show the error
    }
    };

    const handleVerifyVerificationCode = async () => {
        try{
            const credential = PhoneAuthProvider.credential(verificationId,verificationCode); // get the credential
            await signInWithCredential(authentication,credential); // verify the credential
            setInfo('Success: Phone authentication successful'); // if OK, set the message
        }catch(error){
            setInfo(`Error : ${error.message}`); // show the error.
        }
    }

    const handleNumberExists = async () => {
        let userData = [];
        const queryCollection = await getDocs(query(collection(database,"userData"),where("userNumber","==",phoneNumber)))
        queryCollection.forEach((doc)=>{
            userData.push(doc.data)
            setDocId(doc.id)
        })
        if(userData!==""){
            setExists(true)
            handleSendVerificationCode()
        }else{
            alert("The mobile number is not registered")
        }

    }

    console.log("ID: "+docId)
  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
    .then((re) =>{
      setIsSignedIn(true);
      setTimeout(()=>{
        setIsSignedIn(false)
      },3000)
    })
    .catch((re)=>{
      alert("Failed to sign in, please try again")
      setEmail("")
      setPassword("")
    })
  }

  return (
    <>
    {
      isSignedIn?
      <LoggingIn/>
      :
      <View style={style.container}>
        <View style={style.btnContainer}>
        </View>
        <View>
            <AnimatedLottieView ref={animationRef} style={{width:300,height:300,alignSelf:'center'}} source={lotties.lottie12}  autoPlay loop/>
        </View>
        <View style={{alignSelf: 'center', marginTop: '-10%'}}>
          <Text style={{fontSize: 28, color: 'skyblue', fontWeight: 800,textAlign:'center'}}>Login with your mobile number</Text>
        </View>
        <View style={style.container}>
          <View>

            <FirebaseRecaptchaVerifierModal 
                ref={recaptchaVerifier}
                attemptInvisibleVerification={true}
                firebaseConfig={firebaseConfig}
            />

            {
                info && <Text style={styles.text}>{info}</Text>
            }

            { // show the phone number input field when verification id is not set.
                !verificationId && (
                    <View style={{width:'92%',height:150,alignSelf:'center',backgroundColor:'pink',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                            <View style={{width:'100%',height:70,alignItems:'center',flexDirection:'row',backgroundColor:'pink',justifyContent:'space-evenly'}}>
                                <FontAwesomeIcon icon={faPhone} size={20} color='white'/>
                                <TextInput
                                    placeholder='+639123456789'
                                    autoFocus
                                    autoCompleteType='tel'
                                    keyboardType='phone-pad'
                                    textContentType='telephoneNumber'
                                    onChangeText={ (phoneNumber) => setPhoneNumber(phoneNumber)}
                                    style={{color:'black',backgroundColor:'ghostwhite',width:'80%',height:50,fontSize:14}}
                                />
                            </View>

                            <Button 
                                onPress={ () => handleNumberExists()}
                                title= "Send Verification Code"
                                disabled={!phoneNumber}
                                style={{color:'white',backgroundColor:'pink',width:'80%',height:60}}
                            />
                    </View>
                )
                
            }

            { // if verification id exists show the confirm code input field.
                verificationId && (
                    <View style={{width:'92%',height:150,alignSelf:'center',backgroundColor:'pink',borderRadius:10,alignItems:'center',justifyContent:'center'}}>

                        <Text style={styles.text}>Enter the verification code</Text>

                        <TextInput
                            editable={!!verificationId}
                            placeholder= "123456"
                            onChangeText={setVerificationCode}
                            style={{color:'black',backgroundColor:'ghostwhite',width:'80%',height:50,fontSize:14}}
                        />

                        <Button
                            title= "Confirm Verification Code"
                            disabled={!verificationCode}
                            onPress = {() => handleVerifyVerificationCode()}
                            style={{color:'white',backgroundColor:'pink',width:'80%',height:60}}
                        />
                    </View>
                )
            }

            {attemptInvisibleVerification && <FirebaseRecaptchaBanner/>}
            </View>
      </View>
      </View>
    }
    </>
  )
}

export default Login

const styles = StyleSheet.create({
    text:{
        color: "red",
        textAlign:'center',
        margin:'5%',
        fontSize:13,
        fontWeight:"bold"
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
    })