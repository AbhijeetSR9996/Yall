import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileDisplay from '../src/screens/ProfileDisplay/index';
import Events from '../src/screens/Events';
import Edit from '../src/screens/EditProfile/edit';
import WeekendEvent from '../src/screens/WeekendEvents';
import Discover from '../src/screens/Discover';
import BookingConfirm from '../src/screens/BookingConfirm/index';
import Liked from '../src/screens/Liked/index';
import EventTicket from '../src/screens/EventTicket';
import EventTimer from '../src/screens/EventTimer';
import TicketSold from '../src/screens/TicketSold';
import ShareLink from '../src/screens/ShareLink';
import JoinParty from '../src/screens/JoinParty';
import SendTicket from '../src/screens/SendTicket';
import Match from '../src/screens/Match';
import Chat from '../src/screens/Chat';
import ChatQNA from '../src/screens/ChatQNA/index';
import ChatQNA2 from '../src/screens/ChatQNA2/index';
import ChatQuestion from '../src/screens/ChatQuestion';
import ManageProfile from '../src/screens/ManageProfile/index';
import EditAccount from '../src/screens/EditAccount';

const Tab = createBottomTabNavigator();

const MainBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      backBehavior="none"
      tabBarOptions={{
        labelStyle: { fontSize: 0 },
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      }}>


      <Tab.Screen
        name="ProfileDisplay"
        component={ProfileDisplay}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />



      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ChatQNA"
        component={ChatQNA}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ChatQNA2"
        component={ChatQNA2}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ChatQuestion"
        component={ChatQuestion}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/heart.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="WeekendEvent"
        component={WeekendEvent}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      />



      <Tab.Screen
        name="EventTicket"
        component={EventTicket}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      {/* <Tab.Screen
        name="EventTimer"
        component={EventTimer}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      /> */}

      {/* <Tab.Screen
        name="TicketSold"
        component={TicketSold}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/home.png')}
              style={{ width: 22, height: 20 }}
            />
          )
        }}
      /> */}

      <Tab.Screen
        name="ShareLink"
        component={ShareLink}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="JoinParty"
        component={JoinParty}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="SendTicket"
        component={SendTicket}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/glass.png')}
              style={{ width: 13, height: 22 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Match"
        component={Match}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/message_icon.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="BookingConfirm"
        component={BookingConfirm}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="Edit"
        component={Edit}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="ManageProfile"
        component={ManageProfile}
        options={{
          //tabBarStyle:{display:'none'},
          //tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      <Tab.Screen
        name="EditAccount"
        component={EditAccount}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{ width: 20, height: 20 }}
            />
          )
        }}
      />

      {/* <Tab.Screen
        name="BookingConfirm"
        component={BookingConfirm}
        options={{
          //tabBarStyle:{display:'none'},
          tabBarButton: () => null,
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/user2.png')}
              style={{width: 20, height: 20}}
            />
          )
        }}
      /> */}

    </Tab.Navigator>
  );
};

export default MainBottomNavigation;
