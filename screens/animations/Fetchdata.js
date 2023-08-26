import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const Fetchdata = () => {

    const animationRef = useRef();
    useEffect(() => {
        animationRef.current?.play();
    }, []);

  return (
    <View style={style.container}>
        <AnimatedLottieView ref={animationRef} style={{width:300,height:300,alignSelf:'center',}} source={lotties.LoadingGears} autoPlay loop/>
        <Text style={{fontSize:28,color:'#F9B1A6',fontWeight:800,textAlign:'center'}}>YOUR ACCOUNT IS BEING PROCESSED</Text>
        <Text style={{fontSize:14,marginTop:'10%',margin:'3%',color:'#F9B1A6',fontWeight:300,textAlign:'center'}}> Our team is carefully reviewing the information you provided during registration to ensure its accuracy and compliance with our platform's policies. This step is crucial to maintain a safe and secure environment for all our users.</Text>
        <Text style={{fontSize:14,marginTop:'1%',margin:'3%',color:'#F9B1A6',fontWeight:300,textAlign:'center'}}> Once your submission is reviewed, it will be forwarded Thank you for your patience and understanding. We look forward to having you as an active member of the Maternity Care App community!</Text>
    </View>
  )
}

export default Fetchdata

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor:'white',
        zIndex:1,
    }
})