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
  faDoorOpen,
  faDroplet,
  faGear,
  faGift,
  faKey,
  faMailBulk,
  faPen,
  faPersonPregnant,
  faPhone,
  faRuler,
  faSignOut,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
//import storage
import { storage } from "../../config/firebase";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";

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
  where,
  DocumentSnapshot,
  updateDoc,
} from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
//import loading screen
import Loading from "../animations/Loading";
//image picker
import * as ImagePicker from 'expo-image-picker';


const Profile = () => {
  const [isSelected, setSelection] = useState(false);
  const id = authentication.currentUser.phoneNumber;
  //useRefs
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [image, setImage] = useState(null);
  //
  const [fnamePlaceholder, setFnamePlaceholder] = useState("");
  const [mnamePlaceholder, setMnamePlaceholder] = useState("");
  const [lnamePlaceholder, setLnamePlaceholder] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("");
  const [numberPlaceholder, setNumberPlaceholder] = useState("");
  const [dobPlaceholder, setDobPlaceholder] = useState("");
  const [addressPlaceholder, setAddressPlaceholder] = useState("");
  const [heightPlaceholder, setHeightPlaceholder] = useState();
  const [weightPlaceholder, setWeightPlaceholder] = useState("");
  const [bloodPressurePlaceholder, setBloodPressurePlaceholder] = useState("");
  const [dateModifiedPlaceholder, setDateModifiedPlacehlder] = useState("");
  const [profilePicPlaceholder, setProfilePicPlaceholder] = useState("");
  const [bmi, setBmi] = useState()
  const [uid, setUid] = useState("");
  const [userdata, setuserdata] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },2500);
  }, []);


  async function fetchUser(){
    const userData = [];
    const  queryData = await getDocs(query(collection(database,"userData"),where("userNumber","==",id)))
    queryData.forEach((doc)=>{
      setUid(doc.id);      
      setFnamePlaceholder(doc.data().userFname);
      setMnamePlaceholder(doc.data().userMname);
      setLnamePlaceholder(doc.data().userLname);
      setEmailPlaceholder(doc.data().userEmail);
      setDobPlaceholder(doc.data().userBirthdate);
      setNumberPlaceholder(doc.data().userNumber);
      setAddressPlaceholder(doc.data().userAddress);
      setProfilePicPlaceholder(doc.data().userPic);
      setBloodPressurePlaceholder(doc.data().bloodPressure);
      setHeightPlaceholder(doc.data().height);
      setWeightPlaceholder(doc.data().weight);
      setDateModifiedPlacehlder(doc.data().dateUpdated);
    })
  }

 useEffect(()=>{
  fetchUser();
 },[])

 async function updatePic(){
  try{
    updateDoc(doc(database, "userData", uid), {
      userPic: image
    }).then(alert("Changes successful."));
  }catch(e){
    console.log(e)
  }
 }


  function logout() {
    authentication
      .signOut()
      .then(function () {
        // Sign-out successful.
        alert("logging out");
      })
      .catch(function (error) {
        // An error happened.
      });
  }
  const nav = useNavigation();

  let bm = Math.ceil(weightPlaceholder/((heightPlaceholder/100)^2));

    //camera

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
            console.log(result.assets[0].uri)
           const uploadURL = await uploadImageAsync(result.assets[0].uri);
           setImage(result.assets[0].uri);
           console.log(image)
           updateDoc(doc(database, "userData", uid), {
            userPic: image
          }).then(alert("Changes successful."));
          }else{
            //do nothing
          }
          //firebase start 
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
              const storageRef = ref(storage, uid);
              const result = await uploadBytes(storageRef, blob);
              return await getDownloadURL(storageRef);
              blob.close();
            }catch(e){
              
            }
      
          }
          //firebase end
      
        };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View style={{ backgroundColor: "white", height: 700,alignItems:'center',justifyContent:'start' }}>
            <View style={{width:'96%',height:150,flexDirection:'row',justifyContent:'center',alignItems:'center',borderTopRadius:80,backgroundColor:"navy",marginTop:'4%',borderTopLeftRadius:70,borderBottomLeftRadius:70}}>
            <TouchableOpacity onPress={()=> pickImage()}  style={{width:120,height:120,borderRadius:140}}>
                {
                  !profilePicPlaceholder?
                  <Image
                  style={{width:130,height:130,borderRadius:140}}
                  source={require('../../assets/usertemplate.png')}/>
                :
                <Image
                style={{width:130,height:130,borderRadius:140}}
                source={{uri:profilePicPlaceholder}}/>
                }
              </TouchableOpacity>
              <View
                  style={{
                    width: "60%",
                    height: 60,
                    backgroundColor: "transparent",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                <Text
                  style={{ color: "white", fontSize: 24, fontWeight: 800 }}
                >
                  {fnamePlaceholder} {mnamePlaceholder} {lnamePlaceholder}
                </Text>
              </View>
            </View>
            <View style={style.container}>
              <Text
                style={{
                  color: "#2E417E",
                  fontSize: 16,
                  fontWeight: 600,
                  margin: 20,
                }}
              >
                Information
              </Text>
              <View
                style={{
                  width: "90%",
                  height: 180,
                  alignSelf: "center",
                  backgroundColor: "white",
                  borderRadius: 14,
                  borderColor: "rgb(220,220,240)",
                  borderLeftWidth: 2.4,
                  borderRightWidth: 2.6,
                  borderBottomWidth: 10,
                }}
              >
                <View
                  style={{
                    width: "90%",
                    height: 34,
                    backgroundColor: "white",
                    alignSelf: "center",
                    marginTop: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMailBulk}
                      size={20}
                      color="pink"
                    />
                    <Text
                      style={{
                        color: "#2E417E",
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Email
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      marginLeft: 10,
                      marginTop: "2%",
                      textDecorationLine: "underline",
                    }}
                  >
                    {emailPlaceholder}
                  </Text>
                </View>
                <View
                  style={{
                    width: "90%",
                    height: 34,
                    backgroundColor: "white",
                    alignSelf: "center",
                    marginTop: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <FontAwesomeIcon icon={faGift} size={20} color="pink" />
                    <Text
                      style={{
                        color: "#2E417E",
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Birthday
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      marginLeft: 10,
                      marginTop: "2%",
                      textDecorationLine: "underline",
                    }}
                  >
                    {dobPlaceholder}
                  </Text>
                </View>
                <View
                  style={{
                    width: "90%",
                    height: 34,
                    backgroundColor: "white",
                    alignSelf: "center",
                    marginTop: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <FontAwesomeIcon icon={faPhone} size={20} color="pink" />
                    <Text
                      style={{
                        color: "#2E417E",
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Phone
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      marginLeft: 10,
                      marginTop: "2%",
                      textDecorationLine: "underline",
                    }}
                  >
                    {numberPlaceholder}
                  </Text>
                </View>
                <View
                  style={{
                    width: "90%",
                    height: 34,
                    backgroundColor: "white",
                    alignSelf: "center",
                    marginTop: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMailBulk}
                      size={20}
                      color="pink"
                    />
                    <Text
                      style={{
                        color: "#2E417E",
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Address
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "black",
                      fontSize: 16,
                      marginLeft: 10,
                      marginTop: "2%",
                      textDecorationLine: "underline",
                    }}
                  >
                    {addressPlaceholder}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  borderRadius: 30,
                  height: 120,
                  alignSelf: "center",
                  backgroundColor: "white",
                  borderBottomWidth: 4,
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "grey",
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => nav.navigate("Settings")}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "90%",
                    margin: "2%",
                  }}
                >
                  <FontAwesomeIcon icon={faGear} size={20} color="skyblue" />
                  <Text>Settings</Text>
                  <FontAwesomeIcon icon={faAngleRight} size={20} color="skyblue" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => logout()}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "90%",
                    margin: "2%",
                  }}
                >
                  <FontAwesomeIcon icon={faSignOut} size={20} color="skyblue" />
                  <Text>Logout</Text>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    size={20}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Profile;

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
