import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ContinueButton = ({ onPress, title = "Continue", disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#41B592',
        borderRadius: 8,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: 20,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ContinueButton;
