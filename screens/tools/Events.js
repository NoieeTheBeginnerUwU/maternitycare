import React, {useState, useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { getFormatedDate } from "react-native-modern-datepicker";
import { authentication } from '../../config/firebase';
import { database } from '../../config/firebase';
//FIREBASE
import { getDocs, query, collection, orderBy, where } from 'firebase/firestore';
import moment from "moment";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Events  = () => {

  const [documents, setDocuments] = useState([]);
  const [items, setItems] = useState({});
  const [time, setTime] = useState('');
  const id = authentication.currentUser.phoneNumber;
  const [uid, setUid] = useState("")
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY-MM-DD"
  );

  useEffect(()=>{
    async function getUid(){
      const queryUser = await getDocs(query(collection(database,"userData"),where("userNumber","==",id)));
      queryUser.forEach((doc)=>{
        setUid(doc.id)
      })
    }
    getUid();
  },[])
  console.log(uid)

    

  
    useEffect(()=>{
      async function fetchData(){
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
      };
      fetchData();
    },[uid])
    console.log(documents);

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(documents.length);
          documents.map((doc)=>{
            items[strTime].push({
              name: 'Item for ' + doc.appointmentDate ,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          })
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    },0);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop:100}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
            </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={startDate}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Events ;