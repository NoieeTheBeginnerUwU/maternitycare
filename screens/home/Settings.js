import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import use navigation
import { useNavigation } from '@react-navigation/native';

//Import FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFile, faInfo, faL, faList, faUser } from '@fortawesome/free-solid-svg-icons';
//Date time picker

//pages
import Log from '../log/Log';
import { TouchableOpacity } from 'react-native';


const Settings = () => {

  const nav = useNavigation();

  return (
    <View style={{width: '100%', height:'100%', flexWrap:'wrap'}}>
        <TouchableOpacity onPress={()=> nav.navigate("Log")} style={{width:'46%',height:200,backgroundColor:'pink',borderRadius:20,margin:'2%',marginTop:'20%'}}>
          <View style={{width:60,height:60,borderRadius:30,backgroundColor:'white',alignSelf:'center',marginTop:'20%',alignItems:'center',justifyContent:'center'}}>
            <FontAwesomeIcon icon={faList} size={30} color='skyblue'/>
          </View>
          <View style={{width:'100%',height:70,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:900}}>Activity Log</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> nav.navigate("Edit")} style={{width:'46%',height:200,backgroundColor:'pink',borderRadius:20,margin:'2%',marginTop:'5%'}}>
          <View style={{width:60,height:60,borderRadius:30,backgroundColor:'white',alignSelf:'center',marginTop:'20%',alignItems:'center',justifyContent:'center'}}>
            <FontAwesomeIcon icon={faUser} size={30} color='skyblue'/>
          </View>
          <View style={{width:'100%',height:70,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:900}}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> nav.navigate("Terms")} style={{width:'46%',height:200,backgroundColor:'pink',borderRadius:20,margin:'2%',marginTop:'20%'}}>
          <View style={{width:60,height:60,borderRadius:30,backgroundColor:'white',alignSelf:'center',marginTop:'20%',alignItems:'center',justifyContent:'center'}}>
            <FontAwesomeIcon icon={faFile} size={30} color='skyblue'/>
          </View>
          <View style={{width:'100%',height:70,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:900}}>Terms and Conditions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> nav.navigate("About")} style={{width:'46%',height:200,backgroundColor:'pink',borderRadius:20,margin:'2%',marginTop:'5%'}}>
          <View style={{width:60,height:60,borderRadius:30,backgroundColor:'white',alignSelf:'center',marginTop:'20%',alignItems:'center',justifyContent:'center'}}>
            <FontAwesomeIcon icon={faInfo} size={30} color='skyblue'/>
          </View>
          <View style={{width:'100%',height:70,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:900}}>About Us</Text>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default Settings 