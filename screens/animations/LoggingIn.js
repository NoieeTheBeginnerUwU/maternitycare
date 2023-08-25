import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const LoggingIn = () => {

    const animationRef = useRef();
    useEffect(() => {
        animationRef.current?.play();
    }, []);

  return (
    <View style={style.container}>
        <AnimatedLottieView ref={animationRef} style={{width:400,height:400,alignSelf:'center'}} source={lotties.WomanLogin}  autoPlay loop/>
        <Text style={{fontSize:35,color:'skyblue',fontWeight:'700',}}>Logging In</Text>
    </View>
  )
}

export default LoggingIn

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor:'rgba(0,0,0,0)',
        zIndex:1,
    }
})