import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Card from '../../components/Card/Card';
import Details from '../../components/Details/Details';
import Field from '../../components/Field/Field';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Main from '../../components/Main/Main';
import {axiosInstance} from '../../constants/api';
import {styles} from './userStyle';

const UserScreen = ({route}) => {
  const {userId, img} = route.params;

  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/users/${userId}`);

        setUser(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    getUser();
  }, [userId]);

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
              <View style={styles.topContainer}>
                <View style={styles.imgContainer}>
                  <Image style={styles.img} source={img} />
                </View>
                <View style={styles.nameContainer}>
                  <Text style={styles.fullname}>{user.name}</Text>
                  <Text style={styles.username}>{user.username}</Text>
                </View>
              </View>

              <Card>
                <Details name="Contact">
                  <Field name="Email" value={user.email} />
                  <Field name="Website" value={user.website} />
                </Details>
                <Details name="Company">
                  <Field
                    name="Name"
                    value={user.company ? user.company.name : ''}
                  />
                  <Field
                    name="CatchPhrase"
                    value={user.company ? user.company.catchPhrase : ''}
                  />
                </Details>
              </Card>
            </ScrollView>
          </Main>
        </>
      )}
    </>
  );
};

export default UserScreen;
