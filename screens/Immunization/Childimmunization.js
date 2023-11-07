import moment from "moment";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, FlatList } from "react-native";
import { getFormatedDate } from "react-native-modern-datepicker";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faPerson, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
//import useNavigaton to navigate between pages
import { useNavigation } from "@react-navigation/native";
//import firebase
import { authentication } from "../../config/firebase";
import { database } from "../../config/firebase";
import { addDoc,getDocs,query,collection,where, doc,updateDoc } from "firebase/firestore";
//import loading
import Loading from "../animations/Loading";
import { ScrollView } from "react-native-gesture-handler";
//Import images
import { images } from "../../style";
//FontAwesome icon
import { faCalendar, faWeightScale, faRuler, faTransgender } from "@fortawesome/free-solid-svg-icons";
//Import moment js
import Nodata from "../animations/Nodata";

export default Childimmunization = () => {
  const id = authentication.currentUser.uid;
  const uid = authentication.currentUser.phoneNumber;
  const [motherId, setMotherId] = useState("");
  const nav = useNavigation();
  const [active, setActive] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [toggled, setToggled] = useState(false);
  const [activeDot, setActiveDot] = useState(1);
  
    //Get age of the child by day
    var date = moment(); 
    var currentDate = date.format('YYYY/MM/DD');
    const today1 = moment(currentDate,"YYYY/MM/DD");

    const [userID, setUserID] = useState("");
    useEffect(()=>{
      async function fetchUser(){
        let arr = [];
        const queryUser = await getDocs(query(collection(database,"userData"),where("userNumber","==",id)))
        queryUser.forEach((doc)=>{
          setUserID(doc.id)
        })
      }
      fetchUser();
    },[])

    const [noData, setNoData] = useState(false);
  async function fetchData(){
    const querySnapshot = await getDocs(query(collection(database, 'child'),where("Motheruid", "==", userID)));
    const userData = [];
    var child  = 1;
    const data = querySnapshot.forEach(doc=>{
      const today2 = moment(doc.data().childDob, "YYYY/MM/DD");
      const monthsDifference = today1.diff(today2, "months");
      const weeksDifference = today1.diff(today2, "weeks");
      const daysDifference = today1.diff(today2, "days");
      userData.push({childNo: child, id:doc.id, height:doc.data().height,weight:doc.data().weight,Motheruid:doc.data().Motheruid, mother:doc.data().mother, age:weeksDifference,dateRegistered:doc.data().dateRegistered, childAddress:doc.data().childAddress, childDob:doc.data().childDob, childFname:doc.data().childFname, childLname:doc.data().childLname,childGender:doc.data().childGender,childPlaceOfBirth:doc.data().childPlaceOfBirth,father:doc.data().father,height:doc.data().height,weight:doc.data().weight,clinic:doc.data().clinic,barangay:doc.data().barangay,purok:doc.data().purok,address:doc.data().address,mothersducationalLevel:doc.data().mothersducationalLevel,mothersOccupation:doc.data().mothersOccupation,fathersEducationalLevel:doc.data().fathersEducationalLevel,fathersOccupation:doc.data().fathersOccupation,childNo:doc.data().childNo,familyNo:doc.data().familyNo,noOfPregnancies:doc.data().noOfPregnancies,gestationalAgeAtBirth:doc.data().gestationalAgeAtBirth,typeOfBirth:doc.data().typeOfBirth,placeOfDelivery:doc.data().placeOfDelivery,birthLength:doc.data().birthLength,dateOfBirthRegistration:doc.data().dateOfBirthRegistration,birthAttendant:doc.data().birthAttendant,newbornScreening1:doc.data().newbornScreening1,newbornScreening2:doc.data().newbornScreening2,bcg1:doc.data().bcg1,bcg2:doc.data().bcg2,bcg3:doc.data().bcg3,hepatitisB1:doc.data().hepatitisB1,hepatitisB2:doc.data().hepatitisB2,hepatitisB3:doc.data().hepatitisB3,pentavalentB1:doc.data().pentavalentB1,pentavalentB2:doc.data().pentavalentB2,pentavalentB3:doc.data().pentavalentB3,oralPolio1:doc.data().oralPolio1,oralPolio2:doc.data().oralPolio2,oralPolio3:doc.data().oralPolio3,inactivePolio1:doc.data().inactivePolio1,inactivePolio2:doc.data().inactivePolio2,inactivePolio3:doc.data().inactivePolio3,pneumococcal1:doc.data().pneumococcal1,pneumococcal2:doc.data().pneumococcal2,pneumococcal3:doc.data.pneumococcal3,measlesRubella1:doc.data().measlesRubella1,measlesRubella2:doc.data().measlesRubella2,measlesRubella3:doc.data().measlesRubella3,vitAcap1_1:doc.data().vitAcap1_1,vitAcap1_2:doc.data().vitAcap1_2,vitAcap2_1:doc.data().vitAcap2_1,vitAcap2_2:doc.data().vitAcap2_2,deworming1:doc.data().deworming1,deworming2:doc.data().deworming2,deworming3:doc.data().deworming3,deworming4:doc.data().deworming4,exclusiveBreast1:doc.data().exclusiveBreast1,exclusiveBreast2:doc.data().exclusiveBreast2,exclusiveBreast3:doc.data().exclusiveBreast3,exclusiveBreast4:doc.data().exclusiveBreast4,exclusiveBreast5:doc.data().exclusiveBreast5,complementaryFeeding1:doc.data().complementaryFeeding1,complementaryFeeding2:doc.data().complementaryFeeding2,complementaryFeeding3:doc.data().complementaryFeeding3,complementaryFeeding4:doc.data().complementaryFeeding4,complementaryFeeding5:doc.data().complementaryFeeding5,oralHealth1:doc.data().oralHealth1,oralHealth2:doc.data().oralHealth2,oralHealth3:doc.data().oralHealth3,oralHealth4:doc.data().oralHealth4,oralHealth5:doc.data().oralHealth5,disabilityScreening1:doc.data().disabilityScreening1,disabilityScreening2:doc.data().disabilityScreening2,disabilityScreening3:doc.data().disabilityScreening3,disabilityScreening4:doc.data().disabilityScreening4,disabilityScreening5:doc.data().disabilityScreening5,growthMonitoring:doc.data().growthMonitoring,monthly:doc.data().monthly,twice:doc.data().twice,status:doc.data().status,vaccinationStatus:doc.data().vaccinationStatus});
      child++;
    })
    setDocuments(userData);
    if(userData.length<=0){
      setNoData(true)
    }
    var i = 1;
    console.log("Fetched ", i++, " times")
  };

  //this one very important ahaha
  function stringify(string){
    return JSON.stringify(string);
  }

  useEffect(()=> {
    
    setLoading(true);
    if(!active){
      setSelectedId("");
    }
    setLoading(true);
    fetchData()
  },[]);

  setTimeout(()=>{
    setLoading(false)
  },2000)

  function handleReminder( selectedId ){
    async function handleEnabled(id) {
      const querySnapshot = await updateDoc(doc(database,"reminders",id),{
        status: "enabled"
      });
  };

    async function handleDisabled (id) {
      const querySnapshot = await updateDoc(doc(database,"reminders",id),{
        status: "disabled"
      });
    };

    if(active===true&&selectedId!==""){
      handleEnabled(selectedId);
      console.log(selectedId + " is enabled");
    }
    if(active===false&&selectedId!==""){
      handleDisabled(selectedId);
      console.log(selectedId + " is disabled");
    }
    fetchData()
  }

  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity onPress={()=> [setSelectedId(item.id),setToggled(!toggled)]}>
      {
        toggled && selectedId==item.id?
          <View style={{width:'100%',height:1000,flexDirection:'column',marginTop:1,marginBottom:10,overflow:'hidden'}}>
            <View style={{width:'100%',height:'100%',flexDirection:'row',borderRadius:20}}>
              <View style={{width:'100%',height:'100%',backgroundColor:'white',flexDirection:'column',justifyContent:'center',overflow:'hidden',alignItems:'center',borderRadius:18}}>
                <Text style={{fontSize:26,color:'navy',fontWeight:900,marginTop:'10%'}}>{item.childFname} {item.childLname}</Text>
                <View style={{width:'100%',height:'100%',backgroundColor:'white',flexWrap:'wrap'}}>
                  <View style={{width:'100%',height:'35%',alignItems:'center',justifyContent:'center',backgroundColor:'white',flexWrap:'wrap'}}>
                    <View style={{width:'50%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'50%',height:'33%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:0}}>
                        <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'teal'}}>
                          <FontAwesomeIcon icon={faCalendar} size={20} color="white"/>
                        </View>
                        <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{fontSize:14,fontWeight:300,}}>Age</Text>
                          <Text style={{fontSize:12,fontWeight:500}}>{item.age}</Text>
                          <Text style={{fontSize:12,fontWeight:500}}>months</Text>
                        </View>
                      </View>
                      <View style={{width:'50%',height:'33%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:0}}>
                        <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'skyblue'}}>
                          <FontAwesomeIcon icon={faRuler} size={20} color="white"/>
                        </View>
                        <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{fontSize:14,fontWeight:300}}>Height</Text>
                          <Text style={{fontSize:12,fontWeight:500}}>{item.height} cm</Text>
                        </View>
                      </View>
                      <View style={{width:'50%',height:'33%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:0}}>
                        <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'orange'}}>
                          <FontAwesomeIcon icon={faWeightScale} size={20} color="white"/>
                        </View>
                        <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{fontSize:14,fontWeight:300}}>Weight</Text>
                          <Text style={{fontSize:12,fontWeight:500}}>{item.weight} kg</Text>
                        </View>
                      </View>
                    </View>
                    <View style={{width:'50%',height:'33%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:0}}>
                      <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:item.childGender==="Male"?'skyblue':"pink"}}>
                        <FontAwesomeIcon icon={faTransgender} size={20} color="white"/>
                      </View>
                      <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:14,fontWeight:300}}>Gender</Text>
                        <Text style={{fontSize:12,fontWeight:500}}>{item.childGender}</Text>
                      </View>
                    </View>
                    <View style={{width:'50%',height:'33%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:0}}>
                      <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
                        <FontAwesomeIcon icon={faPerson} size={20} color="white"/>
                      </View>
                      <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:14,fontWeight:300}}>Father</Text>
                        <Text style={{fontSize:12,fontWeight:500}}>{item.father}</Text>
                      </View>
                    </View>
                    <View style={{width:'50%',height:'33%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:0}}>
                      <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:item.childGender==="Male"?'skyblue':"pink"}}>
                        <FontAwesomeIcon icon={faCalendar} size={20} color="white"/>
                      </View>
                      <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:12,fontWeight:300}}>Birthdate</Text>
                        <Text style={{fontSize:9,fontWeight:500}}>{item.childDob}</Text>
                      </View>
                    </View>
                  </View>
                  <ScrollView style={{width:'100%',height:'65%',backgroundColor:'pink',borderTopWidth:1,borderColor:'lightgrey'}}>
                    <View style={{width:'100%',height:40,backgroundColor:'transparent',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',marginTop:'2%'}}>
                      <TouchableOpacity onPress={()=> setActiveDot(1)} style={{width:40,height:40,borderRadius:40,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white'}}>1</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> setActiveDot(2)}  style={{width:40,height:40,borderRadius:40,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white'}}>2</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> setActiveDot(3)}  style={{width:40,height:40,borderRadius:40,backgroundColor:'skyblue',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'white'}}>3</Text>
                      </TouchableOpacity>
                    </View>
                    {
                      activeDot===1&&
                      <>
                        <View style={{width:'100%',height:80,alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                          <Text style={{alignSelf:'center',color:'white',fontSize:25,fontWeight:700,marginTop:-20}}>Immunization History</Text>
                        </View>
                        <View style={{width:'100%',height:20,flexDirection:"row",alignItems:'center',justifyContent:'center'}}>
                          <View style={{width:'50%',height:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <View style={{width:16,height:16,borderRadius:16,backgroundColor:'lightgrey'}}>

                            </View>
                            <Text>not administered yet</Text>
                          </View>
                          <View style={{width:'50%',height:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          <View style={{width:16,height:16,borderRadius:16,backgroundColor:'greenyellow'}}>

                          </View>
                          <Text>vaccinated</Text>
                          </View>
                        </View>
                        <View style={{width:'100%',height:600,backgroundColor:'white'}}>
                          <ScrollView style={{width:'100%',height:'100%'}}>
                            <View style={{width:'100%',height:600,alignSelf:'center',flexDirection:'column',alignItems:'start',justifyContent:'center',borderWidth:1,bordeColor:"black"}}>
                              <View style={{width:'100%',height:68,borderColor:'black',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
                                <View style={{width:'60%',height:68,borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{alignSelf:'center'}}>Immunization</Text>
                                </View> 
                                <View style={{width:'40%',height:68,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                    <Text style={{fontSize:12,fontWeight:680}}>1st Dose</Text>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                    <Text style={{fontSize:12,fontWeight:680}}>2nd Dose</Text>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                    <Text style={{fontSize:12,fontWeight:680}}>3rd Dose</Text>
                                  </View>
                                </View>
                              </View>
                              <View style={{width:'100%',height:68,borderColor:'black',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
                                <View style={{width:'60%',height:68,borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{alignSelf:'center'}}>BCG</Text>
                                </View> 
                                <View style={{width:'40%',height:68,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                    <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.bcg1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.bcg2===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.bcg3===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                              <View style={{width:'100%',height:68,borderColor:'black',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
                                <View style={{width:'60%',height:68,borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{alignSelf:'center'}}>Hepatitis B Vaccine</Text>
                                </View> 
                                <View style={{width:'40%',height:68,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.hepatitisB1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.hepatitisB1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.hepatitisB1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                              <View style={{width:'100%',height:68,borderColor:'black',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
                                <View style={{width:'60%',height:68,borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{alignSelf:'center'}}>Pentavalent Vaccine</Text>
                                </View> 
                                <View style={{width:'40%',height:68,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.pentavalent1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.pentavalent2===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.pentavalent3===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                              <View style={{width:'100%',height:68,borderColor:'black',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
                                <View style={{width:'60%',height:68,borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{alignSelf:'center'}}>Oral Polio Vaccine</Text>
                                </View> 
                                <View style={{width:'40%',height:68,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.oralPolio1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.oralPolio2===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.oralPolio3===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                              <View style={{width:'100%',height:68,borderColor:'black',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
                                <View style={{width:'60%',height:68,borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{alignSelf:'center'}}>Inactive Polio Vaccine</Text>
                                </View> 
                                <View style={{width:'40%',height:68,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.inactivePolio1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.inactivePolio2===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.inactivePolio3===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                              <View style={{width:'100%',height:68,borderColor:'black',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
                                <View style={{width:'60%',height:68,borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{alignSelf:'center'}}>Pneumococcal Vaccine</Text>
                                </View> 
                                <View style={{width:'40%',height:68,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.pneumococcal1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.pneumococcal2===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.pneumococcal3===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                              <View style={{width:'100%',height:68,borderColor:'black',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
                                <View style={{width:'60%',height:68,borderColor:'black',borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{alignSelf:'center'}}>Measles-Rubella Vaccine</Text>
                                </View> 
                                <View style={{width:'40%',height:68,borderColor:'black',borderWidth:1,flexDirection:'row',alignItems:'center',justifyContent:"center"}}>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.measlesRubella1===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.measlesRubella2===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                  <View style={{width:'33%',height:68,borderLeftColor:"black",borderLeftWidth:1,alignItems:"center",justifyContent:'center'}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:selectedId===item.id&&item.measlesRubella3===true?'greenyellow':'lightgrey'}}>
                                      <Text style={{}}></Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </ScrollView>
                        </View>
                        <View style={{}}>

                        </View>
                      </>
                    }
                                        {
                      activeDot===2&&
                      <>
                      <View style={{width:'100%',height:80,alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',color:'white',fontSize:20,fontWeight:700,marginTop:-20}}>Micronutrient Supplementation</Text>
                      </View>
                      <View style={{width:'100%',height:500,backgroundColor:'white'}}>
                        <ScrollView style={{width:'100%',height:'100%'}}>
                         <View style={{width:'96%',height:'100%',borderWidth:1,borderColor:"black",alignSelf:'center'}}>
                          <View style={{width:'100%',height:480,borderColor:'black',borderWidth:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            <View style={{width:'100%',height:180,flexDirection:'row'}}>
                              <View style={{width:'50%',height:180,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                               <Text>Vitamin A capsule1 </Text>
                               <Text>for 6 months to 1 year old</Text>
                              </View>
                              <View style={{width:'50%',height:180,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'50%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                    
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'50%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                    
                                    </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <View style={{width:'100%',height:180,flexDirection:'row'}}>
                              <View style={{width:'50%',height:180,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                               <Text>Vitamin A capsule 2</Text>
                               <Text>for 1 to 2 years old</Text>
                              </View>
                              <View style={{width:'50%',height:180,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'50%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'50%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <View style={{width:'100%',height:180,flexDirection:'row'}}>
                              <View style={{width:'50%',height:180,alignItems:'center',justifyContent:'center'}}>
                               <Text>Deworming</Text>
                              </View>
                              <View style={{width:'50%',height:180,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'25%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'25%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'25%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'25%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View> 
                              </View>
                            </View>
                          </View>
                         </View>
                        </ScrollView>
                      </View>
                      <View style={{}}>

                      </View>
                    </>
                    }
                                        {
                      activeDot===3&&
                      <>
                      <View style={{width:'100%',height:80,alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{alignSelf:'center',color:'white',fontSize:25,fontWeight:700,marginTop:-20}}>Counselling</Text>
                      </View>
                      <View style={{width:'100%',height:600,backgroundColor:'white'}}>
                        <ScrollView style={{width:'100%',height:'100%'}}>
                          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',}}>
                            <View style={{width:'96%',height:100,flexDirection:'row',borderColor:'grey',borderWidth:1}}>
                              <View style={{width:'40%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                                <Text>Exclusive Breast Feeding </Text>
                              </View>
                              <View style={{width:'60%',height:'100%', flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <View style={{width:'96%',height:100,flexDirection:'row',borderColor:'grey',borderWidth:1}}>
                              <View style={{width:'40%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                                <Text>Complementary Feeding </Text>
                              </View>
                              <View style={{width:'60%',height:'100%', flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <View style={{width:'96%',height:100,flexDirection:'row',borderColor:'grey',borderWidth:1}}>
                              <View style={{width:'40%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                                <Text>Oral / Dental Health  </Text>
                              </View>
                              <View style={{width:'60%',height:'100%', flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                      </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <View style={{width:'96%',height:100,flexDirection:'row',borderColor:'grey',borderWidth:1}}>
                              <View style={{width:'40%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                                <Text>Disability Screening </Text>
                              </View>
                              <View style={{width:'60%',height:'100%', flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                      </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                      
                                  </TouchableOpacity>
                                </View>
                                <View style={{width:'20%',height:'100%',backgroundColor:'lightgrey',borderColor:'grey',borderWidth:1}}>
                                  <TouchableOpacity style={{width:'100%',height:'100%'}}>
                                        
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                            <View style={{width:'96%',height:100,flexDirection:'row',borderColor:'grey',borderWidth:1}}>
                              
                            </View>
                          </View>
                        </ScrollView>
                      </View>
                      <View style={{}}>

                      </View>
                    </>
                    }
                  </ScrollView>
                  </View>
              </View>
            </View>
          </View>
          :
          <>
            <>
              {
                toggled?
                null
                :
                <View style={{width:'100%',height:200,flexDirection:'column',marginTop:1,marginBottom:10}}>
                  <View style={{width:'100%',height:200,flexDirection:'row',borderRadius:20,}}>
                    <View style={{width:'35%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center',borderTopLeftRadius:20,borderBottomLeftRadius:12}}>
                      <View style={{width:100,height:100,borderRadius:50,backgroundColor:'white',overflow:'hidden',flexDirection:'column'}}>
                        <Image source={images.imageTemp} style={{width:'100%',height:'100%',}}/>            
                      </View>
                      <Text style={{color:'navy',fontSize:12,fontWeight:700,marginTop:0}}>CHILD NO. {item.childNo}</Text>
                    </View>
                    <View style={{width:'65%',height:'100%',backgroundColor:'white',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',borderTopRightRadius:20,borderBottomRightRadius:12}}>
                      <Text style={{fontSize:17,color:'navy',marginTop:0,fontWeight:900}}>Hi, i'm {item.childFname} {item.childLname}</Text>
                      <View style={{width:'100%',height:'80%',backgroundColor:'white',flexWrap:'wrap'}}>
                        <View style={{width:'50%',height:'50%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'teal'}}>
                            <FontAwesomeIcon icon={faCalendar} size={20} color="white"/>
                          </View>
                          <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:12,fontWeight:300}}>Age</Text>
                            <Text style={{fontSize:11,fontWeight:500}}>{item.age}</Text>
                            <Text style={{fontSize:12,fontWeight:500}}>months</Text>
                          </View>
                        </View>
                        <View style={{width:'50%',height:'50%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'skyblue'}}>
                            <FontAwesomeIcon icon={faRuler} size={20} color="white"/>
                          </View>
                          <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:12,fontWeight:300}}>Height</Text>
                            <Text style={{fontSize:11,fontWeight:500}}>{item.height} cm</Text>
                          </View>
                        </View>
                        <View style={{width:'50%',height:'50%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:'orange'}}>
                            <FontAwesomeIcon icon={faWeightScale} size={20} color="white"/>
                          </View>
                          <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:12,fontWeight:300}}>Weight</Text>
                            <Text style={{fontSize:11,fontWeight:500}}>{item.weight} kg</Text>
                          </View>
                        </View>
                        <View style={{width:'50%',height:'50%',backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                          <View style={{width:40,height:40,borderRadius:20,alignItems:'center',justifyContent:'center',backgroundColor:item.childGender==="Male"?'skyblue':"pink"}}>
                            <FontAwesomeIcon icon={faTransgender} size={20} color="white"/>
                          </View>
                          <View style={{width:50,height:'100%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:12,fontWeight:300}}>Gender</Text>
                            <Text style={{fontSize:11,fontWeight:500}}>{item.childGender}</Text>
                          </View>
                        </View>
                      </View>
                      <Text style={{fontSize:10,fontWeight:400,marginTop:-10}}>press to view or update details</Text>
                    </View>
                  </View>
                </View>
              }
            </>
        </>
      }
    </TouchableOpacity>
    
    </>
  );
  

  return (
    <>
    {
      loading?
      <Loading/>
      :
      <>
        {
          documents.length<1?
          <Nodata/>
          :
          <View style={styles.container}>
              <FlatList
                data={documents}
                renderItem={renderItem}
                keyExtractor={item=> item.id} // Use index as key for demo purposes
              />
        </View>
        }
      </>
    }
    </>
  );

  function bcg1(childId, motherId, bcg1){

  }


};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
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
