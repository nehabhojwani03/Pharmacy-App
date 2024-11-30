import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from 'react-native';
import LoginInputField from '../components/LoginInputField';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignupScreen = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // MockAPI Signup endpoint
  const signupUrl = 'https://674ac41e71933a4e885363b2.mockapi.io/api/v1/users'; // Replace <your-project-id> with your actual MockAPI project ID.

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    try {
      // Make the POST request to MockAPI using Axios
      const response = await axios.post(signupUrl, {
        email,
        password,
      });

      if (response.status === 201) {
        Alert.alert('Success', 'Signup successful!', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'), // Navigate to Home on success
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Signup failed. Please try again.');
    }
  };

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.05 }]}>
      {/* SIGNUP Header */}
      <Text style={[styles.headerText, { marginBottom: height * 0.09, marginTop: height * 0.02 }]}>SIGNUP</Text>

      {/* Logo Section */}
      <Text style={[styles.logoText, { marginBottom: height * 0.12 }]}>Healthcare</Text>

      {/* Input Fields */}
      <View>
        <LoginInputField
          placeholder="Email Id"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          icon={require('../assets/email.png')}
        />
        <View style={{ marginBottom: height * 0.03 }} />
        <LoginInputField
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          icon={require('../assets/lock.png')}
        />
      </View>

      {/* Signup Button */}
      <TouchableOpacity
        style={[
          styles.loginButton,
          { marginTop: height * 0.1, height: height * 0.07 },
        ]}
        onPress={handleSignup}
      >
        <Text style={[styles.loginButtonText, { fontSize: width * 0.045 }]}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#5391B4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
