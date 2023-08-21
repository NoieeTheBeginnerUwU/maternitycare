import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//Pages
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { faRedRiver } from '@fortawesome/free-brands-svg-icons';
import { faBaby, faCalendarTimes, faChild, faClockRotateLeft, faPersonPregnant, faSyringe, faUserNurse, faWarning } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
//Navigation
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native';

const Tools = () => {
  const nav = useNavigation();
  return (
    <>
    <View style={{width: '100%', height: 1000,backgroundColor:'white'}}>
      <View style={{width: '100%', flexDirection: 'row',height: '100%', 
      alignSelf: 'center', marginTop: '4%', justifyContent: 'space-around', 
      alignItems:'center',flexWrap: 'wrap',
      backgroundColor: 'transparent', borderRadius:20}}>
        <View style={styles.box1}>
          <TouchableOpacity style={styles.boxPress} onPress={()=> nav.navigate("Child")}>
          <View style={{width: 60, height: 60, borderRadius: 30,justifyContent: 'center',alignSelf: 'center', alignItems:'center',backgroundColor: 'navy'}}>
              <FontAwesomeIcon icon={faBaby} size={28} color='white'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'navy',fontWeight:600,fontSize:18}}>Child</Text>
              <Text style={{color:'navy',fontSize:12,fontWeight:600}}>Immunization</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <TouchableOpacity style={styles.boxPress}  onPress={()=> nav.navigate("History")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'navy', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faClockRotateLeft} size={28} color='white'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'navy',fontWeight:600,fontSize:18}}>Appointment</Text>
              <Text style={{color:'navy',fontSize:12,fontWeight:600}}>History</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <TouchableOpacity style={styles.boxPress} onPress={()=> nav.navigate("Staff")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'navy', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faUserNurse} size={28} color='white'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'navy',fontWeight:600,fontSize:18}}>Staff</Text>
              <Text style={{color:'navy',fontSize:12,fontWeight:600}}>Profiles</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <TouchableOpacity style={styles.boxPress}  onPress={()=> nav.navigate("Milestone")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'navy', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faPersonPregnant} size={28} color='white'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'navy',fontWeight:600,fontSize:18}}>Pregnancy</Text>
              <Text style={{color:'navy',fontSize:12,fontWeight:600}}>Milestone</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box1}>
          <TouchableOpacity style={styles.boxPress} onPress={()=> nav.navigate("Reminder")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'navy', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faCalendarTimes} size={28} color='white'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'navy',fontWeight:600,fontSize:18}}>Reminders</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <TouchableOpacity style={styles.boxPress} onPress={()=> nav.navigate("Events")}>
          <View style={{width: 60, height: 60,borderRadius: 30, backgroundColor: 'navy', justifyContent: 'center',alignSelf: 'center', alignItems:'center'}}>
              <FontAwesomeIcon icon={faCalendar} size={28} color='white'/>
            </View>
            <View style={{alignItems: 'center', width: '100%', heigh: '50%'}}>
              <Text style={{alignSelf: 'center',color:'navy',fontWeight:600,fontSize:18}}>Calendar and</Text>
              <Text style={{color:'navy',fontSize:12,fontWeight:600}}>Events</Text>
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
    width: '45%', margin: '2%',height: 150,backgroundColor:'white',borderRadius: 20, marginTop: '-100%',
    borderBottomColor: 'navy', borderBottomWidth: 4, borderWidth:1,borderColor:'navy'
  },
  box2: {
    width: '45%', margin: '1%',height: 150,backgroundColor:'white',borderRadius: 20, marginTop: '10%',
    borderBottomColor: 'navy', borderBottomWidth: 4, borderWidth:1,borderColor:'navy'
  },
  boxPress: {
    width:'100%',height:'90%',flexDirection: 'column', marginTop: '10%', borderRadius: 20,
  }
})