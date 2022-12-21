import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './commentCardStyle';

const CommentCard = ({comment}) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.subject}>{comment.name}</Text>
        <Text style={styles.content}>{comment.body}</Text>
      </View>

      <View style={styles.usernameContainer}>
        <Text>- {comment.email}</Text>
      </View>
    </View>
  );
};

export default CommentCard;
