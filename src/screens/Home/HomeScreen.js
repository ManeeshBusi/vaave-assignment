import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Main from '../../components/Main/Main';
import PostPreview from '../../components/PostPreview/PostPreview';
import UserPreview from '../../components/UserPreview/UserPreview';
import {axiosInstance} from '../../constants/api';
import {getUsers} from '../../store/users';

const HomeScreen = ({navigation}) => {
  // states
  const [posts, setPosts] = useState([]);
  const [userList, setUserList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  //dispatch
  const dispatch = useDispatch();
  const openSearch = useSelector(state => state.users.search);
  const keyword = useSelector(state => state.users.keyword);
  const users = useSelector(state => state.users.value);

  // flatlist item component
  const renderPostItem = itemData => {
    const item = itemData.item;
    return (
      <PostPreview postId={item.id} title={item.title} userId={item.userId} />
    );
  };

  const renderUserItem = itemData => {
    const item = itemData.item;
    return (
      <UserPreview
        username={item.username}
        name={item.name}
        email={item.email}
        userId={item.id}
      />
    );
  };

  // useeffect to get list of posts and users. Runs once when component is mounted
  useEffect(() => {
    async function getList() {
      try {
        setLoading(true);
        const res1 = await axiosInstance.get('/posts');
        const res2 = await axiosInstance.get('/users');
        setPosts(res1.data);
        setUserList(res2.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getList();
  }, []);

  // useeffect for dispatch. sets global state and stores user list
  // couldnt put it in first useeffect because userlist will be dependency and cause
  // infinite rerenders
  useEffect(() => {
    dispatch(getUsers(userList));
  });

  useEffect(() => {
    console.log('USERS', users.length);
    if (users.length !== 0) {
      const data = users.filter(
        user =>
          user.username.toLowerCase().includes(keyword.toLowerCase()) ||
          user.name.toLowerCase().includes(keyword.toLowerCase()),
      );
      console.log('users');
      setFiltered(data);
    }
  }, [keyword, users]);

  return (
    <>
      <Header name={openSearch ? 'search' : 'home'} />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <Main newStyle={{paddingTop: 8}}>
            {openSearch ? (
              <FlatList
                data={filtered}
                keyExtractor={item => item.id}
                renderItem={renderUserItem}
              />
            ) : (
              <FlatList
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderPostItem}
              />
            )}
          </Main>
        </>
      )}
    </>
  );
};

export default HomeScreen;
