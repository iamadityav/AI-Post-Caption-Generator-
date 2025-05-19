import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry = false }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor="#95a5a6"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  label: {
    fontSize: 14,
    color: '#2c3e50',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    borderRadius: 10,
    backgroundColor: '#fafafa',
    fontSize: 16,
    color: '#2c3e50',
  },
});
