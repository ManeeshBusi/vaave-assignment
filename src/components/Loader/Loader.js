import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
