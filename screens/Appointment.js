import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";
import moment from "moment";
//Firebase
import { authentication } from "../config/firebase";
import { database } from "../config/firebase";
import { Firestore , onSnapshot} from 'firebase/firestore';
import {
  collection,
  addDoc,
  doc,
  setDoc,
  where
 }
  from 'firebase/firestore';
import { getDocs, query } from "firebase/firestore";
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDown, faAngleUp, faArrowUp, faCalendar, faCheck } from "@fortawesome/free-solid-svg-icons";
//Dropdown
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';
//Navigation
import { useNavigation } from "@react-navigation/native";
import { style } from "../style";
import Loading from "./animations/Loading";
//Import Animations
import Success from "./animations/Success";
import Failed from "./animations/Failed";
//Sound
import { Audio } from 'expo-av';
//Import Preview
import Preview from "./appointment/Preview";

const data = [
  { label: 'Checkup', value: 'Checkup' },
  { label: 'Lab test', value: 'Lab test' },
  { label: 'Inquiry', value: 'Inquiry' },
  { label: 'Lying-in', value: 'Lying-in' },
];



export default function Appointment() {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const dateNow = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD hh:mm a"
  );
  //console.log(startDate)
  //Date
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("");
  //Time
  const [selectedStartTime, setSelectedStartTime] = useState("");
  const [timePicked, setTimePicked] = useState('');
  //Firebase docs
  const [documents, setDocuments] = useState('');
  //Loading
  const [loading, setLoading] = useState(false);
  //Indicator
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false)
  const [uid, setUid] = useState("");
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    },2200)
  },[]);

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const [sound, setSound] = useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/success5.wav')
    );
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
          ;
        }
      : undefined;
  }, [sound]);

  const [fromHour, setFromHour] = useState(1);
  const [fromMinute, setFromMinute] = useState(0);
  const [fromMeridiem, setFromMeridiem] = useState("am");
  const [toHour, setToHour] = useState(1);
  const [toMinute, setToMinute] = useState(0);
  const [toMeridiem, setToMeridiem] = useState("am");
  const [zero, addZero] = useState("");
  const [toggle, setToggle] = useState(false);
  const [preview, setPreview] = useState(false);

  const nav = useNavigation();

  useEffect(()=>{
    if(fromHour<1){
      setFromHour(12)
    }  
    if(fromHour>12){
      setFromHour(1)
    }
    if(fromMinute<0){
      setFromMinute(fromMinute+59)
    }
    if(fromMinute>59){
      setFromMinute(fromMinute-59)
    }
    if(toHour<1){
      setToHour(12)
    }
    if(toHour>12){
      setToHour(1)
    }
    if(toMinute<0){
      setToMinute(toMinute+59)
    }
    if(toMinute>59){
      setToMinute(toMinute-59)
    }
    if(fromMeridiem=="am"){
      setToMeridiem("am")
    }
    if(fromMeridiem=="pm"){
      setToMeridiem("pm")
    }
    if(fromMinute<10){
      addZero("0")
    }
    if(toMinute<10){
      addZero("0")
    }
  })

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          purpose
        </Text>
      );
    }
    return null;
  };
  const id = authentication.currentUser.phoneNumber;
  const docRef = doc(database, 'userData', id);

  useEffect(()=>{
    async function fetchUser(){
      const user = [];
      const querySnapshot = await getDocs(query(collection(database,"userData"),where("userNumber","==",id)))
      querySnapshot.forEach((doc)=>{
        setUid(doc.id)
        setName(doc.data().userFname)
        setSurname(doc.data().userLname)
      })
    }
    fetchUser();
  },[])

  const [name,setName] = useState('');
  const [surname, setSurname] = useState('');
  useEffect(()=> {
    onSnapshot(docRef, (doc) =>{
      const data = doc.data();
    })
  })
  //Firebase backend here
  function sendData(){
    var time = moment().utcOffset('+08:00').format('hh:mm a');
    try{
      if(!selectedStartDate||!timePicked||!value){
        alert("please fill all the necessary data, thank you.")
      }else{
        addDoc(collection(database,'log'),{
          uid: uid,
          type: "online appointment",
          timeMade: time,
          dateMade: dateNow,
          activity: "booked an online appointment"
        })
        addDoc(collection(database,'events'),{
          uid: uid,
          name: name + " " + surname,
          type: "online appointment",
          dateMade: dateNow,
          timeMade: time,
          date: selectedStartDate,
          time: timePicked,
          purpose: value,
          status: "pending"
        })
        addDoc(collection(database,'onlineAppointments'),{
          uid: uid,
          name: name + " " + surname,
          dateMade: dateNow,
          timeMade: time,
          appointmentDate: selectedStartDate,
          time: timePicked,
          purpose: value,
          status: "pending",
          read: false
        }).then(
          setSuccess(true)
        );
        playSound()
      } 
      setTimeout(()=> {
        setSuccess(false);
      },3000)
      setTimeout(()=>{
        alert("Please wait for the update on the status of your appointment. To see your appointments list, go to the appointment history in the tools.")
      },4000)
      setSelectedStartDate('')
      setTimePicked('')
      setValue(null)
    }catch(error){
      console.log(error);
      alert(error);
      setFailed(true);
      setTimeout(()=> {
        setFailed(false);
      },1500)
    }
      
  }

  useEffect(()=> {
    if(toggle===false){
      setTimePicked("");
    }
    if(!selectedStartDate||!timePicked||!value){
      setPreview(false);
    }
  })

  function handleDone(){
    if(!selectedStartDate||!timePicked||!value){
      alert("Please fill all the necessary feilds. Thank you.")
    }else{
      setPreview(!preview)
    }
  }



  //console.log(selectedStartDate + " " + timePicked + " " + value);

  return (
    <View>
      {
        preview?
        <View style={{width:300,height:350,marginBottom:'-140%',marginTop:'40%',borderColor:'navy',borderRadius:20,borderWidth:3,zIndex:1,backgroundColor:'rgb(240,240,255)',alignSelf:'center',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <View style={{width:'100%',height:'70%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'100%',height:'30%',marginTop:'20%',flexDirection:'row',justifyContent:'center',alignItems:'Center'}}>
              <Text style={{marginLeft:'2%',color:'navy',fontSize:20,fontWeight:800, marginBottom:'10%'}}>Is all the information correct? </Text>
            </View> 
            <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'start'}}>
              <Text style={{marginLeft:'2%',color:'navy',fontSize:14,fontWeight:600}}>Date of Appointment: </Text>
              <Text style={{marginLeft:'2%',color:'navy',fontSize:14,fontWeight:400}}>{selectedStartDate}</Text>
            </View>
            <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'start'}}>
              <Text style={{marginLeft:'-15%',color:'navy',fontSize:14,fontWeight:600}}>Time of {value}:</Text>
              <Text style={{marginLeft:'2%',color:'navy',fontSize:14,fontWeight:400}}>{timePicked}</Text>
            </View>
            <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'center',alignItems:'start'}}>
              <Text style={{marginLeft:'-32%',color:'navy',fontSize:14,fontWeight:600,}}>Purpose:</Text>
              <Text style={{marginLeft:'2%',color:'navy',fontSize:14,fontWeight:400,}}> {value}</Text>

            </View>
          </View>
          <Text style={{color:'navy',fontSize:10,fontWeight:400,textAlign:'center',marginBottom:20}}> By clicking "proceed," you acknowledge that the details you've provided are accurate and complete.</Text>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'90%',height:'30%'}}> 
              <TouchableOpacity style={{width:"35%",height:40,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'lightgrey'}} onPress={()=> setPreview(false)}>
                <Text style={{color:'white',fontSize:18}}>cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:"35%",height:40,borderRadius:10,alignItems:'center',justifyContent:'center',backgroundColor:'navy'}} onPress={()=> [sendData(),setPreview(false)]}>
                <Text style={{color:'white',fontSize:18}}>proceed</Text>
              </TouchableOpacity>
          </View>
        </View>
        :
        null
      }
      {
        success?
        <Success/>
        :
        null
      }
      {
        failed?
        <Failed/>
        :
        null
      }
      {
        loading?
        <Loading/> 
        :
        <>
        
           <ScrollView>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : ""}
              style={{
                width: "100%",
                height: "1000",
                backgroundColor: "#fff",
                flexDirection:'row',

              }}>
              <View  style={{width:'100%', height:800, backgroundColor: 'ghostwhite'}}>
              <View style={{width:'100%',height:'700',backgroundColor:'red'}}></View>
                <View style={{ width: "100%", paddingHorizontal: 22, marginTop: 25 }}>
                  <View style={{width:'100%',height:600}}>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                      <View style={{width:20,height:20,marginRight:'1%',backgroundColor: selectedStartDate!==""? 'green':'grey',borderRadius:10, alignItems:'center',justifyContent:'center'}}>
                        <FontAwesomeIcon icon={faCheck} size={13} color="white"/>
                      </View>
                      <Text style={{ fontSize: 18 }}>1. Select Date of Appointment</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.inputBtn}
                      onPress={handleOnPressStartDate}
                    >
                      <Text>{selectedStartDate}</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 13,marginLeft:'5%' }}>press the rectangle above and pick a date</Text>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                      <View style={{width:20,height:20,marginRight:'1%',backgroundColor: timePicked!==""? 'green':'grey',borderRadius:10, alignItems:'center',justifyContent:'center'}}>
                        <FontAwesomeIcon icon={faCheck} size={13} color="white"/>
                      </View>
                      <Text style={{ fontSize: 18 }}>2. Select Time of Appointment</Text>
                    </View>
                      <View style={{width:'100%',height:'50%',backgroundColor:'ghostwhite'}}>
                        <View style={{width:'100%',height:'90%',alignSelf:'center', flexDirection: 'column', backgroundColor:'red', marginTop:'5%'}}>
                          <View style={{width:'100%',height:'50%',backgroundColor:'white',flexDirection:'column'}}>
                            <Text style={{margin:'2%',fontWeight:700,color:'skyblue'}}>Morning</Text>
                            <View style={{width:'100%',height:'80%', backgroundColor:"transparent",flexDirection:'row',flexWrap:'wrap'}}>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="8:00 am"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("8:00 am"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="8:00 am"&&toggle? "white":"blue"}}>8:00 am</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="8:30 am"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("8:30 am"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="8:30 am"&&toggle? "white":"blue"}}>8:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="9:00 am"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("9:00 am"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="9:00 am"&&toggle? "white":"blue"}}>9:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="9:30 am"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("9:30 am"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="9:30 am"&&toggle? "white":"blue"}}>9:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="10:00 am"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("10:00 am"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="10:00 am"&&toggle? "white":"blue"}}>10:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="10:30 am"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("10:30 am"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="10:30 am"&&toggle? "white":"blue"}}>10:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="11:00 am"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("11:00 am"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="11:00 am"&&toggle? "white":"blue"}}>11:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="11:30 am"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("11:30 am"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="11:30 am"&&toggle? "white":"blue"}}>11:30 am</Text>
                                </TouchableOpacity>
                              </View>

                            </View>
                          </View>
                          <View style={{width:'100%',height:'50%',backgroundColor:'white',flexDirection:'column'}}>
                            <Text style={{margin:'2%',fontWeight:700,color:'orange'}}>Afternoon</Text>
                            <View style={{width:'100%',height:'80%', backgroundColor:"transparent",flexDirection:'row',flexWrap:'wrap'}}>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="1:00 pm"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("1:00 pm"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="1:00 pm"&&toggle? "white":"blue"}}>1:00 pm</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="1:30 pm"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("1:30 pm"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="1:30 pm"&&toggle? "white":"blue"}}>1:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="2:00 pm"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("2:00 pm"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="2:00 pm"&&toggle? "white":"blue"}}>2:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="2:30 pm"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("2:30 pm"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="2:30 pm"&&toggle? "white":"blue"}}>2:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="3:00 pm"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("3:00 pm"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="3:00 pm"&&toggle? "white":"blue"}}>3:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="3:30 pm"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=>  [setTimePicked("3:30 pm"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="3:30 pm"&&toggle? "white":"blue"}}>3:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="4:00 pm"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("4:00 pm"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="4:00 pm"&&toggle? "white":"blue"}}>4:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePicked==="4:30 pm"? "blue":"white",color:timePicked===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePicked("4:30 pm"),setToggle(!toggle)]}>
                                  <Text style={{color:timePicked==="4:30 pm"&&toggle? "white":"blue"}}>4:30 pm</Text>
                                </TouchableOpacity>
                              </View>
                              <Text style={{ fontSize: 13,marginLeft:'5%' }}>select the time within your covinience</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    <View style={{marginTop: 30, height:'1000'}}>
                    <View style={{flexDirection:'row',alignItems:'center',}}>
                      <View style={{width:20,height:20,marginRight:'1%',backgroundColor: value!==null? 'green':'grey',borderRadius:10, alignItems:'center',justifyContent:'center'}}>
                        <FontAwesomeIcon icon={faCheck} size={13} color="white"/>
                      </View>
                      <Text style={{ fontSize: 18 }}>3. Select purpose of Appointment</Text>
                    </View>
                      <View style={{width:'100%',height:100,alignSelf:'center',backgroundColor:'rgb(240,240,240)',marginTop:'2%'}}>
                      <View style={styles.container}>
                        {renderLabel()}
                        <Dropdown
                          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          data={data}
                          search
                          maxHeight={200}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select item' : '...'}
                          searchPlaceholder="Search..."
                          value={value}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                          }}
                          renderLeftIcon={() => (
                            <AntDesign
                              style={styles.icon}
                              color={isFocus ? 'blue' : 'black'}
                              name="Safety"
                              size={20}
                            />
                          )}
                        />
                      </View>
                      </View>
                    </View>
                    <Text style={{ fontSize: 12, textAlign: 'center' }}> If all is okay, press submit and wait for the notification</Text>
                  <TouchableOpacity
                    onPress={() => handleDone()}
                    style={styles.submitBtn}>
                    <Text style={{ fontSize: 20, color: "white" }}>Submit</Text>
                  </TouchableOpacity>
                  </View>
                </View>
                {/* Create modal for date picker */}
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={openStartDatePicker}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <DatePicker
                        mode="calendar"
                        minimumDate={startDate}
                        selected={startedDate}
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
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
            
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 36,
    marginVertical: 60,
    color: "#111",
  },
  textSubHeader: {
    fontSize: 25,
    color: "#111",
  },
  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#222",
    height: 50,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: "center",
    marginTop: 14,
  },
  submitBtn: {
    backgroundColor: "navy",
    paddingVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 16,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
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

  }
});