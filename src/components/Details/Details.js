import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './detailsStyle';

const Details = ({name, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>{name}</Text>
      <View style={styles.body}>{children}</View>
    </View>
  );
};

export default Details;
