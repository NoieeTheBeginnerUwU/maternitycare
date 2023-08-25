import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
//Date time picker
//Import Pages
import Notification from '../Notification';
import Profile from '../home/Profile';
//Import FontawesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
//Navigation
import { useNavigation } from '@react-navigation/native';

const Staff = () => {

  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false)
  const nav = useNavigation();
  useEffect(()=>{
    setActive("")
  })
  return (
    <ScrollView style={{width: '100%', height:'100%',}}>
      <View style={{width:'96%',height:'100%', alignSelf:'center',backgroundColor:"white",marginTop:'4%',marginBottom:'-50%',borderRadius:8}}>
        <View style={{margin:14}}>
          <Text style={{color:'navy',fontWeight:900,fontSize:20,alignSelf:'center'}} onPress={()=> setActive(!active)}>Municipal Health Officer</Text>
        </View>
          <View style={{width:'100%',height:250,flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <View  style={{width:'100%',height:'100%',flexDirection:"row",alignSelf:'center',alignItems:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Doctor1"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Doctor1")]}>
                <View style={{width:isOpen===true && active==="Doctor1"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,marginLeft:isOpen===true && active==="Doctor1"?'-102%':"0%",alignItems:'center',justifyContent:'center'}}>
                  {
                    isOpen===true && active=="Doctor1"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'skyblue',borderRadius:20}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',alignSelf:'center',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}> LURENE T. TEJADA</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>MD, MHCA, CFP</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
        <View style={{margin:14}}>
          <Text style={{color:'navy',fontWeight:900,fontSize:20,alignSelf:'center'}} onPress={()=> setActive(!active)}>Head Nurse</Text>
        </View>
          <View style={{width:'100%',height:250,flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <View  style={{width:'100%',height:'100%',flexDirection:"row",alignSelf:'center',alignItems:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Nurse3"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Nurse3")]}>
                <View style={{width:isOpen===true && active==="Nurse3"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,marginLeft:isOpen===true && active==="Nurse3"?'-102%':"0%",alignItems:'center',justifyContent:'center'}}>
                  {
                    isOpen===true && active=="Nurse3"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'skyblue',borderRadius:20}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',alignSelf:'center',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}> JAN ANDREW M. TEOXON</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>NURSE III</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop:-54}}>
        </View>
          <View style={{width:'100%',height:300,flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <View  style={{width:'100%',height:'100%',flexDirection:"row",alignSelf:'center',alignItems:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Nurse2"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Nurse2")]}>
                <View style={{width:isOpen===true && active==="Nurse2"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,marginLeft:isOpen===true && active==="Nurse2"?'-102%':"0%",alignItems:'center',justifyContent:'center'}}>
                  {
                    isOpen===true && active=="Nurse2"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'skyblue',borderRadius:20}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',alignSelf:'center',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}>MARIA ANDREA S. APUYA</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>NURSE II, RN, MAN</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin:14}}>
          <Text style={{color:'navy',fontWeight:900,fontSize:20,alignSelf:'center'}} onPress={()=> setActive(!active)}>Sanitation Inspector</Text>
        </View>
          <View style={{width:'100%',height:250,flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <View  style={{width:'100%',height:'100%',flexDirection:"row",alignSelf:'center',alignItems:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Inspector"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Inspector")]}>
                <View style={{width:isOpen===true && active==="Inspector"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,marginLeft:isOpen===true && active==="Inspector"?'-102%':"0%",alignItems:'center',justifyContent:'center'}}>
                  {
                    isOpen===true && active=="Inspector"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'skyblue',borderRadius:20}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',alignSelf:'center',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}>REY HECTOR M. ABINA</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>RN,</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>SANITATION INSPECTOR II</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin:14}}>
          <Text style={{color:'navy',fontWeight:900,fontSize:20,alignSelf:'center'}} onPress={()=> setActive(!active)}>Midwives</Text>
        </View>
          <View style={{width:'100%',height:600,flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Midwife1"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Midwife1")]}>
                <View style={{width:isOpen===true && active==="Midwife1"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,marginLeft:isOpen===true && active==="Midwife1"?'-102%':"0%",}}>
                  {
                    isOpen===true && active=="Midwife1"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'skyblue',borderRadius:20}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}> Ivy Jean G Ibis</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>RM, RN, Midwife II</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'50%', height:200}}  onPress={()=> [setIsOpen(!isOpen), setActive("Midwife2")]}>
                <View style={{width:isOpen===true && active==="Midwife2"?'200%':"100%",height:180,backgroundColor:"skyblue",borderRadius:20,marginLeft:isOpen===true && active==="Midwife2"?'-102%':"0%",}}>
                {
                    isOpen===true && active=="Midwife2"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}> Maria Alicia N. Laudes</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}> RM, Midwife II</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Midwife3"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Midwife3")]}>
                <View style={{width:isOpen===true && active==="Midwife3"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,}}>
                {
                    isOpen===true && active=="Midwife3"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}>Rizalyn I. Lavarez</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}> RN, RM, Midwife II</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'50%', height:200}}  onPress={()=> [setIsOpen(!isOpen), setActive("Midwife4")]}>
                <View style={{width:isOpen===true && active==="Midwife4"?'200%':"100%",height:180,backgroundColor:"skyblue",borderRadius:20,marginLeft:isOpen===true && active==="Midwife4"?'-102%':"0%",}}>
                {
                    isOpen===true && active=="Midwife4"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}> Melissa T. Yanto</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}> RM</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Midwife5"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Midwife5")]}>
                <View style={{width:isOpen===true && active==="Midwife5"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,}}>
                {
                    isOpen===true && active=="Midwife5"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}> Ma. Cristina A. Garcia</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}> RM</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin:14}}>
          <Text style={{color:'navy',fontWeight:900,fontSize:20,alignSelf:'center'}} onPress={()=> setActive(!active)}>Administrator</Text>
        </View>
          <View style={{width:'100%',height:250,flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <View  style={{width:'100%',height:'100%',flexDirection:"row",alignSelf:'center',alignItems:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Administrator"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Administrator")]}>
                <View style={{width:isOpen===true && active==="Administrator"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,marginLeft:isOpen===true && active==="Administrator"?'-102%':"0%",alignItems:'center',justifyContent:'center'}}>
                  {
                    isOpen===true && active=="Administrator"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'skyblue',borderRadius:20}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',alignSelf:'center',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}>SYLVIA B. ALVARES</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>ADMINISTRATOR</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin:14}}>
          <Text style={{color:'navy',fontWeight:900,fontSize:20,alignSelf:'center'}} onPress={()=> setActive(!active)}>Job Orders</Text>
        </View>
          <View style={{width:'100%',height:600,flexDirection:"column",alignItems:'center',justifyContent:'center',marginTop:'-26%'}}>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Joborder1"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Joborder1")]}>
                <View style={{width:isOpen===true && active==="Joborder1"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,marginLeft:isOpen===true && active==="Joborder1"?'-102%':"0%",}}>
                  {
                    isOpen===true && active=="Joborder1"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'skyblue',borderRadius:20}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}> MYLA R. HERTEZ</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>CLERK</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'50%', height:200}}  onPress={()=> [setIsOpen(!isOpen), setActive("Joborder2")]}>
                <View style={{width:isOpen===true && active==="Joborder2"?'200%':"100%",height:180,backgroundColor:"skyblue",borderRadius:20,marginLeft:isOpen===true && active==="Joborder2"?'-102%':"0%",}}>
                {
                    isOpen===true && active=="Joborder2"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}> IVAN BAUTISTA</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}> UTILITY</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Joborder3"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Joborder3")]}>
                <View style={{width:isOpen===true && active==="Joborder3"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,}}>
                {
                    isOpen===true && active=="Joborder3"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}>JOEL M. DAYAON</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>DRIVER</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin:14,marginTop:'-20%'}}>
          <Text style={{color:'navy',fontWeight:900,fontSize:20,alignSelf:'center'}} onPress={()=> setActive(!active)}>Laboratory</Text>
        </View>
          <View style={{width:'100%',height:600,flexDirection:"column",alignItems:'center',justifyContent:'center',marginTop:'-50%'}}>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Medtech"?"100%":'48%', borderRadius:20,height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Medtech")]}>
                <View style={{width:isOpen===true && active==="Medtech"?'200%':"100%",height:180,backgroundColor:'skyblue',borderRadius:20,marginLeft:isOpen===true && active==="Medtech"?'-102%':"0%",}}>
                  {
                    isOpen===true && active=="Medtech"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'skyblue',borderRadius:20}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}>LORNA GADIN</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>MEDTECH</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'50%', height:200}}  onPress={()=> [setIsOpen(!isOpen), setActive("Joborder2")]}>
                <View style={{width:isOpen===true && active==="Joborder2"?'200%':"100%",height:180,backgroundColor:"skyblue",borderRadius:20,marginLeft:isOpen===true && active==="Joborder2"?'-102%':"0%",}}>
                {
                    isOpen===true && active=="Joborder2"?
                    <View style={{width:'100%',height:'100%',backgroundColor:'skyblue',borderRadius:20,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white',marginTop:'10%'}}>
                        <Image source={require("../../assets/usertemplate.png")} style={{width:'100%',height:'100%',borderRadius:100}}/>
                       </View>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:700}}>EMMA E. DELOS SANTOS</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>LABORATORY AIDE</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    </ScrollView>
  )
}

export default Staff 