import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const Item = (item) => {

  return(
    <View style={{}}>
      
    </View>
  )

}

const Milestone = () => {

  const [documents, setDocuments] = useState([]);
  const [active, setActive] = useState(1);
  const [activeIn, setActiveIn] = useState('');
  const [toggled, setToggled] = useState(false);

  const renderItem = ({ item }) => (
    <View style={{width:'90%',height:100,alignContent:'center',alignSelf:'center',justifyContent:'center',backgroundColor:item.status==="pending"&& "grey" ||item.status==="approved"&& "rgb(170,220,170)"|| item.status==="denied"&&"lightpink",marginBottom:'1%'}}>
      <Text style={{color:'white',fontSize:12,marginLeft:'4%'}}>Appointment ID: {item.id}</Text>
      <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Date of Appointment: {item.DateApp}</Text>
      <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Time of Appointment: {item.time}</Text>
      <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>purpose: {item.purpose}</Text>
      <Text style={{color:'white',fontSize:10,marginLeft:'4%'}}>Date Made: {item.made}</Text>
      <Text style={{color:'white',fontSize:10,marginLeft:'4%',fontWeight:'bold'}}>status: {item.status}</Text>
    </View>
  );

  return (
    <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <View style={{width:'100%',height:'50%'}}>
                {
          active===1&&
          <Image source={require("../../assets/weeks/week1.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===2&&
          <Image source={require("../../assets/weeks/week2.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===3&&
          <Image source={require("../../assets/weeks/week3.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===4&&
          <Image source={require("../../assets/weeks/week4.jpg")} style={{width:'100%',height:'100%'}}/>
                }
        {
          active===5&&
          <Image source={require("../../assets/weeks/week5.jpg")} style={{width:'100%',height:'100%'}}/>
                }
        {
          active===6&&
          <Image source={require("../../assets/weeks/week6.jpg")} style={{width:'100%',height:'100%'}}/>
                }
        {
          active===7&&
          <Image source={require("../../assets/weeks/week7.jpg")} style={{width:'100%',height:'100%'}}/>
                }
        {
          active===8&&
          <Image source={require("../../assets/weeks/week8.jpg")} style={{width:'100%',height:'100%'}}/>
                }
        {
          active===9&&
          <Image source={require("../../assets/weeks/week9.jpg")} style={{width:'100%',height:'100%'}}/>
                }
        {
          active===10&&
          <Image source={require("../../assets/weeks/week10.jpg")} style={{width:'100%',height:'100%'}}/>
                }
        {
          active===11&&
          <Image source={require("../../assets/weeks/week11.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===12&&
          <Image source={require("../../assets/weeks/week12.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===13&&
          <Image source={require("../../assets/weeks/week13.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===14&&
          <Image source={require("../../assets/weeks/week14.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                { 
          active===15&&
          <Image source={require("../../assets/weeks/week15.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===16&&
          <Image source={require("../../assets/weeks/week16.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===17&&
          <Image source={require("../../assets/weeks/week17.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===18&&
          <Image source={require("../../assets/weeks/week18.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===19&&
          <Image source={require("../../assets/weeks/week19.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===20&&
          <Image source={require("../../assets/weeks/week20.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===21&&
          <Image source={require("../../assets/weeks/week21.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===22&&
          <Image source={require("../../assets/weeks/week22.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===23&&
          <Image source={require("../../assets/weeks/week23.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===24&&
          <Image source={require("../../assets/weeks/week24.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===25&&
          <Image source={require("../../assets/weeks/week25.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===26&&
          <Image source={require("../../assets/weeks/week26.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===27&&
          <Image source={require("../../assets/weeks/week27.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===28&&
          <Image source={require("../../assets/weeks/week28.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===29&&
          <Image source={require("../../assets/weeks/week29.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===30&&
          <Image source={require("../../assets/weeks/week30.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===31&&
          <Image source={require("../../assets/weeks/week31.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===32&&
          <Image source={require("../../assets/weeks/week32.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===33&&
          <Image source={require("../../assets/weeks/week33.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===34&&
          <Image source={require("../../assets/weeks/week34.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===35&&
          <Image source={require("../../assets/weeks/week35.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===36&&
          <Image source={require("../../assets/weeks/week36.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===37&&
          <Image source={require("../../assets/weeks/week37.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===38&&
          <Image source={require("../../assets/weeks/week38.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===39&&
          <Image source={require("../../assets/weeks/week39.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===40&&
          <Image source={require("../../assets/weeks/week40.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===41&&
          <Image source={require("../../assets/weeks/week41.jpg")} style={{width:'100%',height:'100%'}}/>
        }
                {
          active===42&&
          <Image source={require("../../assets/weeks/week41.jpg")} style={{width:'100%',height:'100%'}}/>
        }
        <ScrollView style={{width:'100%',height:'20%',marginTop:'-20%'}} horizontal={true}>
          <View style={{width:'100%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(1)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===1?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
                {
                  active===1?
                  <>
                    <Text style={{alignSelf:'center'}}>1</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>week</Text>
                  </>
                  :
                  <Text>1</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(2)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===2?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===2?
                  <>
                    <Text style={{alignSelf:'center',}}>2</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>2</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(3)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===3?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===3?
                  <>
                    <Text style={{alignSelf:'center'}}>3</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>3</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(4)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===4?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===4?
                  <>
                    <Text style={{alignSelf:'center'}}>4</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>4</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(5)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===5?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===5?
                  <>
                    <Text style={{alignSelf:'center'}}>5</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>5</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10,}}>
              <TouchableOpacity onPress={()=> setActive(6)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===6?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===6?
                  <>
                    <Text style={{alignSelf:'center'}}>6</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>6</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(7)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===7?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===7?
                  <>
                    <Text style={{alignSelf:'center'}}>7</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>7</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(8)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===8?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===8?
                  <>
                    <Text style={{alignSelf:'center'}}>8</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>8</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(9)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===9?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===9?
                  <>
                    <Text style={{alignSelf:'center'}}>9</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>9</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(10)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===10?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===10?
                  <>
                    <Text style={{alignSelf:'center'}}>10</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>10</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(11)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===11?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===11?
                  <>
                    <Text style={{alignSelf:'center'}}>11</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>11</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(12)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===12?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===12?
                  <>
                    <Text style={{alignSelf:'center'}}>12</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>12</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(13)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===13?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===13?
                  <>
                    <Text style={{alignSelf:'center'}}>13</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>13</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(14)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===14?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===14?
                  <>
                    <Text style={{alignSelf:'center'}}>14</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>14</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(15)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===15?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===15?
                  <>
                    <Text style={{alignSelf:'center'}}>15</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>15</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(16)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===16?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===16?
                  <>
                    <Text style={{alignSelf:'center'}}>16</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>16</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(17)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===17?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===17?
                  <>
                    <Text style={{alignSelf:'center'}}>17</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>17</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(18)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===18?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===18?
                  <>
                    <Text style={{alignSelf:'center'}}>18</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>18</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(19)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===19?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===19?
                  <>
                    <Text style={{alignSelf:'center'}}>19</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>19</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(20)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===20?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===20?
                  <>
                    <Text style={{alignSelf:'center'}}>20</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>20</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(21)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===21?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===21?
                  <>
                    <Text style={{alignSelf:'center'}}>21</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>21</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(22)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===22?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===22?
                  <>
                    <Text style={{alignSelf:'center'}}>22</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>22</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(23)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===23?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===23?
                  <>
                    <Text style={{alignSelf:'center'}}>23</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>23</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(24)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===24?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===24?
                  <>
                    <Text style={{alignSelf:'center'}}>24</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>24</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(25)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===25?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===25?
                  <>
                    <Text style={{alignSelf:'center'}}>25</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>25</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(26)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===26?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===26?
                  <>
                    <Text style={{alignSelf:'center'}}>26</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>26</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(27)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===27?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===27?
                  <>
                    <Text style={{alignSelf:'center'}}>27</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>27</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(28)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===28?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===28?
                  <>
                    <Text style={{alignSelf:'center'}}>28</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>28</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(29)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===29?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===29?
                  <>
                    <Text style={{alignSelf:'center'}}>29</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>29</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(30)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===30?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===30?
                  <>
                    <Text style={{alignSelf:'center'}}>30</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>30</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(31)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===31?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===31?
                  <>
                    <Text style={{alignSelf:'center'}}>31</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>31</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(32)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===32?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===32?
                  <>
                    <Text style={{alignSelf:'center'}}>32</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>32</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(33)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===33?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===33?
                  <>
                    <Text style={{alignSelf:'center'}}>33</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>33</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(34)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===34?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===34?
                  <>
                    <Text style={{alignSelf:'center'}}>34</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>34</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(35)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===35?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===35?
                  <>
                    <Text style={{alignSelf:'center'}}>35</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>35</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(36)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===36?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===36?
                  <>
                    <Text style={{alignSelf:'center'}}>36</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>36</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(37)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===37?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===37?
                  <>
                    <Text style={{alignSelf:'center'}}>37</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>37</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(38)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===38?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===38?
                  <>
                    <Text style={{alignSelf:'center'}}>38</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>38</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(39)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===39?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===39?
                  <>
                    <Text style={{alignSelf:'center'}}>39</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>39</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(40)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===40?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===40?
                  <>
                    <Text style={{alignSelf:'center'}}>40</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>40</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(41)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===41?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===41?
                  <>
                    <Text style={{alignSelf:'center'}}>41</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>41</Text>
                }
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(42)} style={{width:40,height:40,borderRadius:40,backgroundColor:active===42?'lightgreen':'pink',alignItems:'center',justifyContent:'center'}}>
              {
                  active===42?
                  <>
                    <Text style={{alignSelf:'center'}}>41+</Text>
                    <Text style={{fontSize:9,marginTop:-5}}>weeks</Text>
                  </>
                  :
                  <Text>41+</Text>
                }
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{width:'100%',height:'50%'}}>
          {
            active===1&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week1tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week1tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>There is often confusion around calculating the baby’s age: what the OB/GYN says seems like two weeks more than the actual age. Where does this difference come from?</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>  Fetal age is counted from ovulation or conception and is about two weeks less than gestational age. The fetal age directly depends on how regular and how long the menstrual cycle is. </Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}> This age is very approximate, since it’s also quit difficult to determine the exact date of ovulation or conception. That means that it is impossible to determine the fetus’s exact fetal age. Contrary to popular belief, ultrasounds can’t show the exact age or due date. They only show whether the size of the fetus is appropriate for the calculated gestational age</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week1tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week1tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your hormones will be to blame for pretty much every pregnancy symptom you'll experience for the next nine months or so — which is why it makes sense to familiarize yourself with some of the major pregnancy players.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week1tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week1tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>  Stuffy nose? Credit all that extra estrogen, which is helping the uterus grow and baby's organs form. Facial fuzz sprouting? Thank prolactin, which helps enlarge your breasts and kickstarts lactation.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}> Achy back and joints? That would be the handiwork of the hormone relaxin, which (true to its name), helps loosen the muscles, joints and ligaments in your body to prepare for labor.</Text>
              </View>
            </View>
            </>
        }
       {
            active===2&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week2tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week2tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>There is often confusion around calculating the baby’s age: what the OB/GYN says seems like two weeks more than the actual age. Where does this difference come from?</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>  Fetal age is counted from ovulation or conception and is about two weeks less than gestational age. The fetal age directly depends on how regular and how long the menstrual cycle is. </Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}> This age is very approximate, since it’s also quit difficult to determine the exact date of ovulation or conception. That means that it is impossible to determine the fetus’s exact fetal age. Contrary to popular belief, ultrasounds can’t show the exact age or due date. They only show whether the size of the fetus is appropriate for the calculated gestational age</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week2tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week2tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your hormones will be to blame for pretty much every pregnancy symptom you'll experience for the next nine months or so — which is why it makes sense to familiarize yourself with some of the major pregnancy players.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week2tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week2tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>  Stuffy nose? Credit all that extra estrogen, which is helping the uterus grow and baby's organs form. Facial fuzz sprouting? Thank prolactin, which helps enlarge your breasts and kickstarts lactation.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}> Achy back and joints? That would be the handiwork of the hormone relaxin, which (true to its name), helps loosen the muscles, joints and ligaments in your body to prepare for labor.</Text>
              </View>
            </View>
            </>
        }
        {
            active===3&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week3tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week3tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>We have an embryo! Your soon-to-be fetus is still a cluster of cells that are growing and multiplying. It’s about the size of a pinhead.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>You probably won’t know if you’re having a baby boy or girl for about 14 more weeks, but sex is determined at the moment of fertilization.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week3tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week3tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Don't worry! A feeling of pressure in your tummy or even mild cramping without bleeding is very common, especially in first pregnancies, and is usually a sign that everything is going right, not that something's wrong. What you're feeling may be the sensation of embryo implantation, increased blood flow, the thickening of the uterine lining or even the growth of your uterus (and it could just be gas pains). Ask your doctor at your next visit if you're concerned, but it probably just means you're super tuned in to all the changes happening in your body.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week3tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week3tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Toss some berries in your cereal. Adding vitamin C-laden foods to iron-rich fare increases your body's absorption of iron — a nutrient you need to help support your increased blood volume. You can find vitamin C in fruits and vegetables like kiwis, mangoes, strawberries, melons, bell peppers, tomatoes and asparagus. Iron can be found in soy products, beef, poultry and dried fruit.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>When it comes to hair coloring, experts agree that safe is better than sorry. So wait until your second trimester (i.e. after week 14 of pregnancy) before getting a touch-up.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===4&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week4tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week4tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>While you may have just started to wonder whether you're pregnant, your soon-to-be baby has already found its home: The blastocyst has completed its journey from your fallopian tube to your uterus.
Once there, it burrows into your uterine lining and implants — making that unbreakable connection to you that'll last the next eight months (and a lifetime after that).
As soon as that little ball of cells is settled in your uterus, it will undergo the great divide, splitting into two groups. Half of what's now called the embryo will become your son or daughter, while the other half forms the placenta, your baby's lifeline — which channels nutrients and carries waste away until delivery.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week4tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week4tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you find that you’re spotting this week — right around the time that you would have had your period or a little before — don’t be alarmed. This is usually a sign that the embryo has implanted itself into the uterine wall. A good thing! Dont have any spotting at all? Dont worry, either — less than one quarter of women experience implantation bleeding, so not having this symptom doesnt mean that youre not pregnant.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you haven't already, now's the time to make your first doctor's appointment! Some OB/GYNs ask that you wait until you’re at least 6 to 8 weeks pregnant before a visit, but since early prenatal care is so important, it's best to get something on the calendar as soon as you have a positive pregnancy test.
Make sure to research the kind of doctor or midwife you really want first.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>

              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week4tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week4tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Most of your vitamin D supply comes from the sun or fortified milk. If you don't drink the white stuff, you'll need to find your D from other sources. That's because vitamin D is essential for maintaining healthy teeth and bones, and helps your body absorb calcium .You can find vitamin D in many prenatal vitamins as well as from fortified milk, fortified orange juice and egg yolks. Talk to your doctor about how much you need (600 IU is the standard recommendation among the expectant set, but some may need 1,000 IU or more).</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===5&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week5tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week5tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>		
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>That mass of cells we call an embryo is starting to look like a fetus, with a forming neural tube (pre-spinal cord and brain) running from head to rump.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The placenta is under construction and will finish forming by the end of the first trimester. It’s an organ that will soon connect your developing fetus to your uterine wall, providing baby-to-be with nutrients and oxygen.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>So what does your baby look like now? Actually, not unlike a tadpole, with a rudimentary head and a tail. But don't worry, there's no frog in your future. In fact, you're fewer than eight months away from holding a real prince or princess in your arms. While all this is happening, the hCG hormone levels in your body are now high enough to confirm that you're expecting using a home pregnancy test. Go to the doctor to confirm the good news and figure out your due date.</Text>

              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week5tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week5tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Pregnancy is hard work, and that can cause a downshift in your get-up-and-go. During the first trimester, a huge amount of energy goes into building a life-support system for your baby, especially the placenta, which can leave you feeling just a bit tired or full-on wiped out. Also to blame are the hormonal and emotional changes that are happening. The good news: By the end of your first trimester, your body will have completed the Herculean task of manufacturing the placenta, so you might feel a renewal of energy. In the meantime, listen to your body, which is telling you it’s burned out. Get plenty of rest and eat right — and often!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week5tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week5tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===6&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week6tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week6tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The cluster of cells that will become your baby's heart starts to pulse sometime after week 5. From week 6 of pregnancy or later, you may be able to see (and/or hear) cardiac activity for the first time on an ultrasound, though the exact timing of when it can be detected varies a little.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>During embryo and fetal development, practitioners measure babies as small as yours from precious little crown to cute little rump. That's because as your baby grows, her legs will be bent, making it hard to get an accurate read on the full length of the body.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>You might be coping with full-blown pregnancy symptoms, but there's plenty of good news too. The folds of tissue in the prominent bump on top — the head — are developing into your baby's jaw, cheeks and chin, which will eventually become one adorable face.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week6tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week6tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Whether you're just experiencing slight queasiness or hurling breakfast, lunch or dinner (or all three), look on the bright side. Though admittedly, it’s hard to look on the bright side when your view is the porcelain goddess! Morning sickness is one of the most common signs of a normal pregnancy, especially from week 6 on. Fight nausea by eating small snacks that combine protein and complex carbs — cheese and multigrain crackers, yogurt and granola. Whatever your stomach can stomach!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If it hurts to pee or if you gotta go but nothing comes, you may have a urinary tract infection (UTI). Talk to your doctor to find out for sure.
If you do have a UTI, you'll likely be prescribed a baby-safe antibiotic. You're at a higher risk of getting this kind of infection after week 6 of pregnancy.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week6tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week6tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>It's one thing to make the commitment to exercise — it's another thing to make time for it, particularly if you're often feeling nauseous. The best strategy is to try to block out a specific time in your day for working out — rather than waiting until you find half an hour to get around to it.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===7&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week7tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week7tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Umbilical cord, welcome to the womb! This tube joins baby and placenta, delivering oxygen and nutrients and even eliminating waste into your bloodstream.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>At 7 weeks pregnant, most of that growth is concentrated in the head (the better to store all those smarts) as new brain cells are generated at the rate of 100 per minute. How's that for a budding genius?.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Also forming this week are your baby's mouth and tongue. The kidneys are in place now, too, and are poised to begin their important work of waste management. Soon, your baby will start producing urine. Lucky for you, there's no need for diapers yet. </Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week7tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week7tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
		            <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Are your breasts sprouting blue veins that are beginning to make them look like an interstate highway map? In fact, these veins do act like highways: They transport the nutrients and fluids from you to your baby after birth. To minimize sagging and stretch marks later on, invest in a good bra now — maybe even a maternity one that will give you more support.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Stuck eating the same thing night after night because very few foods appeal to your picky palate now? Don’t worry — you’re not robbing your baby of precious nutrients by eating the same healthy thing over and over. If cravings are driving you crazy, give in to them once in a while — then eat well for the rest of the day.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week7tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week7tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Not only does nature's sweetest bounty contain essential nutrients that are good for you and your baby, but fruit also plays a starring role in keeping you regular.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you experience abdominal cramps while you’re expecting, it’s not necessarily cause for concern. Cramping is normal during the first trimester, but if it occurs with shoulder or neck pain or if it’s accompanied by contractions, dizziness or discharge, call the doctor. Also call if your abdominal pain feels like more than just cramps and is more severe.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===8&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week8tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week8tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>What else is changing at 8 weeks pregnant? A close-up view of your little embryo would reveal your baby is looking a lot less reptilian and a lot more baby-like. Even though baby has webbed hands and feet, teeny fingers and toes are just starting to differentiate and the tail is almost gone. You'd see an upper lip forming, the protruding tip of that cute button nose and tiny, very thin eyelids.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Meanwhile, how big baby is has become a bit harder to estimate. Though growth occurs at about the rate of a millimeter a day, it isn't necessarily just in height. Spurts can happen in the arms, legs, back and other parts of that tiny body, meaning big changes are coming every which way in the next few months. </Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>By the end of the week, all the essential organs and body systems have begun to develop.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week8tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week8tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>What’s making you so tired these days? Try everything! Pregnancy is hard work and you should ask for help — from your partner, from your family and from your friends. Having your partner or a pal lend a hand means you might have enough energy to go out for a walk and then go to bed!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Craving weird substances such as clay or laundry starch? Call your practitioner. These types of cravings are called pica and could be a sign of a nutritional deficiency, especially of iron.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week8tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week8tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Dealing with nausea and vomiting during pregnancy is never easy — but it's especially hard when you're anxious to start feeding yourself and your baby well.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Has the word "carb" become a four-letter one in your diet plan? Redefine it by choosing healthy complex carbohydrates that nourish your baby and fuel your energy needs.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===9&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week9tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week9tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The spinal cord "tail" at your baby-to-be's rump has all but disappeared! He's looking more and more like a tiny human.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>While it's too early to feel any kicks yet, it's not too early to hear something — fetal cardiac activity might be audible on a Doppler device at your doctor's appointment this week!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Would you believe your baby is only an embryo for one more week and is already developing into a fetus? The head has straightened out and is more fully developed and the ears are continuing to grow, making baby look more human. Plus, toes are visible, and all of baby's essential organs, like the heart, brain, kidneys, liver and lungs, have begun to develop.
The arms and legs in your soon-to-be-fetus are also spontaneously moving now that minuscule muscles are beginning to develop, though you won't feel your tiny dancer for at least another month or two.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week9tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week9tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Another thing that may be keeping you up at night: your bigger breasts, which are not just larger, but more tender, too. The increased blood flow and their larger size can make them ultrasensitive — and make you more uncomfortable at night. You can wear a cotton sports bra to minimize discomfort, switch to a wireless bra or buy a new bra in a larger size. Another solution: Use a warm or cold compress, whichever feels better.",</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>It’s a drag when you’re dragging yourself through the day. Make a point of getting your sleep — yes, it’s obvious, but between racing to the bathroom at midnight to pee and your mind racing with all those pregnancy worries, you may find it difficult to comply with your body’s ever-rising request for rest.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week9tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week9tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Need a quick trick for banishing your next bout of heartburn? Chew some sugarless gum, which is perfectly safe in moderation for pregnant women. Chewing increases saliva, which then neutralizes the acid in your stomach. Tums or Rolaids also ease the burn and give you a calcium boost to boot. Lastly, opt for six mini meals instead of three big ones and try to stay upright for at least a few hours after you finish eating.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===10&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week10tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week10tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your baby is really taking a human shape now. Bones and cartilage are forming and small indentations on the legs are developing into knees and ankles. The arms, complete with elbows, can flex already — how's that for magical? Still, don't run to the store for a baseball bat just yet. Though your baby's arms are taking shape and getting stronger, each one is still teeny-tiny.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The tooth bud fairy is making an appearance this week, heralding the arrival of your baby's little choppers, which are forming under the gums. But those pearly whites won't break through the gums until your baby is close to 6 months old. Other systems are a go, too. Your baby's stomach is producing digestive juices, the kidneys are producing larger quantities of urine and, if it's a boy, your little one is already producing testosterone.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week10tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week10tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>You probably still feel as if your get-up-and-go has gotten up and gone, but don’t worry — in about a month you’ll be feeling less tired. In the meantime, don’t be super mom-to-be. Ask for help, get some rest and work in some exercise when you can. Yes, it seems counterintuitive to go out for a walk when you want to crawl into bed, but you’ll feel peppier afterward — and you’ll sleep better, too.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>As your hormones continue to relax all your muscles, the muscles in your gastrointestinal tract are relaxing, too. That means more indigestion and more intestinal gas. Your best bet is to stay away from foods that produce the most gas. You may find it helpful to keep a record of what you eat to see whether there’s a connection between certain foods, whether it’s fried foods or broccoli or beans, and gas.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week10tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week10tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Crying uncontrollably one minute, laughing hysterically the next? These emotional highs and lows are par for the pregnancy course. Mood swings are mostly felt during the first trimester, with a second trimester break. But be forewarned: They often return for the last few months of pregnancy.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===11&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week11tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week11tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Bye-bye, webbed hands and feet. Your little one's fingers and toes are separating and looking like real baby parts. Fingernail and toenail beds are also beginning to develop.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Hair follicles are forming not just on the crown, but on the rest of the body. And those tiny hands and feet have individual fingers and toes — meaning goodbye to those frog-like webbed hands and feet.

Meanwhile, fingernail and toenail beds begin to develop this week; in the next few weeks, the nails themselves will start to grow, so don't forget to add a baby nail clipper to your to-buy list. While you can't tell what baby's sex will be yet, ovaries are developing if it's a girl.
And by week 11 of pregnancy, baby has other distinct human characteristics: hands and feet in front of his body, ears nearly in their final shape, open nasal passages on the tip of his tiny nose, a tongue and palate in the mouth, and visible nipples.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week11tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week11tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your growing breasts may be a turn-on for your partner, but your achy boobs are a turnoff for you. Warn your partner about your extra-sensitive breasts — and that you may not be up for lovemaking or even heavy-duty hugging.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>re you still gagging at the smell of what used to be your favorite food — or jonesing for meat even though you were practically a vegetarian? The good news is that these freaky changes in food preferences may lessen by your fourth month.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>How can your belly feel so inflated when your fetus is still only about 2 inches long? The progesterone in your system has caused your gastrointestinal tract to relax, which slows digestion and leaves you feeling bloated.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week11tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week11tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Prenatal yoga is the perfect pregnancy exercise. Not only can a yoga routine help you feel more relaxed and prepared for birth, but a once-a-week prenatal yoga session, when done for at least two months, is enough to reduce the risk of anxiety and depression. That, in turn, can lower the risk of premature birth and postpartum blues.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===12&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week12tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week12tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>This week marks a turning point for your baby. At 12 weeks pregnant, the Herculean task of developing new bodily structures is nearing an end, as most of your baby's systems are fully formed — though there's still plenty of maturing to do. Now comes the maintenance phase, during which your fetus' systems continue to evolve for the next 28 weeks and the organs get to work. For one thing, the fetal digestive system is beginning to flex its muscles — literally — as it starts practicing contraction movements, a skill your little peanut will need after birth to push food through the digestive tract.
The bone marrow is busy making white blood cells — weapons that will one day help your baby fight infection once she's out of your safe haven and in a regular play group. And the pituitary gland at the base of the brain has started producing the hormones that'll enable her to make babies of her own in a few decades or so.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week12tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week12tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you haven't already had the pleasure, it's likely that at this month's checkup you'll hear sounds of fetal cardiac activity — a noise that will make your heart race with joy!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Be sure to eat regularly throughout the day — skipping meals causes low blood sugar, which can trigger headaches. Also, remember that it’s usually okay to taken acetaminophen during pregnancy, but make sure your medical practitioner gives you the go-ahead first.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week12tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week12tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>ll pregnant women are with child sometime during flu season, October to May, which is why the Centers for Disease Control and Prevention (CDC) recommends that all moms-to-be get the flu shot. And being pregnant doesn’t up your risk for shot side effects, notes a recent study.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Pushing your baby through your pelvis and into the world is demanding not only on you, but also on your pelvic floor muscles — which have to stretch to proportions previously unimaginable.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===13&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week13tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week13tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>That big baby head is getting more in balance with the rest of the body. Right now, his head is about half the size of his total frame.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>What else is going on in there? At 13 weeks pregnant, tiny bones are beginning to form in his arms and legs. Because he can move them in a jerky fashion, he may be able to get his thumb into his mouth soon — a habit that may come in handy for self-soothing when he's a newborn. Your baby's intestines are also in for some big changes. Until recently, they've been growing in a cavity inside the umbilical cord, but they've just moved into their permanent — and more conveniently located — address, in your baby's abdomen. And to serve your growing fetus' needs, the placenta is also growing, eventually weighing 1 to 2 pounds at birth.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week13tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week13tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Now that your body has had a trimester to adjust to pregnancy, you may be starting to feel a little less tired these days. Consider channeling your newfound energy into your workout routine — but don’t overdo it!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Thanks to your hormones, your bowel muscles also relax during pregnancy, which means they'll be less efficient at moving waste out of your system. If you find yourself backed up, slowly start adding more high-fiber foods to your diet, like fruits, vegetables and whole grains, along with plenty of fluids, too.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week13tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week13tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>It does a growing baby body good, building strong bones and teeth. But calcium also does your body good, too — helping to maintain solid bone density and prevent osteoporosis later in life, and lowering your risk of preeclampsia now. So make sure you "got milk" and other calcium-loaded foods, like fortified juice, almonds, sesame seeds, soy products, green leafies, canned salmon and broccoli.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===14&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week14tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week14tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>By week 14 of pregnancy, your baby could be sprouting some hair and those eyebrows are filling in too. Hair growth isn't limited to baby's head, though. She is also covered with a downy coating of hair called lanugo, largely there for warmth.
But it won't be there forever. As fat accumulates later on in your pregnancy — the baby's fat, not yours — it will take over the function of keeping your little bean toasty, so most of the lanugo sheds. Some babies, especially those born early, still have a fuzzy coating at delivery, but it disappears soon afterward.
Other developments this week include a roof of her own — inside your baby's mouth, that is — as well as some digestive system activity: Her intestines are producing meconium, which is the waste that will make up her first bowel movement after birth.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week14tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week14tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
		            <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Those pesky hormones are to blame once again: High levels of estrogen and progesterone increase blood flow to mucous membranes in the body, including the nose, which causes them to swell and soften. Try running a warm-mist humidifier while you sleep to make breathing easier.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you’re like most women, your morning sickness may be coming to an end now that you’re in the second trimester. Yay! Pat yourself on the back for making it through the worst of the nausea.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week14tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week14tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>With your second trimester comes a burst of energy. Take advantage! Get your light-to-moderate exercise game on to cut your risk of gestational diabetes and keep yourself and your baby-to-be healthy. The American College of Obstetricians and Gynecologists recommends getting at least 30 minutes or more of moderate exercise per day, at least five days a week. Just remember to avoid exercising on your back now that you're past the first trimester.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===15&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week15tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week15tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Things are moving into place, namely your baby’s ears and eyes. They continue the slow migration to their rightful spots on baby’s face and head.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>With each passing week, your fetus is also looking more and more like the baby you're picturing in your dreams. By now, the ears are positioned properly on the sides of the head — they used to be in the neck — and the eyes are moving from the side of the head to the front of the face — where they'll soon meet your loving gaze.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>So what keeps your baby busy all day? Mostly, your fetus is in rehearsals — practice, practice, practicing and getting ready for that big debut. Babies work on breathing, sucking and swallowing motions so that when they leave your comfy womb and move into your comfy house, they'll have the skills necessary to survive.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week15tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week15tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The good news about varicose veins? They’re unlikely to cause any harm. Plus, their presence is a good excuse to sit down and kick back with your feet up, since elevating your legs helps keep blood circulating and reduces pressure on the veins in your legs.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you can’t find a place to lie down or sit when you feel light-headed, kneel and bend your head forward as though you were tying your shoe. This will help prevent you from fainting and taking a spill.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week15tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week15tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Do you skip breakfast because you're not a breakfast person? Well, your baby doesn't mind if you opt out of the oatmeal and go for a toasted cheese sandwich instead — or even a slice of cold meatloaf from last night's dinner. If you forgo the morning meal because you’re not a morning person, you might want to try setting your alarm for 15 minutes earlier, so you'll have a chance to wake up and grab some granola and yogurt — even if you have to eat your breakfast on the run. </Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===16&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week16tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week16tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Thanks to those developing facial muscles, your baby is capable of making a few expressive frowns and squints, even at this early stage. Baby's beautiful eyes are finally working too, making small side-to-side movements and perceiving light, although the eyelids are still sealed. Peekaboo!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Listen up: Tiny bones in your fetus' ears are in place, making it likely that baby will soon be able to hear your voice (or something like it) when you're speaking. Generally, babies fully develop the ability to hear in the womb by 18 weeks of pregnancy. In fact, studies have found that babies who hear a song while they're in the womb recognize the same tune when it's sung to them after they’re born — so choose your lullabies with that in mind.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week16tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week16tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>One way to minimize the swollen blood vessels in your legs? Keep your weight gain healthy and gradual, and stick within the recommended range, because extra weight increases the load on your circulatory system.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week16tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week16tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Make a habit of having a salad or grilled veggies, or sauteéd leafy greens such as spinach, escarole or broccoli as a side. Lentil, bean and vegetable soups are all great choices too, and same goes for tomato-based broths and chowders.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===17&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week17tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week17tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Since practice makes perfect, your baby is sharpening his sucking and swallowing skills in preparation for that first and second…and third suckle at your breast or the bottle. In fact, most of the survival reflexes your baby will have at birth are being perfected in utero right now.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week17tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week17tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Hormones and milk-producing glands are developing to prepare for nursing. All this activity, plus an increase in blood flow, can cause your breasts to grow up to three cup sizes. Of course, every pregnant woman's symptoms are different. While breast growth is common — and for some women quite a lot — you might not notice any changes at all in your breast size, especially if you're busty to begin with. Even if you have no breast growth, it’s not cause for concern.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week17tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week17tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Do the palms of your hands look as if you've touched a hot pan? You could have palmar erythema, a skin condition in which the palms of the hands or the soles of the feet appear redder or darker than normal.It disappears after you give birth. But definitely check in with your doctor just to make sure everything is normal.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===18&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week18tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week18tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Myelin, a protective insulation, is starting to form around baby-to-be's nerves. This covering continues to grow until your baby's first birthday.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Something you won't see on the ultrasound — but you'll learn is in working order — is your baby's nervous system, which is maturing rapidly when you're 18 weeks pregnant. A network of nerves, now covered with a substance called myelin that helps speed messages from nerve cell to nerve cell, are forming more complex connections. And those in the brain are further developing into the ones that serve the senses of touch, taste, smell, sight and hearing.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week18tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week18tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>As if it weren’t enough that your precious sleep is interrupted by trips to the bathroom to pee, now you may find yourself suddenly woken up during the night by shooting spasms in your calves. Experts aren’t entirely sure what causes them, but you can help fend them off by doing calf stretches before hitting the sack. Some women also swear by magnesium supplements or milk of magnesia — which can also help ease constipation — but talk to your doctor before taking them.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week18tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week18tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Certain exercises may work great for the non-pregnant set, but now that you’re expecting, don't even think about trying them.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===19&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week19tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week19tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your little one may have a cheesy varnish this week. Say what? You read that right — a protective substance called vernix caseosa (vernix is the Latin word for "varnish"; caseosa means "cheese") now covers your fetus' skin. It's greasy, white and made up of that downy hair known as lanugo, oil from your baby's glands and dead skin cells. This waxy "cheese" may not sound too appealing, but it's there for good reason: Vernix protects your baby's sensitive skin from the surrounding amniotic fluid. Without it, he'd look very wrinkled at birth — sort of what you'd look like if you soaked in a bath for nine months. The vernix sheds as delivery approaches, though some babies — especially those born early — will still be covered with it at birth, so you might get a look at your baby's first anti-wrinkle cream.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week19tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week19tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your growing uterus may put pressure on your blood vessels — among other parts of your body — reducing blood flow to your brain and causing you to feel light-headed. Even though dizziness is common, don’t ignore it — take it easy and sit or lie down as soon as you start to feel woozy so that you don’t hurt yourself or the baby.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>As your uterus grows, you may find your center of gravity shifting forward, putting extra pressure on your lower back. Avoid straining your back further by letting others lift heavy loads for you. If you absolutely must lift something, stabilize yourself by assuming a wide stance, bend at the knees, not at the waist, and slowly lift with your arms and legs, not your back.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week19tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week19tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
		            <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Eight to 10 full glasses of fluids — water, vegetable or fruit juice, broth — each day will help keep solids moving through your digestive tract at an impressive rate and keep your stool soft and easier to pass. Prune juice is tops in the category since it's a mild laxative. Try to drink some when you're really clogged, and if you have trouble taking it straight, blend it with other fruits and juices into a smoothie.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===20&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week20tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week20tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>urious about whether that melon-sized belly has a boy or a girl inside? Now's your chance to take a peek! Though the external genitals in both male and female fetuses still have a way to grow, you'll be able to find out your baby's sex via the second trimester ultrasound, also known as the anatomy scan, usually scheduled for anytime between 18 and 22 weeks. You'll also get a detailed sneak peek at baby's other major organs and measurements and make sure your little one is developing normally. This exam, which is much longer than the routine ultrasounds you get at your doctor's office, gives your practitioner a chance to see how things are going in there — and wow, are they going! If you're carrying a girl, your baby's uterus is fully formed this week and the vaginal canal is starting its development; in a few decades, you might be a grandma! Your little girl also has primitive eggs in tiny ovaries now, about 7 million of them. By birth, that number will be down to 1 or 2 million. If your fetus is a boy, the testicles are begining their descent soon, though they're still in the abdomen waiting for the scrotum to finish growing so they'll have a place to go in a few weeks.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week20tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week20tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Do you find that your headaches crop up when you’re overheated, in windowless, stuffy spaces or under fluorescent lighting? Be sure to take fresh-air breaks outside a few times a day and dress in layers to avoid getting too hot, which could trigger a headache.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Stuffy, hot rooms can be the cause of more than just headaches. They can also cause light-headedness, especially when your body is already generating lots of heat with that little bun you’re cooking in your oven. Stay cool by taking frequent breaks for fresh air and wearing loose-fitting clothes.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week20tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week20tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Love nuts? Keep eating them! Enjoying nuts while pregnant doesn't put your unborn child at risk of nut allergies — it may actually lower baby's risk. Nuts are chock-full of vitamin E, protein and important minerals like copper, manganese, magnesium, selenium, zinc, potassium and even calcium. And even though they're high in fat, it's mainly the good-for-you kind — especially baby-brain boosting AHA. So in a nutshell, go nuts — in moderation, of course.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===21&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week21tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week21tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Speaking of milestones, whatever you eat this week, there's a good chance your baby will taste it, too. That's because when you're 21 weeks pregnant, your baby swallows a bit of amniotic fluid each day — not only for nutrition and hydration, but also to practice swallowing and digesting, skills he'll need as soon as he arrives in your arms.

And keep this in mind: The taste of the amniotic fluid differs from day to day depending on what you've eaten — spicy enchilada one day, sweet banana the next. That smorgasbord of flavors won't be lost on your baby since your little one has very developed taste buds already.

In fact, researchers have noted that babies who were exposed to certain tastes in utero via the amniotic fluid were more eager to eat foods with those same tastes after birth. Want your peanut to eat his broccoli later? Eat yours now!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week21tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week21tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Have you noticed that your hair and nails are growing at record speed? Pregnancy hormones are partly the cause — as is the increased circulation in your body — bringing extra nutrients to your hair, nails, and of course, to your baby.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Not only is your center of gravity shifting and putting extra strain on your back, but the hormone relaxin is also causing your ligaments and joints to stretch and loosen, which means additional achiness in your back. If you can, splurge for a prenatal massage from a trained professional and spring for a pair of supportive shoes.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week21tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week21tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>It's not a lack of sleep that's causing you to forget where you put your keys. Brain fog is a common pregnancy symptom, and causes forgetfulness and trouble concentrating. Since so-called “pregnancy brain” could well be here to stay for the remainder of your pregnancy, now's the time to start making to-do lists, leaving notes for yourself in obvious places and outsourcing some of your regular tasks to your partner or non-pregnant friends and family.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===22&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week22tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week22tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>This week, your sweetie is making more sense of the world as she develops her sense of touch. In fact, your little one's grip is quite strong now, and since there's nothing else to grab in utero, she may sometimes hold on tight to that umbilical cord. Don't worry — it's tough enough to handle it. The sense of sight is also becoming more fine-tuned. Your fetus can now perceive light and dark much better than before, even with those fused eyelids. But remember — unless you're shining a flashlight over your belly, which you can do, by the way — it'll be mostly dark for your baby inside that cozy womb of yours. She can also hear your voice, your heartbeat, your gurgling stomach and the whoosh-whoosh of blood circulating through your body.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week22tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week22tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
		            <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Not loving your new outie belly button? After delivery it will revert back to an innie — but be prepared for the fact that you will probably be left with a slightly larger navel.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Some experts theorize that leg cramps during pregnancy may be caused by a shortage of calcium or magnesium in the diet. Reduce the frequency of these painful spasms by taking your prenatal vitamin daily.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week22tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week22tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Now's a great time to learn some soothing relaxation techniques — not just because they can help you cope with pregnancy worries (and later, with labor contractions), but because they'll come in handy in your life as a new mom — as when the baby's on a crying marathon.

Yoga's a fabulous de-stresser, but here's a technique you can use just about anywhere, anytime, to soothe your soul: Sit with your eyes closed and imagine a beautiful, peaceful scene, like a sunset over your favorite beach or a serene mountain vista. Then, working your way up from your toes to your face, concentrate on relaxing every muscle.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===23&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week23tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week23tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Baby's skin is a bit saggy since it grows a lot faster than fat, but soon he’ll start to fit his frame as fat deposits fill things out. By the time your baby is born, he will be pleasantly plump and filled out, from chubby cheeks to chubby toes. And although at 23 weeks pregnant your baby's organs and bones are visible through his skin, he'll become less transparent once those fat deposits settle in.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week23tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week23tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you can’t seem to shake that ate-too-much feeling, you’re experiencing the effects of progesterone. The hormone causes the gastrointestinal tract to relax and slow down digestion, so nutrients have more time to enter your bloodstream and reach your baby. Drink more water to help keep things moving.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Reduce irritation to your gums, which are swelling more than usual these days due to hormones, by avoiding chewy sweets, brushing and flossing regularly and visiting the dentist at least once while you’re expecting.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week23tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week23tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>You can't go wrong by filling your plate with fresh fruits and vegetables — whether they're organic or not. Still, organic foods may have a few benefits, including fewer pesticides in organic produce than conventional fruits and vegetables. Organic foods are also free of artificial colorings, flavorings and preservatives. Organic produce does tend to be more expensive than conventional fruits and vegetables and can have a shorter shelf-life.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===24&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week24tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week24tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Wondering what your baby will look like? If you had a baby cam at 24 weeks pregnant, you'd almost be able to tell by now. That beautiful face, though still tiny, is almost fully formed, complete with eyelashes, eyebrows and hair. Will your baby have brown, black, blond or red hair — or something in between? Actually, right now her locks are white, since there's no pigment yet. The fat that will be piled on under baby's skin is also missing from the picture right now. Until those fat deposits are made, that very tender skin is still very transparent, which means a close look would let you see clear through to all the organs, bones and blood vessels. Fortunately, that see-through look won't last much longer.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week24tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week24tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Are your contact lenses bothering you lately — or is your vision sometimes blurry? Pregnancy hormones can decrease tear production, causing eye irritation, and increase fluid buildup in the eye, temporarily altering your vision. This should pass shortly after delivery, so don’t go out and get any new eyeglass or contact-lens prescriptions while you’re expecting.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you find your headaches last for days, are severe and are sometimes accompanied by nausea or vision changes, they might be migraines. Let your practitioner know and keep a journal of what you ate, where you were and what you were doing before you experienced each migraine so you can pinpoint the triggers — and start to avoid them.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week24tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week24tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Have you considered hiring a doula to help with delivery and early baby care? A doula’s duty is to be your head cheerleader during delivery. Unlike an OB/GYN or midwife, doulas do not have medical training — instead, they’re there to support you emotionally. Some studies show that moms with doulas are less likely to require C-sections, inductions and pain relief, while births may be shorter with a lower rate of complications.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===25&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week25tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week25tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>What else is going on this week? No matter what your baby's skin color will eventually be, it's turning pinker now — and not because he's getting overheated. In fact, the amniotic fluid is perfectly climate-controlled, keeping him at an always-comfortable temperature. Instead, the skin is changing color because small blood vessels, called capillaries, are forming under the skin and filling with blood. Later this week, blood vessels will also develop in your baby's lungs, bringing them one step closer to full maturity — and one step closer to taking that first breath of fresh air. But at 25 weeks pregnant, those lungs are still very much works-in-progress. Though they are already beginning to produce surfactant, a substance that will help them expand with oxygen after baby is born, the lungs are still too undeveloped to sufficiently send oxygen to the bloodstream and release carbon dioxide when she exhales.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week25tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week25tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you’re feeling pain in the pelvic area, you may be experiencing SPD, caused by relaxed and stretchy ligaments that normally keep your pelvic joints, or the symphysis pubis, aligned. Stay on top of your pelvic tilts and Kegels, which will strengthen the muscles in that region, try wearing a support belt and if pain is severe, ask your practitioner for a referral to a physical therapist.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week25tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week25tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your eyes are yet another seemingly random part of the body affected by those kooky hormones. During this time, your vision might be less sharp — Is that you, Honey? — and your contact lenses might be less comfortable to wear. Another twist in the eye story: Even though you're retaining fluid, ironically, your eyes may be drier than ever. But don't worry — eye symptoms, like skin symptoms, will disappear after delivery. </Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===26&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week26tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week26tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Look who's looking! It's your baby! Those little eyes — which have been closed for the past few months so that the retina, the part of the eye that allows images to come into focus, could develop — are beginning to open at 26 weeks pregnant. That means your baby is able to see what's going on now, though unfortunately the view in your uterus isn't all that exciting. But do try this at home for kicks: Shine a flashlight at your stomach. Your little peanut might kick in response. Right now, the iris, which is the colored part of the eye, still doesn't have much pigmentation — that'll fill in over the next month or two — so it's too early to start guessing your little one's eye color. And even the color your baby is born with might not be the permanent shade. You may be kept guessing until she's a year old, with the most dramatic changes occurring by about 6 months.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week26tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week26tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your loosened joints, shifted center of gravity and added weight are just a few of the factors that cause you to slip, trip and fall more often than usual. This clumsiness is temporary, but for now, be extra careful in the tub, shower and on other slippery surfaces.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Some women who have a history of migraines have them more often when they’re pregnant, while others have fewer of them. But don’t be surprised if yours flare up more these days. Since strong migraine medications are probably off-limits for now, consider holistic therapies such as acupuncture, biofeedback, massage, meditation and yoga, which can also help reduce stress, a well-known migraine trigger.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week26tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week26tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>When it comes to meat, fish or poultry, half-baked isn't baked enough for you. Pierce your cooked chicken with a fork — if the juice comes out red, it's undercooked, so put it back in the oven and let it heat up till the fluid runs clear. Cut through the thickest part of cooked meat and chops to make sure the middle is gray or brown with no rare spots. And instead of searing fish and serving it rare or medium, bake, broil, grill or poach it until it's cooked through. Better still, check the temperature with a quality meat thermometer.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===27&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week27tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week27tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your baby may recognize both your and your partner's voices by now. His auditory development, or hearing, is progressing as the network of nerves to the ears matures — though the sounds he hears are muffled thanks to the creamy coating of vernix covering them. So this might be a good time to read and even sing to your baby — or rather, your tummy — and a good chance to start memorizing those nursery rhymes and lullabies you'll need to be repeating (and repeating) pretty soon. While you're at it, here's another way to have some family fun at 27 weeks pregnant: Your partner might be able to hear baby's heartbeat by pressing an ear to your stomach.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week27tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week27tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>It’s a common pregnancy symptom, but mention it to your practitioner, especially if you do faint. You can stop a dizzy spell by lying down and elevating your feet as soon as you feel light-headed.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week27tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week27tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
		            <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Chances are, you'll never need to save your baby's life. But emergencies occasionally do happen, even when you're vigilant. Luckily, with a little preparation, you can be ready to act in the unlikely event that you'd need to. Sign up for an infant CPR class — many are also offered virtually.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===28&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week28tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week27tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your baby is settling into the proper position for birth, which will be head-down toward your body's nearest exit! Baby is busy these days blinking — outside in the real world, blinking is necessary to help keep foreign objects out of the eyes. That skill is just one of an already impressive repertoire of tricks she's working on, like coughing, more intense sucking, hiccupping and, perhaps most important, better breathing.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week28tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week27tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you thought your days of feeling light-headed were over after your first trimester, think again. For some women, that bulging belly puts pressure on blood vessels, which reduces blood flow to the brain and causes dizziness. Keep blood circulating and pumping to your brain by drinking plenty of water each day.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week28tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week27tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
		            <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Now is a good time to research childbirth classes. You can choose a class at the hospital or with a local instructor, but sign up early so you can finish several weeks before your due date. Ask whether your course includes lessons on infant care, CPR and breastfeeding as it should. Have special requirements? There are classes for second-timers who need to brush up on their techniques, classes for moms who are attempting a vaginal birth after cesarean (VBAC) and classes designed for those expecting multiples. Many places also now offer virtual classes. Whichever class you choose, make sure your instructor is certified by a national childbirth education organization. And here's a bonus: Your insurance company may cover your tuition, so be sure to submit your bill.",</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
            {
            active===29&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week29tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week27tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Since space in your baby's living quarters is now at a premium, you'll be feeling jabs and pokes from elbows and knees, mostly. And they'll be more vigorous and less erratic than before because your baby is stronger and excitedly responding to all sorts of stimuli — movement, sounds, light and that candy bar you ate half an hour ago. That means now's a good time to start doing a kick count once or twice a day, depending on what your doctor recommends. Plus, it's a good excuse for a rest.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week29tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week27tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Even though your nails may be growing faster than ever, pregnancy hormones may also cause them to become dry and brittle. Trim them regularly.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week29tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week27tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
		            <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Now that you're in the homestretch of your pregnancy (hurray!), your body will be kicking into even higher gear when it comes to practicing for the big day — delivery day, that is. Meaning you're likely to feel Braxton Hicks contractions a bit more often than you’re used to.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===30&& 
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week30tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week30tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Also growing at a quick pace these days? Baby's brain. Until now, its surface was smooth — but now, your fetus' brain is taking on those characteristic grooves and indentations. The reason for the different appearance: Those wrinkles allow for an increased amount of brain tissue — a necessary change as your baby prepares to develop street smarts for life outside your womb.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week30tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week30tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>About 75 percent of pregnant women suffer from puffy ankles and feet. Besides wearing comfy shoes, you can relieve your swollen tootsies by taking breaks and putting your feet up. You deserve it!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>ven if you managed to conquer constipation earlier in your pregnancy, you may have to contend with a return to more sluggish bowels — thank your ever-expanding uterus, which is putting pressure on them. Remember that fluids and fiber are your friends, as are probiotics, which you can find in yogurt.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week30tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week30tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Before you treat those fine lines on your face, read the fine print on your skin care products’ ingredient labels. If they contain vitamin A (retinoids) or BHA (beta hydroxy acid or salicylic acid), you might need to bid it a fond farewell for a while — though check with your doctor to be sure. Most practitioners will green-light products containing AHA (alpha hydroxy acid), but do ask first. And keep in mind that AHA products can make your already sun-sensitive pregnancy skin even more vulnerable to the damaging effects of the sun’s rays. Sunscreen with an SPF of 30 or higher is your friend, so wear it daily, even when there are more clouds than sun. Not only will you protect your skin, you’ll ward off wrinkles more effectively than any cream at any price.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===31&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week31tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week31tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your baby's brain is working overtime these days, developing faster than ever. Connections between individual nerve cells — he's got to make billions of them! — are being made at a super fast rate. He's now processing information, tracking light and perceiving signals from all five senses. Sure, your baby may not be able to smell too much right now, though he likely can smell and taste different foods you eat through the amniotic fluid as well as catch a whiff of some beauty products you use (which also wind up in the amniotic fluid). Lucky for you and your baby, yours will be one of the very first scents he breathes in, a scent that will quickly become his very favorite.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week31tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week31tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>This is another common third trimester woe, caused by a constellation of other conditions, such as leg cramps, heartburn, frequent urination and plain old anxiety, with a dash of pregnancy hormones. If tension keeps you tossing and turning all night, talk it out with friends or your partner during the day.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week31tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week31tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>It may not be just pregnancy weight. If you notice sudden facial swelling, talk to your doctor. Along with changes in vision and headaches, swelling can be a sign of preeclampsia, a disorder that generally develops late in pregnancy, after week 20. It’s characterized by a sudden onset of high blood pressure, severe swelling of the hands and face, and signs that some organs may not be working normally, including protein in the urine.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===32&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week32tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week32tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>At 32 weeks pregnant, you're likely feeling tapping and squirming instead of your baby's signature rocking and rolling. That's because, while comfy, your baby is a bit tight for exercise space right now — she’s actually back to a curled-up position (you try standing up in those cramped quarters!). Between 32 and 38 weeks, your baby will also probably settle into the head-down, bottoms-up presentation in your pelvis in preparation for birth. That's because the fetus' head fits better at the bottom of your inverted, pear-shaped uterus, plus it’s easier during childbirth if your baby comes out head first. Fewer than 5 percent of babies prefer the bottom-down (or breech) position by full-term — so don't worry if your little bean hasn't assumed the head-down position yet. There's still a good chance she'll flip before birth, even in the tight confines of your uterus.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week32tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week32tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>That swelling belly is getting itchier and itchier, as the skin stretches and dries out. If slathering on creams and moisturizers doesn’t help, try calamine or some other type of anti-itch lotion that soothes more stubborn cases. Or add oatmeal to your bath and have a soak in warm — not hot — water.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your growing uterus is cramping your bowels, making them sluggish and irregular. Get some regular exercise — anything helps, from brisk walks to prenatal yoga — and drink up!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week32tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week32tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Keep a dream journal! Your night visions may be extra trippy these days, thanks to pregnancy hormones. Pregnancy dreams and daydreams tend to peak during the third trimester as sleep is more disrupted and you may increasingly find yourself imagining what life with a new baby will be like.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===33&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week33tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week33tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If your uterus had eyes, here's what you'd see: your fetus acting more and more like a baby, with his eyes closing during sleep and opening while awake. And because those uterine walls are becoming thinner, more light penetrates the womb, helping your baby differentiate between day and night. Now if only baby can remember that difference on the outside!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Good news! Your baby has reached an important milestone about now: He's got his own immune system. Antibodies are being passed from you to your little one as he continues to develop his fetal immune system, which will come in handy once he's outside the womb and fending off all sorts of germs.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week33tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week33tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>A bigger belly means a shift in your center of gravity and that can spell clumsiness. What to do about it? Slow down and take it easy — rushing will only make you clumsier.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>That foggy brain could clue you in to your baby’s sex (though it could be an old wives' tale too). Women pregnant with girls sometimes report being more forgetful than moms-to-be who are carrying boys, though the science is dicey.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week33tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week33tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Yes, weight training increases muscle tone — and even prevents bone loss — but during pregnancy it's important to lighten up. Lifting heavy weights increases pressure in your body, which causes you to hold your breath and could compromise blood flow to the uterus. Plus, loosened ligaments could lead to injury. Your best bet: Switch to light weights and do more reps — or just wait on weights until after delivery.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===34&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week34tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week34tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The waxy, cheesy coating on your baby’s skin — vernix — begins to thicken this week before it starts shedding in the next few weeks.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If your baby is a boy, then this week the testicles are making their way down from the abdomen to the scrotum. Some full-term baby boys — roughly 3 to 4 percent — are born with undescended testicles, but they usually make the trip down sometime before the first birthday. About 30 percent of preterm boys are born with undescended testicles, too.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week34tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week34tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>As you get bigger and your body tissues accumulate and retain fluids, you may experience swelling in your ankles, feet and fingers. Slipping into comfy slippers at the end of the day can help soothe your swollen tootsies.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you’re not worrying about delivery day, then leg cramps and trips to the bathroom are banishing any chance of shut-eye. Try lulling yourself to sleep with a warm bath and a cup of warm milk and read a book or listen to music instead of watching TV or going online, both of which activities can keep you awake.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week34tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week34tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Love a good soak in the tub? Then dive right in, darling. There's no truth to the myth that dirty bath water can enter the cervix and cause an infection. Do check that the temperature is right though: It should be warm, not hot. And just be careful when you climb inside — at 34 weeks pregnant, your bigger belly may affect your sense of balance, and not being able to see your feet can make you even more prone to spills. Make sure your tub has a non-skid surface, and take your time getting in and out.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===35&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week35tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week35tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your baby's once skinny arms and legs are now quite plump…and irresistibly, squeezably soft.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>By this week, almost all babies are positioned with their heads facing down toward your cervix, ready for their trip out.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Something else that's developing at a mind-boggling pace these day: your baby's brainpower. Luckily, the part that surrounds that amazing brain — the skull — remains soft. And for good reason: A soft skull will allow your baby to squeeze more easily through the birth canal.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week35tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week35tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>These days, there are plenty of safe and effective medical options that can take some of the labor out of labor and delivery. It is possible to create a birth plan that ensures little or no pain while you remain awake during the entire process and are able to greet your newborn as he emerges. Make sure you know about all your labor pain relief options, including local anesthesia and breathing techniques. You may change your mind about the particulars as the time nears.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week35tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week35tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The pregnancy hormones estrogen and progesterone can make the mucus membranes in your nose swell, making you feel all stuffy. (Little wonder this symptom is known as pregnancy rhinitis.) To combat congestion, buy a box of nasal strips that open up your nostrils. If your nose is extra dry, dab a little petroleum jelly in each nostril.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===36&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week36tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week36tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>By now, many of your baby's systems are pretty mature, at least in baby terms, and just about ready for life on the outside. Blood circulation, for instance, has been perfected and your baby's immune system has developed enough to protect your little one from infections outside the womb. Others, however, still need a few finishing touches. Once such notable example: digestion — which actually won't be fully mature until sometime after birth. Why? Inside her little gestational cocoon, your baby has relied on the umbilical cord for nutrition, meaning that the digestive system, though developed, hasn't been operational. It will take the first year or two to bring it up to speed.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week36tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week36tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The discharge from your vagina may be increasing and getting thinner. Don’t be shocked if you notice the mucous is pinkish, red or brownish after you’ve had sex or a vaginal examination. That just means that your cervix, which is sensitive now and may be starting to dilate, has been bruised.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your belly might feel as if it’s stretched to the breaking point by now. Creams containing cocoa butter or vitamin E can soothe that itchy abdomen and bring some relief. Better still, get your partner to rub it on your belly and do some bonding with the baby underneath!</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week36tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week36tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Chase your protein with an adequate supply of pyridoxine. Never heard of it? It's the vitamin also known as B6, and its function is to help your body and baby use all that protein to do its cell-building job. Think of it this way: If protein is the brick, B6 is the mortar. And B6 plays an especially big role in the development of baby’s brain and nervous system. You'll find B6 in prenatal vitamins and foods like bananas, avocados, wheat germ, brown rice, bran, soybeans, oatmeal, potatoes, tomatoes, spinach, watermelon and meat. See, there's overlap with your protein sources, making your job even easier.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===37&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week37tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week37tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your baby is likely sucking his thumb a lot these days in preparation for his feeding sessions after birth.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your baby has developed more dexterity in his fingers. He can now grasp onto smaller objects, like a toe or his nose.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If your baby were born this week, he’d still be early term but will be full-term by week 39. He’s practicing for his grand entrance by inhaling and exhaling amniotic fluid, blinking and turning from side to side.</Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week37tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week37tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>There are so many things to keep track of now that it’s no wonder you’re walking around in a fog. Is the camera charged and packed? Do you have a baby outfit washed and ready to bring to the hospital? How many dinners are stocked in the freezer? Post reminders around the house and on your computer so you won’t forget anything important.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week37tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week37tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Fewer than 5 percent of babies arrive on their due date, so don’t assume you have three weeks to get through your to-do list and get the nursery set up. Focus on the bigger tasks, like assembling the crib — it takes longer than you think — arranging the changing table stocked with diapers and wipes, and carrying in the rocking or glider chair if you’re planning on nursing (or just snuggling). Make sure to get help with any of the heavy lifting from your partner or a close friend or family member. Don’t go crazy, though. You have enough to do — and your baby won’t care what color the walls are painted.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===38&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week38tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week38tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>At 38 weeks pregnant, all systems are almost go! As you prepare for baby's ETA, she's getting ready too, big-time, and continues to shed vernix and lanugo. Your baby is also swallowing amniotic fluid, some of which winds up in her intestines, where it — along with other shed cells, bile and waste products — will turn into your baby's first bowel movement (meconium) and perhaps your first diaper change. Her lungs are still maturing and producing more and more surfactant, a substance that prevents the air sacs in the lungs from sticking to each other once she starts to breathe. Most other changes this week are small but important: She's continuing to add fat and fine-tune her brain and nervous system — that way, she can deal with all the stimulation that awaits her once she makes her entrance into the world.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week38tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week38tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Vaginal discharge can be tinged pink or brown as the blood vessels in the cervix rupture during dilation and effacement. Once your underwear or toilet paper has that hint of color, it could mean you’ll be face-to-face with your baby sooner rather than later.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>hink of loose bowel movements as nature’s way of making enough room for the baby to emerge. So if you’re having diarrhea this week, it may mean that labor is imminent (yay!). Drink lots of water and eat lightly — broth, toast and iced fruit pops are the way to go now. Skip fatty foods or anything that’s loaded with insoluble fiber.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week38tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week38tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Have visions of yourself, newly delivered domestic goddess, whipping up  easy and delicious meals in those postpartum weeks? Dream on. Cooking will be the last thing on your mind or your to-do list during those first few weeks — or even months — after delivery. To avoid eating cereal for dinner every night, plan ahead with the help of a partner, other relatives and friends. Stock your freezer with individually packaged, simple heat-and-serve options. Label everything carefully, so you won't be left with UFOs (unidentified frozen objects). Good candidates for the freezer include hearty soups, stews, casseroles and mini meatloafs. Or if you love to bake, stash away several trays of bran muffins — trust us, they'll come in handy. Now’s also the time to find some good takeout spots, if you haven’t already.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===39&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week39tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week39tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Heard that babies cry a lot? There's definitely truth to that rumor — as you'll find out soon enough, usually in the middle of the night. But what you may not have heard is that tiny babies don't produce tiny tears when they cry, since their tear ducts aren't fully open for business yet. While you'll be consoling your crying baby right from the get-go, it won't be until sometime after the first month that you'll be wiping tears off those chubby cheeks.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week39tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week39tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Your heartburn may be at its peak at this point. Don't worry, relief is around the corner when you deliver. For now, limit triggers like spicy food.s and caffeine and don't eat too much in one sitting.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Another sign that labor is near — your amniotic sac breaks and fluid trickles out. But don’t worry about your water breaking while you’re standing in the grocery checkout line. Despite what you’ve seen in movies, most women are in labor and in the hospital by the time their water breaks. If yours does happen to break ahead of time, call your practitioner.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week39tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week1tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If your complexion needs a boost, or if you're just trying to pass the time while you wait for your baby's arrival, treat yourself to an at-home facial mask. One simple method is to take a cup of plain yogurt and add a few key ingredients according to your skin type: avocado and honey for dry skin, strawberries and lemon juice for oily skin. For maximum benefit, steam your face for five minutes before applying, and leave the mixture on for 20 minutes.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===40&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week40tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week40tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>The first thing you're likely to look for when your new arrival makes that dramatic — and possibly fashionably late — entrance: proof positive that your baby is actually a boy or a girl. That major mystery solved once and for all, you'll also notice that baby, besides being cute as can be, is wearing a little leftover travel dust consisting of blood, vernix, lanugo and amniotic fluid. From your baby's perspective, you'll look a bit blurry — at birth, babies' central vision is still developing — but that's okay. Just be sure to say hello to your new arrival, since your baby will very likely recognize the sound of your voice and your partner's.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week40tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week40tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Although you won’t feel your cervix opening or thinning out, it is probably happening this week. Dilation is measured in centimeters and effacement in percentages; after an internal exam, your practitioner will probably give you the measurements. The cervix will continue to dilate and efface through early and active labor.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>As tempting as it is to try herbal supplements or other over-the-counter sleep aids, don't. Instead, ask your partner for a relaxing massage.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week40tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week40tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Don't have the energy for a full sweat session? Do a mini workout. Turn from side to side, slowly twisting at the waist, letting your arms swing freely. You can also clench your butt and hold for a count of two, then release. Try doing 15 or 20 arm swings and butt clenches — it'll make the time pass and tone your muscles in the process.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===41&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week41tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week41tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>It seems like your baby has opted for a late checkout, quite a popular option judging by the numbers. Fewer than 5 percent of babies are born on their actual due dates — and around 10 percent decide to overstay their welcome in Hotel Uterus. Remember, too, that most of the time an overdue baby isn't overdue at all — it's just that the due date was miscalculated. That's okay — there's still work to be done at 41 weeks pregnant.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Another big milestone ahead for your baby will be taking that first breath of air. In fact, the first breath at birth requires considerably more effort than any breath your baby will ever take again. That's because the tiny air sacs in the lungs need to be inflated for the first time so that they expand to fully do their job of breathing for a lifetime.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week41tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week41tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
		            <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>If you can’t seem to find the oomph to get off the couch these days, that’s understandable — after all, your late load is weighing you down. On the other hand, you may notice a sudden burst of energy now and then. If you’ve felt an immediate urge to, say, organize the nursery closet, that’s the nesting instinct kicking into high gear, which is nature’s way of helping you to prepare for your impending arrival.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week41tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week41tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>While you're counting down the hours before your baby is born, find ways to loosen up those tense muscles. Besides, it may be a while before you can relax again. Tense your facial muscles for five seconds, then relax them. Do the same with your neck muscles, then your shoulders, working your way down your body. And remember to breathe — slowly. Need more help relaxing? Listen to your favorite soothing tunes — i.e. no heavy metal — and start deep breathing again.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
        {
            active===42&&
            <>
              <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week42tab1"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'lightpink'}}>
                <TouchableOpacity onPress={()=> [setActiveIn("week42tab1"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>BABY</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>What makes your baby weigh more or less than the newborn in the next bassinet? Several factors come into play, including your own diet and weight, both before and during pregnancy. Other factors that can play a role include your prenatal health, your own birth weight, genetics, whether your baby is a boy or a girl (boys tend to weigh more, though it varies), whether this is your firstborn (they tend to be smaller than subsequent children), whether your baby is a twin or triplet (multiples often weigh less than singletons), and your baby’s race (white babies can sometimes weigh more than Black American, Asian American or Native American infants).</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week42tab2"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(200,140,250)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week42tab2"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>MOM</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>You've just pushed out some 7 pounds of baby, give or take — and things are going to be tender in that region for a little while. So it’s only natural that you might be stressed about having to push out that first postpartum poop too. And don’t be surprised if your first stool after delivery is a bit slow in coming. For one thing, your stomach muscles, which help you go, have become stretched and weakened. For another, your bowel itself may be reluctant to get back to work right away — especially if those muscles were traumatized during childbirth (give me a break, will ya?). Aside from that, but just as powerful, is the fear factor. You're probably worried about splitting your stitches (don't worry, you won't), aggravating your hemorrhoids, experiencing intense pain (again, so soon?!!), or being embarrassed, especially if you're still sharing a room in the hospital. But the sooner you get your bowels moving again, the better all around.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
              <View style={{overflow:'hidden',width:'98%',height:activeIn==="week42tab3"&&toggled===true?700:100,borderRadius:10,marginTop:'-3%',backgroundColor:'rgb(170,220,170)'}}>
              <TouchableOpacity onPress={()=> [setActiveIn("week42tab3"),setToggled(!toggled)]}>
                  {
                    toggled?
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleDown} size={24} color="black"/>
                    </View>
                    :
                    <View style={{width:40,height:40,borderRadius:40,borderColor:'lightgrey',borderWidth:1,marginTop:"1%",marginLeft:'85%',alignItems:'center',justifyContent:'center',backgroundColor:'ghostwhite'}}>
                      <FontAwesomeIcon style={{margin:'2%'}} icon={faAngleUp} size={24} color="black"/>
                    </View>
                  }
                </TouchableOpacity>
                <Text style={{margin:'2%',color:'white',fontSize:20,fontWeight:600}}>USEFUL TIPS</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}>Black, blue and bloodshot eyes are typical of brand new moms, but this postpartum symptom is harmless and temporary, the result of straining the muscles in your face when pushing. The good news is that the bruising and redness will disappear and your eyes will return to normal in a matter of weeks or even days. What might linger a little longer is puffiness around the eyes if you have it. Fatigue (which will soon become your middle name) and extra bodily fluids (still left over from pregnancy) are to thank for that postpartum symptom.</Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
                <Text style={{margin:'4%',color:'white',fontSize:16,fontWeight:500}}></Text>
              </View>
            </View>
            </>
        }
      </View>
    </View>
  )
}

export default Milestone
