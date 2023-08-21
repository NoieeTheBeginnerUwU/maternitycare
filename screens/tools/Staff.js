import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
  return (
    <ScrollView style={{width: '100%', height:'100%'}}>
      <View style={{width:'96%',height:'100%', alignSelf:'center',backgroundColor:"white",marginTop:'2%',marginBottom:'10%',borderRadius:8}}>
        <View style={{margin:14}}>
          <Text style={{color:'black',fontWeight:900,fontSize:17}} onPress={()=> setActive(!active)}>Midwives</Text>
          <Text>8 Midwives</Text>
        </View>
        <ScrollView style={{width:'100%',height:'100%',}}> 
          <View style={{width:'100%',height:'100%',flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Midwife1"?"100%":'48%', height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Midwife1")]}>
                <View style={{width:isOpen===true && active==="Midwife1"?'200%':"100%",height:180,backgroundColor:'navy',marginLeft:isOpen===true && active==="Midwife1"?'-102%':"0%",}}>
                  {
                    isOpen===true && active=="Midwife1"?
                    <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white'}}/>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Name: Fname MI Lname</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Position: Midwife</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Schedule: M W F</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'50%', height:200}}  onPress={()=> [setIsOpen(!isOpen), setActive("Midwife2")]}>
                <View style={{width:isOpen===true && active==="Midwife2"?'200%':"100%",height:180,backgroundColor:"navy",marginLeft:isOpen===true && active==="Midwife2"?'-102%':"0%",}}>
                {
                    isOpen===true && active=="Midwife2"?
                    <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white'}}/>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Name: Fname MI Lname</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Position: Midwife</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Schedule: M W F</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Midwife3"?"100%":'48%', height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Midwife3")]}>
                <View style={{width:isOpen===true && active==="Midwife3"?'200%':"100%",height:180,backgroundColor:'navy',}}>
                {
                    isOpen===true && active=="Midwife3"?
                    <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white'}}/>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Name: Fname MI Lname</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Position: Midwife</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Schedule: M W F</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'50%', height:200}}  onPress={()=> [setIsOpen(!isOpen), setActive("Midwife4")]}>
                <View style={{width:isOpen===true && active==="Midwife4"?'200%':"100%",height:180,backgroundColor:"navy",marginLeft:isOpen===true && active==="Midwife4"?'-102%':"0%",}}>
                {
                    isOpen===true && active=="Midwife4"?
                    <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white'}}/>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Name: Fname MI Lname</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Position: Midwife</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Schedule: M W F</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
            <View  style={{width:'100%',height:'33%',flexDirection:"row",alignSelf:'center',overflow:'hidden'}}>
              <TouchableOpacity style={{width:isOpen===true && active=="Midwife5"?"100%":'48%', height:200}} onPress={()=> [setIsOpen(!isOpen), setActive("Midwife5")]}>
                <View style={{width:isOpen===true && active==="Midwife5"?'200%':"100%",height:180,backgroundColor:'navy',}}>
                {
                    isOpen===true && active=="Midwife5"?
                    <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white'}}/>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Name: Fname MI Lname</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Position: Midwife</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Schedule: M W F</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:'50%', height:200}}  onPress={()=> [setIsOpen(!isOpen), setActive("Midwife6")]}>
                <View style={{width:isOpen===true && active==="Midwife6"?'200%':"100%",height:180,backgroundColor:"navy",marginLeft:isOpen===true && active==="Midwife6"?'-102%':"0%",}}>
                {
                    isOpen===true && active=="Midwife6"?
                    <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'100%',}}>

                      </View>
                    </View>
                    :
                    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <View style={{width:80,height:80,borderRadius:40,backgroundColor:'white'}}/>
                      </View>
                      <View style={{width:'100%',height:'50%',alignItems:'center',justifyContent:'center'}}>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Name: Fname MI Lname</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Position: Midwife</Text>
                       <Text style={{color:'white',fontSize:12,fontWeight:300}}>Schedule: M W F</Text>
                      </View>
                    </View>
                  }
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default Staff 