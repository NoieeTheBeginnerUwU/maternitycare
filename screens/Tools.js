import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//Pages
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faRedRiver, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBaby, faCalculator, faCalendarTimes, faChild, faClockRotateLeft, faPersonPregnant, faProcedures, faRoadCircleCheck, faSyringe, faUserNurse, faWarning } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faFlag } from '@fortawesome/free-regular-svg-icons';
//Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native';

const Tools = () => {
  const nav = useNavigation();
  return (
    <>
    <View style={{width: '100%', height: '100%',backgroundColor:'white'}}>
      <View style={{width: '100%', flexDirection: 'row',height: '100%', marginTop: '5%', justifyContent: 'space-around', 
      alignItems:'center',flexWrap: 'wrap',
      backgroundColor: 'transparent', borderRadius:20}}>
        <View style={styles.box1}>
          <TouchableOpacity style={styles.boxPress} onPress={()=> nav.navigate("Child")}>
          <View style={{width: 60, height: 60, borderRadius: 30,justifyContent: 'center',alignSelf: 'center', alignItems:'center',backgroundColor: 'white'}}>
              <FontAwesomeIcon icon={faBaby} size={28} color='skyblue'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'white',fontWeight:600,fontSize:18}}>Child</Text>
              <Text style={{color:'white',fontSize:12,fontWeight:600}}>Immunization</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <TouchableOpacity style={styles.boxPress}  onPress={()=> nav.navigate("History")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'white', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faClockRotateLeft} size={28} color='skyblue'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'white',fontWeight:600,fontSize:18}}>Appointment</Text>
              <Text style={{color:'white',fontSize:12,fontWeight:600}}>History</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <TouchableOpacity style={styles.boxPress}  onPress={()=> nav.navigate("Milestone")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'white', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faRoadCircleCheck} size={28} color='skyblue'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'white',fontWeight:600,fontSize:18}}>Pregnancy</Text>
              <Text style={{color:'white',fontSize:12,fontWeight:600}}>Milestone</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.box2,]}>
          <TouchableOpacity style={styles.boxPress} onPress={()=> nav.navigate("Watch")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'white', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faYoutube} size={28} color='red'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'white',fontWeight:600,fontSize:18}}>Watch</Text>
              <Text style={{color:'white',fontSize:12,fontWeight:600}}>Videos</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <TouchableOpacity style={styles.boxPress} onPress={()=> nav.navigate("EDD Calculator")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'white', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faCalculator} size={28} color='skyblue'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'white',fontWeight:600,fontSize:18}}>EDD</Text>
              <Text style={{color:'white',fontSize:12,fontWeight:600}}>Calculator</Text>
            </View>
          </TouchableOpacity>
        </View>
                <View style={styles.box2}>
          <TouchableOpacity style={styles.boxPress} onPress={()=> nav.navigate("BMI Calculator")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'white', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faCalculator} size={28} color='skyblue'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'white',fontWeight:600,fontSize:18}}>BMI</Text>
              <Text style={{color:'white',fontSize:12,fontWeight:600}}>Calculator</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  )
}

export default Tools

const styles = StyleSheet.create({
  box1: {
    width: '45%', margin: '2%',height: 200,alignItems:'center',justifyContent:'center',backgroundColor:'navy',borderRadius: 10, 
  },
  box2: {
    width: '45%', margin: '1%',height: 200,alignItems:'center',justifyContent:'center',backgroundColor:'navy',borderRadius: 10, 
  },
  boxPress: {
    width:'100%',height:'90%',flexDirection: 'column', borderRadius: 20,alignItems:'center',justifyContent:'center'
  }
})