import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Bar and Logo grouped together */}
      <View style={styles.leftGroup}>
        <Image source={require('../assets/bar.png')} style={styles.leftImage} />
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Circle with Microphone */}
      <TouchableOpacity style={styles.micContainer}>
        <Image source={require('../assets/mic.png')} style={styles.micIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between left group and recorder icon
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center', // Align bar and logo vertically
  },
  leftImage: {
    width: 30, // Adjust size as needed
    height: 30,
    resizeMode: 'contain',
    marginRight: 10, // Spacing between bar and logo
  },
  logo: {
    width: 80, // Adjust size as needed
    height: 40,
    resizeMode: 'contain',
  },
  micContainer: {
    width: 50, // Circle diameter
    height: 50,
    borderRadius: 25, // Makes the container a perfect circle
    borderWidth: 1,
    borderColor: '#000', // Light gray border color
    justifyContent: 'center',
    alignItems: 'center',
  },
  micIcon: {
    width: 25, // Adjust mic size as needed
    height: 25,
    tintColor: '#000', // Black color for the mic icon
    resizeMode: 'contain',
  },
});

export default Header;
