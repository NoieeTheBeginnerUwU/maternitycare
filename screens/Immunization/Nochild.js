import React, {useState, useRef, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//Import lottie
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';
//Date time picker

//Navigation
import { useNavigation } from '@react-navigation/native';

//Pages
import Childimmunization from './Childimmunization';

const Nochild = () => {

//this function plays the lottie files
  const animationRef = useRef();
  useEffect(() => {
      animationRef.current?.play();
  }, []);

  const nav = useNavigation();

  return (
    <View style={{width: '100%', height:'100%', backgroundColor:'white'}}>
        <View style={{width:'100%',height:1600}}>
          <AnimatedLottieView ref={animationRef} style={{width:400,heigt:200,backgroundColor:'skyblue',alignSelf:'center',borderRadius:150}} speed={.1} source={lotties.Antivirus}  autoPlay loop/>
          <View style={{width:'95%',marginTop:20}}>
            <Text style={{marginBottom:14, fontSize:20,textAlign:'center'}}>"Safeguarding Our Future: Empowering Children through Immunization"</Text>
            <Text style={{width:'92%',alignSelf:'center'}}>Immunization is a vital step in safeguarding the health and well-being of our children, ensuring they grow up strong and protected against preventable diseases.</Text>
          </View>
          <AnimatedLottieView ref={animationRef} style={{width:'100%',heigt:300,backgroundColor:'white',alignSelf:'center'}} source={lotties.AntivirusChild}  autoPlay loop/>
          <View>
            <Text style={{width:'92%',alignSelf:'center'}}>By receiving timely vaccinations, children develop immunity to various infections, which not only shields them from potential illness but also helps create a shield of protection for the entire community.</Text>
          </View>
          <AnimatedLottieView ref={animationRef} style={{width:'100%',heigt:300,backgroundColor:'white',alignSelf:'center'}} source={lotties.Antivirus3}  autoPlay loop/>
          <View>
            <Text style={{width:'92%',alignSelf:'center'}}>Embracing the power of immunization is a shared responsibility, empowering our children with a healthier and brighter future.</Text>
          </View>
          <TouchableOpacity style={{width:'90%', height:60, backgroundColor:'orange',alignSelf:'center',marginTop:40,borderRadius:30,justifyContent:'center'}} onPress={()=> nav.navigate("Registerchild")}>
            <Text style={{alignSelf:'center',textAlign:'center',color:'white',fontSize:23}}>Get Started</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Nochild 