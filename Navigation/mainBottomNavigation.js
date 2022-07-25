import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import BottomStack from './BottomStack';

import Screen1 from './BottomNav/Screen1';
import Screen2 from './BottomNav/Screen2';
import Screen3 from './BottomNav/Screen3';
import Screen4 from './BottomNav/Screen4';
import Screen5 from './BottomNav/Screen5';
import ProfileDisplay from '../src/screens/ProfileDisplay/ProfileDisplay';
import Events from '../src/screens/Events';
import Edit from '../src/screens/EditProfile/edit';
import WeekendEvent from '../src/screens/WeekendEvents';
import Discover from '../src/screens/Discover';
import BookingConfirm from '../src/screens/BookingConfirm/index';
import Liked from '../src/screens/Liked/index';

const Tab = createBottomTabNavigator();

const MainBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      backBehavior="none"
      tabBarOptions={{
        labelStyle: {fontSize: 0},
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}>
        {/* <Tab.Screen
        name="Profile"
        component={BottomStack}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{width: 22, height: 20}}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="ProfileDisplay"
        component={ProfileDisplay}
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
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/heart.png')}
              style={{width: 22, height: 20}}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Edit"
        component={Edit}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/heart.png')}
              style={{width: 22, height: 20}}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/heart.png')}
              style={{width: 22, height: 20}}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Events"
        component={Events}
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
        name="WeekendEvent"
        component={WeekendEvent}
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
        name="BookingConfirm"
        component={BookingConfirm}
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
