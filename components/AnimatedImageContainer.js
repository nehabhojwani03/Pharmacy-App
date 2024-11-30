import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Image } from 'react-native';

const AnimatedImageContainer = ({ imageSource, direction }) => {
  const animation = useRef(new Animated.Value(direction === 'left' ? -300 : 300)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const imageStyle = {
    transform: [{ translateX: animation }],
  };

  return (
    <Animated.View style={imageStyle}>
      <Image source={imageSource} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%', // Adjust based on your image dimensions
    height: 150, // Adjust height as per design
    resizeMode: 'contain',
    marginVertical: 10,
  },
});

export default AnimatedImageContainer;
