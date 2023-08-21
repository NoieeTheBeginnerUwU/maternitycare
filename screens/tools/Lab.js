import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
//Date time picker

//Import pages
import Childimmunization from '../Immunization/Childimmunization';
import Nochild from '../Immunization/Nochild';

const Lab = () => {

  const nav = useNavigation();
  const [hasData, setHasData] = useState(false);

  return (
    <ScrollView style={{width: '100%', height:'100%'}}>
      {hasData? 
        <Childimmunization/>:<Nochild/>
      }
    </ScrollView>
  )
}

export default Lab 