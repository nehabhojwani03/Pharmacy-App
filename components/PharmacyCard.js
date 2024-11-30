import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

const PharmacyCard = ({ image, name, distance, rating }) => {
    const { width } = useWindowDimensions(); // For responsive sizing

    return (
        <View style={[styles.cardContainer, { width: width * 0.45 }]}>
            <Image source={image} style={styles.cardImage} />
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardSubtitle}>{distance} Away</Text>
                <Text style={styles.cardRating}>⭐ {rating} (120 reviews)</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 20,
        height: '60%',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginRight: 15,
    },
    cardImage: {
        width: '100%',
        height: 120, // Fixed height for the image
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    textContainer: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#000',
        marginBottom: 5,
    },
    cardRating: {
        fontSize: 14,
        color: '#000', // Star rating color
    },
});

export default PharmacyCard;
