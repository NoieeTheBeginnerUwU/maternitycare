import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Date time picker
import OnBoarding from '../OnBoarding';
//Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
//Style
import { style } from '../../style';
import { images } from '../../style';
const Stack = createStackNavigator();
const GetStarted = () => {

    const nav = useNavigation();

  return (
    <>
    <View style={{width: '100%', height: 400, 
      alignSelf: 'center',  
      backgroundColor: '#F9B1A6', borderBottomRightRadius:100, borderBottomLeftRadius:100}}>
        <View style={{width: 270, height: 270, backgroundColor: 'white', alignSelf: 'center', marginTop:'70%', borderRadius: 270/2}}>
            <Image source={require("../../assets/logo2.png")} style={{marginTop:'0%', alignSelf: 'center'}}/>
        </View>
        <View style={{alignSelf: 'center', marginTop: 40}}>
        </View>
        <TouchableOpacity onPress={()=> nav.navigate("OnBoarding")} style={{width: '80%', height:50, backgroundColor: 'darkblue', justifyContent: 'center',alignSelf: 'center', borderRadius: 30, marginTop: '10%'}}>
            <Text style={{alignSelf: 'center', fontSize: 20, color: 'white', fontWeight: 300}}>Get started</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default GetStarted 