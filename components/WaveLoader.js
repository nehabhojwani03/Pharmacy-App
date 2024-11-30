import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';

const WaveLoader = () => {
  const darkWaveAnim = useRef(new Animated.Value(0)).current; // Animation for dark wave
  const lightWaveAnim = useRef(new Animated.Value(-50)).current; // Animation for light wave

  useEffect(() => {
    // Loop animations for the dark wave
    Animated.loop(
      Animated.timing(darkWaveAnim, {
        toValue: 50, // Shift wave to create motion
        duration: 3000, // Duration of one complete animation
        useNativeDriver: true,
      })
    ).start();

    // Loop animations for the light wave
    Animated.loop(
      Animated.timing(lightWaveAnim, {
        toValue: 50, // Shift wave to create motion
        duration: 3000, // Duration of one complete animation
        useNativeDriver: true,
      })
    ).start();
  }, [darkWaveAnim, lightWaveAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        {/* Dark Wave */}
        <Animated.Image
          source={require('../assets/Wave1.png')} // Replace with dark wave image
          style={[
            styles.waveImage,
            {
              transform: [{ translateX: darkWaveAnim }], // Animate horizontally
            },
          ]}
          resizeMode="cover"
        />
        {/* Light Wave */}
        <Animated.Image
          source={require('../assets/Wave2.png')} // Replace with light wave image
          style={[
            styles.waveImage,
            {
              transform: [{ translateX: lightWaveAnim }], // Animate horizontally
            },
          ]}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust background as needed
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden', // Keep waves inside the circle
    backgroundColor: '#e0f7fa', // Optional background color
    borderColor: '#47C2C4',
    borderWidth: 5,
    position: 'relative',
  },
  waveImage: {
    position: 'absolute',
    width: '200%', // Ensure smooth flow by extending the width
    height: '100%',
    top: 0, // Keep aligned with the top of the circle
    left: -50, // Offset initial position for better flow
  },
});

export default WaveLoader;
