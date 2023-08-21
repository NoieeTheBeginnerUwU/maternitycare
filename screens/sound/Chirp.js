import React, {useState, useEffect, useRef} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
//Import Loading
import Loading from '../animations/Loading';
import AnimatedLottieView from 'lottie-react-native';
import { lotties } from '../../style';

export default function Chirp() {
  const [sound, setSound] = useState();
  const [loading, setLoading] = useState(false);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/chirp.wav')
    );
    setSound(sound);

    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    },2500)
    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
          ;
        }
      : undefined;
  }, [sound]);

  return (
      <View style={styles.container}>
        {
          loading?
          <Loading/>
          :
          <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />
          </View>
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});