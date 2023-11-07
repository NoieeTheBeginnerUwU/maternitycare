import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text, ScrollView, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Watch() {
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState("recommended");


  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'ghostwhite'}}>
      <View style={{width:'100%',height:'7%',backgroundColor:'rgb(30,30,30)',flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:10,marginTop:0}}>
        <FontAwesomeIcon icon={faList} color="white" size={20} style={{margin:10}}/>
        <Text style={{color:'white',margin:10,fontSize:15,fontWeight:500}}>Category</Text>
        <ScrollView horizontal={true} style={{width:'80%',height:'100%',backgroundColor:'rgb(30,30,30)'}}>
          <TouchableOpacity onPress={()=> setActive("prenatal")}>
            <View style={{width:70,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Prenatal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("nutrition")}>
            <View style={{width:70,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Nutrition</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("antinatal")}>
            <View style={{width:70,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Antenatal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("food")}>
            <View style={{width:70,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Food</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("preconception")}>
            <View style={{width:100,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Preconception</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("birth")}>
            <View style={{width:70,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Birth</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("fashion")}>
            <View style={{width:70,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Fashion</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("classes")}>
            <View style={{width:70,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Classes</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("labtests")}>
            <View style={{width:90,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Lab Tests</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("vlogs")}>
            <View style={{width:70,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Vlogs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("postpartum")}>
            <View style={{width:90,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Post Partum</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> setActive("mentalhealth")}>
            <View style={{width:90,height:30,borderRadius:10,margin:10,backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Text>Mental Health</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={{width:'100%',height:'93%'}}>
      {
        active==="recommended"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"kfI8mHXmFRE"}
            />
          </ScrollView>
        </View>
      }
            {
        active==="prenatal"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"UA-Tk9qlG9A"}
            />
          </ScrollView>
        </View>
      }
                  {
        active==="antinatal"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"iEU975b6j-0"}
            />
          </ScrollView>
        </View>
      }
      {
        active==="nutrition"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"3GTK6MLPJ9g"}
            />
          </ScrollView>
        </View>
      }
            {
        active==="food"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"VRFVp9zlwOI"}
            />
          </ScrollView>
        </View>
      }
                  {
        active==="preconception"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"7lpmHDCYFd0"}
            />
          </ScrollView>
        </View>
      }
                       {
        active==="birth"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"gnAjuf3IVF8"}
            />
          </ScrollView>
        </View>
      }
                             {
        active==="fashion"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"tZkzkvsVvE4"}
            />
          </ScrollView>
        </View>
      }
                                   {
        active==="fashion"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"tZkzkvsVvE4"}
            />
          </ScrollView>
        </View>
      }
                                         {
        active==="classes"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"y8-TXNdB4J8"}
            />
          </ScrollView>
        </View>
      }
                                               {
        active==="labtests"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"8Gfe8b9v5Z8"}
            />
          </ScrollView>
        </View>
      }
                                                     {
        active==="vlogs"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"-NsqnZcm1G4"}
            />
          </ScrollView>
        </View>
      }
                                                           {
        active==="postpartum"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"dHdh3eNZnW8"}
            />
          </ScrollView>
        </View>
      }
                                                                 {
        active==="mentalhealth"&&
        <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',}}>
          <ScrollView style={{width:'100%',height:'100%'}}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={"DjnfqMnufcQ"}
            />
          </ScrollView>
        </View>
      }
      </View>
    </View>
  );
}
