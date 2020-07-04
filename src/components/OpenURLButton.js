import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <TouchableOpacity style={styles.link} onPress={handlePress}>{children}</TouchableOpacity>;
};

export default OpenURLButton;

const styles = StyleSheet.create({
    link: {
        backgroundColor: "white",
        borderWidth: 0,
    }
});