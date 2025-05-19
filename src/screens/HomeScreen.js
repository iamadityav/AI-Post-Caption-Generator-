import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../theme/colors';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Home"
        showBackButton={false}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 80, paddingHorizontal: 20 }}>
      {/* Greeting */}
      <Text style={styles.greeting}>Good afternoon,</Text>
      <Text style={styles.username}>Alex</Text>

      {/* Creative Credits */}
      <View style={styles.creditsContainer}>
        <View>
          <Text style={styles.creditsLabel}>Creative Credits</Text>
          <Text style={styles.creditsLevel}>Level 3 Creator</Text>
        </View>
        <View style={styles.creditsValueContainer}>
          <Text style={styles.creditsValue}>750</Text>
          <TouchableOpacity>
          <Icon name="minus-circle" size={20} color={Colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Upload & Generate */}
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadBox}>
          <Icon name="upload-cloud" size={40} color={Colors.accent} />
          <Text style={styles.uploadText}>Upload image to generate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.generateButton}>
          <Text style={styles.generateText}>Generate Content</Text>
        </TouchableOpacity>
      </View>

      {/* Inspiration Feed */}
      <View style={styles.feedHeader}>
        <Text style={styles.feedTitle}>Inspiration Feed</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.latestButton}>
            <Text style={styles.filterTextActive}>Latest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popularButton}>
            <Text style={styles.filterTextInactive}>Popular</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feed Card */}
      <View style={styles.card}>
        {/* <Image
          source={require('../assets/feed-sample.png')} // Replace with your actual image
          style={styles.cardImage}
        /> */}
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Cosmic Dreams</Text>
          <Text style={styles.cardTags}>#Space #Galaxy #Stars</Text>
        </View>
        <TouchableOpacity style={styles.plusButton}>
          <Icon name="plus" size={20} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>
      </ScrollView>
      
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialIcons name="home" size={24} color={Colors.accent} />
          <Text style={styles.navButtonTextActive}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <MaterialIcons name="person" size={24} color={Colors.textSecondary} />
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('History')}
        >
          <MaterialIcons name="history" size={24} color={Colors.textSecondary} />
          <Text style={styles.navButtonText}>History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  username: {
    color: Colors.textSecondary,
    marginBottom: 20,
  },
  creditsContainer: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditsLabel: {
    color: Colors.textPrimary,
    fontSize: 14,
  },
  creditsLevel: {
    color: Colors.textSecondary,
    fontSize: 12,
  },
  creditsValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  creditsValue: {
    color: Colors.accent,
    fontSize: 22,
    fontWeight: 'bold',
  },
  uploadContainer: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: Colors.textSecondary,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadText: {
    color: Colors.textSecondary,
    marginTop: 10,
  },
  generateButton: {
    backgroundColor: Colors.accent,
    padding: 14,
    borderRadius: 50,
    alignItems: 'center',
  },
  generateText: {
    color: Colors.textPrimary,
    fontWeight: 'bold',
  },
  feedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  feedTitle: {
    color: Colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  latestButton: {
    backgroundColor: Colors.accent,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  popularButton: {
    backgroundColor: Colors.card,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  filterTextActive: {
    color: Colors.textPrimary,
  },
  filterTextInactive: {
    color: Colors.textSecondary,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardInfo: {
    padding: 14,
  },
  cardTitle: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardTags: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
  plusButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 8,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.card,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  navButtonText: {
    color: Colors.textSecondary,
    fontSize: 12,
    marginTop: 4,
  },
  navButtonTextActive: {
    color: Colors.accent,
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
  },
});
