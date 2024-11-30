import React, {useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Image, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SecondaryHeader = ({ title }) => {
    const navigation = useNavigation(); 
    const bounceAnim = useRef(new Animated.Value(0)).current;

    // Bounce animation
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(bounceAnim, { toValue: -10, duration: 400, useNativeDriver: true }),
                Animated.timing(bounceAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
            ])
        ).start();
    }, [bounceAnim]);


    return (
        <View style={styles.header}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assets/Arrow.png')} // Replace with your arrow image path
                    style={styles.backArrow}
                />
            </Pressable>
            <Animated.Image
                        source={require('../assets/location.png')}
                        style={[styles.location, { transform: [{ translateY: bounceAnim }] }]}
                    />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Vertically center items
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff', // Optional: Set background color
    },
    backButton: {
        marginRight: 10, // Add space between arrow and location icon
    },
    backArrow: {
        width: 30,
        height: 30,
        tintColor: '#333',
    },
    location: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginRight: 10, // Add space between location icon and text
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
});

export default SecondaryHeader;
