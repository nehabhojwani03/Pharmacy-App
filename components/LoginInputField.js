import React from 'react';
import { View, Text, TextInput, StyleSheet, useWindowDimensions, Image } from 'react-native';

const LoginInputField = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  value,
  onChangeText,
  icon, // Icon source passed as a prop
}) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.inputWrapper, { paddingHorizontal: width * 0.03 }]}>
      <Image source={icon} style={styles.icon} />
      {/* Placeholder positioned on the border */}
      <Text style={[styles.placeholder, { left: width * 0.05 }]}>{placeholder}</Text>
      <TextInput
        style={[styles.input, { paddingLeft: width * 0.12 }]} // Add padding to make room for the icon
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 15,
    width: 24,
    height: 24,
    tintColor: '#000', // Optionally set color for the icon
  },
  placeholder: {
    position: 'absolute',
    top: -12,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: '100%',
    paddingHorizontal: 10,
  },
});

export default LoginInputField;
