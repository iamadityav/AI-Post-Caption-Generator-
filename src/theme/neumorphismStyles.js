import { StyleSheet } from 'react-native';
import Colors from './color';

const NeumorphismStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    shadowColor: Colors.softShadow,
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
  },

  innerShadow: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    shadowColor: Colors.hardShadow,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
  },

  softButton: {
    backgroundColor: Colors.lightGray,
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.softShadow,
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },

  softInput: {
    backgroundColor: Colors.lightGray,
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    shadowColor: Colors.hardShadow,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    color: Colors.textPrimary,
  },
});

export default NeumorphismStyle;
