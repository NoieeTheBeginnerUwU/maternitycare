import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const Failed = () => {

    const animationRef = useRef();
    useEffect(() => {
        animationRef.current?.play();
    }, []);

  return (
    <View style={style.container}>
        <AnimatedLottieView ref={animationRef} style={{width:300,height:300,alignSelf:'center'}} source={lotties.crossAnimation1}  autoPlay loop/>
        <Text style={{fontSize:25,color:'red',fontWeight:'700',textAlign:'center'}}>Loading</Text>
    </View>
  )
}

export default Failed

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        marginTop: '-60%',
        backgroundColor:'white',
        zIndex:1,
    }
})