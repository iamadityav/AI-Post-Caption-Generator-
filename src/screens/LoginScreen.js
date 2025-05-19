import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../theme/colors';

const images = [
  require('../images/One.jpg'),
  require('../images/Two.jpg'),
  require('../images/three.jpg'),
  require('../images/four.jpg'),
];

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });
const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

// Auto-scroll images every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    // Calculate next index with wraparound
    const nextIndex = (currentIndex + 1) % images.length;
    
    // Update the current index
    setCurrentIndex(nextIndex);
    
    // Scroll to the next image
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
  }, 3000); // 3 seconds interval

  // Clear interval on component unmount
  return () => clearInterval(interval);
}, [currentIndex]);


  return (
    <View style={styles.container}>vg
      {/* Header */}
      <Text style={styles.title}>AI Content Creator</Text>
      <Text style={styles.subtitle}>Trending Posts around the world</Text>

      {/* Image Carousel */}
      <View style={styles.imageContainer}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} resizeMode="cover" />
          )}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
        />
        <View style={styles.pagination}>
          {images.map((_, idx) => (
            <View
              key={idx}
              style={idx === currentIndex ? styles.activeDot : styles.inactiveDot}
            />
          ))}
        </View>
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcome}>Welcome Back</Text>
      <Text style={styles.loginHint}>Sign in to continue creating captivating content</Text>

      {/* Input Fields */}
      <TextInput
        placeholder="user@example.com"
        placeholderTextColor={Colors.textSecondary}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.textSecondary}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot?</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => { navigation.navigate("Home") }}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={30} color={Colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google-plus" size={20} color={Colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="linkedin" size={20} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  imageContainer: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: width - 48, // 24 padding on each side
    height: 160,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    backgroundColor: Colors.background,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accent,
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.card,
    marginHorizontal: 4,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginTop: 8,
  },
  loginHint: {
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  input: {
    backgroundColor: Colors.card,
    padding: 14,
    borderRadius: 12,
    color: Colors.textPrimary,
    marginBottom: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  forgotText: {
    position: 'absolute',
    right: 14,
    top: 16,
    color: Colors.accent,
    fontSize: 12,
  },
  signInButton: {
    backgroundColor: Colors.accent,
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 20,
    marginTop:50
  },
  signInText: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    backgroundColor: Colors.card,
    padding: 12,
    borderRadius: 50,
  },
});
