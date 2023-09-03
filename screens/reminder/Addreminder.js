import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import DateRangePicker from "rn-select-date-range";
import DatePicker from "react-native-modern-datepicker";
import { ScrollView } from "react-native";
import { getFormatedDate } from "react-native-modern-datepicker";
import { TouchableOpacity } from "react-native";
import AnimatedLottieView from "lottie-react-native";
import { lotties } from "../../style";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleUp, faAngleDown, faPlus, faCheck,faMinus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { authentication, realtimeDatabase } from "../../config/firebase";
import { database } from "../../config/firebase";
import Reminderadded from "../animations/Reminderadded";
import { addDoc,getDocs,query,collection } from "firebase/firestore";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'once a day', value: 'once a day' },
  { label: 'twice a day', value: 'twice a a day' },
  { label: 'thrice a day', value: 'thrice a day' },
];


export default Addreminder = () => {
  const nav = useNavigation();
  const id = authentication.currentUser.uid;
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [addDate, setAddDate] = useState(true);
  const [addTime, setAddTime] = useState(false);
  const [selectedRange, setRange] = useState({});
  const [addReminder, setAddReminder] = useState(false);
  const [addNote, setAddNote] = useState(true);
  const [time, setTime] = useState("");
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  //
  const [multipleDates, setMultipleDates] = useState([]);
  const [multipleTimes, setMultipleTimes] = useState([]);
  const [note, setNote] = useState('');
  const [addedReminder, setAddedReminder] = useState(false);
  const [timePicked, setTimePicked] = useState('');
  const [timePickedMorning, setTimePickedMorning] = useState("");
  const [timePickedAfternoon, setTimePickedAfternoon] = useState("");
  const [timePickedEvening, setTimePickedEvening] = useState("");
  const [timePickedMidnight, setTimePickedMidnight] = useState("");
  const [toggle, setToggle] = useState(false);
  //
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
   
        </Text>
      );
    }
    return null;
  };
  //
  const today = new Date();
  const today2 = new Date();
  const today3 = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );

  var today5 = moment(selectedRange.firstDate,"YYYY/MM/DD");
  var today6 = moment(selectedRange.secondDate, "YYYY/MM/DD");
  //const weeksDifference = today6.diff(today5, "days");
  function getDatesInRange() {
    let date = []
    today5 = moment(today5).format("YYYY-MM-DD")
    while(moment(today5) <= moment(today6)){
        multipleDates.push(today5)
      today5 = moment(today5).add(1, 'days').format("YYYY-MM-DD");
    }

  }

const handleReminder = () => {
  
  var time = moment().utcOffset('+08:00').format('hh:mm a');
    const dateNow = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD hh:mm a"
  );
    try{
      getDatesInRange();

      addDoc(collection(database,'log'),{
        uid: id,
        type: "reminder",
        timeMade: time,
        dateMade: dateNow,
        activity: "added a reminder"
      })
        addDoc(collection(database,'events'),{
          uid: id,
          type: "reminder",
          dateMade: startDate,
          activity: "added a reminder"
        })
        if(timePickedMorning!==""){
          multipleTimes.push(timePickedMorning);
        }
        if(timePickedAfternoon!==""){
          multipleTimes.push(timePickedAfternoon);
        }
        if(timePickedEvening!==""){
          multipleTimes.push(timePickedEvening);
        }
        if(timePickedMidnight!==""){
          multipleTimes.push(timePickedMidnight);
        }
        addDoc(collection(database,'reminders'),{
          user: id,
          dates: multipleDates,
          times: multipleTimes,
          note: note,
          dateMade: startDate,
          status:'disabled',
        }).then(setAddedReminder(true))
        setMultipleDates([]);
        setMultipleTimes([]);
        setTimeout(()=>{
          setAddedReminder(false);
          nav.navigate("Tools");
        },3000)
    }catch(e){
        console.log(e)
    }
}

  var first = selectedRange.firstDate;
  var second = selectedRange.secondDate;
  const start = getFormatedDate(first, "DD");
  const end = getFormatedDate(second, "DD");
  var i;
  for (i == start; i <= end; i++) {
   
  }
  console.log(multipleDates.length);
  if(number<1){
    setNumber(1)
  }

  function stringify(string){
    return JSON.stringify(string);
  }

  const animationRef = useRef();
  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <>
    {
      addedReminder?
      <Reminderadded/>
      :
      <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      >
        <ScrollView
          style={{
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            onPress={() => setAddDate(!addDate)}
            style={{
              alignSelf: "center",
              width: "90%",
              marginTop: 30,
              height: 60,
              flexDirection: "row",
              backgroundColor: "navy",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
              <View style={{width:20,height:20,marginRight:'1%',backgroundColor: multipleDates.length<1? 'grey':'green',borderRadius:10, alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faCheck} size={13} color="white"/>
              </View>
            <Text style={{ color: "white", fontSize: 15, fontWeight: 600 }}>
              1. Select the date range of your reminder
            </Text>
          </TouchableOpacity>
          {addDate ? (
            <View style={{ width: "90%", height: 420, alignSelf: "center" }}>
              <DateRangePicker
                onSelectDateRange={(range) => {
                  setRange(range);
                }}
                blockSingleDateSelection={true}
                responseFormat="YYYY-MM-DD"
                maxDate={moment().add(100, "days")}
                minDate={moment()}
                selectedDateContainerStyle={styles.selectedDateContainerStyle}
                selectedDateStyle={styles.selectedDateStyle}
              />
              <Text>From: {selectedRange.firstDate}</Text>
              <Text>To: {selectedRange.secondDate}</Text>
            </View>
          ) : null}
          <TouchableOpacity
            onPress={() => setAddNote(!addNote)}
            style={{
              alignSelf: "center",
              width: "90%",
              marginTop: 10,
              height: 60,
              backgroundColor: "navy",
              flexDirection: "row",
              justifyContent: "center",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
              <View style={{width:20,height:20,marginRight:'5%',marginLeft:'4%',backgroundColor: note!==""? 'green':'grey',borderRadius:10, alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faCheck} size={13} color="white"/>
              </View>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: 700,
                marginLeft: "-2.5%",
              }}
            >
              2. Add Note
            </Text>
          </TouchableOpacity>
          {addNote ? (
            <View
              style={{
                width: "100%",
                height: 900,
                backgroundColor: "white",
                alignSelf: "center",
                borderBottom:1000,
              }}
            >
    
              <View style={{width:'100%',height:400}}>
              <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite'}}>
                        <View style={{width:'100%',height:'90%',alignSelf:'center', flexDirection: 'column', backgroundColor:'red', marginTop:'5%'}}>
                          <View style={{width:'100%',height:'50%',backgroundColor:'white',flexDirection:'column'}}>
                            <Text style={{margin:'2%',fontWeight:700,color:'skyblue'}}>Morning</Text>
                            <View style={{width:'100%',height:'80%', backgroundColor:"transparent",flexDirection:'row',flexWrap:'wrap'}}>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMorning==="8:00 am"? "blue":"white",color:timePickedMorning===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMorning("8:00 am")]}>
                                  <Text style={{color:timePickedMorning==="8:00 am"? "white":"blue"}}>8:00 am</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMorning==="8:30 am"? "blue":"white",color:timePickedMorning===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMorning("8:30 am")]}>
                                  <Text style={{color:timePickedMorning==="8:30 am"? "white":"blue"}}>8:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMorning==="9:00 am"? "blue":"white",color:timePickedMorning===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMorning("9:00 am")]}>
                                  <Text style={{color:timePickedMorning==="9:00 am"? "white":"blue"}}>9:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMorning==="9:30 am"? "blue":"white",color:timePickedMorning===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMorning("9:30 am")]}>
                                  <Text style={{color:timePickedMorning==="9:30 am"? "white":"blue"}}>9:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMorning==="10:00 am"? "blue":"white",color:timePickedMorning===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMorning("10:00 am")]}>
                                  <Text style={{color:timePickedMorning==="10:00 am"? "white":"blue"}}>10:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMorning==="10:30 am"? "blue":"white",color:timePickedMorning===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMorning("10:30 am")]}>
                                  <Text style={{color:timePickedMorning==="10:30 am"? "white":"blue"}}>10:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMorning==="11:00 am"? "blue":"white",color:timePickedMorning===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMorning("11:00 am")]}>
                                  <Text style={{color:timePickedMorning==="11:00 am"? "white":"blue"}}>11:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMorning==="11:30 am"? "blue":"white",color:timePickedMorning===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMorning("11:30 am")]}>
                                  <Text style={{color:timePickedMorning==="11:30 am"? "white":"blue"}}>11:30 am</Text>
                                </TouchableOpacity>
                              </View>

                            </View>
                          </View>
                          <View style={{width:'100%',height:'50%',backgroundColor:'white',flexDirection:'column'}}>
                            <Text style={{margin:'2%',fontWeight:700,color:'orange'}}>Afternoon</Text>
                            <View style={{width:'100%',height:'80%', backgroundColor:"transparent",flexDirection:'row',flexWrap:'wrap'}}>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedAfternoon==="1:00 pm"? "blue":"white",color:timePickedAfternoon===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedAfternoon("1:00 pm")]}>
                                  <Text style={{color:timePickedAfternoon==="1:00 pm"? "white":"blue"}}>1:00 pm</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedAfternoon==="1:30 pm"? "blue":"white",color:timePickedAfternoon===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedAfternoon("1:30 pm")]}>
                                  <Text style={{color:timePickedAfternoon==="1:30 pm"? "white":"blue"}}>1:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedAfternoon==="2:00 pm"? "blue":"white",color:timePickedAfternoon===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedAfternoon("2:00 pm")]}>
                                  <Text style={{color:timePickedAfternoon==="2:00 pm"? "white":"blue"}}>2:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedAfternoon==="2:30 pm"? "blue":"white",color:timePickedAfternoon===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedAfternoon("2:30 pm")]}>
                                  <Text style={{color:timePickedAfternoon==="2:30 pm"? "white":"blue"}}>2:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedAfternoon==="3:00 pm"? "blue":"white",color:timePickedAfternoon===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedAfternoon("3:00 pm")]}>
                                  <Text style={{color:timePickedAfternoon==="3:00 pm"? "white":"blue"}}>3:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedAfternoon==="3:30 pm"? "blue":"white",color:timePickedAfternoon===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=>  [setTimePickedAfternoon("3:30 pm")]}>
                                  <Text style={{color:timePickedAfternoon==="3:30 pm"? "white":"blue"}}>3:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedAfternoon==="4:00 pm"? "blue":"white",color:timePickedAfternoon===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedAfternoon("4:00 pm")]}>
                                  <Text style={{color:timePickedAfternoon==="4:00 pm"? "white":"blue"}}>4:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedAfternoon==="4:30 pm"? "blue":"white",color:timePickedAfternoon===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedAfternoon("4:30 pm")]}>
                                  <Text style={{color:timePickedAfternoon==="4:30 pm"? "white":"blue"}}>4:30 pm</Text>
                                </TouchableOpacity>
                              </View>
                              <Text style={{ fontSize: 13,marginLeft:'5%' }}>select the time within your covinience</Text>
                            </View>
                          </View>
                        </View>
                      </View>
              </View>
              <View style={{width:'100%',height:400}}>
              <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite'}}>
                        <View style={{width:'100%',height:'90%',alignSelf:'center', flexDirection: 'column', backgroundColor:'red', marginTop:'5%'}}>
                          <View style={{width:'100%',height:'50%',backgroundColor:'white',flexDirection:'column'}}>
                            <Text style={{margin:'2%',fontWeight:700,color:'skyblue'}}>Evening</Text>
                            <View style={{width:'100%',height:'80%', backgroundColor:"transparent",flexDirection:'row',flexWrap:'wrap'}}>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedEvening==="8:00 pm"? "blue":"white",color:timePickedEvening===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedEvening("8:00 pm")]}>
                                  <Text style={{color:timePickedEvening==="8:00 pm"? "white":"blue"}}>8:00 pm</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedEvening==="8:30 pm"? "blue":"white",color:timePickedEvening===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedEvening("8:30 pm")]}>
                                  <Text style={{color:timePickedEvening==="8:30 pm"? "white":"blue"}}>8:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedEvening==="9:00 pm"? "blue":"white",color:timePickedEvening===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedEvening("9:00 pm")]}>
                                  <Text style={{color:timePickedEvening==="9:00 pm"? "white":"blue"}}>9:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedEvening==="9:30 pm"? "blue":"white",color:timePickedEvening===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedEvening("9:30 pm")]}>
                                  <Text style={{color:timePickedEvening==="9:30 pm"? "white":"blue"}}>9:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedEvening==="10:00 pm"? "blue":"white",color:timePickedEvening===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedEvening("10:00 pm")]}>
                                  <Text style={{color:timePickedEvening==="10:00 pm"? "white":"blue"}}>10:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedEvening==="10:30 pm"? "blue":"white",color:timePickedEvening===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedEvening("10:30 pm")]}>
                                  <Text style={{color:timePickedEvening==="10:30 pm"? "white":"blue"}}>10:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedEvening==="11:00 pm"? "blue":"white",color:timePickedEvening===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedEvening("11:00 pm")]}>
                                  <Text style={{color:timePickedEvening==="11:00 pm"? "white":"blue"}}>11:00 pm</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedEvening==="11:30 pm"? "blue":"white",color:timePickedEvening===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedEvening("11:30 pm")]}>
                                  <Text style={{color:timePickedEvening==="11:30 pm"? "white":"blue"}}>11:30 pm</Text>
                                </TouchableOpacity>
                              </View>

                            </View>
                          </View>
                          <View style={{width:'100%',height:'50%',backgroundColor:'white',flexDirection:'column'}}>
                            <Text style={{margin:'2%',fontWeight:700,color:'orange'}}>Midnight</Text>
                            <View style={{width:'100%',height:'80%', backgroundColor:"transparent",flexDirection:'row',flexWrap:'wrap'}}>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMidnight==="1:00 am"? "blue":"white",color:timePickedMidnight===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMidnight("1:00 am")]}>
                                  <Text style={{color:timePickedMidnight==="1:00 am"? "white":"blue"}}>1:00 am</Text>
                                </TouchableOpacity>
                              </View>
                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMidnight==="1:30 am"? "blue":"white",color:timePickedMidnight===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMidnight("1:30 am")]}>
                                  <Text style={{color:timePickedMidnight==="1:30 am"? "white":"blue"}}>1:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMidnight==="2:00 am"? "blue":"white",color:timePickedMidnight===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMidnight("2:00 am")]}>
                                  <Text style={{color:timePickedMidnight==="2:00 am"? "white":"blue"}}>2:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMidnight==="2:30 am"? "blue":"white",color:timePickedMidnight===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMidnight("2:30 am")]}>
                                  <Text style={{color:timePickedMidnight==="2:30 am"? "white":"blue"}}>2:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMidnight==="3:00 am"? "blue":"white",color:timePickedMidnight===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMidnight("3:00 am")]}>
                                  <Text style={{color:timePickedMidnight==="3:00 am"? "white":"blue"}}>3:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMidnight==="3:30 am"? "blue":"white",color:timePickedMidnight===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=>  [setTimePickedMidnight("3:30 am")]}>
                                  <Text style={{color:timePickedMidnight==="3:30 am"? "white":"blue"}}>3:30 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMidnight==="4:00 am"? "blue":"white",color:timePickedMidnight===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMidnight("4:00 am")]}>
                                  <Text style={{color:timePickedMidnight==="4:00 am"? "white":"blue"}}>4:00 am</Text>
                                </TouchableOpacity>
                              </View>

                              <View style={{width:'23%',height:'40%', borderColor:'blue', borderRadius:10,borderWidth:1,margin:'1%', backgroundColor:timePickedMidnight==="4:30 am"? "blue":"white",color:timePickedMidnight===""? "white":"blue",alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=> [setTimePickedMidnight("4:30 am")]}>
                                  <Text style={{color:timePickedMidnight==="4:30 am"? "white":"blue"}}>4:30 am</Text>
                                </TouchableOpacity>
                              </View>
                              <Text style={{ fontSize: 13,marginLeft:'5%' }}>select the time within your covinience</Text>
                            </View>
                          </View>
                        </View>
                      </View>
              </View>
            </View>
          ) : null}
                        <View style={{width:'100%' ,height:120,marginBottom:'100%',alignItems:'center',justifyContent:'center'}}>
                          <TextInput placeholder="Add a note" style={{ alignSelf: "center", marginTop: 50, marginBottom: 50, width:'80%',height:70,borderBottomColor:'black',borderBottomWidth:1 }} onChangeText={(text) => setNote(text)}/>
                            <TouchableOpacity onPress={()=> handleReminder()} style={{width:'90%',height:40,alignSelf:'center',alignItems:'center',backgroundColor:'navy',justifyContent:'center'}}>
                            <Text style={{color:'white'}}>Submit</Text>
                           </TouchableOpacity>
                          </View>
        </ScrollView>
      </View>
    }
    
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 100,
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
});

