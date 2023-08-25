import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.text}>
            We are a group of passionate student developers who have come together to create a meaningful impact on maternal care in collaboration with Daet RHU III. Our goal is to leverage technology to enhance the birthing experience for mothers, families, and healthcare professionals.
        </Text>
        <Text style={styles.text}>
            Our journey began with a shared vision: to provide accessible and user-friendly tools that empower expectant mothers with information and support throughout their pregnancy journey. Through close collaboration with the Daet RHU III team, we've developed a comprehensive system that caters to the diverse needs of soon-to-be mothers.
        </Text>
        <Text style={styles.text}>
            This project has been a labor of love, combining our technical skills with a deep understanding of the emotional and physical challenges that come with pregnancy. We are proud to contribute to the well-being of mothers and families, and we're excited to continue refining and expanding our system to make a positive impact in the world of maternal care.
        </Text>
        <Text style={styles.text}>
            We're immensely grateful to Daet RHU III for their collaboration, guidance, and support throughout this journey. Together, we are shaping the future of maternal care and paving the way for better experiences for all those involved.
        </Text>
        <Text style={styles.signature}>The Student Developer Team</Text>
        <View style={styles.students}> 

        </View>
        <Text style={styles.signature}>The RHU III Team</Text>
        <View style={styles.students}> 

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'white'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'pink',
    margin:'4%'
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    margin:'5%',
  },
  signature: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color:"pink"
  },
  students: {
    width:'100%',
    height:500,

  }
});

export default About;