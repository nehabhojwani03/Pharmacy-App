import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Alert,
    useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PharmacyCard from '../components/PharmacyCard';
import SecondaryHeader from '../components/SecondaryHeader';
import UploadSection from '../components/UploadSection';
import ContinueButton from '../components/ContinueButton';
import { uploadToCloudinary } from '../utils/cloudinary';

const FileUploadScreen = ({ navigation }) => {
    const { width } = useWindowDimensions();

    const [prescriptions, setPrescriptions] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

    const handleUpload = async (fileUri) => {
        try {
            setIsUploading(true); // Show loader
            const response = await uploadToCloudinary(fileUri);

            if (response.secure_url) {
                setPrescriptions((prev) => [...prev, response.secure_url]);
                Alert.alert('Success', 'File uploaded successfully!');
            }
        } catch (error) {
            Alert.alert('Upload Failed', 'There was an error uploading the file. Please try again.');
            console.error(error);
        } finally {
            setIsUploading(false); // Hide loader
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <SecondaryHeader title="Mohali" />

            {/* Carousel Section */}
            <Text style={[styles.title, { fontSize: width * 0.05 }]}>Pharmacy Nearby</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.carousel}
                contentContainerStyle={{ paddingHorizontal: width * 0.05 }}
            >
                <PharmacyCard
                    image={require('../assets/pharmacy.jpg')}
                    name="Path Lab Pharmacy"
                    distance="5 km"
                    rating={4.5}
                />
                <PharmacyCard
                    image={require('../assets/pharmacy.jpg')}
                    name="24/7 Pharmacy"
                    distance="2 km"
                    rating={4.8}
                />
                <PharmacyCard
                    image={require('../assets/pharmacy.jpg')}
                    name="Green Cross Pharmacy"
                    distance="7 km"
                    rating={4.2}
                />
                <PharmacyCard
                    image={require('../assets/pharmacy.jpg')}
                    name="Wellness Pharmacy"
                    distance="3.5 km"
                    rating={4.6}
                />
            </ScrollView>

            {/* Upload Section */}
            <UploadSection onUpload={handleUpload} />

            {/* Show Loading Indicator */}
            {isUploading && <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />}

            {/* Continue Button */}
            <ContinueButton
                onPress={() => navigation.navigate('Reminder', { prescriptions })}
                disabled={prescriptions.length === 0 || isUploading}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    carousel: {
        marginBottom: 5,
    },
    loader: {
        marginVertical: 10,
    },
});

export default FileUploadScreen;
