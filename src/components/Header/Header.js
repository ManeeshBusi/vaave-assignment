/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {getKeyword, toggleSearch} from '../../store/users';
import {styles} from './headerStyle';

const Header = ({name}) => {
  const navigate = useNavigation();

  const dispatch = useDispatch();

  const backHandler = () => {
    if (name === 'search') {
      dispatch(toggleSearch());
    } else {
      navigate.goBack();
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* Left Container/Image */}
      <View style={styles.subContainer}>
        {name !== 'home' && (
          <TouchableOpacity style={{paddingLeft: 8}} onPress={backHandler}>
            <Text>
              <Icon name="chevron-left" size={30} />
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {name !== 'search' ? (
        <>
          {/* Center Container */}
          <View style={[styles.subContainer, styles.imgContainer]}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/vaave.png')}
            />
          </View>

          {/* Right Container */}
          <View style={[styles.subContainer, {alignItems: 'flex-end'}]}>
            {name === 'home' && (
              <TouchableOpacity
                onPress={() => {
                  dispatch(toggleSearch());
                }}>
                <Text style={{paddingRight: 8}}>
                  <Icon name="search" size={30} />
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      ) : (
        <>
          {/* Search box */}
          <View style={styles.searchBox}>
            <TextInput
              style={styles.searchInput}
              autoFocus={true}
              placeholder="Search User"
              onChangeText={newText => dispatch(getKeyword(newText))}
            />
            <TouchableOpacity>
              <Text>
                <Icon name="search" size={20} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.empty} />
        </>
      )}
    </View>
  );
};

export default Header;
