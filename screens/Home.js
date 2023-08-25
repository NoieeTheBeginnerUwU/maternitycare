import React,{ useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { style } from '../style'; 
import { ScrollView } from 'react-native-gesture-handler';
//Firebase
import { Firestore , onSnapshot} from 'firebase/firestore';
import { database } from '../config/firebase';
import { authentication } from '../config/firebase';
import { addDoc, 
  getDocs,
  doc,
  add,
  set,
  map,
  setDoc,
  collection,
  getDoc,
  where,
  and,
  query,
  DocumentSnapshot,
  updateDoc} from 'firebase/firestore';
//import storage
import { storage } from '../config/firebase';
import { ref } from 'firebase/storage';
//Images
import { images } from '../style';
//Lottie
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../style';
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlobe, faScaleUnbalanced, faDroplet, faUserDoctor, faBell, faCalendar, faCircleExclamation, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
//Navigation
import { Stack } from './App';
import { useNavigation } from '@react-navigation/native';
//Pages
import Profile from './home/Profile';
//Datetime
import moment from 'moment/moment';
import { getFormatedDate } from 'react-native-modern-datepicker';
//Youtube player
//Loading screens
import Loading from './animations/Loading';
import Fetchdata from './animations/Fetchdata';
import { TouchableHighlight } from 'react-native';

const Item = ({item, onPress, height, width, color, backgroundColor,onTouchMove}) => (
  <View style={{flexDirection:'column'}}>
    <View style={{width:100,height:120, margin:10, backgroundColor,alignItems:'center',justifyContent:'center',borderRadius:5}}>
      <Text style={{fontSize:20,fontWeight:500,color,textDecorationLine:'underline'}}>today</Text>
      <Text style={{ fontSize:10,fontWeight:500,color,}}>Time:  {item.time}</Text>
      <Text style={{ fontSize:10,fontWeight:500,color,}}>{item.purpose}</Text>
    </View>
  </View>
);

 Home = () => {

  const [selectedId, setSelectedId] = useState();
  const [read, setRead] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [weeksToggled, setWeeksToggled] = useState(true);
  const [byDate, setByDate] = useState("");
  const [document, setDocument] = useState(""); 
  const [timeline, showTimeline] = useState(true);
  const [hasEvent, setHasEvent] = useState();
  const [profileImage, setProfileImage] = useState();
  const id = authentication.currentUser.uid;
  const uid = authentication.currentUser.uid;
  const [image, setImage] = useState(null);
  var date = moment(); 
  const [weeks, setWeeks] = useState();
  var currentDate = date.format('YYYY/MM/DD');
  
  const renderItem = ({item}) => {
    const backgroundColor2 = read===true? 'grey' : '#6e3b6e'
    const color = 'white';
    const height = !clicked &&  item.id === selectedId? "100%":130;
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
  //User account 
  const [fnamePlaceholder, setFnamePlaceholder] = useState('');
  const [lnamePlaceholder, setLnamePlaceholder] = useState('');
  const [profilePicPlaceholder, setProfilePicPlaceholder] = useState('');
  const [bloodPressurePlaceholder, setBloodPressurePlaceholder] = useState('');
  const [lastPeriodPlaceholder, setLastPeriodPlaceholder] = useState('');
  const [weightPlaceholder, setWeightPlaceholder] = useState(0);
  const [otherInfoPlaceholder, setOtherInfoPlaceholder] = useState('');
  const [dateUpdatedPlaceholder, setDateUpdatedPlaceholder] = useState('');
  const [heightPlaceholder, setHeightPlaceholder] = useState('');
  const docRef = doc(database, 'userData', id);
  var disperseData  = [];
  const [bp, setBp] = useState();
  const [weight, setWeight] = useState();
  const [otherInfo, setOtherInfo] = useState();
  const [dateUpdated, setDateUpdated] = useState();
  const [lastPeriod,setLastPeriod] = useState();
  const [height1, setHeight1] = useState();
  const [stats, showStats] = useState(false);
  var blood_pressure = "";
  var weight_ = "";
  var other_info = "";
  var date_updated = "";
  var last_period = "";
  var height = "";
  try{
    onSnapshot(docRef, (doc) =>{
      const data = doc.data();
      setFnamePlaceholder(data.userFname);
      setLnamePlaceholder(data.userLname);
      setProfilePicPlaceholder(data.userPic);
      //medical stuff
      setBloodPressurePlaceholder(data.bloodPressure);
      setLastPeriodPlaceholder(data.lastPeriod);
      setWeightPlaceholder(data.weight);
      setOtherInfoPlaceholder(data.otherInfo);
      setDateUpdatedPlaceholder(data.dateUpdated);
      setLastPeriodPlaceholder(data.lastPeriod);
      setHeightPlaceholder(data.height)
      disperseData.push({bp:bloodPressurePlaceholder,weight:weightPlaceholder,otherInfo:otherInfoPlaceholder,dateUpdate:dateUpdatedPlaceholder,lastPeriod:lastPeriodPlaceholder,height:heightPlaceholder}).toString
      disperseData.toString()
      setBp(disperseData.bp);
      setWeight(disperseData.weight);
      setOtherInfo(disperseData.otherInfo);
      setDateUpdated(disperseData.dateUpdated);
      setLastPeriod(disperseData.lastPeriod);
      setHeight1(disperseData.height)

    },[])
  }catch(e){
    console.log(e);
  }
  //Date related code (var date = moment().utcOffset('+08:00').format(' hh:mm:ss a');)
  const today1 = moment(currentDate,"YYYY/MM/DD");
  const today2 = moment(lastPeriodPlaceholder, "YYYY/MM/DD");
  const weeksDifference = today1.diff(today2, "weeks");
  const [greeting, setGreeting] = useState('');
  //calculate Estimated Date of Delivery
  let edd = moment(today2).add(290, 'd');
  const today3 = moment(edd, "YYYY/MM/DD");
  let dateOfDelivery = today3.format("YYYY/MM/DD");
  const today4 = moment(dateOfDelivery, "YYYY/MM/DD")
  const nowToThen = today4.diff(today1, "weeks");

  //console.log("Delivery Date: "+dateOfDelivery)
  //console.log("Weeks Left: "+nowToThen)
  //console.log(lastPeriod);
  //console.log(weeksDifference);
  //fetch the articles
  useEffect(()=> {
    try{
      async function fetchEvents(){
        const querySnapshot = await getDocs(collection(database, 'appointments'),where("uid", "==", id));
        const userData = [];
        const latest = [];
        const data = querySnapshot.forEach(doc=>{
          let activityDate = moment(doc.data().appointmentDate, "YYYY/MM/DD")
          if(activityDate.diff(today1, "days"<=1) && doc.data().status==="approved" && doc.data().time!==""){
            userData.push({id:doc.id, date:doc.data().appointmentDate, time:doc.data().time, status:doc.data().status, purpose:doc.data().purpose});
          }
          
        })
        setDocument(userData);
        if(document>0){
          setHasEvent(true);
        }else{
          setHasEvent(false);
        }
        if(userData.length<=0){
          setNoData(true)
        }
      };
    }catch(e){
      console.log(e)
    }
    fetchEvents();
  },[]);

  //this one very important ahaha
  function stringify(string){
    return JSON.stringify(string);
  }

  try{
    useEffect(() => { 
    
      var hour = moment().utcOffset('+08:00').format('hh');
      var min = moment().utcOffset('+08:00').format('mm');
      var mer = moment().utcOffset('+08:00').format('a');
      
      if(hour==12&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==1&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==2&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==3&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==4&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==5&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==6&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==7&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==8&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==9&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==10&&mer=="am"){
        setGreeting("Good Morning")
      }
      if(hour==11&&mer=="am"){
        setGreeting("Good Morning")
      }
      //pm
      if(hour==12&&mer=="pm"){
        setGreeting("Good Afternoon")
      }
      if(hour==1&&mer=="pm"){
        setGreeting("Good Afternoon")
      }
      if(hour==2&&mer=="pm"){
        setGreeting("Good Afternoon")
      }
      if(hour==3&&mer=="pm"){
        setGreeting("Good Afternoon")
      }
      if(hour==4&&mer=="pm"){
        setGreeting("Good Afternoon")
      }
      if(hour==5&&mer=="pm"){
        setGreeting("Good Afternoon")
      }
      if(hour==6&&mer=="pm"){
        setGreeting("Good Evening")
      }
      if(hour==7&&mer=="pm"){
        setGreeting("Good Evening")
      }
      if(hour==8&&mer=="pm"){
        setGreeting("Good Evening")
      }
      if(hour==9&&mer=="pm"){
        setGreeting("Good Evening")
      }
      if(hour==10&&mer=="pm"){
        setGreeting("Good Evening")
      }
      if(hour==11&&mer=="pm"){
        setGreeting("Good Evening")
      }
  
    });
  }catch(e){
    console.log(e);
  }
  blood_pressure = stringify(bloodPressurePlaceholder)
  weight_ = stringify(weightPlaceholder);
  other_info = stringify(otherInfoPlaceholder)
  last_period = stringify(dateUpdatedPlaceholder)
  var nameExist = stringify(fnamePlaceholder);
  height = stringify(heightPlaceholder);
  var sayBP = "Your blood pressure is " + blood_pressure + ". Date modified: " + last_period;
  var sayWeight = "Your weight is "+ weight_ + "kg . Date modified: " + last_period;
  var sayOtherInfo = other_info;
  var sayHeight = "Your height is " + height +" cm" + ". Date modified " + last_period;

  //this function is used for navigation across the app
  const nav = useNavigation();

  //this function plays the lottie files
  const animationRef = useRef();
  useEffect(() => {
      animationRef.current?.play();
  }, []);

  return (
    <>
      <ScrollView style={{width: '100%', height:'100%',backgroundColor:'#F0F2F5'}}>
        <View style={{width: '100%', height: 150,backgroundColor:'pink',borderBottomEndRadius:80,borderBottomStartRadius:80}}>
          <View style={{width: '100%', height: 70, backgroundColor:'pink',marginTop:'0%',alignSelf:'center'}}>
            <View style={{flexDirection: 'row',backgroundColor:'transparent', alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style={{backgroundColor:'transparent'}} onPress={()=> nav.navigate("Profile")}>
                  <View style={{width: '55%', height: 70, marginLeft: '5%', padding: '2%',flexDirection:'row',}}>
                  {
                    !profilePicPlaceholder?
                    <Image
                    style={{width:60,height:60,borderRadius:120}}
                    source={require('../assets/usertemplate.png')}/>
                  :
                  <Image
                  style={{width:60,height:60,borderRadius:120}}
                  source={require('../assets/usertemplate.png')}/>
                  }
                    <View style={{marginTop: '7%', marginLeft:10}}>
                      <View style={{flexDirection:'row', marginBottom:'-8%', width: 170, height: 30,}}>
                        <Text style={{color:'white'}}>{greeting}</Text>
                        {greeting === 'Good Evening'&&
                        <AnimatedLottieView ref={animationRef} style={{width:25,height:25,}} source={lotties.moon3}  autoPlay loop/>
                        }
                        {greeting === 'Good Morning'&&
                        <AnimatedLottieView ref={animationRef} style={{width:25,height:25,}} source={lotties.sun2}  autoPlay loop/>
                      }
                        {greeting === 'Good Afternoon'&&
                        <AnimatedLottieView ref={animationRef} style={{width:25,height:25,}} source={lotties.sun1}  autoPlay loop/>
                        }
                      </View>
                      <Text style={{color: 'white', fontSize: 20, fontWeight: 700}}>{fnamePlaceholder} {lnamePlaceholder}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              <View style={{width: 100, alignSelf:'center', alignItems:'center',justifyContent:'center',}}>
                <TouchableOpacity style={{width:40,height:40,borderRadius:40,backgroundColor:'white', alignItems:'center',justifyContent:'center'}} onPress={()=> nav.navigate("Notification")}>
                  <FontAwesomeIcon icon={faBell} size={20} color="navy"/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={()=> setWeeksToggled(!weeksToggled)}>
          {
            weeksToggled?
            <View style={{width: '96%', height:200, marginTop:'-20%',backgroundColor:'white',alignSelf:'center', justifyContent:'center', alignItems:'center',borderRadius: 30,overflow:'hidden'}}>
            <View style={{width:'100%', height: '100%', borderTopRightRadius: 20, borderTopLeftRadius:20,backgroundColor: 'transparent',flexDirection:'row', justifyContent:'space-around'}}>
              <View style={{width:'50%',height:'100%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:75, textAlign:'center',color:'#F9B1A6',fontWeight:800}}>{
                  isNaN(weeksDifference)?
                  0
                  :
                  weeksDifference
                }</Text>
                <Text style={{fontSize:30, textAlign:'center',color:'#F9B1A6', fontWeight:400}}>Weeks</Text>
                <Text style={{fontSize:17, textAlign:'center',color:'#F9B1A6', fontWeight:400}}>of pregnancy</Text>
              </View>
              <View style={{width:'50%',height:'50%',backgroundColor:'transparent', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                {
                  isNaN(weeksDifference)&&
                  <AnimatedLottieView ref={animationRef} style={{width:200,height:200,marginTop:30,alignSelf:'center'}} source={lotties.MotherBabyDoctor}  autoPlay loop/>
                }
                {
                  weeksDifference===1&&
                  <Image source={require("../assets/weeks/week1.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===2&&
                  <Image source={require("../assets/weeks/week1.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===3&&
                  <Image source={require("../assets/weeks/week1.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===4&&
                  <Image source={require("../assets/weeks/week1.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===5&&
                  <Image source={require("../assets/weeks/week5.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===6&&
                  <Image source={require("../assets/weeks/week6.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===7&&
                  <Image source={require("../assets/weeks/week7.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===8&&
                  <Image source={require("../assets/weeks/week8.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===9&&
                  <Image source={require("../assets/weeks/week9.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===10&&
                  <Image source={require("../assets/weeks/week10.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===11&&
                  <Image source={require("../assets/weeks/week11.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===12&&
                  <Image source={require("../assets/weeks/week12.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===13&&
                  <Image source={require("../assets/weeks/week13.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===14&&
                  <Image source={require("../assets/weeks/week14.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===15&&
                  <Image source={require("../assets/weeks/week15.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===16&&
                  <Image source={require("../assets/weeks/week16.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===17&&
                  <Image source={require("../assets/weeks/week17.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===18&&
                  <Image source={require("../assets/weeks/week18.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===19&&
                  <Image source={require("../assets/weeks/week19.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===20&&
                  <Image source={require("../assets/weeks/week20.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===21&&
                  <Image source={require("../assets/weeks/week21.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===22&&
                  <Image source={require("../assets/weeks/week22.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===23&&
                  <Image source={require("../assets/weeks/week23.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===24&&
                  <Image source={require("../assets/weeks/week24.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===25&&
                  <Image source={require("../assets/weeks/week25.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===26&&
                  <Image source={require("../assets/weeks/week26.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===27&&
                  <Image source={require("../assets/weeks/week27.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===28&&
                  <Image source={require("../assets/weeks/week28.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===29&&
                  <Image source={require("../assets/weeks/week29.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===30&&
                  <Image source={require("../assets/weeks/week30.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===31&&
                  <Image source={require("../assets/weeks/week31.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===32&&
                  <Image source={require("../assets/weeks/week32.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===33&&
                  <Image source={require("../assets/weeks/week33.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===34&&
                  <Image source={require("../assets/weeks/week34.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===35&&
                  <Image source={require("../assets/weeks/week35.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===36&&
                  <Image source={require("../assets/weeks/week36.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===37&&
                  <Image source={require("../assets/weeks/week37.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===38&&
                  <Image source={require("../assets/weeks/week38.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===39&&
                  <Image source={require("../assets/weeks/week39.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===40&&
                  <Image source={require("../assets/weeks/week40.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }
                              {
                  weeksDifference===41&&
                  <Image source={require("../assets/weeks/week41.jpg")} style={{width:180,height:200,marginTop:100,}}/>
                }

              </View>
            </View>
          </View>
          :
          <View style={{width: '96%', height:200, marginTop:'-20%',backgroundColor:'white',alignSelf:'center', justifyContent:'center', alignItems:'center',borderRadius: 30, borderWidth:1,overflow:'hidden'}}>
            <View style={{width:'100%', height: '100%', borderTopRightRadius: 20, borderTopLeftRadius:20,backgroundColor: 'transparent',flexDirection:'row', justifyContent:'space-around'}}>
            <View style={{width:'150%',height:'100%',backgroundColor:'transparent'}}>
    
              <View style={{width:'100%',height:'100%',backgroundColor:'transparent', flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                {
                  isNaN(weeksDifference)&&
                  <AnimatedLottieView ref={animationRef} style={{width:200,height:200,alignSelf:'center'}} source={lotties.MotherBabyDoctor}  autoPlay loop/>
                }
                                {
                  weeksDifference===1&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===2&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===3&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===4&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===5&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===6&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===7&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===8&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===9&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===10&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===11&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===12&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===13&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===14&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===15&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===16&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===17&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===18&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===19&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===20&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===21&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===22&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===23&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===24&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===25&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===26&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===27&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===28&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===29&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===30&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===31&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===32&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===33&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===34&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===35&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===36&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===37&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===38&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===39&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                {
                  weeksDifference===40&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
                                                                {
                  weeksDifference===41&&
                  <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={{width:'40%',height:'100%',backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                    
                    </View>
                    <View style={{width:'40%',height:'100%',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>WEEKS LEFT</Text>
                     <Text style={{fontSize:80, color:'#F9B1A6', fontWeight:800}}>{nowToThen}</Text>
                     <Text style={{fontSize:20, color:'#F9B1A6', fontWeight:800}}>EDD</Text>
                     <Text style={{fontSize:18, color:'#F9B1A6', fontWeight:400}}>{dateOfDelivery}</Text>
                    </View>
                  </View>
                }
              </View>
            </View>
            </View>
          </View>
          }
        </TouchableOpacity>
        <View style={{width:'100%',height:380}}>
         <View style={{width:'94%',height:70,marginTop:'5%',backgroundColor:'#E3EBF5',borderColor:'blue',flexDirection:'column',alignSelf:'center',}}>
          <TouchableOpacity onPress={()=> showTimeline(true)} style={{ flexDirection:'row',margin:10,justifyContent:'space-around', alignItems:'center', marginLeft:20}}>
            <View style={{width:'30%'}}>
              <View style={{width:50, height:50, backgroundColor:'skyblue',borderRadius:25,alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={faCalendar} size={20} color="white"/>
              </View>
            </View>
            <View  style={{width:'70%'}}>
              <Text style={{fontSize:17, fontWeight:700}}>Your Timeline</Text>
              <Text>What's Coming up next?</Text>
            </View>
          </TouchableOpacity>
          {
            hasEvent===false?
            <View style={{width:'100%',height:150,backgroundColor:'white'}}>
              <View style={{width:'100%',height:'100%',flexDirection:'colum',alignItems:'center',justifyContent:'center'}}>
              <ScrollView horizontal={true}>
                  <FlatList //if index<5 || ! ORRRRRRRRRRRRR if toggled {display (n)} else {5}
                    data={document} //sabi ni sir ayusin design nito
                    horizontal={true}
                    renderItem={renderItem}
                    keyExtractor={item=> item.id} // Use index as key for demo purposes
                  />
              </ScrollView>
              </View>
            </View>
            :
            <View style={{width:'100%',height:300,backgroundColor:'white'}}>
              <View style={{width:'100%',height:'100%',flexDirection:'colum',alignItems:'center',justifyContent:'center'}}>
                <FontAwesomeIcon icon={ faCircleExclamation } size={100} color='skyblue' style={style.none}/>
                <Text style={{fontSize: 15, fontWeight: 300, alignSelf: 'center', marginTop: '6%'}}>No upcoming Events/Activities Yet</Text>
              </View>
            </View>
          }
         </View>
        </View>
        <View style={{width: '90%', height:100, marginBottom:20,marginTop:20,backgroundColor:'transparent',alignSelf:'center',}}>
        <View style={{width:"100%",height:50,alignSelf:'center',borderColor:'#F55670', borderTopWidth:4}}>
          <Text style={{textAlign:'center',color:'pink',fontSize:16,marginTop:10,fontWeight:600}}>LATEST ARTICLES</Text>
        </View>
        <TouchableOpacity onPress={()=> nav.navigate("Articles")} style={{width:'80%',height:50,alignSelf:'center',alignItems:'center',justifyContent:'center',backgroundColor:'pink'}}>
          <Text style={{color:'white'}}>Click here</Text>
        </TouchableOpacity>
        </View>
        <View style={{width:'90%',height:4,backgroundColor:'#F55670',marginBottom:'5%',alignSelf:'center'}}/>
      </ScrollView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  box: {
    width:"21%", height: 50, backgroundColor: 'white', borderColor: 'skyblue', borderBottomWidth: 2, borderTopWidth:2, borderRightColor: 'grey', borderRightWidth: 1, borderLeftColor: 'grey', borderLeftWidth: 1
  },
  inside: {
    width: '100%', height:'100%', 
  },
  toggle: {
    flexDirection: 'row'
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
