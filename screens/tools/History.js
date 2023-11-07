import React, {useEffect, useState, useRef } from 'react';
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
import { faAngleLeft, faAngleRight, faCalendar, faHospitalSymbol, faX } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';

const History = () => {
  const [active, setActive] = useState("");
  const [activeUid, setActiveUid] = useState('');
  const [documents, setDocuments] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState();
  const [dateMade, setDateMade] = useState();
  const [purpose, setPurpose] = useState();
  const [status, setStatus] = useState();
  const [time, setTime] = useState();
  const [docUserId, setDocUserId] = useState();
  const [noData, setNoData] = useState(false);
  const scrl = useRef();

  const id = authentication.currentUser.phoneNumber;
  const [uid, setUid] = useState("");
    async function fetchUser(){
      const user = [];
      const querySnapshot = await getDocs(query(collection(database,"userData"),where("userNumber","==",id)))
      querySnapshot.forEach((doc)=>{
        setUid(doc.id);
      })
    }

    
    async function fetchData(){
      fetchUser();
      const querySnapshot = await getDocs(query(collection(database,"appointments"),where("uid","==",uid)))
      const userData = [];
      let i = 1;
      const data = querySnapshot.forEach((doc)=>{
        if(doc.data().uid===uid){
          userData.push({count: i, id:doc.id, appointmentDate:doc.data().appointmentDate,bmi:doc.data().bmi,day:doc.data().day, month:doc.data().month,larger:doc.data().larger,lower:doc.data().lower, year:doc.data().year, height:doc.data().height, weight:doc.data().weight, name:doc.data().name, purpose:doc.data().purpose, remarks:doc.data().remarks});
        }
        i++;
      })
      setDocuments(userData);
      console.log(documents.length)
      if(userData.length<=0){
        setNoData(true)
      }
    };

    useEffect(()=> {
      setLoading(true);
      fetchData();
    },[uid]);

  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={()=> setActive(item.id)}>
      <View style={{width:'96%',height:70,flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'space-evenly',backgroundColor:'lightgrey', margin:'2%' }}>
        <View style={{width:'50%',height:70,flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'space-evenly',backgroundColor:'lightgrey', }}>
          <FontAwesomeIcon icon={faCalendar} size={18} color="black"/>
          <Text style={{fontSize:12,color:'black'}}>{item.appointmentDate}</Text>
        </View>
        <View style={{width:'50%',height:70,flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'space-evenly',backgroundColor:'lightgrey', }}>
          <Text style={{fontSize:12,color:'black'}}>{item.purpose}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
    <View style={{width:'100%',height:60,backgroundColor:'navy',marginBottom:10,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white',fontWeight:700,fontSize:18}}>Check-up history</Text>
    </View>
      {
        loading?
        <Loading/>
        :
        <>

          {
            active===""?
            <View>
            {
              noData?
              <Nodata/>
              :
              <View>
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
          :
          <>
          
          <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
            {
              documents.map((doc)=>(
                  <>
                    {
                      active===doc.id&&
                      <View style={{width:'100%',height:'100%',backgroundColor:'navy'}}>
                        <View style={{width:'100%',height:'20%',flexDirection:'row',alignItems:'end',justifyContent:'end'}}>
                          <TouchableOpacity onPress={()=> setActive("")} style={{width:40,height:40,borderRadius:10,backgroundColor:'transparent'}}>
                            <FontAwesomeIcon icon={faX} color="white" size={20}/>
                          </TouchableOpacity>
                          <Text style={{color:'white'}}>date of check-up{doc.appointmentDate}</Text>
                        </View>
                        <View style={{width:'94%',height:'40%',borderWidth:1,borderColor:'white'}}>
                          <Text style={{color:'white'}}>Height: {doc.height}</Text>
                          <Text style={{color:'white'}}>Weight: {doc.weight}</Text>
                          <Text style={{color:'white'}}>BMI: {doc.bmi}</Text>
                        </View>
                        <View style={{width:'94%',height:'20%',borderWidth:1,borderColor:'white'}}>
                          <Text style={{color:'white'}}>Purpose: {doc.purpose}</Text>
                          <Text style={{color:'white'}}>Blood Pressure: {doc.larger}/{doc.lower}</Text>
                        </View>
                        <View style={{width:'94%',height:'20%',borderWidth:1,borderColor:'white'}}>
                          <Text style={{color:'white'}}>Remarks: {doc.remarks}</Text>
                        </View>
                      </View>
                    }
                  </>

              ))
            }
          </View>
          
          </>
          }
        
        </>
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
