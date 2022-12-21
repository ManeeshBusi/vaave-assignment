import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';

const Main = ({children}) => {
  return <View style={styles.mainContainer}>{children}</View>;
};

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 18,
    // backgroundColor: 'skyblue',
  },
});
