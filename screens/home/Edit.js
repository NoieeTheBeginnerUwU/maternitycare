import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
//fontawesome
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCamera,
  faDoorOpen,
  faGear,
  faGift,
  faKey,
  faMailBulk,
  faPen,
  faPhone,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
//firebase authentication
import { authentication } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { User } from "firebase/auth";
//firestore
import { database } from "../../config/firebase";
import {
  addDoc,
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
  updateDoc,
} from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
//import loading screen
import Loading from "../animations/Loading";
//image picker of expo
//FileSystem
import { KeyboardAvoidingView } from "react-native";
//Import react native image picker
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import moment from "moment";
import { getFormatedDate } from "react-native-modern-datepicker";

const Edit = () => {
  const [isSelected, setSelection] = useState(false);
  const id = authentication.currentUser.uid;
  //useRefs
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [profilePic, setProfilePic] = useState();
  //
  const [userdata, setuserdata] = useState([]);
  const [fnamePlaceholder, setFnamePlaceholder] = useState("");
  const [mnamePlaceholder, setMnamePlaceholder] = useState("");
  const [lnamePlaceholder, setLnamePlaceholder] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("");
  const [numberPlaceholder, setNumberPlaceholder] = useState("");
  const [dobPlaceholder, setDobPlaceholder] = useState("");
  const [addressPlaceholder, setAddressPlaceholder] = useState("");
  const [profilePicPlaceholder, setProfilePicPlaceholder] = useState("");
  const uid = id.toString;
  //date
  const today = new Date();
  const dateNow = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );

  //camera
  const [pickedImage, setPickedImage] = useState(null);
  const showGallery = () => {
    let options = {
      cancelButtonTitle: 'Cancel',
      mediaType: 'photo',

    };

    launchImageLibrary(options => {
      if (error) {
        console.log('Image picker error: ', error);
      } else {
        setPickedImage(uri);
        console.log(uri)
      }
    });

  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    User();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  function User() {
    const uid = id.toString();
    //
    const ref = doc(database, "userData", id);
    try {
      const docRef = doc(database, "userData", uid);
      onSnapshot(docRef, (doc) => {
        const data = doc.data();
        setProfilePic(image);
        setFnamePlaceholder(data.userFname);
        setMnamePlaceholder(data.userMname);
        setLnamePlaceholder(data.userLname);
        setEmailPlaceholder(data.userEmail);
        setDobPlaceholder(data.userBirthdate);
        setNumberPlaceholder(data.userNumber);
        setAddressPlaceholder(data.userAddress);
        setProfilePicPlaceholder(data.userPic);
      });
    } catch (error) {
      alert(error);
    }
  }

  function update(){
    var time = moment().utcOffset('+08:00').format('hh:mm a');
    if(!lname||!mname||!lname||!email||!number||!address){
      if(!lname){
        setFname(fnamePlaceholder);
      }
      if(!mname){
        setMname(mnamePlaceholder);
      }
      if(!lname){
        setLname(lnamePlaceholder);
      }
      if(!email){
        setEmail(emailPlaceholder);
      }
      if(!address){
        setAddress(addressPlaceholder);
      }
      if(!number){
        setNumber(numberPlaceholder);
      }
    }else{
      addDoc(collection(database,'log'),{
        uid: id,
        type: "edit",
        timeMade: time,
        dateMade: dateNow,
        activity: "Made changes to profile."
      })
      updateDoc(doc(database, "userData", id), {
        userFname: fname,
        userMname: mname,
        userLname: lname,
        userEmail: email,
        userNumber: number,
      }).then(alert("Changes successful."));
      nav.navigate("Profile")
    }
  }
  const nav = useNavigation();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView style={{height:'100%'}}>
          <View style={{ backgroundColor: "white", height: 650 }}>
            <View
              style={{
                width: "100%",
                height: 70,
                backgroundColor: "transparent",
                marginBottom: -100,
                borderBottomLeftRadius: 70,
                borderBottomRightRadius: 70,
              }}
            ></View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={() => showGallery()}>
                  {
                    !profilePicPlaceholder?
                    <Image
                    style={style.pic}
                    source={require('../../assets/usertemplate.png')}/>
                  :
                  <Image
                  style={style.pic}
                  source={require('../../assets/usertemplate.png')}/>
                  }
              </TouchableOpacity>
              <View style={{width:30,height:30,borderRadius:30,marginTop:-30,marginLeft:70,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                  <TouchableOpacity onPress={() => showGallery()}>
                    <FontAwesomeIcon icon={faCamera} color="skyblue" size={20}/>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={style.container}>
              <View
                style={{
                  width: "80%",
                  backgroundColor: "transparent",
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              </View>
              <Text
                style={{
                  color: "#2E417E",
                  fontSize: 20,
                  fontWeight: 800,
                  margin: 25,
                }}
              >
                Edit Information
              </Text>
              <View
                style={{
                  width: "90%",
                  height: 350,
                  marginBottom:100,
                  alignSelf: "center",
                  alignItems:'center',
                  justifyContent:'center',
                  backgroundColor: "white",
                  borderRadius: 14,
                  borderColor: "rgb(230,230,255)",
                  borderLeftWidth: 2.4,
                  borderRightWidth: 2.6,
                  borderBottomWidth: 5,
                }}
              >
                <KeyboardAvoidingView style={{flexDirection:'column',justifyContent:'center'}}>
                  <View style={{flexDirection:'row',width:'100%',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:"30%",height:50,alignSelf:'center'}}>
                      <Text style={{color:'navy',fontSize:16,fontWeight:700}}>First Name</Text>
                      <TextInput placeholder={fnamePlaceholder} style={{}} onChangeText={(text)=> setFname(text)}/>
                    </View>
                    <View style={{width:"30%",height:50,alignSelf:'center'}}>
                      <Text style={{color:'navy',fontSize:16,fontWeight:700}}>Middle Name</Text>
                      <TextInput placeholder={mnamePlaceholder} style={{}} onChangeText={(text)=> setMname(text)}/>
                    </View>
                    <View style={{width:"30%",height:50,alignSelf:'center'}}>
                      <Text style={{color:'navy',fontSize:13,fontWeight:700}}>Last Name</Text>
                      <TextInput placeholder={lnamePlaceholder} style={{}} onChangeText={(text)=> setLname(text)}/>
                    </View>
                  </View>
                  <View>
                    <View style={{width:"90%",height:50,alignSelf:'center'}}>
                      <Text style={{color:'navy',fontSize:16,fontWeight:700}}>Address</Text>
                      <TextInput placeholder={addressPlaceholder} style={{}} onChangeText={(text)=> setAddress(text)}/>
                    </View>
                  </View>
                  <View>
                    <View style={{width:"90%",height:50,alignSelf:'center'}}>
                      <Text style={{color:'navy',fontSize:16,fontWeight:700}}>Email</Text>
                      <TextInput placeholder={emailPlaceholder} style={{}} onChangeText={(text)=> setEmail(text)}/>
                    </View>
                  </View>
                  <View>
                    <View style={{width:"90%",height:50,alignSelf:'center'}}>
                      <Text style={{color:'navy',fontSize:16,fontWeight:700}}>Mobile Number</Text>
                      <TextInput placeholder={numberPlaceholder} style={{}} onChangeText={(text)=> setNumber(text)}/>
                    </View>
                  </View>
                  <TouchableOpacity onPress={()=> update()} style={{width:120,height:40,backgroundColor:'navy',alignSelf:'center',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:18,fontWeight:700}}>Save</Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Edit;

const style = StyleSheet.create({
  myProfile: {
    marginTop: "12%",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  pic: {
    width: 124,
    height: 124,
    alignSelf: "center",
    marginTop: "10%",
    borderRadius: 100,
  },
  changePic: {
    alignSelf: "center",
  },
  camera: {
    fontSize: 25,
    color: "skyblue",
    marginTop: "-8%",
    marginLeft: "20%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 15,
  },
  container: {
    marginTop: "0%",
    height: 400,
    width: "100%",
  },
  detail: {
    marginLeft: "6%",
    fontSize: 19,
    fontWeight: "bold",
  },
  inputs: {
    width: "85%",
    height: 60,
    backgroundColor: "rgb(230,230,230)",
    color: "black",
    margin: "5%",
    fontSize: 20,
    borderRadius: 10,
  },
  h: {
    marginLeft: "3%",
  },
  genderContainer: {
    width: "94%",
    height: 105,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  male: {
    width: "47%",
    height: 70,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  female: {
    width: "47%",
    height: 70,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  logout: {
    width: "45%",
    height: 60,
    backgroundColor: "rgb(200,200,200)",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    margin: "2%",
  },
});
