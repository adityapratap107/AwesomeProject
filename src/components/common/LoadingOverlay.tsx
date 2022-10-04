import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const LoadingOverlay = ({message}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.messageText}>{message}</Text>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontSize: 18,
  },
});
