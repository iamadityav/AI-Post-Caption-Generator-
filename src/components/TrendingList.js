import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TrendingList = ({ items, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemCard}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrendingList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  itemCard: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 12,
  },
  itemText: {
    fontSize: 14,
    color: '#34495e',
    fontWeight: '500',
  },
});
