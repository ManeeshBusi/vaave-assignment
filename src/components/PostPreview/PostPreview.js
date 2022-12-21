import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {axiosInstance} from '../../constants/api';
import {postImg} from '../../constants/dummyData';
import {styles} from './postPreviewStyle';

import Card from '../Card/Card';
import UnderText from '../UnderText/UnderText';

const PostPreview = ({userId, postId, title}) => {
  const [user, setUser] = useState('');

  const navigate = useNavigation();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axiosInstance.get(`/users/${userId}`);
        setUser(res.data);
      } catch (e) {
        console.log(e);
      }
    }

    getUser();
  }, [userId]);

  const pressHandler = () => {
    navigate.navigate('Post', {
      postId: postId,
      userId: userId,
      username: user.username,
      img: postImg,
    });
  };

  return (
    <Card>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <Pressable style={{flexDirection: 'row'}} onPress={pressHandler}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{uri: postImg}} />
        </View>

        <View style={styles.detailsContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <UnderText username={user.username} userId={userId} />
        </View>
      </Pressable>
    </Card>
  );
};

export default PostPreview;
