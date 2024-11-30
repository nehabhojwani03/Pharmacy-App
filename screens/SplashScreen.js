import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const backgroundColor = useRef(new Animated.Value(0)).current; // Controls background color
  const textOpacity = useRef(new Animated.Value(1)).current; // Controls text opacity (fade-out effect)

  useEffect(() => {
    // Start animation sequence
    Animated.parallel([
      // Change background color
      Animated.timing(backgroundColor, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      // Fade out the text
      Animated.timing(textOpacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      // Navigate to LoginScreen after animation
      navigation.replace('Login');
    });
  }, [navigation]);

  // Directly interpolate background color
  const interpolatedBackgroundColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#5391B4'],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: interpolatedBackgroundColor },
      ]}
    >
      <View style={styles.circle}>
        <Animated.Text style={[styles.text, { opacity: textOpacity }]}>
          Healthcare
        </Animated.Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#5391B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
