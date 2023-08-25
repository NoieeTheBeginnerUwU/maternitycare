 import React, { useEffect, useState, useRef } from 'react';
 import { View, Text, Image, FlatList } from 'react-native';
 //import firebase
 import { database } from '../../config/firebase';
 import { authentication } from '../../config/firebase';
 import { getDocs, doc, collection, query, where } from 'firebase/firestore';
 //Import Loading
 import Loading from '../animations/Loading';

 const Log = () => {

  const id = authentication.currentUser.uid;
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    async function fetchData(){
      const querySnapshot = await getDocs(query(collection(database, 'log'),where("uid", "==", id)));
      const userData = [];
      const data = querySnapshot.forEach(doc=>{
        userData.push({id:doc.id, dateMade:doc.data().dateMade, timeMade:doc.data().timeMade,type:doc.data().type, activity:doc.data().activity});
      })
      setDocuments(userData);
      if(userData.length<=0){
        setNoData(true)
      }
    };
    setLoading(true);
    fetchData();
  },[]);

  useEffect(()=>{
    setTimeout(()=> {
      setLoading(false);
    },2500)
  },[]);

  const renderItem = ({ item }) => (
    <View style={{width:'100%',height:100,alignContent:'center',alignSelf:'center',justifyContent:'center',backgroundColor:"skyblue",margin:'1%'}}>
      <Text style={{color:'white',fontSize:14,marginLeft:'4%'}}>activity: {item.activity}</Text>
      <Text style={{color:'white',fontSize:14,marginLeft:'4%'}}>Date of activity: {item.dateMade}</Text>
      <Text style={{color:'white',fontSize:14,marginLeft:'4%'}}>Time of activity: {item.timeMade}</Text>
    </View>
  );

   return (
    <>
    {
      loading?
      <Loading/>
      :
      <View style={{width:'100%',height:'100%',alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
        <FlatList //if index<5 || ! ORRRRRRRRRRRRR if toggled {display (n)} else {5}
          data={documents} //sabi ni sir ayusin design nito
          renderItem={renderItem}
          keyExtractor={item=> item.id} // Use index as key for demo purposes
        />
      </View>
    }
    
    </>
   )
 }
 
 export default Log