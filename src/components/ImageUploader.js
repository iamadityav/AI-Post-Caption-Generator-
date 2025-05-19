import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const ImageUploader = ({ onImageSelected }) => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
      },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          setImageUri(uri);
          onImageSelected(uri); // pass to parent
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Icon name="image-outline" size={40} color="#bdc3c7" />
            <Text style={styles.placeholderText}>Tap to upload image</Text>
          </View>
        )}
      </TouchableOpacity
