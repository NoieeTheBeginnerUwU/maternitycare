import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//Import Firebase
import { authentication } from '../../config/firebase';
import { database } from '../../config/firebase';
import { doc, docs, getDocs, collection, where, query, onSnapshot } from 'firebase/firestore';
//Date time picker

//Import pages
import Childimmunization from '../Immunization/Childimmunization';
import Nochild from '../Immunization/Nochild';
import Registerchild from '../Immunization/Registerchild';

const Child = () => {
  const id = authentication.currentUser.uid;
  const num = authentication.currentUser.phoneNumber;
  const [userID, setUserID] = useState("");
  const nav = useNavigation();
  const [hasData, setHasData] = useState(false);
  const [documents, setDocuments] = useState([]);

  async function fetchData(){
    let userData = [];
    const querySnapshot = await getDocs(query(collection(database,"userData"),where("userNumber","==",num)));
    querySnapshot.forEach((doc)=>{
      setUserID("USER: "+doc.id)
    })
    onSnapshot(query(collection(database,"ChildImmunization")),where("uid","==",userID),(snapshot)=>{
      setDocuments(snapshot.docs)
    })
   
  }; 

  console.log(documents.length)
  useEffect(()=> {
    fetchData();
  },[]);

  return (
    <ScrollView style={{width: '100%', height:'100%'}}>
      {
      documents.length>0? 
        <Childimmunization/>:<Nochild/>
      }
    </ScrollView>
  )
}

export default Child 