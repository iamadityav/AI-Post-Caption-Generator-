import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CaptionCard = ({ caption, hashtags, onSave }) => {
  const copyToClipboard = () => {
    Clipboard.setString(`${caption}\n${hashtags}`);
    ToastAndroid.show('Copied to Clipboard!', ToastAndroid.SHORT);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.captionText}>{caption}</Text>
      <Text style={styles.hashtagText}>{hashtags}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={copyToClipboard}>
          <Icon name="copy-outline" size={20} color="#3498db" />
          <Text style={styles.actionText}>Copy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={onSave}>
          <Icon name="bookmark-outline" size={20} color="#27ae60" />
          <Text style={styles.actionText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CaptionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginVertical: 10,
    elevation: 2,
  },
  captionText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  hashtagText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  actionText: {
    marginLeft: 6,
    color: '#3498db',
    fontSize: 14,
  },
});
