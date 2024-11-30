import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  Pressable,
} from 'react-native';
import Header from '../components/Header';
import ButtonCard from '../components/ButtonCard';
import WaveLoader from '../components/WaveLoader';
import AnimatedImageContainer from '../components/AnimatedImageContainer';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(true); 

  // Animation values
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial opacity set to 1 (visible)

  useEffect(() => {
    // Create the animation that blinks once
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0, // Fade out
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade in
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(); // Start the animation once when the component mounts
  }, [fadeAnim]);


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {/* Button Cards */}
        <View style={styles.buttonRow}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <ButtonCard title="Questions" imageSource={require('../assets/questions.png')} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <ButtonCard
              title="Reminders"
              imageSource={require('../assets/reminder.png')}
              onPress={() => navigation.navigate('Reminder')}
            />
          </Animated.View>
        </View>
        <View style={styles.buttonRow}>
          <Animated.View style={{ opacity: fadeAnim }}>
            <ButtonCard title="Messages" imageSource={require('../assets/messages.png')} />
          </Animated.View>
          <Animated.View style={{ opacity: fadeAnim }}>
            <ButtonCard title="Calendar" imageSource={require('../assets/calendar.png')} />
          </Animated.View>
        </View>

        {/* Upload Prescription Section */}
        <View style={[styles.uploadSection, { marginHorizontal: width * 0.05 }]}>
          <Text style={[styles.uploadTitle, { fontSize: width * 0.05 }]}>UPLOAD PRESCRIPTION</Text>
          <Text style={[styles.uploadSubtext, { fontSize: width * 0.035 }]}>
            Upload a Prescription and Tell Us What you Need. We do the Rest. !
          </Text>
          <View style={styles.discountRow}>
            <Text style={[styles.discountText, { fontSize: width * 0.035 }]}>
              Flat 25% OFF ON MEDICINES
            </Text>
            <TouchableOpacity
              style={[
                styles.orderButton,
                {
                  paddingVertical: height * 0.012,
                  paddingHorizontal: width * 0.05,
                },
              ]}
            >
              <Text style={[styles.orderButtonText, { fontSize: width * 0.03 }]}>
                ORDER NOW
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pink Square */}
        <View style={[styles.pinkSquare, { height: height * 0.2, width: width * 0.5 }]} />

        {/* Animated Images */}
        <AnimatedImageContainer
          imageSource={require('../assets/cardone.png')}
          direction="left"
        />
        <AnimatedImageContainer
          imageSource={require('../assets/cardtwo.png')}
          direction="right"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  uploadSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    paddingLeft: 3,
    borderRadius: 10,
  },
  uploadTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uploadSubtext: {
    color: '#555',
    marginBottom: 15,
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountText: {
    fontWeight: 'bold',
    color: '#333',
  },
  orderButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pinkSquare: {
    backgroundColor: '#F5E1E9',
    position: 'absolute',
    bottom: '15%',
    borderRadius: 10,
  },
});

export default HomeScreen;
