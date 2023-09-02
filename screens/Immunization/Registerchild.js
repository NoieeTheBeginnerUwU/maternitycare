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
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUserAlt, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Registerchild = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() -20000),
    "YYYY/MM/DD"
  );
  const dateNow = getFormatedDate(
    today.setDate(today.getDate()),
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
  const [fathersOccupation, setFathersOccupation] = useState("");
  const [fathersEducationalLevel, setFathersEducationalLevel] = useState("");
  const [step, setStep] = useState(1);
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const nav= useNavigation()

  const id = authentication.currentUser.uid;
  //Firebase backend here
  function sendData(){
    var time = moment().utcOffset('+08:00').format('hh:mm a');
    if(!fname||!lname||!address||!placeOfBirth||!selectedStartDate||!gender){
      alert("Please fill all the necessary inputs.")
    }else{
      try{
        addDoc(collection(database,'log'),{
          uid: id,
          type: "child",
          timeMade: time,
          dateMade: dateNow,
          activity: "registered a child for immunization"
        })
        addDoc(collection(database,'child'),{
          //Child's data
            Motheruid: id,
            dateRegistered: startDate,
            timeRegistered: time,
            childFname: fname,
            childLname: lname,
            childPlaceOfBirth: placeOfBirth,
            childAddress: address,
            childDob: selectedStartDate,
            childGender: gender,
            father: father,
            height:"",
            weight: "",
            //Early childhood care and development (ECCD) related data
            clinic: "",
            barangay: "",
            purok: "",
            address: "",//complete address of the family
            mothersducationalLevel: "",//same as below
            mothersOccupation: "", //dapat nasa registration to ng user
            fathersName:"",
            fathersEducationalLevel: "",
            fathersOccupation: "",
            childNo: "", //pang ilang anak siya
            familyNo:"", //tanong natin kung paano itech
            noOfPregnancies: "", //nakailang pagjujuntis na si inang
            gestationalAgeAtBirth:"", //ilang weeks siya nang ipanganak
            typeOfBirth: "", //normal or caesarian
            placeOfDelivery: "",//1.Home 2.Lying-in 3.Hospital 4.Others_____
            birthLength: "", //gaano siya kahaba nang ipanganak
            dateOfBirthRegistration: "",//kelan ginawan ng birthcert?
            birthAttendant: "",//1.Doctor 2.Nurse 3.Midwife 4.Others________
          //ESSENTIAL HEALTH AND NUTRITION SERVICES
           //Services
            newbornScreening1: "",//(24 hours after birth) || Date Administered
            newbornScreening2: "",//(24 hours after birth up to 3 mos old) || Date Administered
           //Immunization proper
            bcg1: "",
            bcg2: "",
            bcg3: "",
            hepatitisB1: "",
            hepatitisB2: "",
            hepatitisB3: "",
            pentavalentB1: "",
            pentavalentB2: "",
            pentavalentB3: "",
            oralPolio1: "", //Oral Polio Vaccine 1 (OPV)
            oralPolio2: "", //Oral Polio Vaccine 2 (OPV)
            oralPolio3: "", //Oral Polio Vaccine 3 (OPV)
            inactivePolio1: "",//Inactive Polio Vaccince 1 (IPV)
            inactivePolio2: "",//Inactive Polio Vaccince 2 (IPV)
            inactivePolio3: "",//Inactive Polio Vaccince 3 (IPV)
            pneumococcal1: "",//Pneumococcal conjugate vaccine 1 (PCV) (6, 10, 14 weeks)
            pneumococcal2: "",//Pneumococcal conjugate vaccine 2 (PCV) (6, 10, 14 weeks)
            pneumococcal3: "",//Pneumococcal conjugate vaccine 3 (PCV) (6, 10, 14 weeks)
            measlesRubella1: "", //Measles-Rubella 1 (MR) Measles-Rubella 1 (MMR) Vaccine (12-15 mos)
            measlesRubella2: "", //Measles-Rubella 2 (MR) Measles-Rubella 2 (MMR) Vaccine (12-15 mos)
            measlesRubella3: "", //Measles-Rubella 3 (MR) Measles-Rubella 3 (MMR) Vaccine (12-15 mos)
          //Micronutrient Supplementation
            vitAcap1_1: "",//Vit. A cap. –One dose 100,000 international units (6 mos-1y/o)
            vitAcap1_2: "",//Vit. A cap. –One dose 100,000 international units (6 mos-1y/o)
            vitA2_1: "",//Vit. A cap. –One dose 200,000 international units (1-2 yrs old)
            vitA2_2: "",//Vit. A cap. –One dose 200,000 international units (1-2 yrs old)
            deworming1: "",//Deworming (at 1 year old and then every 6 mos thereafter)
            deworming2: "",//Deworming (at 1 year old and then every 6 mos thereafter)
            deworming3: "",//Deworming (at 1 year old and then every 6 mos thereafter)
            deworming4: "",//Deworming (at 1 year old and then every 6 mos thereafter)
          //Counselling
            exclusiveBreast1: "",//Exclusive breast (no water, no formula, no vitamins)
            exclusiveBreast2: "",//Exclusive breast (no water, no formula, no vitamins)
            exclusiveBreast3: "",//Exclusive breast (no water, no formula, no vitamins)
            exclusiveBreast4: "",//Exclusive breast (no water, no formula, no vitamins)
            exclusiveBreast5: "",//Exclusive breast (no water, no formula, no vitamins)
            complementaryFeeding1: "",//Complementary feeding with continued breastfeeding (6 mos onwards)
            complementaryFeeding2: "",//Complementary feeding with continued breastfeeding (6 mos onwards)
            complementaryFeeding3: "",//Complementary feeding with continued breastfeeding (6 mos onwards)
            complementaryFeeding4: "",//Complementary feeding with continued breastfeeding (6 mos onwards)
            complementaryFeeding5: "",//Complementary feeding with continued breastfeeding (6 mos onwards)
            oralHealth1: "",//Oral Health/Dental Check-up (starting at 6 mos-1 yr old
            oralHealth2: "",//Oral Health/Dental Check-up (starting at 6 mos-1 yr old
            oralHealth3: "",//Oral Health/Dental Check-up (starting at 6 mos-1 yr old
            oralHealth4: "",//Oral Health/Dental Check-up (starting at 6 mos-1 yr old
            oralHealth5: "",//Oral Health/Dental Check-up (starting at 6 mos-1 yr old
            disabilityScreening1: "",//Developmental Milestones Delay and Disability  Screening
            disabilityScreening2: "",//Developmental Milestones Delay and Disability Screening
            disabilityScreening3: "",//Developmental Milestones Delay and Disability Screening
            disabilityScreening4: "",//Developmental Milestones Delay and Disability Screening
            disabilityScreening5: "",//Developmental Milestones Delay and Disability Screening
            growthMonitoring: "",//Growth Monitoring and Promotion (Plot at Growth chart)
            monthly: "",//Monthly for infants 0-24 months
            twice: ""//Twice a year for 24-59 months (>2years to <5 years old)
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
      
  }
  //console.log(father);

  const stepTwoDone = () => {
    if(father===""||fathersOccupation===""||fathersEducationalLevel===""){
      setStep2(false);
      alert("Please fill all the necessary requirements.")
    }
    else{
      setStep(3);
      setStep2(true)
    }
  }


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
        <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',justifyContent:'space-evenly',aliginItems:'center'}}>
          <View style={{width:30,height:30,borderRadius:30,backgroundColor:step1===true?"greenyellow":'lightgrey',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=> setStep(1)}>
              <Text style={{color:'white'}}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={{width:'10%',height:4,backgroundColor:step1===true?"greenyellow":'lightgrey',alignSelf:'center'}}/>
          <View style={{width:30,height:30,borderRadius:30,backgroundColor:step2===true?"greenyellow":'lightgrey',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=> setStep(2)}>
              <Text style={{color:'white'}}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={{width:'10%',height:4,backgroundColor:step2===true?"greenyellow":'lightgrey',alignSelf:'center'}}/>
          <View style={{width:30,height:30,borderRadius:30,backgroundColor:step3===true?"greenyellow":'lightgrey',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=> setStep(3)}>
              <Text style={{color:'white'}}>3</Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          step===1&&
          <View style={{width:'100%',height:'100%',backgroundColor:'white ',alignItems:'center',justifyContent:"center"}}>
            <Text style={{textAlign:"center",fontSize:17,fontWeight:300}}>Welcome to our Child Immunization Service. Before you register your child, please review and agree to the following:</Text>
            <AnimatedLottieView ref={animationRef} style={{width:250,height:250,}} source={lotties.Antivirus3}  autoPlay loop/>
            <View style={{width:"100%",height:80}}>
              <Text style={{fontSize:18,fontWeight:500,color:'skyblue'}}>Immunization Records Consent</Text>
              <Text> By registering, you consent to sharing your child's immunization records with healthcare providers for vaccination management.</Text>
            </View>
            <View style={{width:"100%",height:40}}>
              <Text style={{fontSize:18,fontWeight:500,color:"skyblue"}}>Data Privacy</Text>
              <Text> We prioritize your data privacy and will not share personal information.</Text>
            </View>
            <TouchableOpacity onPress={()=> [setStep(2),setStep1(true)]} style={{width:"80%",height:40,alignSelf:'center',borderRadius:20,backgroundColor:'orange',margin:50,alignItems:'center',justifyContent:'center' }}>
              <Text>Okay, i agree</Text>
            </TouchableOpacity>
          </View> 
        }
                {
          step===2&&
          <View style={{width:"100%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
            <AnimatedLottieView ref={animationRef} style={{width:200,height:200,}} source={lotties.FatherandChild}  autoPlay loop/>
            <View style={{width:'100%',height:340,backgroundColor:'pink',marginTop:'1%',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white',fontSize:18,fontWeight:500}}>Father's Profile</Text>
                <View style={{flexDirection:'row', backgroundColor:'pink', alignItems:'center',justifyContent:'center'}}>
                <View style={{width:'100%',height:70,backgroundColor:'transparent',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <FontAwesomeIcon icon={faUser} size={24} color="white"/>
                  <TextInput placeholder="Enter Father's name" onChangeText={(text)=> setFather(text)} style={{width:'75%',borderWidth:1,borderColor:'black',textAlign:'center',height:40,marginLeft:10,borderRadius:4,backgroundColor:'white'}}/>
                </View>
              </View>
              <View style={{flexDirection:'row', backgroundColor:'pink', alignItems:'center',justifyContent:'center'}}>
                <View style={{width:'100%',height:70,backgroundColor:'transparent',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <FontAwesomeIcon icon={faUserAlt} size={24} color="white"/>
                  <TextInput placeholder="Enter Father's Occupation" onChangeText={(text)=> setFathersOccupation(text)} style={{width:'75%',borderWidth:1,borderColor:'black',textAlign:'center',height:40,marginLeft:10,borderRadius:4,backgroundColor:'white'}}/>
                </View>
              </View>
              <View style={{flexDirection:'row', backgroundColor:'pink', alignItems:'center',justifyContent:'center'}}>
                <View style={{width:'100%',height:70,backgroundColor:'transparent',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <FontAwesomeIcon icon={faUserGraduate} size={24} color="white"/>
                  <TextInput placeholder="Enter Father's Educational attainment" onChangeText={(text)=> setFathersEducationalLevel(text)} style={{width:'75%',borderWidth:1,borderColor:'black',textAlign:'center',height:40,marginLeft:10,borderRadius:4,backgroundColor:'white'}}/>
                </View>
              </View>
              <TouchableOpacity onPress={()=> stepTwoDone()} style={{width:'90%',height:40,alignSelf:"center",alignItems:'center',justifyContent:"center",backgroundColor:'skyblue',borderRadius:10}}>
                <Text style={{color:'white',fontSize:20,fontWeight:600}}>next step</Text>
              </TouchableOpacity>
            </View>
          </View>
        }            
        {
          step===3&&
          <ScrollView style={{width:'100%'}}>
          <View style={{marginTop:'5%',}}>
            <View style={{flexDirection:'column', backgroundColor:'pink', alignItems:'center',justifyContent:'space-between'}}>
              <View style={{width:'100%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center',}}>
                <Text>First name</Text>
                <TextInput placeholder='Enter first name' onChangeText={(text)=> setFname(text)} style={{width:'80%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
              <View style={{width:'100%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>Last name</Text>
                <TextInput placeholder='Enter last name' onChangeText={(text)=> setLname(text)} style={{width:'80%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor:'pink', alignItems:'center',justifyContent:'center'}}>
              <View style={{width:'100%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>Place of Birth</Text>
                <TextInput placeholder='Enter Place of Birth' onChangeText={(text)=> setPlaceOfBirth(text)} style={{width:'90%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor:'pink', alignItems:'center',justifyContent:'center'}}>
              <View style={{width:'100%',height:70,backgroundColor:'transparent',justifyContent:'center',alignItems:'center'}}>
                <Text>Address</Text>
                <TextInput placeholder='Enter Address' onChangeText={(text)=> setAddress(text)} style={{width:'90%',borderWidth:1,borderColor:'black',textAlign:'center',height:35,borderRadius:4,backgroundColor:'white'}}/>
              </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'pink',justifyContent:'center'}}>
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
            <View style={{flexDirection:'row', backgroundColor:'pink', alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{width:"80%",height:50,margin:10,marginBottom:30,alignSelf:'center',alignItems:'center',justifyContent:'center',backgroundColor:"skyblue",borderRadius:20}} onPress={()=> sendData()}>
                <Text>Submit</Text>
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
                    minimumDate={dateNow}
                    maximumDate={today}
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
        }
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
