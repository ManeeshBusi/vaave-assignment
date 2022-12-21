import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

const Main = ({children, newStyle}) => {
  return <View style={[styles.mainContainer, newStyle]}>{children}</View>;
};

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 8,
    // backgroundColor: 'skyblue',
  },
});
