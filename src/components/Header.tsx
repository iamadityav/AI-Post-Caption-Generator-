import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../theme/colors';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = true, 
  onBackPress 
}) => {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={onBackPress}
        >
          <Icon name="arrow-left" size={28} color={Colors.red} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightSpace} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: Colors.background,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
    marginTop:30
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    flex: 1,
    textAlign: 'center',
  },
  rightSpace: {
    width: 40, // Balance the layout with the back button
  },
});

export default Header;