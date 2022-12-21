import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Card from '../Card/Card';
import Field from '../Field/Field';
import {styles} from './userPreviewStyle';

const UserPreview = ({userId, username, name, email}) => {
  const navigate = useNavigation();
  const img = require('../../../assets/images/zoro.png');

  function userPressHandler() {
    navigate.navigate('User', {userId: userId, img: img});
  }

  return (
    <Card>
      {/*  eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flex: 1}}>
        <Pressable style={styles.pressContainer} onPress={userPressHandler}>
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={img} />
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{name}</Text>
            <Field name="Username" value={`@${username}`} />
          </View>
        </Pressable>
      </View>
    </Card>
  );
};

export default UserPreview;
