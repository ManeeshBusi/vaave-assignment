import React from 'react';
import {StyleSheet, View} from 'react-native';

const Card = ({children}) => {
  return <View style={styles.rootContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 24,
    borderRadius: 8,
    elevation: 6,
    backgroundColor: 'white',
  },
});
