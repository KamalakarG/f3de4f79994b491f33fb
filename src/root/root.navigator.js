import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from '../store/store.js';
import Home from '../screens/Home.js';
import AsteroidDetails from '../screens/AsteroidDetails.js';

const HomeStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={Home} />
          <HomeStack.Screen
            name="Asteroid Details"
            component={AsteroidDetails}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default RootNavigator;
