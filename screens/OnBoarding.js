import React, {useState, useRef,useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
//Global styling
import { style } from '../style';
//Lottie
import AnimatedLottieView from 'lottie-react-native';
//Navigation
import { useNavigation } from '@react-navigation/native';
//Pages
import Login from './onboarding/Login';

const OnBoarding = () => {

    const navigation = useNavigation();
    const animationRef = useRef(); // The <> is for TypeScript, but can be removed for JavaScript
    useEffect(() => {
        animationRef.current?.play();
    }, []);

    const handleSkip = () => {
        navigation.navigate("Login")
    }

  return (
    <>
        <View style={style.container}>
        <Onboarding
            onSkip={handleSkip}
            onDone={handleSkip}
            pages={[
                {
                backgroundColor: 'white',
                image: (
                    <View>
                        <Image source={require("../assets/logo2.png")} style={style.lottie}/>     
                    </View>
                ),
                title: <Text style={{fontSize:30,fontWeight:600,color:'skyblue'}}>Welcome to our app!</Text>,
                subtitle: <Text style={{fontSize:16,fontWeight:400,color:'skyblue',width:'90%',textAlign:'center'}}>an app dedicated for the soon to be mothers in Daet.</Text>,
                },
                {
                backgroundColor: 'rgb(238,238,236)',
                image: (
                    <View>
                        <AnimatedLottieView ref={animationRef} style={style.lottie} source={require('../assets/animation_lkhza54x.json')}  autoPlay loop/>
                    </View>
                ),
                title: 'Appointment',
                subtitle: 'Discover the convenience of effortlessly scheduling and managing all your prenatal appointments in one place.',
                },
                {
                    backgroundColor: 'white',
                    image: (
                        <View>
                            <AnimatedLottieView ref={animationRef} style={style.lottie} source={require('../assets/animation_lkhzyhw3.json')}  autoPlay loop/>
                        </View>
                    ),
                    title: 'Notifications',
                    subtitle: 'Notifications sent to you are personalized. ',
                },
                {
                    backgroundColor: '#AFC6F0',
                    image: (
                        <View>
                            <AnimatedLottieView style={style.lottie} source={require('../assets/animation_lkhy2gg5.json')}  autoPlay loop></AnimatedLottieView>
                        </View>
                    ),
                    title: 'Realtime updates from your trusted medical practitioner',
                    subtitle: '',
                },
            ]}
            />
    </View>
    </>
  )
}

export default OnBoarding