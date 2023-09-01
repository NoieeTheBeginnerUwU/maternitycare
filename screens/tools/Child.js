import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//Import Firebase
import { authentication } from '../../config/firebase';
import { database } from '../../config/firebase';
import { doc, docs, getDocs, collection, where, query } from 'firebase/firestore';
//Date time picker

//Import pages
import Childimmunization from '../Immunization/Childimmunization';
import Nochild from '../Immunization/Nochild';

const Child = () => {
  const id = authentication.currentUser.uid;
  const nav = useNavigation();
  const [hasData, setHasData] = useState(false);
  const [documents, setDocuments] = useState([]);

  async function fetchData(){
    const querySnapshot = await getDocs(query(collection(database, 'child'),where("Motheruid","==",id)));
    const userData = [];
    const data = querySnapshot.forEach((doc)=>{
      userData.push({id:doc.id, DateApp:doc.data()});
    })
    setDocuments(userData);
    if(documents.length>0){
      setHasData(true)
    }
  }; 

  useEffect(()=> {
    fetchData();
  },[]);

  return (
    <ScrollView style={{width: '100%', height:'100%'}}>
      {hasData? 
        <Childimmunization/>:<Nochild/>
      }
    </ScrollView>
  )
}

export default Child 