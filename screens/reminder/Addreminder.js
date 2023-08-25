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
import { authentication } from "../../config/firebase";
import { database } from "../../config/firebase";
import Reminderadded from "../animations/Reminderadded";
import { addDoc,getDocs,query,collection } from "firebase/firestore";

export default Addreminder = () => {
  const nav = useNavigation();
  const id = authentication.currentUser.uid;
  const [addDate, setAddDate] = useState(false);
  const [addTime, setAddTime] = useState(false);
  const [selectedRange, setRange] = useState({});
  const [addReminder, setAddReminder] = useState(false);
  const [addNote, setAddNote] = useState(false);
  const [time, setTime] = useState("");
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  //
  const [multipleDates, setMultipleDates] = useState([]);
  const [multipleTimes, setMultipleTimes] = useState([]);
  const [note, setNote] = useState('');
  const [addedReminder, setAddedReminder] = useState(false);
  
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
      today5 = moment(today5).add(1, 'days').format("YYYY-MM-DD");
      date.push(today5)
    }
    setMultipleDates(date);
  }

  useEffect(()=>{
    getDatesInRange();
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
  },[])

const handleReminder = () => {
  
  var time = moment().utcOffset('+08:00').format('hh:mm a');
  const dateNow = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
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
          nav.navigate("Reminder");
        },3000)
    }catch(e){
        console.log(e)
    }
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
            onPress={() => setAddTime(!addTime)}
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
              <View style={{width:20,height:20,marginRight:'5%',marginLeft:'4%',backgroundColor: multipleTimes.length<1? 'grey':'green',borderRadius:10, alignItems:'center',justifyContent:'center'}}>
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
              2. Add Time
            </Text>
          </TouchableOpacity>
          {addTime ? 
              <View style={{alignItems:'center',justifyContent:'flex-start',alignItems:'center',justifyContent:'center',width:'100%',height:'100%',marginTop:'1%'}}>
                  <Text>Repeat reminder in: {stringify(multipleTimes)} hours</Text>
                  <View style={{flexDirection:'row', width:'80%',height:30,alignItems:'center',justifyContent:'space-between',alignSelf:'center'}}>
                  </View>
                  {
                      number!=null?
                      <View style={{width:'100%',height:450,flexDirection:'column'}}>
                          
                      </View>
                      :
                      null
                  }
              </View> 
          : null}
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
              3. Add Note
            </Text>
          </TouchableOpacity>
          {addNote ? (
            <View
              style={{
                width: "100%",
                height: '100%',
                backgroundColor: "white",
                alignSelf: "center",
                borderBottom:1000,
              }}
            >
              <TextInput
                placeholder="Add a note"
                style={{ alignSelf: "center", marginTop: 50 }}
                onChangeText={(text) => setNote(text)}
              />
              <TouchableOpacity onPress={()=> handleReminder()} style={{width:'90%',height:40,alignSelf:'center',alignItems:'center',backgroundColor:'navy',justifyContent:'center'}}>
                  <Text style={{color:'white'}}>Submit</Text>
              </TouchableOpacity>
            </View>
          ) : null}
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
});