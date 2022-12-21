import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Post, User} from './src/screens';
import {Provider} from 'react-redux';

import store from './src/store/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.rootContainer}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              // contentStyle: {backgroundColor: '#a9f5d9'},
            }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'All Posts'}}
            />
            <Stack.Screen
              name="Post"
              component={Post}
              options={{title: 'Post'}}
            />
            <Stack.Screen
              name="User"
              component={User}
              options={{title: 'User'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
