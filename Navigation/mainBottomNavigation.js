import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen1 from './BottomNav/Screen1';
import Screen2 from './BottomNav/Screen2';
import Screen3 from './BottomNav/Screen3';
import Screen4 from './BottomNav/Screen4';
import Screen5 from './BottomNav/Screen5';
import ProfileDisplay from '../src/screens/ProfileDisplay/ProfileDisplay';

const Tab = createBottomTabNavigator();

const MainBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      backBehavior="none"
      tabBarOptions={{
        labelStyle: {fontSize: 1},
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Screen 1"
        component={Screen1}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{width: 22, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen 2"
        component={Screen2}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/heart.png')}
              style={{width: 22, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen 3"
        component={Screen3}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{width: 13, height: 22}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen 4"
        component={Screen4}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/message.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Screen 5"
        component={Screen5}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{width: 20, height: 20}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomNavigation;
