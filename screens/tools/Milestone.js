import React, {useState, useEffect,useRef} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment/moment';
//Date time picker
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChildren, faX, faEgg, faBrain, faPlusCircle, faHeartbeat, faLink, faGenderless, faTransgenderAlt, faFingerprint, faBone, faSadCry, faHands, faChild, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faHeartPulse, faLine } from '@fortawesome/free-solid-svg-icons';
//Firebase
import { addDoc, 
  getDocs,
  doc,
  add,
  set,
  map,
  setDoc,
  collection,
  getDoc,
  query,
  DocumentSnapshot,
  onSnapshot,
  updateDoc} from 'firebase/firestore';
import { database } from '../../config/firebase';
import { authentication } from '../../config/firebase';
import { faNutritionix, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
//
 
const Milestone = () => {
  const id = authentication.currentUser.uid;
  var date = moment(); 
  var currentDate = date.format('YYYY/MM/DD');
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  const [activeFour, setActiveFour] = useState(false);
  const [activeFive, setActiveFive] = useState(false);
  const [activeSix, setActiveSix] = useState(false);
  const [activeSeven, setActiveSeven] = useState(false);
  const [activeEight, setActiveEight] = useState(false);
  const [activeNine, setActiveNine] = useState(false);
  //
  const [lastPeriodPlaceholder, setLastPeriodPlaceholder] = useState('');
  const [dateUpdatedPlaceholder, setDateUpdatedPlaceholder] = useState('');
  const docRef = doc(database, 'userData', id);
  var disperseData  = [];
  const [dateUpdated, setDateUpdated] = useState();
  const [lastPeriod,setLastPeriod] = useState();
  var date_updated = "";
  var last_period = "";
  try{
    onSnapshot(docRef, (doc) =>{
      const data = doc.data();
      //medical stuff
      setLastPeriodPlaceholder(data.lastPeriod);
      setDateUpdatedPlaceholder(data.dateUpdated);
    },[])
  }catch(e){
    console.log(e);
  }
  //Date related code (var date = moment().utcOffset('+08:00').format(' hh:mm:ss a');)
  const today1 = moment(currentDate,"YYYY/MM/DD");
  const today2 = moment(lastPeriodPlaceholder, "YYYY/MM/DD");
  const weeksDifference = today1.diff(today2, "weeks");
  const [greeting, setGreeting] = useState('');
  console.log(lastPeriodPlaceholder);
  console.log(weeksDifference);
  //
  const animationRef = useRef();
  useEffect(() => {
      animationRef.current?.play();
  }, []);
  return (
    <ScrollView style={{backgroundColor:'white',width:'100%',height:'100%', alignSelf:'center',}}>
      <View style={{width:'96%',height:'100%',alignSelf:'center'}}>
      <View>
      <AnimatedLottieView ref={animationRef} style={{width:250,height:250,alignSelf:'center'}} source={lotties.MotherBabyOutside}  autoPlay loop/>
      <Text style={{textAlign:'center',marginTop:'5%',color:'green'}}>Pregnancy is divided into three trimesters, each lasting about <Text style={{fontWeight:700}}> 13 to 14 weeks</Text>. Here's a breakdown of the week-by-week stages of pregnancy:</Text>
      </View>
      <ScrollView style={{height:'100%',marginTop:'0%'}}>
      <View style={{alignItems:'center',justifyContent:'center',alignItems:'start',marginTop:'0%', height:'100%'}}>
        <Text style={{fontSize:30, fontWeight:700,color:'skyblue',alignSelf:'center',marginTop:'10%'}}>FIRST TRIMESTER</Text>
        <Text style={{alignSelf:'center'}}>Weeks 1-13</Text>
        <Image source={require("../../assets/weeks/week1.jpg")} style={{width:180,height:200,marginTop:10,alignSelf:'center'}}/>
        <TouchableOpacity onPress={()=> setActiveOne(true)}>
          <View onPress={()=> setActiveOne(true)}>
            <Text style={{fontSize:20, fontWeight:700, }}>Week 1 - 4 
            <Text style={{fontSize:14,fontWeight:300}}> The first week of pregnancy is usually calculated from the first day of your last menstrual period. Fertilization occurs around week 2, and the fertilized egg (zygote) begins its journey to the uterus for implantation.</Text>
            </Text>
          </View>
        </TouchableOpacity>
          {
              activeOne?
              <TouchableOpacity onPress={()=> setActiveOne(false)}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}> 
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:400,backgroundColor:weeksDifference>=4?'greenyellow':'grey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:'greenyellow',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}/>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:20,height:10,backgroundColor:weeksDifference>=1?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faX} size={25} color="red"/>
                        <Text style={{width:'80%',fontWeight:300}}>During the first week of pregnancy, you are not actually pregnant! The first day of your most recent period is used to determine your due date.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:20,height:10,backgroundColor:weeksDifference>=2?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faChildren} size={25} color="orange"/>
                        <Text style={{width:'80%',fontWeight:300}}>Over the age of 35, you create more follicle-stimulating hormones and follicles, increasing your likelihood of releasing two or more eggs during ovulation. Having twins is likely.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:20,height:10,backgroundColor:weeksDifference>=3?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faEgg} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>There is an embryo now! Your developing fetus is still just a collection of developing cells. It resembles a pinhead in size.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:20,height:10,backgroundColor:weeksDifference>=4?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faBrain} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>The epiblast and hypoblast are two layers of cells that make up your embryo. They will soon mature into all of your baby's bodily organs and systems.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
        <TouchableOpacity onPress={()=> setActiveTwo(true)}>
          <View>
            <Text style={{fontSize:20, fontWeight:700, }}>Week 5 - 8 <Text style={{fontSize:14,fontWeight:300}}>The embryo starts developing its major organs and systems during this period. A heartbeat can usually be detected by week 6 or 7. By week 8, the embryo is referred to as a fetus.</Text></Text>  
          </View>
        </TouchableOpacity>
        {
              activeTwo?
              <TouchableOpacity onPress={()=> setActiveTwo(false)}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:400,backgroundColor:weeksDifference>=8?'greenyellow':'grey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:weeksDifference>=8?'greenyellow':'grey',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}>
                          
                      </View>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=5?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faPlusCircle} size={25} color="red"/>
                        <Text style={{width:'80%',fontWeight:300}}>Your hCG hormone levels are now sufficient to show a positive result on a home pregnancy test.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=6?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faHeartPulse} size={25} color="red"/>
                        <Text style={{width:'80%',fontWeight:300}}>Around week 5, the group of cells that will eventually form the heart of your baby begins to beat.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=7?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>Embryonic umbilical chord, welcome! This tube connects the fetus and placenta and carries nutrients and waste out of the body into the circulation.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=8?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>The boy or girl components of your unborn child are starting to form, but it is still too early for your doctor to determine what sex your unborn child will be.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
        <TouchableOpacity onPress={()=> setActiveThree(true)}>
          <View style={{marginBottom:20}}>
            <Text style={{fontSize:20, fontWeight:700, }}>Week 9 - 13 <Text style={{fontSize:14,fontWeight:300}}>Organs continue to develop and mature. The fetus starts to move, although these movements are not usually felt by the mother yet. By week 12, the fetus's sex organs become distinguishable, and some early genetic testing can be done.</Text></Text>        
          </View>
        </TouchableOpacity>
        {
              activeThree?
              <TouchableOpacity onPress={()=> setActiveThree(false)}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:500,backgroundColor:weeksDifference>=12?'greenyellow':'lightgrey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:weeksDifference>=12?"greenyellow":'lightgrey',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}/>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=9?"greenyellow":'lightgrey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>Your unborn child's spinal cord "tail" near the rump has almost completely vanished. He is beginning to resemble a miniature human.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=10?"greenyellow":'lightgrey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>This week, knees and ankles are beginning to take shape, and small elbows are already functioning! Bones and cartilage are also growing!</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=11?'greenyellow':'lightgrey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faHands} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>The fingers and toes of your child are separating and resembling actual infant organs. The beds of the fingernail and toenail are also starting to form.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=12?'greenyellow':'lightgrey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>Because the pituitary gland in your baby's brain has started generating hormones, you could someday be able to have grandkids.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=13?'greenyellow':'lightgrey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>Because the pituitary gland in your baby's brain has started generating hormones, you could someday be able to have grandkids.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
        <Text style={{fontSize:30, fontWeight:700,color:'skyblue',alignSelf:'center'}}>SECOND TRIMESTER</Text>
        <Text style={{alignSelf:'center'}}>Weeks 14-27</Text>
        <Image source={require("../../assets/weeks/trimester2.jpg")} style={{width:180,height:200,marginTop:10,alignSelf:'center'}}/>
        <TouchableOpacity onPress={()=> setActiveFour(true)}>
          <View>
            <Text style={{fontSize:20, fontWeight:700, }}>Week 14 - 17 <Text style={{fontSize:14,fontWeight:300}}>The second trimester is often considered the most comfortable. Many early pregnancy symptoms begin to subside, and you might start feeling the baby's movements (quickening) around week 16-20.</Text> </Text>
          </View>
        </TouchableOpacity>
        {
              activeFour?
              <TouchableOpacity onPress={()=> setActiveFour(false)}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:400,backgroundColor:weeksDifference>=17?"greenyellow":'lightgrey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:weeksDifference>=17?"greenyellow":'lightgrey',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}/>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=14?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faSadCry} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=15?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faTransgenderAlt} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>Girl or boy? This week sees the arrival of completely grown genitalia. But keep in mind that they could still be difficult to spot on an ultrasound.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=16?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faBone} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>The skeleton of your infant is beginning to ossify. Translation: His skeleton would be clear on an X-ray taken today.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=17?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faSoundcloud} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>This week, the infant's hearing has advanced significantly. He/She is beginning to hear your voice because the ears are almost fully developed.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
        <TouchableOpacity onPress={()=> setActiveFive(true)}>
          <View>
            <Text style={{fontSize:20, fontWeight:700, }}>Week 18 - 22 <Text style={{fontSize:14,fontWeight:300}}>The baby's skin becomes less translucent, and vernix (a waxy protective substance) develops. By week 20, an ultrasound might reveal the baby's gender.</Text></Text>
          </View>
        </TouchableOpacity>
        {
              activeFive?
              <TouchableOpacity onPress={()=> setActiveFive(false)}>
               <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:500,backgroundColor:weeksDifference>=22?"greenyellow":'lightgrey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:weeksDifference>=22?"greenyellow":'lightgrey',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}/>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=18?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faFingerprint} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>Your precious little baby is truly one of a kind now, with unique fingerprints on those little fingertips and toes.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=19?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faChild} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>This week, you might feel the baby move for the first time, but if not, don't get alarmed. Soon, you will!</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=20?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faTransgenderAlt} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>Girl or boy? If you want to find out, your ultrasound this week should be able to tell what you're having!</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=21?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faDroplet} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>The liver and spleen of your unborn child have been working hard to produce blood cells, but the bone marrow is now mature enough to assist as well.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=22?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>Baby's nervous system is developing their five senses, therefore their little fingers are developing the ability to grasp their small ears, noses, and umbilical cords.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
        <TouchableOpacity onPress={()=> setActiveSix(true)}>
          <View>
            <Text style={{fontSize:20, fontWeight:700, }}>Week 23 - 27 <Text style={{fontSize:14,fontWeight:300}}>The baby's eyes start opening, and lung development continues. Some babies born prematurely at this stage can survive with medical intervention. By week 24, the fetus reaches the point of viability, where the chances of survival outside the womb increase significantly.</Text></Text>        
          </View>
        </TouchableOpacity>
        {
              activeSix?
              <TouchableOpacity onPress={()=> setActiveSix(false)}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:500,backgroundColor:weeksDifference>=27?"greenyellow":'lightgrey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:weeksDifference>=27?"greenyellow":'lightgrey',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}/>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=24?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=25?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=26?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=27?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
            <Text style={{fontSize:30, fontWeight:700,color:'skyblue',alignSelf:'center'}}>THIRD TRIMESTER</Text>
              <Text style={{alignSelf:'center'}}>Weeks 28-40+</Text>
              <Image source={require("../../assets/weeks/trimester3.jpg")} style={{width:180,height:200,marginTop:10,alignSelf:'center'}}/>
              <TouchableOpacity onPress={()=> setActiveSeven(true)}>
                <View>
                  <Text style={{fontSize:20, fontWeight:700, }}>Week 28 - 31 <Text style={{fontSize:14,fontWeight:300}}> The baby's brain continues to develop, and rapid weight gain occurs. Braxton Hicks contractions (practice contractions) might begin.</Text> </Text>
                </View>
              </TouchableOpacity>
              {
              activeSeven?
              <TouchableOpacity onPress={()=> setActiveSeven(false)}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:400,backgroundColor:weeksDifference>=31?"greenyellow":'lightgrey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:weeksDifference>=31?"greenyellow":'lightgrey',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}/>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=25?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=26?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=27?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=28?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
              <TouchableOpacity onPress={()=> setActiveEight(true)}>
                <View>
                  <Text style={{fontSize:20, fontWeight:700, }}>Week 32 - 35 <Text style={{fontSize:14,fontWeight:300}}>The baby's bones are fully developed, but they are still soft and flexible. The baby starts moving into a head-down position in preparation for birth.</Text></Text>
                </View>
              </TouchableOpacity>
              {
              activeEight?
              <TouchableOpacity onPress={()=> setActiveEight(false)}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:400,backgroundColor:weeksDifference>35?"greenyellow":'lightgrey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:weeksDifference>35?"greenyellow":'lightgrey',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}/>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=32?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=33?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=34?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=35?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
              <TouchableOpacity onPress={()=> setActiveNine(true)}>
                <View>
                  <Text style={{fontSize:20, fontWeight:700, }}>Week 36 - 40+ <Text style={{fontSize:14,fontWeight:300}}>The baby's organs are mature, and they continue to gain weight. The mother might experience increased discomfort as the baby moves lower into the pelvis, putting pressure on the bladder and causing Braxton Hicks contractions to become more noticeable. Labor can begin anytime between weeks 37 and 42.</Text></Text>        
                </View>
              </TouchableOpacity>
              {
              activeNine?
              <TouchableOpacity onPress={()=> setActiveNine(false)}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                  <View style={{width:'4%'}}>
                    <View style={{width:'100%',height:400,backgroundColor:weeksDifference>=41?"greenyellow":'lightgrey',marginLeft:10}}>

                    </View>
                    <View style={{width:30,height:30,backgroundColor:weeksDifference>=41?"greenyellow":'lightgrey',marginLeft:2,borderRadius:15,marginTop:'-12%',justifyContent:'center',alignItems:'center'}}>
                      <View style={{width:15,height:15,backgroundColor:'white',borderRadius:7,marginTop:'0%'}}/>
                    </View>
                  </View>
                  <View style={{width:'80%',heigth:300,backgroundColor:'white'}}>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                      <View style={{width:30,height:10,backgroundColor:weeksDifference>=38?"greenyellow":'lightgrey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=39?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=40?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                    <View style={{height:70,flexDirection:'row',marginTop:30,marginLeft:-20,flexDirection:'row'}}>
                    <View style={{width:30,height:10,backgroundColor:weeksDifference>=41?'greenyellow':'grey'}}/>
                      <View style={{width:'100%',height:90,backgroundColor:'rgb(240,240,255)',flexDirection:'row',marginTop:-30,alignItems:'center',justifyContent:'space-around'}}>
                        <FontAwesomeIcon icon={faLink} size={25} color="pink"/>
                        <Text style={{width:'80%',fontWeight:300}}>With the development of the vocal chords, the promise of laughter, cries, and the very first words begins.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              :
              null
            }
            </View>
          </ScrollView>
      </View>
    </ScrollView>
  )
}

export default Milestone 
