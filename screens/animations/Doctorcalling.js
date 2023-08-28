import React, { useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Lotties
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

const Doctorcalling = () => {

    const animationRef = useRef();
    useEffect(() => {
        animationRef.current?.play();
    }, []);

  return (
    <View style={style.container}>
        <Text style={{fontSize:16,color:'navy',fontWeight:300,textAlign:'center'}}>Congratulations on taking the first step towards a healthy and happy pregnancy journey! We're delighted to introduce you to our Maternity Care App</Text>
        <AnimatedLottieView ref={animationRef} style={{width:300,height:300,alignSelf:'center'}} source={lotties.lottie12} autoPlay loop/>
        <Text style={{fontSize:16,color:'navy',fontWeight:300,textAlign:'center',margin:'4%'}}> In order to provide you with the best possible support and guidance, we kindly request your cooperation in providing some essential user data to create your account.</Text>
    </View>
  )
}

export default Doctorcalling

const style = StyleSheet.create({
    container:{
        width:"100%",
        height:'70%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor:'white',
        zIndex:1,
        marginTop:'-5%'
    }
})