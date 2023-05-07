import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStack from './HomeStack';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import HomeImage from '../images/Home';
import {Buy, Path33961, Profile} from '../images';

const Home = ({}) => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false, tabBarIcon: () => <HomeImage />}}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteScreen}
          options={{headerShown: false, tabBarIcon: () => <Path33961 />}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{headerShown: false, tabBarIcon: () => <Profile />}}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{headerShown: false, tabBarIcon: () => <Buy />}}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
