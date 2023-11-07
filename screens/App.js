import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, AppState } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Firebase
import { authentication } from '../config/firebase';
import { database } from '../config/firebase';
//Pages
import GetStarted from './getstarted/Getstarted';
import Dashboard from './Dashboard';
import OnBoarding from './OnBoarding';
import Login from './onboarding/Login';
import Signup from './onboarding/Signup';
import PrivacyPolicy from './onboarding/PrivacyPolicy';
import TermsConditions from './onboarding/TermsConditions';
//Main pages inside Dashboard
import NetInfo from "@react-native-community/netinfo";
import Nointernet from './animations/Nointernet';

const Stack = createStackNavigator();

export default function App() {

  // Initialize Firebase with your config
  const [user, setUser] = useState(null);
  let connection = false;
  const [document, setDocument] = useState([]);
  let id = "";

  // Listen   for auth state changes
  try{
    useEffect(() => {
      const unsubscribe = authentication.onAuthStateChanged((authenticatedUser) => {
        setUser(authenticatedUser);
      });
  
      // Unsubscribe when component unmounts
      return () => unsubscribe();
    }, []);
  }catch(e){
    console.log(e);
  }

  return (
    <>
        <NavigationContainer screenOptions={{headerShown: false}}> 
          <Stack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
              <>
                <Stack.Screen name="Dashboard" component={Dashboard} />
              </>
            ) : (
              <>
                <Stack.Screen name='GetStarted' component={GetStarted}/>
                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="Signup" component={Signup} /> 
                <Stack.Screen name="Privacy and Policy" component={PrivacyPolicy} /> 
                <Stack.Screen name="Terms and Conditions" component={TermsConditions} /> 
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8%'
  },
});
