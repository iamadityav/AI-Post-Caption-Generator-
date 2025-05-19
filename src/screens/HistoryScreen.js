import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const HistoryScreen = ({ navigation }) => {
  const [historyData, setHistoryData] = useState([
    {
      id: '1',
      caption: '✨ Creating memories one click at a time!',
      hashtags: ['#Memories', '#PhotoVibes', '#LifeCaptured'],
    },
    {
      id: '2',
      caption: '📸 Stay wild, stay creative.',
      hashtags: ['#InstaMood', '#CreativeSoul'],
    },
    {
      id: '3',
      caption: '🏞 Wander often, wonder always.',
      hashtags: ['#TravelLove', '#AdventureCalls'],
    },
  ]);

  const handleCopy = (caption, hashtags) => {
    const textToCopy = `${caption}\n${hashtags.join(' ')}`;
    Alert.alert('Copied!', textToCopy);
    // 📌 You can use Clipboard.setString(textToCopy) here to actually copy — with react-native-clipboard/clipboard
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.historyItem} onPress={() => handleCopy(item.caption, item.hashtags)}>
      <Text style={styles.caption}>{item.caption}</Text>
      <Text style={styles.hashtags}>{item.hashtags.join('  ')}</Text>
      <Icon name="copy-outline" size={22} color="#3498db" style={styles.copyIcon} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="History"
        onBackPress={() => navigation.goBack()}
      />
      <FlatList
        data={historyData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30, paddingHorizontal: 20, paddingTop: 16 }}
      />
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 1,
    position: 'relative',
  },
  caption: {
    fontSize: 16,
    color: '#222',
    marginBottom: 6,
  },
  hashtags: {
    fontSize: 15,
    color: '#2c7',
  },
  copyIcon: {
    position: 'absolute',
    right: 14,
    top: 14,
  },
});
