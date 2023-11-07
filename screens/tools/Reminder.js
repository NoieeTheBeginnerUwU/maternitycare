import moment from "moment";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import { getFormatedDate } from "react-native-modern-datepicker";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
//import useNavigaton to navigate between pages
import { useNavigation } from "@react-navigation/native";
//import firebase
import { authentication } from "../../config/firebase";
import { database } from "../../config/firebase";
import { addDoc,getDocs,query,collection,where, doc,updateDoc,deleteDoc, orderBy } from "firebase/firestore";
//import loading
import Loading from "../animations/Loading";
import Deleted from "../animations/Deleted";
//import sound
import { Audio } from "expo-av";

export default Reminder = () => {

  const [sound, setSound] = useState();
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../../assets/success1.wav')
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

  const id = authentication.currentUser.uid;
  const nav = useNavigation();
  const [active, setActive] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [toDelete, setToDelete] = useState(false);
  const [hasDeleted, setHasDeleted] = useState(false);

  async function fetchData(){
    const querySnapshot = await getDocs(query(collection(database, 'reminders'),where("user", "==", id)),orderBy("dateMade","desc"));
    const userData = [];
    const data = querySnapshot.forEach(doc=>{
      userData.push({id:doc.id, dateMade:doc.data().dateMade, dates:doc.data().dates,times:doc.data().times,note:doc.data().note,status:doc.data().status});
    })
    setDocuments(userData);
    if(userData.length<=0){
      setNoData(true)
    }
    var i = 1;
    console.log("Fetched ", i++, " times")
  };

  useEffect(()=> {
    fetchData();
    setLoading(true);
    if(!active){
      setSelectedId("");
    }
    setLoading(true);
  },[]);

  setTimeout(()=>{
    setLoading(false)
  },2000)

  function handleReminder( selectedId ){
    async function handleEnabled(id) {
      const querySnapshot = await updateDoc(doc(database,"reminders",id),{
        status: "enabled"
      });
      fetchData();
      };
    async function handleDisabled (id) {
      const querySnapshot = await updateDoc(doc(database,"reminders",id),{
        status: "disabled"
      });
      fetchData();
    };
    if(active===true&&selectedId!==""){
      console.log(selectedId + " is enabled");
      handleEnabled(selectedId);
    }
    if(active===false&&selectedId!==""){
      console.log(selectedId + " is disabled");
      handleDisabled(selectedId);
    }
  }

  async function deleteReminder(){
    await deleteDoc(doc(database, "reminders", selectedId));
    setToDelete(false);

    setHasDeleted(true);
    setTimeout(()=>{
      playSound();
    },300)
    setTimeout(()=>{
      setHasDeleted(false);
      alert("Reminder deleted successfully")
      nav.navigate("Tools");
    },2000)

  }

  const renderItem = ({ item }) => (
    <View style={{width:'100%',height:100,flexDirection:'row',margin:'2%',alignItems:'center',justifyContent:'center'}}>
      <View style={{width:'80%',height:100,flexDirection:'row'}} onTouchMove={()=> [setSelectedId(item.id),setActive(!active)]}>
        <View style={{width:'100%',height:'100%',alignContent:'center',alignSelf:'center',justifyContent:'center',backgroundColor:item.status==="enabled" ? "navy":"grey",margin:'1%'}}>
          <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Reminder: {item.note}</Text>
          <View style={{display:item.status==="disabled"?"none":'flex',width:'90%'}}>
            <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Dates: {item.dates}</Text>
            <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Times: {item.times}</Text>
          </View>
          <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Date Made: {item.dateMade}</Text>
        </View>
      </View>
      
      <View style={{width:'20%',height:100,backgroundColor:'navy'}}>
      {
        selectedId===item.id&&active===false?
        <TouchableOpacity onPress={()=> setToDelete(!toDelete)} style={{width:'100%',height:'100%',backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white'}}>delete?</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={()=> [setActive(!active), handleReminder(item.id)]} style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
        {
          item.status==="enabled"?
          <View style={{width:'60%',height:'70%',backgroundColor:'white',borderRadius:30,alignItems:'center',justifyContent:'flex-start'}}>
            <View style={{width:'90%',height:'50%',backgroundColor:'blue',borderRadius:30,marginTop:'5%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white',alignSelf:'center',fontSize:8}}>Enabled</Text>
            </View>
          </View>
          :
          <View style={{width:'60%',height:'70%',backgroundColor:'white',borderRadius:30,alignItems:'center',justifyContent:'flex-end'}}>
            <View style={{width:'90%',height:'50%',backgroundColor:'grey',borderRadius:30,marginBottom:'5%',alignItems:'center',justifyContent:'center'}}>
              <Text style={{color:'white',alignSelf:'center',fontSize:8}}>Disabled</Text>
            </View>
          </View>
        }
      </TouchableOpacity>
      }
      </View>
    </View>
  );
  

  return (
    <>
    {
      hasDeleted&&
      <Deleted/>
    }
    {
      loading?
      <Loading/>
      :
      <>
        {
          toDelete?
          <View style={{width:'70%',height:'80%',marginTop:'20%',backgroundColor:'white',alignSelf:'center',borderRadius:20}}>
            <View style={{width:'100%',height:'70%',alignItems:'center',justifyContent:'center',color:'skyblue',fontSize:24,fontWeight:600}}>
              <Text style={{width:'80%'}}>Are you sure you want to delete this reminder?</Text>
            </View>
            <View style={{width:'100%',height:'30%', flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
              <TouchableOpacity onPress={()=> deleteReminder()} style={{width:'40%',height:40,borderRadius:10,backgroundColor:'navy',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'white'}}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'40%',height:40,borderRadius:10,backgroundColor:'grey',alignItems:'center',justifyContent:'center'}} onPress={()=> setToDelete(!toDelete)}>
                <Text style={{color:'white'}}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={styles.container}>
            <View style={{width:'90%',height:'80%',alignSelf:'center',marginTop:40}}>
                  <FlatList
                    data={documents}
                    renderItem={renderItem}
                    keyExtractor={item=> item.id} // Use index as key for demo purposes
                  />
            </View>
          </View>
        }
      </>
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
