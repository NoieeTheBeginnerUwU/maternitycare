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

export default Childimmunization = () => {
  const id = authentication.currentUser.uid;
  const nav = useNavigation();
  const [active, setActive] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [toggled, setToggled] = useState(false);
  
    //Get age of the child by day
    var date = moment(); 
    var currentDate = date.format('YYYY/MM/DD');
    const today1 = moment(currentDate,"YYYY/MM/DD");

  async function fetchData(){
    const querySnapshot = await getDocs(query(collection(database, 'child'),where("Motheruid", "==", id)));
    const userData = [];
    var child  = 1;
    const data = querySnapshot.forEach(doc=>{
      const today2 = moment(doc.data().childDob, "YYYY/MM/DD");
      const monthsDifference = today1.diff(today2, "months");
      const weeksDifference = today1.diff(today2, "weeks");
      const daysDifference = today1.diff(today2, "days");
      userData.push({childNo: child++, id:doc.id, height:doc.data().height,weight:doc.data().weight,Motheruid:doc.data().Motheruid, age:weeksDifference,dateRegistered:doc.data().dateRegistered, childAddress:doc.data().childAddress, childDob:doc.data().childDob, childFname:doc.data().childFname, childLname:doc.data().childLname,childGender:doc.data().childGender,childPlaceOfBirth:doc.data().childPlaceOfBirth,father:doc.data().father});
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
          <View style={{width:'100%',height:600,flexDirection:'column',marginTop:1,marginBottom:10,overflow:'hidden'}}>
            <View style={{width:'100%',height:'100%',flexDirection:'row',borderRadius:20,borderColor:'navy',borderBottomWidth:5,borderLeftWidth:1,borderRightWidth:1,borderTopWidth:.5}}>
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
                  <ScrollView style={{width:'100%',height:'65%',backgroundColor:'pink',borderTopWidth:1,borderColor:'grey'}}>
                    <View style={{width:'100%',height:'100%',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{alignSelf:'center',color:'white',fontSize:18,fontWeight:500,marginTop:10}}>Immunization History</Text>
                    </View>
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
                  <View style={{width:'100%',height:200,flexDirection:'row',borderRadius:20,borderColor:'navy',borderBottomWidth:5,borderLeftWidth:1,borderRightWidth:1,borderTopWidth:.5}}>
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
      <View style={styles.container}>
        {
          toggled?
          <View style={{width:'100%',height:60, backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>setToggled(!toggled)} style={{width:160,height:40,flexDirection:'row',alignSelf:'flex-start',alignItems:'center',justifyContent:'center',marginLeft:20,borderRadius:10,backgroundColor:"navy"}}>
              <FontAwesomeIcon icon={faArrowLeft} size={24} color="white"/>
              <Text style={{color:'white',marginLeft:10}}>go back</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={{width:'100%',height:60, backgroundColor:'transparent',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity onPress={()=> nav.navigate("Registerchild")} style={{width:160,height:40,flexDirection:'row',alignSelf:'flex-start',alignItems:'center',justifyContent:'center',marginLeft:20,borderRadius:10,backgroundColor:"navy"}}>
              <FontAwesomeIcon icon={faPlusCircle} size={24} color="white"/>
              <Text style={{color:'white',marginLeft:10}}>register child</Text>
            </TouchableOpacity>
          </View>
        }
        <ScrollView style={{width:'90%',height:'80%',alignSelf:'center',marginTop:0}}>
              <FlatList
                data={documents}
                renderItem={renderItem}
                keyExtractor={item=> item.id} // Use index as key for demo purposes
              />
        </ScrollView>
      </View>
    }
    </>
  );
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