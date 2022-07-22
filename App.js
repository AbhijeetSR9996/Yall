import React from 'react';
import MainStackNavigation from './Navigation/mainStackNavigation';
import MainBottomNavigation from './Navigation/mainBottomNavigation';
import BottomStack from './Navigation/BottomStack';

import SignInMobile from './src/screens/SignUp/SignInMobile';
import SplashScreen from './src/screens/splashScreen/splashScreen';
import SignUpMobile1 from './src/screens/SignUp/signUpMobile1';
import NumberCode from './src/screens/SignUp/verificationCode';
import UserName from './src/screens/User details/userName';
import UserDOB from './src/screens/User details/userDOB';
import VerificationCode from './src/screens/SignUp/verificationCode';
import UserEmail from './src/screens/User details/userEmail';
import UserGender from './src/screens/User details/userGender';
import GovtRegisterID from './src/screens/govtRegister.js/govtRegisteration';
import UserJob from './src/screens/User details/userJob';
import SignEmail from './src/screens/SignInEmail/signEmail';
import AboutPrivacy from './src/screens/aboutPrivacy/privacy';
import Gender from './src/screens/genderScreens/gender';
import Gender1 from './src/screens/genderScreens/gender1';
import Gender4 from './src/screens/genderScreens/gender4';
import AddPhoto from './src/screens/AddPhoto/addPhoto';
import MatchProfile from './src/screens/MatchProfile';
import ProfileDisplay from './src/screens/ProfileDisplay/ProfileDisplay';
import Upload from './src/screens/UploadID/upload';
import Selfie from './src/screens/Selfie/selfie';
import Edit from './src/screens/EditProfile/edit';
import Events from './src/screens/Events/index';
import EventTicket from './src/screens/EventTicket/index';
import EventTimer from './src/screens/EventTimer/index';
import TicketSold from './src/screens/TicketSold/index';
import ShareLink from './src/screens/ShareLink';
import JoinParty from './src/screens/JoinParty';
import SendTicket from './src/screens/SendTicket';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return <MainStackNavigation />;
};

export default App;
