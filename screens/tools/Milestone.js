import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
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

  const renderItem = ({ item }) => (
    <View style={{width:'90%',height:100,alignContent:'center',alignSelf:'center',justifyContent:'center',backgroundColor:item.status==="pending"&& "grey" ||item.status==="approved"&& "green"|| item.status==="denied"&&"red",marginBottom:'1%'}}>
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
              <TouchableOpacity onPress={()=> setActive(1)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>1</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(2)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>2</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(3)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>3</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(4)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>4</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(5)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>5</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10,}}>
              <TouchableOpacity onPress={()=> setActive(6)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>6</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(7)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>7</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(8)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>8</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(9)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>9</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(10)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>10</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(11)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>11</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(12)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>12</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(13)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>13</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(14)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>14</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(15)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>15</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(16)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>16</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(17)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>17</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(18)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>18</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(19)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>19</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(20)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>20</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(21)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>21</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(22)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>22</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(23)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>23</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(24)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>24</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(25)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>25</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(26)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>26</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(27)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>27</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(28)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>28</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(29)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>29</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(30)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>30</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(31)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>31</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(32)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>32</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(33)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>33</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(34)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>34</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(35)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>35</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(36)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>36</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(37)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>37</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(38)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>38</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(39)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>39</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(40)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>40</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(41)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>41</Text>
              </TouchableOpacity>
            </View>
            <View style={{margin:10}}>
              <TouchableOpacity onPress={()=> setActive(42)} style={{width:40,height:40,borderRadius:40,backgroundColor:'pink',alignItems:'center',justifyContent:'center'}}>
                <Text>42+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{width:'100%',height:'50%'}}>
        {
          active===1&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
              {
          active===1&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
              {
          active===2&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===3&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===4&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===5&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===6&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===7&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===8&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===9&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===10&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===1&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===1&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===1&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===1&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
                      {
          active===1&&
          <View style={{width:'100%',height:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'98%',height:100,backgroundColor:'red'}}>
              <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'blue'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={{width:'98%',height:100,backgroundColor:'green'}}>
            <TouchableOpacity onPress={()=> alert("clicked")}>
                <FontAwesomeIcon icon={faAngleUp} size={24} color="white"/>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    </View>
  )
}

export default Milestone






