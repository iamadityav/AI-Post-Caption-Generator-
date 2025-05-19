import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HashtagList = ({ hashtags }) => {
  return (
    <View style={styles.container}>
      {hashtags.map((tag, index) => (
        <View key={index} style={styles.hashtag}>
          <Text style={styles.hashtagText}>#{tag}</Text>
        </View>
      ))}
    </View>
  );
};

export default HashtagList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  hashtag: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  hashtagText: {
    fontSize: 14,
    color: '#2c3e50',
    fontWeight: '500',
  },
});
