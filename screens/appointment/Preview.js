import react, {useState} from "react";
import { View, Text, } from "react-native";


class Preview{

    Preview(date, time, purpose){
        this.date = date;
        this.time = time;
        this.purpose = purpose;
    }

}



export default Preview = (date, time, purpose) => {
    console.log(date,time,purpose);
    return(
      <View style={{width:400,height:600,zIndex:1,backgroundColor:'red',alignSelf:'center'}}>
        <View>
          <Text style={{}}>{date}</Text>
        </View>
        <View style={{}}>
          <Text>{time}</Text>
        </View>
        <View style={{}}>
          <Text>{purpose}</Text>
        </View>
        <TouchableOpacity style={{}}>
          <Text>proceed</Text>
        </TouchableOpacity>
      </View>
    )
  }