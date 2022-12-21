import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './fieldStyle';

const Field = ({name, value}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Field;
