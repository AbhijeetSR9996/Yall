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
//import BottomStack from '../Navigation/BottomNav';

const Stack = createStackNavigator();

function BottomStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ProfileDisplay">

        <Stack.Screen name="ProfileDisplay" component={ProfileDisplay} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="WeekendEvent" component={WeekendEvent} />
        <Stack.Screen name="Discover" component={Discover} />
        <Stack.Screen name='BookingConfirm' component={BookingConfirm}/>
        <Stack.Screen name="Edit" component={Edit} />


      </Stack.Navigator>

  );
}

export default BottomStack;
