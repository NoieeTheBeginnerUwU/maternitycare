import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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
import { addDoc,getDocs,query,collection,where, doc,updateDoc } from "firebase/firestore";
//Pages
import Allnotif from '../Notification/Allnotif';
import Monthnotif from '../Notification/Monthnotif';
import Notifsettings from '../Notification/Notifsettings';


const Notification = () => {

  const id = authentication.currentUser.uid;
  const [byDate, setByDate] = useState("");
  const [documents, setDocuments] = useState([]);

  async function fetchData(){
    const querySnapshot = await getDocs(query(collection(database, 'notifications'),where("user", "==", id)));
    const userData = [];
    const data = querySnapshot.forEach(doc=>{
      userData.push({id:doc.id, });//pakibago nalang kapag may collection na ng notifications
    })//malamangn sa malamang di pa nagagawa sa admin side yon
    setDocuments(userData);//pakigawa nalang
    if(userData.length<=0){
      setNoData(true)
    }
    var i = 1;
    console.log("Fetched ", i++, " times")
  };

    const renderItem = ({ item }) => (
      <View style={{width:'100%',height:100,flexDirection:'row',marginTop:'3%'}} onTouchEnd={()=> setSelectedId(item.id)}>
        
      </View>
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
          <TouchableOpacity onPress={()=> alert(message)}>
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
          <View>
            {
              documents===""?
              <FlatList
              data={documents}
              renderItem={renderItem}
              keyExtractor={item=> item.id} // Use index as key for demo purposes
            />
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