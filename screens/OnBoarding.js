import React, {useState, useRef,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
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

    const [questionOne, setQuestionOne] = useState();
    const [questionTwo, setQuestionTwo] = useState();
    const [questionThree, setQuestionThree] = useState();
    const [questionFour, setQuestionFour] = useState();
    const [questionFive,setQuestionFive] = useState();

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
                            <AnimatedLottieView ref={animationRef} style={style.lottie} source={require('../assets/animation_lkhzyhw3.json')}  autoPlay loop/>
                        </View>
                    ),
                    title: 'Welcome to our app!',
                    subtitle: 'Congratulations on this incredible journey into motherhood! We are delighted to be your trusted companion throughout your maternity experience. ',
                },
                {
                    backgroundColor: 'rgb(238,238,236)',
                    image: (
                        <View>
                            <AnimatedLottieView ref={animationRef} style={style.lottie} source={require('../assets/animation_lkhwr8ib.json')}  autoPlay loop/>
                        </View>
                    ),
                    title: 'What we do',
                    subtitle: 'Our app is designed with your well-being and the health of your baby in mind, providing you with essential information, support, and resources every step of the way.',
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
                    title: 'Updates',
                    subtitle: 'Realtime updates from your trusted medical practitioner',
                },
            ]}
            />
    </View>
    </>
  )
}

export default OnBoarding