import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const Terms = () => {
  return (
    <View style={styles.container}>
        <ScrollView>
            <Text style={styles.header}>Terms and Conditions</Text>
            <Text style={styles.text}>
                Welcome to Marternity Care App! These terms and conditions outline the rules and regulations for the use of our application.
            </Text>
            <Text style={styles.subheader}>1. Acceptance of Terms</Text>
            <Text style={styles.text}>
                By accessing or using Marternity Care App, you agree to abide by these terms and conditions. If you do not agree with any part of these terms, please do not use our application.
            </Text>
            <Text style={styles.subheader}>2. Intellectual Property</Text>
            <Text style={styles.text}>
                The content, features, and functionality of Marternity Care App are owned by us or our collaborators. This includes but is not limited to text, graphics, logos, images, and software. Reproduction or distribution without our permission is prohibited.
            </Text>
            <Text style={styles.subheader}>3. Privacy</Text>
            <Text style={styles.text}>
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal information.
            </Text>
            <Text style={styles.subheader}>4. Content Disclaimer</Text>
            <Text style={styles.text}>
                The information provided within Marternity Care App is for general informational purposes only. We do not provide medical advice. Consult with qualified healthcare professionals for medical guidance.
            </Text>
            <Text style={styles.subheader}>5. Limitation of Liability</Text>
            <Text style={styles.text}>
                Marternity Care App and its creators shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of our application.
            </Text>
            <Text style={styles.subheader}>6. Governing Law</Text>
            <Text style={styles.text}>
                These terms and conditions are governed by and construed in accordance with the laws of the Philippines. Any disputes arising from the use of Marternity Care App shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
            </Text>
            <Text style={styles.signature}>Last Updated: August 25, 2023</Text>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  signature: {
    fontSize: 14,
    marginTop: 30,
    textAlign: 'right',
  },
});

export default Terms;