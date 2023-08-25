import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Privacy Policy</Text>
        <Text style={styles.text}>
          Last Updated: [Date]
        </Text>
        <Text style={styles.subheader}>1. Information We Collect</Text>
        <Text style={styles.text}>
          We may collect certain information from you when you use Maternity Care App:
          - Personal information, such as name, email, and contact details.
          - Pregnancy-related information voluntarily shared within the app.
          - Usage data, including interactions, preferences, and device information.
        </Text>
        <Text style={styles.subheader}>2. How We Use Your Information</Text>
        <Text style={styles.text}>
          We use the collected information for purposes that include:
          - Providing personalized content and features.
          - Enhancing user experience and improving our app.
          - Communicating with you regarding updates and support.
          - Aggregating non-identifiable data for analytics and research.
        </Text>
        <Text style={styles.subheader}>3. Data Sharing and Security</Text>
        <Text style={styles.text}>
          We may share information with:
          - Collaborators, such as the birthing center, for improved services.
          - Service providers assisting with app functionality.
          - Legal authorities when required by law or to protect our rights.
          We implement reasonable security measures to protect your data, but no method is completely secure.
        </Text>
        <Text style={styles.subheader}>4. Your Choices</Text>
        <Text style={styles.text}>
          You can:
          - Update or delete your personal information.
          - Opt-out of non-essential communications.
          - Disable cookies through your browser settings.
        </Text>
        <Text style={styles.subheader}>5. Children's Privacy</Text>
        <Text style={styles.text}>
          Maternity Care App is not intended for children under the age of 13. We do not knowingly collect information from children.
        </Text>
        <Text style={styles.subheader}>6. Changes to this Policy</Text>
        <Text style={styles.text}>
          We may update this privacy policy. Changes will be posted on this page. Please review periodically.
        </Text>
        <Text style={styles.signature}>For questions or concerns, please contact us at maternitycareapp@gmail.com or daetrhuIII@gmail.com.</Text>
      </View>
    </ScrollView>
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
  },
});

export default PrivacyPolicy;