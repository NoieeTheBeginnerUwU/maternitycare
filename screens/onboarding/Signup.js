import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, Modal, KeyboardAvoidingView } from 'react-native';
import { registerIndieID } from 'native-notify';
import axios from 'axios';
//Firebase 
import { authentication } from '../../config/firebase';
//Navigation
import { useNavigation } from '@react-navigation/native';
//Pages
import Dashboard from '../Dashboard';
import Login from './Login';
import OnBoarding from '../OnBoarding';
//Global styling => style.js
import { style } from '../../style';
//Lottie
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
//Icons
//firebase
import { database } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc,doc,addDoc,collection } from 'firebase/firestore';
//Date
import moment from 'moment';
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
//Import Fontawesome
import { faArrowLeft, faMapLocation, faUser, faCalendar, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';
//import firebase storage
import { storage } from "../../config/firebase";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
//import loading screen
import Loading from "../animations/Loading";
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Doctorcalling from '../animations/Doctorcalling';
//Import expo image picker
import * as ImagePicker from 'expo-image-picker';

const Signup = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const made = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );
  const startDate = getFormatedDate(
    today.setDate(today.getDate() -70000),
    "YYYY/MM/DD"
  );
  //default image uri
  const defaultImg = "../../assets/usertemplate.png";

  //console.log(startDate)
  //Date
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const animationRef = useRef(); // The <> is for TypeScript, but can be removed for JavaScript
  useEffect(() => {
      animationRef.current?.play();
  }, []);
  const nav = useNavigation();

  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [num, setNumber] = useState('');
  const [confirm, setConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [profilePictureURL, setProfilePictureURL] = useState(null);
  const profilePictureRef = ref(storage, 'images');
  //steps
  const [step, setStep] = useState("");
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  //questions
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");

  const [isSignedIn, setIsSignedIn] = useState(false); 
  var date = moment().format("YYYY-MM-DD hh:mm a");
  const signUpUser = () => {
    if(!fname||!mname||!email||!lname||!address||!num||!confirm||!password){
      alert("Please fill out all the necessary inputs. Thank you.")
    }else{
      if(password!=confirm){
        alert("password does not match")
      }else{
        setStep4(true);
        async function uploadImageAsync (uri) {
          const blob = await new Promise((resolve, reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.onload = function(){
              resolve(xhr.response);
            };
            xhr.onerror = function(e){
              console.log(e);
              reject(new TypeError("Network request failed."))
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
          });
    
          try{
            const storageRef = ref(storage, id);
            const result = await uploadBytes(storageRef, blob);
            return await getDownloadURL(storageRef);
            blob.close();
          }catch(e){
            
          }
        }
        createUserWithEmailAndPassword(authentication, email, password)
        .then((re) =>{
          uploadImageAsync (image);
          const id = authentication.currentUser.uid;
          registerIndieID(id, 10244, 'MRmNGe8fHmswLJsrtYA7H3');
          setDoc(doc(database, "userData",id),{
              userFname: fname,
              userMname: mname,
              userLname: lname,
              userEmail: email,
              userAddress: address,
              userBirthdate: selectedStartDate,
              userNumber: num,
              userPic: image,
              question1: question1,
              question2: question2,
              question3: question3,
              question4: question4,
              question5: question5,
              dateCreated: date,
              bloodPressure: '',
              lastPeriod: '',
              otherInfo: '',
              height: 0,
              weight: 0,
              status:'pending',
              dateUpdated: '',
              userLevel: "standard user",
            })
            setIsSignedIn(true)
          })
        .catch((re)=>{
          alert(re)
        })
      }
    }
  }

   //camera
   const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let url = result.assets[0].uri;
     //const uploadURL = await uploadImageAsync(result.assets[0].uri);
     setImage(url);
     console.log(image);
    }else{
      //do nothing
    }
    //firebase start 

    //firebase end

  };

  useEffect(()=>{
    if(question1===""||question2===""||question3===""||question4===""||question5!==""){
      setStep2(false);
    }
    else{
      setStep2(true);
      setStep("step3")
    }
  })
//change profile picture
// const pickImage = async () => {
//   // No permissions request is necessary for launching the image library
//   let result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.All,
//     allowsEditing: true,
//     aspect: [4, 3],
//     quality: 1,
//   });

//   console.log(result);

//   if (!result.canceled) {
//     setImage(result.uri);
//   }
// };

// function saveImage(){
//   const uploadImage = async () => {
//     const blobImage = await new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onload = function () {
//         resolve(xhr.response);
//       };
//       xhr.onerror = function () {
//         reject(new TypeError("Network request failed."));
//       };
//       xhr.responseType = "blob";
//       xhr.open("GET", image, true);
//       xhr.send(null);
//     });
//     // Create file metadata including the content type
//     /** @type {any} */
//     const metadata = {
//       contentType: "image/jpeg",
//     };

//     // Upload file and metadata to the object 'images/mountains.jpg'
//     const storageRef = ref(storage, "profiles/" + id);
//     const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

//     // Listen for state changes, errors, and completion of the upload.
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//         }
//       },
//       (error) => {
//         // A full list of error codes is available at
//         // https://firebase.google.com/docs/storage/web/handle-errors
//         switch (error.code) {
//           case "storage/unauthorized":
//             // User doesn't have permission to access the object
//             break;
//           case "storage/canceled":
//             // User canceled the upload
//             break;

//           // ...

//           case "storage/unknown":
//             // Unknown error occurred, inspect error.serverResponse
//             break;
//         }
//       },
//       () => {
//         // Upload completed successfully, now we can get the download URL
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           console.log("File available at", downloadURL);
//         });
//       }
//     );
//   };
//   if (image != null) {
//     uploadImage();
//     setImage(null);
//   }
// }

//console.log(fname, mname, lname,email, selectedStartDate, num, image )

  return (
    <View style={style.container}>
      <View style={{width:'100%',height:100,backgroundColor:'transparent'}}>
        <View style={{width:'100%',height:'100%',backgroundColor:'transparent',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <View style={{width:'100%',height:'50%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <TouchableOpacity style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}} onPress={()=> setStep("step1")}>
              {
                step1===true?
                <FontAwesomeIcon icon={faCheckCircle} size={24} color='greenyellow'/>
                :
                <FontAwesomeIcon icon={faCheckCircle} size={24} color='grey'/>
              }
              <Text style={{fontSize:14,fontWeight:400,color:step==="step1"?"skyblue":"black"}}>Step 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}} onPress={()=> setStep("step2")}>
                            {
                step2===true?
                <FontAwesomeIcon icon={faCheckCircle} size={24} color='greenyellow'/>
                :
                <FontAwesomeIcon icon={faCheckCircle} size={24} color='grey'/>
              }
              <Text style={{fontSize:14,fontWeight:400,color:step==="step2"?"skyblue":"black"}}>Step 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}} onPress={()=> setStep("step3")}>
                            {
                step3===true?
                <FontAwesomeIcon icon={faCheckCircle} size={24} color='greenyellow'/>
                :
                <FontAwesomeIcon icon={faCheckCircle} size={24} color='grey'/>
              }
              <Text style={{fontSize:14,fontWeight:400,color:step==="step3"?"skyblue":"black"}}>Step 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}} onPress={()=> setStep("step4")}>
                            {
                step4===true?
                <FontAwesomeIcon icon={faCheckCircle} size={24} color='greenyellow'/>
                :
                <FontAwesomeIcon icon={faCheckCircle} size={24} color='grey'/>
              }
              <Text style={{fontSize:14,fontWeight:400,color:step==="step4"?"skyblue":"black"}}>Step 4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {
        step==="step1"||step===""&&
        <>
        <View style={{width:'100%',height:'100%',backgroundColor:'transparent',alignSelf:'center'}}>
          <Doctorcalling/>
            <TouchableOpacity onPress={()=> [setStep("step2"),setStep1(true)]} style={{marginTop:'10%',width:'70%',alignSelf:'center',alignItems:'center',justifyContent:'center',height:50,backgroundColor:'pink',borderRadius:10}}>
              <Text style={{color:'white',fontSize:20,fontWeight:600}}>okay, i agree</Text>
            </TouchableOpacity>
        </View>
        </>
      }
            {
        step==="step2"&&
        <>
        <View style={{width:'100%',height:'100%',backgroundColor:'transparent',alignSelf:'center',marginBottom:'-22%'}}>
          <Text style={{alignSelf:'center',color:'pink',fontWeight:800,fontSize:18}}>PLEASE ANSWER ALL THE QUESTIONS</Text>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <View style={{width:'94%',height:200,alignSelf:'center',marginTop:'4%',borderRadius:20,flexDirection:'column',backgroundColor:'ghostwhite',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text>Is this your first time of giving birth?</Text>
                <Text>Ito ba ang unang beses na ikaw ay manganganak?</Text>
                <View style={{width:'100%',height:50,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={()=> setQuestion1("yes")} style={{width:100,height:40,borderRadius:20,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>YES</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> setQuestion1("no")} style={{width:100,height:40,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>NO</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:'100%',height:22,alignItems:'center',justifyContent:'center'}}>
                    {
                      question1!==""&&
                      <Text style={{color:'pink',fontSize:18}}>answered {question1}</Text>
                    }
                  </View>
            </View>
            <View style={{width:'94%',height:200,alignSelf:'center',marginTop:'4%',borderRadius:20,flexDirection:'column',backgroundColor:'ghostwhite',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text>Have you ever undergone a caesarean section for childbirth</Text>
                <Text>Naranasan mo na bang magkaroon ng caesarean section sa panganganak?</Text>
                <View style={{width:'100%',height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={()=> setQuestion2("yes")}  style={{width:100,height:40,borderRadius:20,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>YES</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> setQuestion2("no")}  style={{width:100,height:40,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>NO</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:'100%',height:22,alignItems:'center',justifyContent:'center'}}>
                    {
                      question2!==""&&
                      <Text style={{color:'pink',fontSize:18}}>answered {question2}</Text>
                    }
                  </View>
            </View>
            <View style={{width:'94%',height:200,alignSelf:'center',marginTop:'4%',borderRadius:20,flexDirection:'column',backgroundColor:'ghostwhite',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text>Have you experienced giving birth prematurely?</Text>
                <Text>Naranasan mo na bang manganak ng maaga?</Text>
                <View style={{width:'100%',height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={()=> setQuestion3("yes")}  style={{width:100,height:40,borderRadius:20,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>YES</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> setQuestion3("no")}  style={{width:100,height:40,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>NO</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:'100%',height:22,alignItems:'center',justifyContent:'center'}}>
                    {
                      question3!==""&&
                      <Text style={{color:'pink',fontSize:18}}>answered {question3}</Text>
                    }
                  </View>
            </View>
            <View style={{width:'94%',height:200,alignSelf:'center',marginTop:'4%',borderRadius:20,flexDirection:'column',backgroundColor:'ghostwhite',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text>Did you have to deliver prematurely due to medical reasons?</Text>
                <Text>Kailangan mo bang manganak nang maaga dahil sa medikal na mga dahilan?</Text>
                <View style={{width:'100%',height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={()=> setQuestion4("yes")}  style={{width:100,height:40,borderRadius:20,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>YES</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> setQuestion4("no")}  style={{width:100,height:40,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>NO</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:'100%',height:22,alignItems:'center',justifyContent:'center'}}>
                    {
                      question4!==""&&
                      <Text style={{color:'pink',fontSize:18}}>answered {question4}</Text>
                    }
                  </View>
            </View>
            <View style={{width:'94%',height:200,alignSelf:'center',marginTop:'4%',borderRadius:20,flexDirection:'column',backgroundColor:'ghostwhite',alignItems:'center',justifyContent:'space-evenly',marginBottom:'50%'}}>
                <Text>Is your age above 30 years old?</Text>
                <Text>Ang iyong edad ba ay mas mataas pa sa trentang taon?</Text>
                <View style={{width:'100%',height:60,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={()=> setQuestion5("yes")}  style={{width:100,height:40,borderRadius:20,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>YES</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> setQuestion5("no")}  style={{width:100,height:40,borderRadius:20,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>NO</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:'100%',height:22,alignItems:'center',justifyContent:'center'}}>
                    {
                      question5!==""&&
                      <Text style={{color:'pink',fontSize:18}}>answered {question5}</Text>
                    }
                  </View>
            </View>
          </ScrollView>
        </View>
        </>
      }
            {
        step==="step3"&&
        <>
          <View style={{width:'100%',height:'100%',backgroundColor:'transparent',alignSelf:'center',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <Text style={{margin:'4%',fontSize:24,color:"skyblue",fontWeight:700,marginTop:'-50%'}}>ADD PROFILE PICTURE</Text>
              <TouchableOpacity style={{width:250,height:250,borderRadius:250,backgroundColor:'ghostwhite',alignItems:'center',justifyContent:'center'}} onPress={()=> pickImage()}>
                {
                  image!==""?
                  <Image source={{uri:image}} style={{width:'100%',height:'100%',borderRadius:200}}/>
                  :
                  <FontAwesomeIcon icon={faCamera} size={120} color='lightgrey'/>
                }
              </TouchableOpacity>
              <TouchableOpacity style={{width:200,marginTop:60,height:50,backgroundColor:'pink',borderRadius:10,alignItems:'center',justifyContent:'center'}} onPress={()=> [setStep("step4"),setStep3(true)]}>
                <Text style={{fontSize:20,fontWeight:500,color:'white'}}>Next</Text>
              </TouchableOpacity>
          </View>
        </>
      }
      {
        step==="step4"&&
        <>
          <View style={{width:140,height:140,alignSelf:'center',marginBottom:'-22%'}}>
      </View>
      <View style={{alignSelf: 'center', marginTop: '-10%'}}>
        <Text style={{fontSize: 28, color: 'skyblue', fontWeight: 800}}>User Details</Text>
      </View>
      <View>
      </View>
      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faUser} size={24} color="pink"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput style={{width:'29%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='First name' onChangeText={(text)=> setFname(text)}/>
          <TextInput style={{width:'29%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Middle name' onChangeText={(text)=> setMname(text)}/>
          <TextInput style={{width:'39%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Last name' onChangeText={(text)=> setLname(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faMailBulk} size={24} color="pink"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput style={{width:'100%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Email' onChangeText={(text)=> setEmail(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faMapLocation} size={24} color="pink"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput style={{width:'100%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Current Address' onChangeText={(text)=> setAddress(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faLock} size={24} color="pink"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput secureTextEntry={true} style={{width:'100%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Enter Password' onChangeText={(text)=> setPassword(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faLock} size={24} color="pink"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput  secureTextEntry={true} style={{width:'100%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Confirm Password' onChangeText={(text)=> setConfirm(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row', marginTop:'4%', alignItems:'center',justifyContent:'space-around'}}>
        <View style={{width:'40%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'black'}}>
          <Text>Date of Birth</Text>
          <TouchableOpacity onPress={()=> setOpenStartDatePicker(!openStartDatePicker)}>
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
              <FontAwesomeIcon icon={faCalendar} size={24} color="pink"/>
              <TextInput editable={false} selectTextOnFocus={false} placeholder={selectedStartDate} style={{width:'80%',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width:'40%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'black'}}>
          <Text>Mobile Number</Text>
          <TouchableOpacity onPress={()=> setOpenStartDatePicker(!openStartDatePicker)}>
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
              <FontAwesomeIcon icon={faMobilePhone} size={24} color="pink"/>
              <TextInput placeholder="09---------- " 
               onChangeText={(text)=> setNumber(text)} style={{width:'80%',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
        <Text onPress={()=> nav.navigate("Terms and Conditions")} style={{alignSelf:'center',margin:'2%',color:'skyblue'}}>Terms and Conditions</Text>
        <Text  onPress={()=> nav.navigate("Privacy and Policy")} style={{alignSelf:'center',margin:'2%',color:'skyblue'}}>Privacy and Policy</Text>
      </View>
      <View style={{width: '90%', alignSelf: 'center', height: 60}}>
        <TouchableOpacity style={style.loginBtn} onPress={()=> signUpUser()}>
          <Text style={style.loginBtnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={style.redirectContainer}>
        <Text>Already have an account?</Text>
        <Text style={style.redirect} onPress={()=> nav.navigate("Login")}>Sign in</Text>
      </View>
      <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView} >
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={selectedStartDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => [setSelectedStartDate(date),handleOnPressStartDate()]}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#469ab6",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#469ab6",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122, 146, 165, 0.1)",
                  }}
                />
              </View>
            </View>
          </Modal>
        </>
      }
    </View>

  )
}

export default Signup



const styles = StyleSheet.create({
  container:{
      width: '100%',
      height: '100%',
      backgroundColor: 'ghostwhite',
      aliginItems: 'center',
      justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 10,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 25,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  boxes: {

  },
  pic: {
    width: 124,
    height: 124,
    alignSelf: "center",
    marginTop: "10%",
    borderRadius: 100,
  },
})


