import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../src/screens/splashScreen/splashScreen';
import SignUp from '../src/screens/SignUp/SignUp';
import SignInMobile from '../src/screens/SignUp/SignInMobile';
import SignUpMobile from '../src/screens/SignUp/signUpMobile';
import SignUpMobile1 from '../src/screens/SignUp/signUpMobile1';
import VerificationCode from '../src/screens/SignUp/verificationCode';
import UserName from '../src/screens/User details/userName';
import UserDOB from '../src/screens/User details/userDOB';
import UserEmail from '../src/screens/User details/userEmail';
import UserGender from '../src/screens/User details/userGender';
import UserJob from '../src/screens/User details/userJob';
import GovtRegisterID from '../src/screens/govtRegister.js/govtRegisteration';
import AboutPrivacy from '../src/screens/aboutPrivacy/privacy';
import SignEmail from '../src/screens/SignInEmail/signEmail';
import Gender from '../src/screens/genderScreens/gender';
import Gender1 from '../src/screens/genderScreens/gender1';
import Gender2 from '../src/screens/genderScreens/gender2';
import Gender3 from '../src/screens/genderScreens/gender3';
import Gender4 from '../src/screens/genderScreens/gender4';
import AddPhoto from '../src/screens/AddPhoto/addPhoto';
import MainBottomNavigation from './mainBottomNavigation';
import MatchProfile from '../src/screens/MatchProfile';
import ProfileDisplay from '../src/screens/ProfileDisplay/ProfileDisplay';
import Upload from '../src/screens/UploadID/upload';
import Selfie from '../src/screens/Selfie/selfie';
import Edit from '../src/screens/EditProfile/edit';
import Events from '../src/screens/Events';
import Discover from '../src/screens/Discover';
import WeekendEvent from '../src/screens/WeekendEvents';
import WednesdayLoveNight from '../src/screens/WednesdayLoveNight';
import PaymentMethods from '../src/screens/PaymentMethods';
import BookingConfirm from '../src/screens/BookingConfirm';
import EventTicket from '../src/screens/EventTicket';
import EventTimer from '../src/screens/EventTimer';
import TicketSold from '../src/screens/TicketSold';
import ShareLink from '../src/screens/ShareLink';
import JoinParty from '../src/screens/JoinParty';
import SendTicket from '../src/screens/SendTicket';
import WeeklyEventLocation from '../src/screens/WeeklyEventLocation';
import WeeklyEventMap from '../src/screens/WeeklyEventMap';
import Liked from '../src/screens/Liked';
import Match from '../src/screens/Match';
import Chat from '../src/screens/Chat';
import ChatQNA from '../src/screens/ChatQNA/index';
import SignUpEmail from '../src/screens/SignUpEmail';

const Stack = createStackNavigator();

function MainStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignInMobile" component={SignInMobile}/>
        <Stack.Screen name="SignUpMobile" component={SignUpMobile} />
        <Stack.Screen name="SignUpMobile1" component={SignUpMobile1} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods}/>
        <Stack.Screen name="UserName" component={UserName} />
        <Stack.Screen name="UserDOB" component={UserDOB} />
        <Stack.Screen name="UserEmail" component={UserEmail} />
        <Stack.Screen name="UserGender" component={UserGender} />
        <Stack.Screen name="UserJob" component={UserJob} />
        <Stack.Screen name="GovtRegisterID" component={GovtRegisterID} />
        <Stack.Screen name="AboutPrivacy" component={AboutPrivacy} />
        <Stack.Screen name="SignEmail" component={SignEmail} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Gender1" component={Gender1} />
        <Stack.Screen name="Gender2" component={Gender2} />
        <Stack.Screen name="Gender3" component={Gender3} />
        <Stack.Screen name="Gender4" component={Gender4} />
        <Stack.Screen name="AddPhoto" component={AddPhoto} />
        <Stack.Screen name="MatchProfile" component={MatchProfile}/>
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="Selfie" component={Selfie} />
        <Stack.Screen name="WednesdayLoveNight" component={WednesdayLoveNight}/>
        <Stack.Screen name="WeeklyEventLocation" component={WeeklyEventLocation}/>
        <Stack.Screen name="WeeklyEventMap" component={WeeklyEventMap}/>
        <Stack.Screen name="SignUpEmail" component={SignUpEmail}/>

        <Stack.Screen name="MainBottomNavigation" component={MainBottomNavigation}/>

        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="ProfileDisplay" component={ProfileDisplay} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigation;
