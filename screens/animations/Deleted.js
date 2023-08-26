import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const Deleted = () => {

    const animationRef = useRef();
    useEffect(() => {
        animationRef.current?.play();
    }, []);

  return (
    <View style={style.container}>
        <AnimatedLottieView ref={animationRef} style={{width:700,height:500,alignSelf:'center'}} source={lotties.Deleted} autoPlay loop/>
        <Text style={{fontSize:25,color:'green',fontWeight:'700',textAlign:'center'}}>Successfully Deleted</Text>
    </View>
  )
}

export default Deleted

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