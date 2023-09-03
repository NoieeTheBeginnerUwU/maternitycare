import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
//import firebase
import { database, authentication } from '../../config/firebase';
import { getDocs, collection, query, orderBy, where } from 'firebase/firestore';

const Item = ({item, onPress, height, width, color, backgroundColor,onTouchMove}) => (
  <View style={{flexDirection:'column'}}>
    <View style={{width:200,height:250, margin:10, backgroundColor,alignItems:'center',justifyContent:'center',borderRadius:5}}>     
      <View style={{width:'100%',height:'30%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
        <Text style={{ fontSize:20,fontWeight:700,color,}}>{item.purpose}</Text>
      </View>
      <View style={{width:'100%',height:'70%',backgroundColor:'skyblue',alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontSize:8,fontWeight:500,color,}}>date: {item.date}</Text>
        <Text style={{ fontSize:10,fontWeight:500,color,}}>Time:  {item.time}</Text>
        <Text style={{fontSize:8,fontWeight:500,color:'white',}}>Appointment ID</Text>
        <Text style={{fontSize:8,fontWeight:500,color:'white',}}>{item.id}</Text>
      </View>
    </View>
  </View>
);

const Events = () => {
    
  const renderItem = ({item}) => {
    const backgroundColor2 = '#6e3b6e'
    const color = 'white';
    const height = 130;
    const backgroundColor = "#2E417E";
    const width = '98%';
    return (
      <Item
        item={item}
        color = {color}
        backgroundColor={backgroundColor}
      />
    );
  };


  const [documents, setDocuments] = useState([]);
  const id = authentication.currentUser.uid;

  useEffect(()=> {
    async function fetchData(){
      const querySnapshot = await getDocs(query(collection(database, 'appointments'),where("uid","==",id),where("status","==","approved")));
      const userData = [];
      const data = querySnapshot.forEach(doc=>{
        if(doc.data().uid===id){
          userData.push({id:doc.id, appointmentDate:doc.data().appointmentDate, status:doc.data().status,purpose:doc.data().purpose,time:doc.data().time,made:doc.data().dateMade});
        }
      })
      setDocuments(userData);
    };
    fetchData();
  },[]);

  console.log(documents);
  return (
    <View style={{width:'100%',height:'100%',alignSelf:'center',justifyContent:'center'}}>
      <Text style={{alignSelf:'center',fontSize:24,fontWeight:900,color:'navy'}}>APPOINTMENTS</Text>
                  <ScrollView style={{width:'100%',height:'100%'}} horizontal={true}>
                    <FlatList //if index<5 || ! ORRRRRRRRRRRRR if toggled {display (n)} else {5}
                      data={documents} //sabi ni sir ayusin design nito
                      horizontal={true}
                      renderItem={renderItem}
                      keyExtractor={item=> item.id} // Use index as key for demo purposes
                    />
                  </ScrollView>
                  <Text style={{alignSelf:'center',fontSize:24,fontWeight:900,color:'navy'}}>EVENTS</Text>
                  <ScrollView style={{width:'100%',height:'100%'}} horizontal={true}>
                    <FlatList //if index<5 || ! ORRRRRRRRRRRRR if toggled {display (n)} else {5}
                      data={documents} //sabi ni sir ayusin design nito
                      horizontal={true}
                      renderItem={renderItem}
                      keyExtractor={item=> item.id} // Use index as key for demo purposes
                    />
                  </ScrollView>
    </View>
  )
}

export default Events