import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGear, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
//Firebase
//import useNavigaton to navigate between pages
import { useNavigation } from "@react-navigation/native";
//import firebase
import { authentication } from '../config/firebase';
import { database } from '../config/firebase';
import { addDoc,getDocs,query,collection,where, doc, updateDoc, orderBy } from "firebase/firestore";
//Pages
import Allnotif from '../Notification/Allnotif';
import Monthnotif from '../Notification/Monthnotif';
import Notifsettings from '../Notification/Notifsettings';


const Notification = () => {

  const id = authentication.currentUser.uid;
  const [byDate, setByDate] = useState("");
  const [documents, setDocuments] = useState([]);
  const [active, setActive] = useState("");

  useEffect(()=>{
    async function fetchData(){
      const querySnapshot = await getDocs(query(collection(database, 'notifications'),orderBy("dateMade",'desc')));
      const userData = [];
      const data = querySnapshot.forEach(doc=>{
       if(doc.data().uid===id){
        userData.push({id:doc.id,body:doc.data().body,dateMade:doc.data().dateMade,status:doc.data().status,title:doc.data().title,timeMade:doc.data().timeMade });//pakibago nalang kapag may collection na ng notifications
       }
      })//malamangn sa malamang di pa nagagawa sa admin side yon
      setDocuments(userData);//pakigawa nalang
      console.log(documents)
      if(userData.length<=0){
        setNoData(true)
      }
      var i = 1;
      console.log("Fetched ", i++, " times")
    };
    fetchData();
  },[])

  const handleRead = async (id) => {
    const querySnapshot = await updateDoc(doc(database,"notifications",id),{
      status: "read"
    });
  }

  const markAllAsRead = async (id) => {
    try{
      const querySnapshot = await updateDoc(collection(database,"notifications"),where("uid","==",id),{
        status: "read"
      });
      alert("Marked all as read.")
    }catch(e){
      console.log(e);
    }
  }
 
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={()=> [setActive(item.id),handleRead(item.id)] }>
        <View style={{width:'96%',height:80,backgroundColor:item.status==="unread"?'navy':"grey",alignSelf:'center',flexDirection:'column',marginTop:'3%'}}>
          <Text style={{color:'white',marginLeft:10,fontSize:18}}>{item.title}</Text>
          <Text style={{color:'white',marginLeft:10,fontSize:12}}>{item.body}</Text>
          <Text style={{color:'white',marginLeft:10,fontSize:12}}>{item.dateMade} | {item.timeMade}</Text>
        </View>
      </TouchableOpacity>
    );

    var message = "";
    if(documents.length<=0){
      message = "No notification to mark as read."
    }else{
      message = "Marked all as read"
    }
  
  return (
    <View style={style.content}>
        <View style={style.contentUpper}>
          <TouchableOpacity onPress={()=> markAllAsRead(id)}>
            <Text>Mark all as read</Text>
          </TouchableOpacity>
          <FontAwesomeIcon icon={ faGear } style={{marginLeft: '2%'}} />
        </View>
        <View
          style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
          />
          <View style={{width:'100%',height:'100%'}}>
            {
              documents!==""?
              <View style={{width:'100%',height:600,marginBottom:20}}>
                <ScrollView style={{width:'100%',height:"100%",marginBottom:'2%'}}>
                  <FlatList 
                  data={documents}
                  renderItem={renderItem}
                  keyExtractor={item=> item.id} // Use index as key for demo purposes
                />
                </ScrollView>
              </View>
            :
            <View>
              <FontAwesomeIcon icon={ faCircleExclamation } size={100} color='skyblue' style={style.none}/>
              <Text style={{fontSize: 15, fontWeight: 300, alignSelf: 'center', marginTop: '6%'}}>No Notifications Yet</Text>
            </View>
            }
          </View>
    </View>
  )
}

export default Notification

const style = StyleSheet.create({
  welcome: {
    alignSelf: 'center',
    fontSize: 20,
  },
  content: {
    overflow: 'scroll',
    width: '100%',
    height: 1000,
  },
  contentUpper: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    padding: '4%',
  },
  toggle: {
    flexDirection: 'row',
    marginLeft:'4%'
  },
  none: {
    alignSelf: 'center',
    marginTop:'50%',
  },
  
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
  },

})

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Notification 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Notification 2',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Notification 3',
  },
  
];