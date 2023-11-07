import { faAngleDown, faAngleUp, faRuler, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Bmicalc = () => {

  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [seeMore, setSeeMore] = useState(false);

  const calculate = () => {
     if(weight!==0&&height!==0){
      setBmi(Math.round(weight / Math.pow(height, 2) * 10000));
     }
     return bmi
  }

  useEffect(()=>{
    calculate()
  })

  return (
    <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
      <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'navy'}}>
        <Text style={{fontSize:30,color:'white',fontWeight:700}}>BMI calculator</Text>
        <View style={{width:'96%',height:60,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'navy'}}>
          <FontAwesomeIcon icon={faWeightScale} color='yellow' size={24}/>
          <TextInput keyboardType={"numeric"} placeholder="Weight" onChangeText={(e)=> setWeight(e)} style={{width:'20%',height:40,margin:10,backgroundColor:'white',textAlign:'center'}}/>
          <Text style={{color:'white'}}>kg</Text>
        </View>
        <View style={{width:'96%',height:60,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'navy'}}>
          <FontAwesomeIcon icon={faRuler} color='yellow' size={24}/>
          <TextInput keyboardType={"numeric"} placeholder="Height" onChangeText={(e)=> setHeight(e)} style={{width:'20%',height:40,margin:10,backgroundColor:'white',textAlign:'center'}}/>
          <Text style={{color:'white'}}>cm</Text>
        </View>
        <Text style={{color:'white',marginTop:60,fontSize:18}}>Your BMI is <Text style={{color:bmi<18.5&&"white"||bmi>18.5&&bmi<24.9&&"greenyellow"||bmi>25&&bmi<29.9&&"orange"||bmi>29.9&&bmi<40&&"red"||bmi>40&&"violet",fontWeight:700,fontSize:26}}>{bmi}</Text></Text>
        {
          seeMore===false?
          <TouchableOpacity onPress={()=> setSeeMore(!seeMore)} style={{width:100,height:30,flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:"center",borderWidth:1,borderColor:'white',borderRadius:5}}>
            <Text style={{color:'white'}}>See more</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={()=> setSeeMore(!seeMore)} style={{width:100,height:30,flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:'white',borderRadius:5}}>
             <Text style={{color:'white'}}>See less</Text>
          </TouchableOpacity>
        }
        {
          seeMore===true&&
          <View style={{width:'100%',height:"40%"}}>
          {
            bmi!==0&&bmi<70&&
            <View style={{width:'100%',height:'40%',}}>
          {
          bmi<18.5&&
            <View style={{width:'96%',height:'100%',margin:'5%',color:'white'}}>
              <Text style={{color:'white'}}>Classification: <Text>Underweight</Text></Text>
              <Text style={{width:'90%',color:'white',margin:10}}>Being underweight during pregnancy affects the mother and fetus in multiple ways. Women who lose weight during pregnancy or who become malnourished are classified as having high-risk pregnancies of type I or type II.</Text>
              <Text style={{width:'90%',color:'white',margin:10}}><Text style={{fontWeight:700,color:"orange"}}>Effects: </Text> Miscarriage, possibility of premature delivery, growth or intellectual capacity disorders.</Text>
            </View>
          }
                {
            bmi>18.5&&bmi<24.9&&
            <View style={{width:'96%',height:'100%',margin:'5%',color:'white'}}>
              <Text style={{color:'white'}}>Classification: <Text style={{color:'greenyellow'}}>Normal Weight</Text></Text>
              <Text style={{width:'90%',color:'white',margin:10}}>Maintaining a normal and healthy weight during pregnancy, which means having a body mass index (BMI) within the recommended range (usually between 18.5 and 24.9), is associated with several positive effects and benefits for both the mother and the developing fetus. </Text>
              <Text style={{width:'90%',color:'white',margin:10}}><Text style={{fontWeight:700,color:"green"}}>Effects: </Text>Healthy weight gain, Lower risks of complications, Improved emotional Well-being.</Text>
            </View>
          }
                {
            bmi>25&&bmi<29.9&&
            <View style={{width:'96%',height:'100%',margin:'5%',color:'white'}}>
              <Text style={{color:'white'}}>Classification: <Text style={{color:'orange'}}>Overweight</Text></Text>
              <Text style={{width:'90%',color:'white',margin:10}}>Being overweight during pregnancy, defined as having a body mass index (BMI) of 25 or higher, can have various effects on both the mother and the developing fetus. It's important to note that the impact of being overweight during pregnancy can vary from person to person, and some individuals may not experience these effects.</Text>
              <Text style={{width:'90%',color:'white',margin:10}}><Text style={{fontWeight:700,color:"orange"}}>Effects: </Text>Gestational Diabetes, Increased risk of C-Section, Postpartum Weight Retention.</Text>
            </View>
          }
                {
            bmi>29.9&&bmi<41&&
            <View style={{width:'96%',height:'100%',margin:'5%',color:'white'}}>
              <Text style={{color:'white'}}>Classification: <Text style={{color:'red'}}>Obese</Text></Text>
              <Text style={{width:'90%',color:'white',margin:10}}>Being obese during pregnancy, defined as having a body mass index (BMI) of 30 or higher, can have a significant impact on both the mother and the developing fetus. Obesity during pregnancy is associated with various risks and complications. It's important to remember that the effects can vary from person to person. </Text>
              <Text style={{width:'90%',color:'white',margin:10}}><Text style={{fontWeight:700,color:"orange"}}>Effects: </Text>Breathing problems, Gastrointestinal and Digestive issues, Challenges.</Text>
            </View>
          }
                {
            bmi>40&&
            <View style={{width:'96%',height:'100%',margin:'5%',color:'white'}}>
              <Text style={{color:'white'}}>Classification: <Text style={{color:'violet'}}>Morbidly Obese</Text></Text>
              <Text style={{width:'90%',color:'white',margin:10}}>Being obese during pregnancy, defined as having a body mass index (BMI) of 30 or higher, can have a significant impact on both the mother and the developing fetus. Obesity during pregnancy is associated with various risks and complications. It's important to remember that the effects can vary from person to person. </Text>
              <Text style={{width:'90%',color:'white',margin:10}}><Text style={{fontWeight:700,color:"orange"}}>Effects: </Text>Breathing problems, Gastrointestinal and Digestive issues, Challenges.</Text>
            </View>
          }
          </View>
          }
          </View>
        }
      </View>
    </View>
  )
}

export default Bmicalc