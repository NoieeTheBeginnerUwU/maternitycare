import React, { useRef, useState, useEffect } from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'; 
//import Firebase database and authentication
import { authentication } from '../../config/firebase';
import { database } from '../../config/firebase';
//import firebase firestore functions
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
//import lottie files
import { lotties } from '../../style';
import AnimatedLottieView from 'lottie-react-native';
//import fontawesomeicons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
//Date
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";
import { useNavigation } from '@react-navigation/native';
//import moment js
import moment from 'moment/moment';
//Child Registered Animation
import Childregistered from '../animations/Childregistered';

const Registerchild = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() -20000),
    "YYYY/MM/DD"
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
  //Animation trigger
  const [childAdded, setChildAdded] = useState(false);

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };


  //child data
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [father, setFather] = useState('');
  const nav= useNavigation()

  const id = authentication.currentUser.uid;
  //Firebase backend here
  function sendData(){
    try{
      addDoc(collection(database,'child'),{
        Motheruid: id,
        dateRegistered: startDate,
        childFname: fname,
        childLname: lname,
        childPlaceOfBirth: placeOfBirth,
        childAddress: address,
        childDob: selectedStartDate,
        childGender: gender,
        father: father,
        height:"",
        weight: "",
      });
      setSelectedStartDate('')
      setChildAdded(true);
      setTimeout(()=>{
        setChildAdded(false);
        nav.navigate("Childimmunization")
      },3000)
    }catch(error){
      console.log(error);
      alert(error);
    }
      
  }
  //console.log(father);
 
  const animationRef = useRef();
  useEffect(() => {
      animationRef.current?.play();
  }, []);

  return (
    <>
    {
      childAdded?
      <Childregistered/>
      :
      <View style={styles.container}>
        <ScrollView style={{width:'100%'}}>
          <View style={{width:'80%',height:150,alignSelf:'center'}}>
            <AnimatedLottieView ref={animationRef} style={{width:'55%',heigt:'55%',alignSelf:'center'}} source={lotties.babyWithPacifier}  autoPlay loop/>
          </View>
          <View style={{marginTop:'4%',}}>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
              <View style={{width:'50%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center',}}>
                <Text>First name</Text>
                <TextInput placeholder='Enter first name' onChangeText={(text)=> setFname(text)} style={{width:'80%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
              <View style={{width:'50%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>Last name</Text>
                <TextInput placeholder='Enter last name' onChangeText={(text)=> setLname(text)} style={{width:'80%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <View style={{width:'100%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>Place of Birth</Text>
                <TextInput placeholder='Enter Place of Birth' onChangeText={(text)=> setPlaceOfBirth(text)} style={{width:'90%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <View style={{width:'100%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>Address</Text>
                <TextInput placeholder='Enter Address' onChangeText={(text)=> setAddress(text)} style={{width:'90%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <View style={{width:'40%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>Birthday</Text>
                <TouchableOpacity  onPress={handleOnPressStartDate}>
                  <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}} >
                    <TextInput placeholder={selectedStartDate} onChange={()=> setDob(selectedStartDate)} style={{width:'60%',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
                    <FontAwesomeIcon icon={faCalendar} size={24} color="blue"/>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{width:'60%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>gender</Text>
                <View style={{flexDirection:'row'}}>
                  <View style={{width:'40%',height:40,backgroundColor:gender==="Male"?"blue":'white',borderColor:'grey',borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:10}}>
                    <TouchableOpacity onPress={()=> setGender("Male")}>
                      <Text style={{color:gender==="Male"?"white":"black"}}>Male</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:'40%',height:40,backgroundColor:gender==="Female"?"pink":'white',borderColor:'grey',borderWidth:1,alignItems:'center',justifyContent:'center',borderRadius:10,marginLeft:'2%'}}>
                    <TouchableOpacity onPress={()=> setGender("Female")}>
                      <Text style={{color:gender==="Female"?"white":"black"}}>Female</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <View style={{width:'100%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>Father's name</Text>
                <TextInput placeholder='Enter Father`s name' onChangeText={(e)=> setFather(e)} style={{width:'90%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity onPress={()=> sendData()} style={{width:'90%',height:40,backgroundColor:"#486DF1",borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:16}}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>{/* Create modal for date picker */}
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
                    maximumDate={today}
                    selected={startedDate}
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

                  <TouchableOpacity onPress={handleOnPressStartDate}>
                    <Text style={{ color: "white" }}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
        </ScrollView>
      </View>
    }
    </>
  )
}

export default Registerchild

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
      margin: 20,
      backgroundColor: "#080516",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 15,
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
})