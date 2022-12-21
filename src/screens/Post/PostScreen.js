import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Card from '../../components/Card/Card';
import CommentCard from '../../components/CommentCard/CommentCard';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Main from '../../components/Main/Main';
import UnderText from '../../components/UnderText/UnderText';
import {axiosInstance} from '../../constants/api';
import {styles} from './postStyle';

const PostScreen = ({route}) => {
  const {postId, username, userId, img} = route.params;

  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        const res1 = await axiosInstance.get(`/posts/${postId}`);
        const res2 = await axiosInstance.get(`/posts/${postId}/comments`);
        setPost(res1.data);
        setComments(res2.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getPosts();
  }, [postId]);

  return (
    <>
      <Header />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Main>
            <ScrollView>
              <Card>
                <View style={styles.imgContainer}>
                  <Image style={styles.img} source={{uri: img}} />
                </View>

                <View style={styles.heading}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{post.title}</Text>
                  </View>
                  <UnderText username={username} userId={userId} />
                </View>

                <View style={styles.contentContainer}>
                  <Text style={styles.content}>{post.body}</Text>
                </View>
              </Card>

              {/*  eslint-disable-next-line react-native/no-inline-styles */}
              <View style={{paddingHorizontal: 6}}>
                <Text style={styles.commentHead}>
                  Comments ({comments.length})
                </Text>
                {comments.map(comment => (
                  <View key={comment.id}>
                    <CommentCard comment={comment} />
                  </View>
                ))}
              </View>
            </ScrollView>
          </Main>
        </>
      )}
    </>
  );
};

export default PostScreen;
