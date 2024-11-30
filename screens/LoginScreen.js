import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Alert,
} from 'react-native';
import LoginInputField from '../components/LoginInputField';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import WaveLoader from '../components/WaveLoader'; // Import the WaveLoader component

const LoginScreen = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to control the loader visibility

  // MockAPI Signup Data Endpoint
  const usersUrl = 'https://674ac41e71933a4e885363b2.mockapi.io/api/v1/users'; // Endpoint storing user data from signup

  // Handle Login Button Press
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    try {
      // Fetch all users from MockAPI
      const response = await axios.get(usersUrl);

      if (response.status === 200) {
        const users = response.data;

        // Check if the entered email and password match any user
        const user = users.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
          // If a match is found, show the loader
          setIsLoading(true); // Show loader
          setTimeout(() => {
            setIsLoading(false); // Hide loader after 2 seconds
            navigation.navigate('Home'); // Navigate to Home screen
          }, 2000);
        } else {
          // If no match is found, show an error
          Alert.alert('Error', 'Invalid email or password. Please try again.');
        }
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <WaveLoader /> {/* Show the wave loader */}
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.05 }]}>
      {/* LOGIN Header */}
      <Text style={[styles.headerText, { marginBottom: height * 0.09, marginTop: height * 0.02 }]}>
        LOGIN
      </Text>

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

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={[styles.forgotText, { fontSize: width * 0.04 }]}>
          Forgot Password !
        </Text>
      </TouchableOpacity>

      {/* Register Section */}
      <Text style={[styles.registerText, { fontSize: width * 0.04 }]}>
        Don't Have an Account?{' '}
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.registerLink}>Click here to register</Text>
        </Pressable>
      </Text>

      {/* Login Button */}
      <TouchableOpacity
        style={[
          styles.loginButton,
          { marginTop: height * 0.1, height: height * 0.07 },
        ]}
        onPress={handleLogin} // Call the handleLogin function
      >
        <Text style={[styles.loginButtonText, { fontSize: width * 0.045 }]}>
          LOGIN
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  forgotText: {
    color: '#04238E',
    textAlign: 'right',
    marginBottom: 30,
  },
  registerText: {
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  registerLink: {
    color: '#04238E',
    textDecorationLine: 'underline',
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

export default LoginScreen;
