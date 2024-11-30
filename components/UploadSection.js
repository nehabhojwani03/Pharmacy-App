import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const UploadSection = ({ onUpload }) => {
    const tiltAnim = useRef(new Animated.Value(0)).current;
    const bounceAnim = useRef(new Animated.Value(0)).current;

    // Tilt animation
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(tiltAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
                Animated.timing(tiltAnim, { toValue: -1, duration: 500, useNativeDriver: true }),
            ])
        ).start();
    }, [tiltAnim]);

    // Bounce animation
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(bounceAnim, { toValue: -10, duration: 400, useNativeDriver: true }),
                Animated.timing(bounceAnim, { toValue: 0, duration: 400, useNativeDriver: true }),
            ])
        ).start();
    }, [bounceAnim]);

    const pickFile = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
            });
            if (result[0]?.uri) {
                onUpload(result[0]?.uri);
            }
        } catch (error) {
            if (!DocumentPicker.isCancel(error)) {
                console.error('File pick error:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload Prescription</Text>
            <Text style={styles.subtitle}>Upload a prescription to find a pharmacy near you.</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={pickFile}>
                    <Animated.Image
                        source={require('../assets/file.png')}
                        style={[
                            styles.icon,
                            {
                                transform: [
                                    { rotate: tiltAnim.interpolate({ inputRange: [-1, 1], outputRange: ['-10deg', '10deg'] }) },
                                ],
                            },
                        ]}
                    />
                    <Text style={styles.buttonText}>Upload Link</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={pickFile}>
                    <Animated.Image
                        source={require('../assets/upload.png')}
                        style={[styles.icon, { transform: [{ translateY: bounceAnim }] }]}
                    />
                    <Text style={styles.buttonText}>Upload File</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center', 
        padding: 20 
    },
    title: {
         fontWeight: 'bold',
          fontSize: 28,
           marginBottom: 10 
    },
    subtitle: { 
        textAlign: 'center', 
        color: '#000', 
        marginBottom: 20
     },
    buttons: {
         flexDirection: 'row', 
         justifyContent: 'space-between', 
         width: '100%',
         borderWidth: 1,
         borderRadius: 10,
         borderColor: '#000',

     },
    button: {
         alignItems: 'center', 
         justifyContent: 'center', 
         width: '45%', height: 80,
        backgroundColor: '#fff',
         elevation: 2, 
          borderRadius: 10
     },
    icon: { 
        width: 32, 
        height: 32, 
        marginBottom: 5, 
        resizeMode: 'contain' 
    },
    buttonText: { 
        fontSize: 14 
    },
});

export default UploadSection;
