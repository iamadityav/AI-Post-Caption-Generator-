import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Profile"
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@email.com</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="settings-outline" size={22} color="#3498db" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="information-circle-outline" size={22} color="#3498db" />
          <Text style={styles.optionText}>App Info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="log-out-outline" size={22} color="#e74c3c" />
          <Text style={[styles.optionText, { color: '#e74c3c' }]}>Logout</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 14,
    borderWidth: 3,
    borderColor: '#3498db',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginBottom: 24,
  },
  optionsContainer: {
    width: '80%',
    marginTop: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 14,
    elevation: 1,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
});
