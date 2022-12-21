/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {styles} from './underTextStyle';
import {View, Pressable, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const UnderText = ({username, userId}) => {
  const navigate = useNavigation();
  const img = require('../../../assets/images/zoro.png');

  const pressHandler = () => {
    navigate.navigate('User', {userId: userId, img: img});
  };

  return (
    <View style={styles.under}>
      <Pressable style={styles.user} onPress={pressHandler}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={img} />
        </View>

        <Text style={styles.username}>{username}</Text>
      </Pressable>

      <Text style={{fontSize: 16}}>4 min</Text>
    </View>
  );
};

export default UnderText;
