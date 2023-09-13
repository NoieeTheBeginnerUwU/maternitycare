import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native-gesture-handler';
//Date time picker

//Import Firebase
import { database } from '../../config/firebase';
import { authentication } from '../../config/firebase';
import { Firestore , onSnapshot} from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { addDoc, 
  getDocs,
  doc,
  add,
  set,
  map,
  where,
  setDoc,
  collection,
  getDoc,
  query,
  DocumentSnapshot,
  updateDoc,orderBy}
from 'firebase/firestore';
import { and } from 'firebase/firestore';
//Import Loading
import Loading from '../animations/Loading';
import Nodata from '../animations/Nodata';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';

const History = () => {

  const [documents, setDocuments] = useState([]);
  const id = authentication.currentUser.uid;
  const uid = id.toString();
  const [appointmentDate, setAppointmentDate] = useState();
  const [dateMade, setDateMade] = useState();
  const [purpose, setPurpose] = useState();
  const [status, setStatus] = useState();
  const [time, setTime] = useState();
  const [docUserId, setDocUserId] = useState();
  const [noData, setNoData] = useState(false);

    useEffect(()=> {
      async function fetchData(){
        const querySnapshot = await getDocs(query(collection(database, 'appointments'),where("uid","==",id)),orderBy("dateMade","desc"));
        const userData = [];
        let i = 1;
        const data = querySnapshot.forEach(doc=>{
          if(doc.data().uid===id){
            userData.push({count: i, id:doc.id, DateApp:doc.data().appointmentDate, status:doc.data().status,purpose:doc.data().purpose,time:doc.data().time,made:doc.data().dateMade});
          }
          i++;
        })
        setDocuments(userData);
        console.log(documents.length)
        if(userData.length<=0){
          setNoData(true)
        }
      };
      setLoading(true);
      fetchData();
    },[]);

  const renderItem = ({ item }) => (
    <View style={{width:'90%',height:100,flexDirection:'row',alignContent:'center',alignSelf:'center',justifyContent:'center',backgroundColor:item.status==="pending"&& "grey" ||item.status==="approved"&& "green"|| item.status==="denied"&&"red",marginBottom:'1%'}}>
      <View style={{width:'10%',height:'100%',alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:24}}>{item.count}</Text>
      </View>
      <View style={{alignItems:'start',justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:12,marginLeft:'4%'}}>Appointment ID: {item.id}</Text>
        <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Date of Appointment: {item.DateApp}</Text>
        <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Time of Appointment: {item.time}</Text>
        <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>purpose: {item.purpose}</Text>
        <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Date Made: {item.made}</Text>
        <Text style={{color:'white',fontSize:10,marginLeft:'4%',fontWeight:'bold'}}>status: {item.status}</Text>
      </View>
    </View>
  );

  const [loading, setLoading] = useState(false);
  let len = documents.length
  const [sortBy, setSortBy] = useState(len);
  useEffect(()=>{
    setTimeout(()=> {
      setLoading(false);
    },2500)
  },[]);

  return (
    <View style={styles.container}> 
      {
        loading?
        <Loading/>
        :
        <View>
          {
            noData?
            <Nodata/>
            :
            <View>
              <View style={{width:'100%',height:20, backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'navy',fontSize:18,fontWeight:400,alignSelf:'center',}}>Here is the list of your appointments</Text>
              </View>
              <View style={{width:'40%',height:30,backgroundColor:'white',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
               <TouchableOpacity onPress={()=> setSortBy(sortBy-1)}>
                <FontAwesomeIcon icon={faAngleLeft} size={24}/>
               </TouchableOpacity>
                <Text>Sort By: {sortBy}</Text>
               <TouchableOpacity onPress={()=> setSortBy(sortBy+1)}>
                <FontAwesomeIcon icon={faAngleRight} size={24}/>
               </TouchableOpacity>
              </View>
              <View style={{width:'100%',height:'96%'}}>
                  <FlatList //if index<5 || ! ORRRRRRRRRRRRR if toggled {display (n)} else {5}
                    data={documents} //sabi ni sir ayusin design nito
                    renderItem={renderItem}
                    keyExtractor={item=> item.id} // Use index as key for demo purposes
                  />
              </View>
            </View>
          }
        </View>
      }
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'ghostwhite',
  },
  item: {
    color:'black',
    height:100,
    width:'90%',
    alignSelf:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:'red',
    margin:'1%',
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    color:'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
