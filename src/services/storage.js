import AsyncStorage from '@react-native-async-storage/async-storage';

// Save captions and hashtags list to local storage
export const saveToHistory = async (item) => {
  try {
    const history = await getHistory();
    const updatedHistory = [item, ...history];
    await AsyncStorage.setItem('@history', JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Error saving to history:', error);
  }
};

// Retrieve saved history from local storage
export const getHistory = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@history');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error fetching history:', error);
    return [];
  }
};

// Clear all history
export const clearHistory = async () => {
  try {
    await AsyncStorage.removeItem('@history');
  } catch (error) {
    console.error('Error clearing history:', error);
  }
};
