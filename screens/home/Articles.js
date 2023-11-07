import React, { useState, useEffect, useRef  } from 'react';
import { View, StyleSheet, Image, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
//Import Authentication
import { authentication } from '../../config/firebase';
import { getDocs, collection, query } from 'firebase/firestore';
//Import firestore
import { database } from '../../config/firebase';

const Articles = () => {
    const id = authentication.currentUser.uid
    const [document, setDocument] = useState([]);
    const [read, setRead] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [selectedId, setSelectedId] = useState();
    const Item = ({item, onPress, height, width, color, backgroundColor,onTouchMove}) => (
        <TouchableOpacity onPress={onPress}>
          <View style={{width:'100%',height, marginBottom:20, backgroundColor,overflow:'hidden'}}>
            <Text style={{fontSize:20,fontWeight:500,color,textAlign:'left', marginLeft:'4%', color,marginRight:'4%', marginTop:'4%'}}>{item.title}</Text>
            <Text style={{ fontSize:10,fontWeight:500,color,textAlign:'left', marginLeft:'4%', color,marginRight:'4%'}}>Author:  {item.author}</Text>
            <Text style={{marginTop:30, width:'90%',color, textAlign:'justify', margin:'4%',color}}>{item.content}</Text>
          </View>
        </TouchableOpacity>
      );

      const renderItem = ({item}) => {
        const backgroundColor2 = read===true? 'grey' : '#6e3b6e'
        const color = clicked ? 'white' : 'black';
        const height = !clicked &&  item.id === selectedId? "100%":300;
        const backgroundColor = !clicked && item.id === selectedId? "white":"#2E417E";
        const width = '100%';
        return (
          <Item
            item={item}
            onPress={()=> [setSelectedId(item.id), setClicked(!clicked)]}
            color={color}
            height={height}
            width={width}
            backgroundColor={backgroundColor}
          />
        );
      };

    useEffect(()=> {
          async function fetchData(){
            const querySnapshot = await getDocs(query(collection(database, 'articles')));
            const userData = [];
            const data = querySnapshot.forEach((doc)=>{
              userData.push({id:doc.id, author:doc.data().author, content:doc.data().content,title:doc.data().title,author:doc.data().author,topic:doc.data().topic});
            })
            setDocument(userData);
        }
        fetchData();
      },[]);

  return (
    <View style={{width:'100%',height:'100%',alignSelf:'center'}}>
        <View style={{width: '96%', height:600, marginBottom:20,marginTop:20,backgroundColor:'transparent',alignSelf:'center',}}>
        <View style={{width:"100%",height:50,alignSelf:'center',borderColor:'#2E417E', borderTopWidth:4}}>
          <Text style={{textAlign:'center',color:'#2E417E',fontSize:16,marginTop:10,fontWeight:600}}>LATEST ARTICLES</Text>
        </View>
            <Text style={{margin:'2%'}}>Click the article to read</Text>
            <FlatList
              data={document}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              extraData={selectedId}
            />
        </View>
        <View style={{width:'90%',height:4,backgroundColor:'navy',marginBottom:'5%',alignSelf:'center'}}/>
    </View>
  )
}

export default Articles