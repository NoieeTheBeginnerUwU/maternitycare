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
const Profile = () => {
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
  const [profilePic, setProfilePic] = useState();
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
  const uid = id.toString;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },2500);
  }, []);

  function User() {
    const uid = id.toString();
    //
    const [userdata, setuserdata] = useState([]);
    //
    const ref = doc(database, "userData", id);

    useEffect(()=>{
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
          setBloodPressurePlaceholder(data.bloodPressure);
          setHeightPlaceholder(data.height);
          setWeightPlaceholder(data.weight);
          setDateModifiedPlacehlder(data.dateUpdated);
        });
      } catch (error) {
        alert(error);
      }
    },[])
  }

  User();

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
  console.log(profilePicPlaceholder)
  const nav = useNavigation();

  let bm = Math.ceil(weightPlaceholder/((heightPlaceholder/100)^2));

    //camera

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
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
            <TouchableOpacity>
                {
                  !profilePicPlaceholder?
                  <Image
                  style={style.pic}
                  source={require('../../assets/usertemplate.png')}/>
                :
                <Image
                style={{width:120,height:120,marginTop:40,alignSelf:'center',borderRadius:140}}
                source={{uri:profilePicPlaceholder}}/>
                }
            </TouchableOpacity>
            <View style={style.container}>
              <View
                style={{
                  width: "80%",
                  height: 60,
                  backgroundColor: "transparent",
                  marginTop: -12,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#2E417E", fontSize: 27, fontWeight: 800 }}
                >
                  {fnamePlaceholder} {mnamePlaceholder} {lnamePlaceholder}
                </Text>
              </View>
              <View style={{width:'96%',height:60,borderColor:'pink',borderWidth:2.4,alignSelf:'center',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={{width:'25%',height:'100%',borderColor:'skyblue',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  <FontAwesomeIcon icon={faPersonPregnant} size={22} color="pink"/>
                  <View style={{width:'70%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{}}>BMI</Text>
                    <Text style={{}}>{bm}</Text>
                  </View>
                </View>
                <View style={{width:'25%',height:'100%',borderColor:'skyblue',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faWeightScale} size={22} color="orange"/>
                  <View style={{width:'70%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{}}>Weight</Text>
                    <Text style={{}}>{weightPlaceholder}</Text>
                  </View>
                </View>
                <View style={{width:'25%',height:'100%',borderColor:'skyblue',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faRuler} size={22} color="yellow"/>
                  <View style={{width:'70%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{}}>Height</Text>
                    <Text style={{}}>{heightPlaceholder}</Text>
                  </View>
                </View>
                <View style={{width:'25%',height:'100%',borderColor:'skyblue',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faDroplet} size={22} color="red"/>
                  <View style={{width:'70%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{}}>BP</Text>
                    <Text style={{}}>{bloodPressurePlaceholder}</Text>
                  </View>
                </View>
              </View>
              <Text style={{marginLeft:20,fontWeight:300,marginBottom:-10}}>Last modified: {dateModifiedPlaceholder}</Text>
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
                  onPress={() => nav.navigate("Password")}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "90%",
                    margin: "2%",
                  }}
                >
                  <FontAwesomeIcon icon={faKey} size={20} color="skyblue" />
                  <Text>Change Password</Text>
                  <FontAwesomeIcon icon={faAngleRight} size={20} color="skyblue" />
                </TouchableOpacity>
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
