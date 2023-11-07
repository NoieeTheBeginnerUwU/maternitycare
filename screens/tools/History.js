import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
//Firebase
import { authentication } from '../../config/firebase';
import { database } from '../../config/firebase';
import { onSnapshot, collection, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
//Animaation
import Nodata from '../animations/Nodata';
//Moment JS
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

const History = () => {
  const num = authentication.currentUser.phoneNumber
  const [uid, setUid] = useState("");
  const [active, setActive] = useState("checkup");
  const [history, setHistory] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [personalData, setPersonalData] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [pregnancyHistory, setPregnancyHistory] = useState([]);
  const [immunizationHistory, setImmunizationHistory] = useState([]);
  const [activeAppointment, setActiveAppointment] = useState("");
  const [activeAppointmentToggle, setActiveAppointmentToggle] = useState(false);

  const [historyForm,  setHistoryForm] = useState({
    //basic personal details
    userFname:"",
    userMname:"",
    userLname:"",
    userSuffix:"",
    userSex:"",
    userCivilStatus:"",
    userBloodType:"",
    userReligion:"",
    userNumber:"",
    userDob:"",
    userAge:"",
    userNationality:"",
    userOccupation:"",
    userPurok:"",
    userBarangay:"",
    userTown:"",
    userProvince:"",
    userPlaceOfBirth:"",
    //family details
    userFathersName:"",
    userMothersName:"",
    userHusbandsName:"",
    userHusbandsOccuupation:"",
    userDateOfMarriage:"",
    userPlaceOfMarriage:"",
    userHusbandsNumber:"",
    userCompleteAddress:"",
    userEmployedBy:"",
    userSalary:"",
    userAddressOfEmployer:"",
    userNameOfBarangayCaptain:"",
    //user pregnancy history
      //child1
    userChild1:"",
    userChildDateOfDelivery1:"",
    userChildTypeOfDelivery1:"",
    userChildBirthOutcome1:"",
    userChildNumberOfChildDelivered1:"",
    userChildComplication1:"",
      //child2
    userChild2:"",
    userChildDateOfDelivery2:"",
    userChildTypeOfDelivery2:"",
    userChildBirthOutcome2:"",
    userChildNumberOfChildDelivered2:"",
    userChildComplication2:"",
    //child3
    userChild3:"",
    userChildDateOfDelivery3:"",
    userChildTypeOfDelivery3:"",
    userChildBirthOutcome3:"",
    userChildNumberOfChildDelivered3:"",
    userChildComplication3:"",
    //child3
    userChild3:"",
    userChildDateOfDelivery3:"",
    userChildTypeOfDelivery3:"",
    userChildBirthOutcome3:"",
    userChildNumberOfChildDelivered3:"",
    userChildComplication3:"",
    //child4
    userChild4:"",
    userChildDateOfDelivery4:"",
    userChildTypeOfDelivery4:"",
    userChildBirthOutcome4:"",
    userChildNumberOfChildDelivered4:"",
    userChildComplication4 :"",    
    //child5
    userChild5:"",
    userChildDateOfDelivery5:"",
    userChildTypeOfDelivery5:"",
    userChildBirthOutcome5:"",
    userChildNumberOfChildDelivered5:"",
    userChildComplication5:"",
    //child6
    userChild6:"",
    userChildDateOfDelivery6:"",
    userChildTypeOfDelivery6:"",
    userChildBirthOutcome6:"",
    userChildNumberOfChildDelivered6:"",
    userChildComplication6:"",
    //child7
    userChild7:"",
    userChildDateOfDelivery7:"",
    userChildTypeOfDelivery7:"",
    userChildBirthOutcome7:"",
    userChildNumberOfChildDelivered7:"",
    userChildComplication7:"",
    //child8
    userChild8:"",
    userChildDateOfDelivery8:"",
    userChildTypeOfDelivery8:"",
    userChildBirthOutcome8:"",
    userChildNumberOfChildDelivered8:"",
    userChildComplication8:"",
    //child9
    userChild9:"",
    userChildDateOfDelivery9:"",
    userChildTypeOfDelivery9:"",
    userChildBirthOutcome9:"",
    userChildNumberOfChildDelivered9:"",
    userChildComplication9:"",
    //child10
    userChild10:"",
    userChildDateOfDelivery10:"",
    userChildTypeOfDelivery10:"",
    userChildBirthOutcome10:"",
    userChildNumberOfChildDelivered10:"",
    userChildComplication10:"",
    //user other health conditions 
    userTBPersonal:"",
    userTBFamily:"",
    userHeartDiseasesPersonal:"",
    userHeartDiseasesFamily:"",
    userDiabetesPersonal:"",
    userDiabetesFamily:"",
    userHypertensionPersonal:"",
    userHypertensionFamily:"",
    userBronchialAsthmaPersonal:"",
    userBronchialAsthmaFamily:"",
    userUTIPersonal:"",
    userUTIFamily:"",
    userParasitismPersonal:"",
    userParasitismFamily:"",
    userGoiterPersonal:"",
    userGoiterFamily:"",
    userAnemiaPersonal:"",
    userAnemiaFamily:"",
    userGenitalTrackInfection:"",
    userOtherInfectiousDiseases:"",
    userHighRiskBehavior:""
  })


  const fetchUser = async() => {
    let userData = [];
    let personal = [];
    let medical = [];
    let appointment = [];
    let pregnancy = [];
    let immunization = [];
    try{
      const querySnapshot = await getDocs(query(collection(database, "userData"),where("userNumber","==",num)));
      querySnapshot.forEach((doc)=>{
          setUid(doc.id);
          userData.push({
            id:doc.id,
            lastPeriod:doc.data().lastPeriod,
            userFname:doc.data().userFname,
            userMname:doc.data().userMname,
            userLname:doc.data().userLname,
            userSuffix:doc.data().userSuffix,
            userSex:doc.data().userSex,
            userCivilStatus:doc.data().userCivilStatus,
            userBloodType:doc.data().userBloodType,
            userReligion:doc.data().userReligion,
            userNumber:doc.data().userNumber,
            userDob:doc.data().userDob,
            userAge:doc.data().userAge,
            userNationality:doc.data().userNationality,
            userOccupation:doc.data().userOccupation,
            userPurok:doc.data().userPurok,
            userBarangay:doc.data().userBarangay,
            userTown:doc.data().userTown,
            userProvince:doc.data().userProvince,
            userPlaceOfBirth:doc.data().userPlaceOfBirth,
            //family details
            userFathersName:doc.data().userFathersName,
            userMothersName:doc.data().userMothersName,
            userHusbandsName:doc.data().userHusbandsName,
            userHusbandsOccuupation:doc.data().userHusbandsOccuupation,
            userDateOfMarriage:doc.data().userDateOfMarriage,
            userPlaceOfMarriage:doc.data().userPlaceOfMarriage,
            userHusbandsNumber:doc.data().userHusbandsNumber,
            userCompleteAddress:doc.data().userCompleteAddress,
            userEmployedBy:doc.data().userEmployedBy,
            userSalary:doc.data().userSalary,
            userAddressOfEmployer:doc.data().userAddressOfEmployer,
            userNameOfBarangayCaptain:doc.data().userNameOfBarangayCaptain,
            //user pregnancy history
              //child1
            userChild1:doc.data().userChild1,
            userChildDateOfDelivery1:doc.data().userChildDateOfDelivery1,
            userChildTypeOfDelivery1:doc.data().userChildTypeOfDelivery1,
            userChildBirthOutcome1:doc.data().userChildBirthOutcome1,
            userChildNumberOfChildDelivered1:doc.data().userChildNumberOfChildDelivered1,
            userChildComplication1:doc.data().userChildComplication1,
              //child2
            userChild2:doc.data().userChild2,
            userChildDateOfDelivery2:doc.data().userChildDateOfDelivery2,
            userChildTypeOfDelivery2:doc.data().userChildTypeOfDelivery2,
            userChildBirthOutcome2:doc.data().userChildBirthOutcome2,
            userChildNumberOfChildDelivered2:doc.data().userChildNumberOfChildDelivered2,
            userChildComplication2:doc.data().userChildComplication2,
            //child3
            userChild3:doc.data().userChild3,
            userChildDateOfDelivery3:doc.data().userChildDateOfDelivery3,
            userChildTypeOfDelivery3:doc.data().userChildTypeOfDelivery3,
            userChildBirthOutcome3:doc.data().userChildBirthOutcome3,
            userChildNumberOfChildDelivered3:doc.data().userChildDateOfDelivery3,
            userChildComplication3:doc.data().userChildComplication3,
            //child4
            userChild4:doc.data().userChild4,
            userChildDateOfDelivery4:doc.data().userChildDateOfDelivery4,
            userChildTypeOfDelivery4:doc.data().userChildTypeOfDelivery4,
            userChildBirthOutcome4:doc.data().userChildBirthOutcome4,
            userChildNumberOfChildDelivered4:doc.data().userChildNumberOfChildDelivered4,
            userChildComplication4 :doc.data().userChildComplication4,    
            //child5
            userChild5:doc.data().userChild5,
            userChildDateOfDelivery5:doc.data().userChildDateOfDelivery5,
            userChildTypeOfDelivery5:doc.data().userChildTypeOfDelivery5,
            userChildBirthOutcome5:doc.data().userChildBirthOutcome5,
            userChildNumberOfChildDelivered5:doc.data().userChildNumberOfChildDelivered5,
            userChildComplication5:doc.data().userChildComplication5,
            //child6
            userChild6:doc.data().userChild6,
            userChildDateOfDelivery6:doc.data().userChildDateOfDelivery6,
            userChildTypeOfDelivery6:doc.data().userChildTypeOfDelivery6,
            userChildBirthOutcome6:doc.data().userChildBirthOutcome6,
            userChildNumberOfChildDelivered6:doc.data().userChildNumberOfChildDelivered6,
            userChildComplication6:doc.data().userChildComplication6,
            //child7
            userChild7:doc.data().userChild7,
            userChildDateOfDelivery7:doc.data().userChildDateOfDelivery7,
            userChildTypeOfDelivery7:doc.data().userChildTypeOfDelivery7,
            userChildBirthOutcome7:doc.data().userChildBirthOutcome7,
            userChildNumberOfChildDelivered7:doc.data().userChildNumberOfChildDelivered7,
            userChildComplication7:doc.data().userChildComplication7,
            //child8
            userChild8:doc.data().userChild8,
            userChildDateOfDelivery8:doc.data().userChildDateOfDelivery8,
            userChildTypeOfDelivery8:doc.data().userChildTypeOfDelivery8,
            userChildBirthOutcome8:doc.data().userChildBirthOutcome8,
            userChildNumberOfChildDelivered8:doc.data().userChildNumberOfChildDelivered8,
            userChildComplication8:doc.data().userChildComplication8,
            //child9
            userChild9:doc.data().userChild9,
            userChildDateOfDelivery9:doc.data().userChildDateOfDelivery9,
            userChildTypeOfDelivery9:doc.data().userChildTypeOfDelivery9,
            userChildBirthOutcome9:doc.data().userChildBirthOutcome9,
            userChildNumberOfChildDelivered9:doc.data().userChildNumberOfChildDelivered9,
            userChildComplication9:doc.data().userChildComplication9,
            //child10
            userChild10:doc.data().userChild10,
            userChildDateOfDelivery10:doc.data().userChildDateOfDelivery10,
            userChildTypeOfDelivery10:doc.data().userChildTypeOfDelivery10,
            userChildBirthOutcome10:doc.data().userChildBirthOutcome10,
            userChildNumberOfChildDelivered10:doc.data().userChildNumberOfChildDelivered10,
            userChildComplication10:doc.data().userChildComplication10,
            //user other health conditions 
            userTBPersonal:doc.data().userTBPersonal,
            userTBFamily:doc.data().userTBFamily,
            userHeartDiseasesPersonal:doc.data().userHeartDiseasesPersonal,
            userHeartDiseasesFamily:doc.data().userHeartDiseasesFamily,
            userDiabetesPersonal:doc.data().userDiabetesPersonal,
            userDiabetesFamily:doc.data().userDiabetesFamily,
            userHypertensionPersonal:doc.data().userHypertensionPersonal,
            userHypertensionFamily:doc.data().userHypertensionFamily,
            userBronchialAsthmaPersonal:doc.data().userBronchialAsthmaPersonal,
            userBronchialAsthmaFamily:doc.data().userBronchialAsthmaFamily,
            userUTIPersonal:doc.data().userUTIPersonal,
            userUTIFamily:doc.data().userUTIFamily,
            userParasitismPersonal:doc.data().userParasitismPersonal,
            userParasitismFamily:doc.data().userParasitismFamily,
            userGoiterPersonal:doc.data().userGoiterPersonal,
            userGoiterFamily:doc.data().userGoiterFamily,
            userAnemiaPersonal:doc.data().userAnemiaPersonal,
            userAnemiaFamily:doc.data().userAnemiaFamily,
            userGenitalTrackInfection:doc.data().userGenitalTrackInfection,
            userOtherInfectiousDiseases:doc.data().userOtherInfectiousDiseases,
            userHighRiskBehavior:doc.data().userHighRiskBehavior,
            dateCreated: doc.data().dateCreated,
            status:doc.data().status,
            userLevel:doc.data().userLevel,
            userPic:doc.data().userPic
          })
          medical.push({
            //user other health conditions 
            userTBPersonal:doc.data().userTBPersonal,
            userTBFamily:doc.data().userTBFamily,
            userHeartDiseasesPersonal:doc.data().userHeartDiseasesPersonal,
            userHeartDiseasesFamily:doc.data().userHeartDiseasesFamily,
            userDiabetesPersonal:doc.data().userDiabetesPersonal,
            userDiabetesFamily:doc.data().userDiabetesFamily,
            userHypertensionPersonal:doc.data().userHypertensionPersonal,
            userHypertensionFamily:doc.data().userHypertensionFamily,
            userBronchialAsthmaPersonal:doc.data().userBronchialAsthmaPersonal,
            userBronchialAsthmaFamily:doc.data().userBronchialAsthmaFamily,
            userUTIPersonal:doc.data().userUTIPersonal,
            userUTIFamily:doc.data().userUTIFamily,
            userParasitismPersonal:doc.data().userParasitismPersonal,
            userParasitismFamily:doc.data().userParasitismFamily,
            userGoiterPersonal:doc.data().userGoiterPersonal,
            userGoiterFamily:doc.data().userGoiterFamily,
            userAnemiaPersonal:doc.data().userAnemiaPersonal,
            userAnemiaFamily:doc.data().userAnemiaFamily,
            userGenitalTrackInfection:doc.data().userGenitalTrackInfection,
            userOtherInfectiousDiseases:doc.data().userOtherInfectiousDiseases,
            userHighRiskBehavior:doc.data().userHighRiskBehavior,
          })
      })
   
    }catch(e){
      alert(e)
    }
  }

  const fetchHistory = async() => {
    let personal = [];
    let medical = [];
    let appointment = [];
    let pregnancy = [];
    let immunization = [];
    onSnapshot(query(collection(database,"userData"),where("userNumber","==",num)), (snapshot)=>{
      snapshot.forEach((doc)=>{
        personal.push({
            //user pregnancy history
              //child1
              userChild1:doc.data().userChild1,
              userChildDateOfDelivery1:doc.data().userChildDateOfDelivery1,
              userChildTypeOfDelivery1:doc.data().userChildTypeOfDelivery1,
              userChildBirthOutcome1:doc.data().userChildBirthOutcome1,
              userChildNumberOfChildDelivered1:doc.data().userChildNumberOfChildDelivered1,
              userChildComplication1:doc.data().userChildComplication1,
                //child2
              userChild2:doc.data().userChild2,
              userChildDateOfDelivery2:doc.data().userChildDateOfDelivery2,
              userChildTypeOfDelivery2:doc.data().userChildTypeOfDelivery2,
              userChildBirthOutcome2:doc.data().userChildBirthOutcome2,
              userChildNumberOfChildDelivered2:doc.data().userChildNumberOfChildDelivered2,
              userChildComplication2:doc.data().userChildComplication2,
              //child3
              userChild3:doc.data().userChild3,
              userChildDateOfDelivery3:doc.data().userChildDateOfDelivery3,
              userChildTypeOfDelivery3:doc.data().userChildTypeOfDelivery3,
              userChildBirthOutcome3:doc.data().userChildBirthOutcome3,
              userChildNumberOfChildDelivered3:doc.data().userChildDateOfDelivery3,
              userChildComplication3:doc.data().userChildComplication3,
              //child4
              userChild4:doc.data().userChild4,
              userChildDateOfDelivery4:doc.data().userChildDateOfDelivery4,
              userChildTypeOfDelivery4:doc.data().userChildTypeOfDelivery4,
              userChildBirthOutcome4:doc.data().userChildBirthOutcome4,
              userChildNumberOfChildDelivered4:doc.data().userChildNumberOfChildDelivered4,
              userChildComplication4 :doc.data().userChildComplication4,    
              //child5
              userChild5:doc.data().userChild5,
              userChildDateOfDelivery5:doc.data().userChildDateOfDelivery5,
              userChildTypeOfDelivery5:doc.data().userChildTypeOfDelivery5,
              userChildBirthOutcome5:doc.data().userChildBirthOutcome5,
              userChildNumberOfChildDelivered5:doc.data().userChildNumberOfChildDelivered5,
              userChildComplication5:doc.data().userChildComplication5,
              //child6
              userChild6:doc.data().userChild6,
              userChildDateOfDelivery6:doc.data().userChildDateOfDelivery6,
              userChildTypeOfDelivery6:doc.data().userChildTypeOfDelivery6,
              userChildBirthOutcome6:doc.data().userChildBirthOutcome6,
              userChildNumberOfChildDelivered6:doc.data().userChildNumberOfChildDelivered6,
              userChildComplication6:doc.data().userChildComplication6,
              //child7
              userChild7:doc.data().userChild7,
              userChildDateOfDelivery7:doc.data().userChildDateOfDelivery7,
              userChildTypeOfDelivery7:doc.data().userChildTypeOfDelivery7,
              userChildBirthOutcome7:doc.data().userChildBirthOutcome7,
              userChildNumberOfChildDelivered7:doc.data().userChildNumberOfChildDelivered7,
              userChildComplication7:doc.data().userChildComplication7,
              //child8
              userChild8:doc.data().userChild8,
              userChildDateOfDelivery8:doc.data().userChildDateOfDelivery8,
              userChildTypeOfDelivery8:doc.data().userChildTypeOfDelivery8,
              userChildBirthOutcome8:doc.data().userChildBirthOutcome8,
              userChildNumberOfChildDelivered8:doc.data().userChildNumberOfChildDelivered8,
              userChildComplication8:doc.data().userChildComplication8,
              //child9
              userChild9:doc.data().userChild9,
              userChildDateOfDelivery9:doc.data().userChildDateOfDelivery9,
              userChildTypeOfDelivery9:doc.data().userChildTypeOfDelivery9,
              userChildBirthOutcome9:doc.data().userChildBirthOutcome9,
              userChildNumberOfChildDelivered9:doc.data().userChildNumberOfChildDelivered9,
              userChildComplication9:doc.data().userChildComplication9,
              //child10
              userChild10:doc.data().userChild10,
              userChildDateOfDelivery10:doc.data().userChildDateOfDelivery10,
              userChildTypeOfDelivery10:doc.data().userChildTypeOfDelivery10,
              userChildBirthOutcome10:doc.data().userChildBirthOutcome10,
              userChildNumberOfChildDelivered10:doc.data().userChildNumberOfChildDelivered10,
              userChildComplication10:doc.data().userChildComplication10,
              //user other health conditions 
              userTBPersonal:doc.data().userTBPersonal,
              userTBFamily:doc.data().userTBFamily,
              userHeartDiseasesPersonal:doc.data().userHeartDiseasesPersonal,
              userHeartDiseasesFamily:doc.data().userHeartDiseasesFamily,
              userDiabetesPersonal:doc.data().userDiabetesPersonal,
              userDiabetesFamily:doc.data().userDiabetesFamily,
              userHypertensionPersonal:doc.data().userHypertensionPersonal,
              userHypertensionFamily:doc.data().userHypertensionFamily,
              userBronchialAsthmaPersonal:doc.data().userBronchialAsthmaPersonal,
              userBronchialAsthmaFamily:doc.data().userBronchialAsthmaFamily,
              userUTIPersonal:doc.data().userUTIPersonal,
              userUTIFamily:doc.data().userUTIFamily,
              userParasitismPersonal:doc.data().userParasitismPersonal,
              userParasitismFamily:doc.data().userParasitismFamily,
              userGoiterPersonal:doc.data().userGoiterPersonal,
              userGoiterFamily:doc.data().userGoiterFamily,
              userAnemiaPersonal:doc.data().userAnemiaPersonal,
              userAnemiaFamily:doc.data().userAnemiaFamily,
              userGenitalTrackInfection:doc.data().userGenitalTrackInfection,
              userOtherInfectiousDiseases:doc.data().userOtherInfectiousDiseases,
              userHighRiskBehavior:doc.data().userHighRiskBehavior,
        })
      })
      setHistory(personal)
    })
  }

  const fetchAppointments = async() => {
    let userData = [];
    let i = 1;
    onSnapshot(query(collection(database, "appointments"),where("uid","==",uid)),(snapshot)=>{
      snapshot.forEach((doc)=>{
        userData.push({
          count:i++,
          id:doc.id,
          uid:doc.data().uid,
          name:doc.data().name,
          purpose:doc.data().purpose,
          lastPeriod:doc.data().lastPeriod,
          edd:doc.data().edd,
          edc:doc.data().edc,
          gestationalAge:doc.data().gestationalAge,
          larger:doc.data().larger,
          prescribed1:doc.data().prescribed1,
          prescribed2:doc.data().prescribed2,
          prescribed3:doc.data().prescribed3,
          prescribed4:doc.data().prescribed4,
          lower:doc.data().lower,
          pressure:doc.data().pressure,
          bmiClass:doc.data().bmiClass,
          weight:doc.data().weight,
          height:doc.data().height,
          bmi:doc.data().bmi,
          ultrasound:doc.data().ultrasound,
          urinalysis:doc.data().urinalysis,
          bloodCount:doc.data().bloodCount,
          hepaTesting:doc.data().hepaTesting,
          oral:doc.data().oral,
          motherVax:doc.data().motherVax,
          remarks:doc.data().remarks,
          day:doc.data().day,
          month:doc.data().month,
          year:doc.data().year
        })
      })
      setAppointments(userData);
    })
  }

  const fetchImmunization = async() => {
    let userData = [];
    let count = 1;
    onSnapshot(query(collection(database, "vaccination"),where("uid","==",uid)),(snapshot)=>{
      snapshot.forEach((doc)=>{
        count++
        userData.push({
          id:doc.id,
          appointmentDate:doc.data().appointmentDate,
          vaccine:doc.data().vaccine,
          purpose:doc.data().purpose,
          day:doc.data().day,
          month:doc.data().month,
          year:doc.data().year
        })
      })
        setImmunizationHistory(userData)
      })
  }

  useEffect(()=>{
    fetchUser();
    fetchHistory();
    fetchAppointments();
    fetchImmunization();
  },[uid])


  return (
    <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'start',backgroundColor:'white'}}>
      <View style={{width:'100%',height:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
        <TouchableOpacity onPress={()=> setActive("checkup")} style={{width:'23%',height:'80%',alignItems:'center',justifyContent:'center',borderBottomWidth:active==="checkup"?4:0,borderBottomColor:active==="checkup"?"navy":"transparent",}}>
          <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,fontWeight:500,textAlign:'center'}}>Check-up History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setActive("medical")} style={{width:'23%',height:'80%',alignItems:'center',justifyContent:'center',borderBottomWidth:active==="medical"?4:0,borderBottomColor:active==="medical"?"navy":"transparent",}}>
          <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,fontWeight:500,textAlign:'center'}}>Medical History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setActive("pregnancy")} style={{width:'23%',height:'80%',alignItems:'center',justifyContent:'center',borderBottomWidth:active==="pregnancy"?4:0,borderBottomColor:active==="pregnancy"?"navy":"transparent",}}>
          <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,fontWeight:500,textAlign:'center'}}>Pregnancy History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setActive("immunization")} style={{width:'23%',height:'80%',alignItems:'center',justifyContent:'center',borderBottomWidth:active==="immunization"?4:0,borderBottomColor:active==="immunization"?"navy":"transparent",}}>
          <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,fontWeight:500,textAlign:'center'}}>Immunization History</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width:'100%',height:'90%',alignItems:'center',justifyContent:'center',backgroundColor:'rgb(245,245,255)'}}>
      {
        active==="checkup"&&
        <ScrollView style={{width:'100%',height:'100%'}}>
          {
            appointments.map((doc)=>(
              <>
                {
                  appointments!==""?
                  <>
                <TouchableOpacity  onPress={()=> [setActiveAppointment(doc.id),setActiveAppointmentToggle(!activeAppointmentToggle)]}  style={{width:'90%',height:60,alignSelf:'center',backgroundColor:activeAppointment===doc.id&&activeAppointmentToggle===true?"navy":'white',marginTop:'2%'}}>
                  <View style={{width:'100%',height:'100%',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <Text style={{marginLeft:12,color:activeAppointment===doc.id&&activeAppointmentToggle===true?"white":'black',}}>{doc.count}{doc.count===1&&"st "|| doc.count===2&&"nd "|| doc.count===3&&"rd " || doc.count>3&&doc.count<20 && "th"} {doc.purpose} {doc.purpose==="Prenatal"&&" Checkup"}</Text>
                    <Text style={{marginLeft:12,color:activeAppointment===doc.id&&activeAppointmentToggle===true?"white":'grey',}}>Description</Text>
                  </View>
                </TouchableOpacity>
                {
                  activeAppointment===doc.id&&activeAppointmentToggle===true&&
                  <View style={{width:'90%',height:600,backgroundColor:'white',alignSelf:'center',marginTop:0,flexDirection:'column',alignItems:'center',justifyContent:'start',borderWidth:activeAppointment===doc.id&&activeAppointmentToggle===true?1:0}}>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>Date</Text>
                      <Text style={{color:'black'}}>{doc.month}/{doc.day}/{doc.year}</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>Last Menstrual Period</Text>
                      <Text style={{color:'black'}}>{doc.lastPeriod}</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>Estimated Due Date</Text>
                      <Text style={{color:'black'}}>{doc.edd}</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>Gestational Age</Text>
                      <Text style={{color:'black'}}>{doc.gestationalAge}</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>Height</Text>
                      <Text style={{color:'black'}}>{doc.height} cm.</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>Weight</Text>
                      <Text style={{color:'black'}}>{doc.height} kg.</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>BMI</Text>
                      <Text style={{color:'black'}}>{doc.bmi}</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>BMI Classification</Text>
                      <Text style={{color:'black'}}>{doc.bmiClass}</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>Blood Pressure</Text>
                      <Text style={{color:'black'}}>{doc.larger}/{doc.lower}</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>BP Classification</Text>
                      <Text style={{color:'black'}}>{doc.pressure}</Text>
                    </View>
                    <View style={{width:'90%',height:45,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                      <Text style={{color:'grey'}}>Remarks</Text>
                      <Text style={{color:'black'}}>{doc.remarks}</Text>
                    </View>
                  </View>
                }
                  </>
              :
              <Nodata/>  
              }
              </>
            ))
          }
        </ScrollView>
      }
      {
        active==="pregnancy"&&
          <ScrollView style={{width:'100%',height:'100%',}}>
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
            {
              history.map((doc)=>(
                <>
                  {
                    doc.userChildDateOfDelivery1===""&&
                    <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                      <View>
                        <Nodata/>
                      </View>
                    </View>
                  }
                  {
                    doc.userChildDateOfDelivery1!==""&&
                    <View style={{width:'96%',height:700,borderWidth:1,borderColor:'lightgrey',flexDirection:'column',alignItems:'start',justifyContent:'start',marginTop:20}}>
                    <View style={{width:'100%',height:60,backgroundColor:'navy',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'white',fontWeight:600}}>No</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'white',fontWeight:600}}>Date of Delivery</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'white',fontWeight:600}}>Type of Delivery</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'white',fontWeight:600}}>Birth Outcome</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'white',fontWeight:600}}>Number of Child Delivered</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'white',fontWeight:600}}>Pregnancy Related Complications</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>1</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery1}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery1}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome1}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery1}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication1}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>2</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery2}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery2}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome2}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery2}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication2}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>3</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery3}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery3}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome3}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery3}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication3}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>4</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery4}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery4}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome4}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery4}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication4}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>5</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery5}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery5}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome5}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery5}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication5}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>6</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery6}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery6}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome6}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery6}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication6}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>7</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery7}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery7}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome7}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery7}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication7}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>8</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery8}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery8}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome8}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery8}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication8}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>9</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery9}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery9}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome9}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery9}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication9}</Text>
                      </View>
                    </View>
                    <View style={{width:'100%',height:60,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'10%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>10</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery10}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildTypeOfDelivery10}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildBirthOutcome10}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildDateOfDelivery10}</Text>
                      </View>
                      <View style={{width:'18%',height:'100%',borderWidth:1,borderColor:'lightgrey',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:10,color:'black',fontWeight:600}}>{doc.userChildComplication10}</Text>
                      </View>
                    </View>
                  </View>
                  }
                </>
              ))
            }
          </View>
        </ScrollView>
      }
      {
        active==="medical"&&
        <ScrollView style={{width:'100%',height:'100%',}}>
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
            {
              history.map((doc)=>(
                <View style={{width:'90%',height:402,borderWidth:1,flexDirection:'column',alignItems:'start',justifyContent:'start',marginTop:20}}>
              <View style={{width:'100%',height:40,backgroundColor:'rgb(150,150,255)',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'white',fontWeight:600}}>Karamdaman/Sakit/Mga Gawaing Mapanganib</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Personal</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Family</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Tuberculosis</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userTBPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userTBFamily}</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Heart Diseases</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userHeartDiseasesPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userHeartDiseasesFamily}</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Diabetes</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userDiabetesPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userDiabetesFamily}</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Hypertension</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userHypertensionPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userHypertensionFamily}</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Bronchial Asthma</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userBronchialAsthmaPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userBronchialAsthmaFamily}</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Urinary Track Infection</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userUTIPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userUTIFamily}</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Parasitism</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userParasitismPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userParasitismFamily}</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Goiter</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userGoiterPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userGoiterFamily}</Text>
                </View>
              </View>
              <View style={{width:'100%',height:40,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={{width:'50%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>Anemia</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userAnemiaPersonal}</Text>
                </View>
                <View style={{width:'25%',height:'100%',borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:12,color:'black',fontWeight:600}}>{doc.userAnemiaFamily}</Text>
                </View>
              </View>
            </View>
              ))
            }
          </View>
        </ScrollView>
      }
      {
        active==="immunization"&&
        <ScrollView style={{width:'100%',height:'100%',}}>
          <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}> 
            {
              immunizationHistory.map((doc)=>(
                <>
                  {
                    immunizationHistory===""?
                    <Nodata/>
                    :
                    <View style={{width:'90%',height:120,backgroundColor:'white',marginTop:'4%',alignItems:'center',justifyContent:'space-evenly'}}>
                      <View style={{width:'90%',height:'40%',flexDirection:'row',justifyContent:'start'}}>
                        <FontAwesomeIcon style={{marginRight:20}} icon={faSyringe} size={24} color='navy'/>
                        <Text>Vaccine: {doc.vaccine}</Text>
                      </View>
                      <View style={{width:'90%',height:'40%',flexDirection:'row',justifyContent:'start'}}>
                        <FontAwesomeIcon style={{marginRight:20}} icon={faCalendar} size={24} color='navy'/>
                        <Text>Date Vaccinated: {doc.month}/{doc.day}/{doc.year}</Text>
                      </View>
                    </View>
                  }
                </>
              ))
            }
          </View>
        </ScrollView>
      }
      </View> 
    </View>
  )
}

export default History