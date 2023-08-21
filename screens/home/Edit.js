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
import * as ImagePicker from "expo-image-picker";
//FileSystem
import * as FileSystem from 'expo-file-system';
import { KeyboardAvoidingView } from "react-native";

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

  function sendData() {
    
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
      update();
    }
    else{
      update();
    }
  }
  function update(){
    updateDoc(doc(database, "userData", id), {
      userFname: fname,
      userMname: mname,
      userLname: lname,
      userEmail: email,
      userBirthdate: dob,
      userNumber: number,
    }).then(alert("Changes successful."));
    nav.navigate("Profile")
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
      const filename = result.uri
      const imageUri = result.uri;
      const imageInfo = await FileSystem.getInfoAsync(imageUri);
      const base64Image = await FileSystem.readAsStringAsync(imageUri, { encoding: 'base64' });
      const savedImageUri = `${FileSystem.documentDirectory,filename}.jpg`;
        await FileSystem.writeAsStringAsync(savedImageUri, base64Image, { encoding: 'base64' });
        setProfilePic(savedImageUri);
        updateDoc(doc(database, "userData", id), {
          userPic: profilePic
        }).then(alert("Profile photo updated successfuly."));
        console.log('Image saved', 'The image has been saved to local storage.');
  
    }
  };

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
              <TouchableOpacity onPress={() => pickImage()}>
                  {
                    !profilePicPlaceholder?
                    <Image
                    style={style.pic}
                    source={require('../../assets/usertemplate.png')}/>
                  :
                  <Image
                    style={style.pic}
                    source={{uri:profilePicPlaceholder}}/>
                  }
              </TouchableOpacity>
              <View style={{width:30,height:30,borderRadius:30,marginTop:-30,marginLeft:70,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                  <TouchableOpacity onPress={() => pickImage()}>
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
                  <TouchableOpacity onPress={()=> sendData()} style={{width:120,height:40,backgroundColor:'navy',alignSelf:'center',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
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
