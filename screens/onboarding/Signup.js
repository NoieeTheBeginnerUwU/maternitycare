import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image,TextInput, Button, Modal, KeyboardAvoidingView } from 'react-native';
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
import { setDoc,doc } from 'firebase/firestore';
//Date
import moment from 'moment';
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
//Import Fontawesome
import { faArrowLeft, faMapLocation, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMobilePhone } from '@fortawesome/free-solid-svg-icons';
//import firebase storage
import { storage } from "../../config/firebase";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
//import loading screen
import Loading from "../animations/Loading";
//image picker of expo
import * as ImagePicker from "expo-image-picker";
const Signup = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const made = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );
  const startDate = getFormatedDate(
    today.setDate(today.getDate() -30000),
    "YYYY/MM/DD"
  );
  //default image uri
  const defaultImg = "../../assets/usertemplate.png";

  //console.log(startDate)
  //Date
  const [selectedStartDate, setSelectedStartDate] = useState("1/1/1990");
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

  const [isSignedIn, setIsSignedIn] = useState(false); 
  var date = moment().format("YYYY-MM-DD");
  const signUpUser = () => {
    if(!fname||!mname||!email||!lname||!address||!num||!confirm||!password){
      alert("Please fill out all the necessary inputs. Thank you.")
    }else{
      if(password!=confirm){
        alert("password does not match")
      }else{
        createUserWithEmailAndPassword(authentication, email, password)
        .then((re) =>{
          const id = authentication.currentUser.uid;
          saveImage();
            setDoc(doc(database, "userData",id),{
              userFname: fname,
              userMname: mname,
              userLname: lname,
              userEmail: email,
              userAddress: address,
              userBirthdate: selectedStartDate,
              userNumber: num,
              userPic: image,
              dateCreated: date,
              bloodPressure: '',
              lastPeriod: '',
              otherInfo: '',
              weight: 0,
              dateUpdated: ''

            })
            setIsSignedIn(true)
          })
        .catch((re)=>{
          alert(re)
        })
      }
    }
  }

//change profile picture
const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    setImage(result.uri);
  }
};

function saveImage(){
  const uploadImage = async () => {
    const blobImage = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed."));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
    // Create file metadata including the content type
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, "profiles/" + id);
    const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };
  if (image != null) {
    uploadImage();
    setImage(null);
  }
}

  console.log(fname, mname, lname,email, selectedStartDate, num, image )

  return (
    <View style={style.container}  onPress={()=> setOpenStartDatePicker(false)}>
      <View style={style.btnContainer}>
        <TouchableOpacity style={style.buttonBack} onPress={()=> nav.navigate("Login")}>
          <Text style={style.buttonBackText}>Go back</Text>
        </TouchableOpacity>
      </View>
      <View style={{width:140,height:140,alignSelf:'center',marginBottom:'-22%'}}>
      </View>
      <View style={{alignSelf: 'center', marginTop: '-10%'}}>
        <Text style={{fontSize: 32, color: 'black', fontWeight: 800}}>Create an account</Text>
      </View>
      <View>
      </View>
      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faUser} size={24} color="navy"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput style={{width:'29%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='First name' onChangeText={(text)=> setFname(text)}/>
          <TextInput style={{width:'29%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Middle name' onChangeText={(text)=> setMname(text)}/>
          <TextInput style={{width:'39%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Last name' onChangeText={(text)=> setLname(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faMailBulk} size={24} color="navy"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput style={{width:'100%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Email' onChangeText={(text)=> setEmail(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faMapLocation} size={24} color="navy"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput style={{width:'100%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Current Address' onChangeText={(text)=> setAddress(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faLock} size={24} color="navy"/>
        </View>
        <View style={{width:'80%',height:40,backgroundColor:'white',flexDirection:'row',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
          <TextInput secureTextEntry={true} style={{width:'100%',height:40,backgroundColor:'white',textAlign:'center',borderBottomWidth:1,borderBottomColor:'black'}} placeholder='Enter Password' onChangeText={(text)=> setPassword(text)}/>
        </View>
      </View>

      <View style={{flexDirection:'row',marginTop:'4%',}}>
        <View style={{width:'15%',height:40,alignItems:'center',justifyContent:'center'}}>
          <FontAwesomeIcon icon={faLock} size={24} color="navy"/>
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
              <FontAwesomeIcon icon={faCalendar} size={24} color="blue"/>
              <TextInput editable={false} selectTextOnFocus={false} placeholder={selectedStartDate} style={{width:'80%',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width:'40%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'black'}}>
          <Text>Mobile Number</Text>
          <TouchableOpacity onPress={()=> setOpenStartDatePicker(!openStartDatePicker)}>
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
              <FontAwesomeIcon icon={faMobilePhone} size={24} color="blue"/>
              <TextInput placeholder="09---------- " 
               onChangeText={(text)=> setNumber(text)} style={{width:'80%',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
            </View>
          </TouchableOpacity>
        </View>
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
              <View style={styles.modalView} onTouchMove={handleOnPressStartDate}>
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={selectedStartDate}
                  onDateChanged={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
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
                <TouchableOpacity onTouchMove={handleOnPressStartDate}>
                  <Text style={{ color: "white",}}>Slide to close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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


