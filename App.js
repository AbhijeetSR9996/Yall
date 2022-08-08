import React from 'react';
import MainStackNavigation from './Navigation/mainStackNavigation';
import MainBottomNavigation from './Navigation/mainBottomNavigation';

import GetStarted from './src/screens/GetStarted/index';
import Selfie from './src/screens/Selfie/index';
import SignedInMobile from './src/screens/SignedInMobile/index';
import SignedUpMobile from './src/screens/SignedUpMobile/index';
import MobileCode1 from './src/screens/MobileCode1';
import MobileCode2 from './src/screens/MobileCode2';
import ManageProfile from './src/screens/ManageProfile/index';
import SignInMobile from './src/screens/SignUp/SignInMobile';
import UserName from './src/screens/User details/userName';
import UserDOB from './src/screens/User details/userDOB';
import UserEmail from './src/screens/User details/userEmail';
import UserGender from './src/screens/User details/userGender';
import GovtRegisterID from './src/screens/govtRegister.js/govtRegisteration';
import UserJob from './src/screens/User details/userJob';
import UserLocation from './src/screens/User details/userLocation';
import SignEmail from './src/screens/SignInEmail/signEmail';
import AboutPrivacy from './src/screens/aboutPrivacy/privacy';
import Gender from './src/screens/genderScreens/gender';
import Gender1 from './src/screens/genderScreens/gender1';
import Gender4 from './src/screens/genderScreens/gender4';
import AddPhoto from './src/screens/AddPhoto/addPhoto';
import MatchProfile from './src/screens/MatchProfile';
import ProfileDisplay from './src/screens/ProfileDisplay/index';
import Upload from './src/screens/UploadID/upload';
import Edit from './src/screens/EditProfile/edit';
import Events from './src/screens/Events/index';
import EventTicket from './src/screens/EventTicket/index';
import EventTimer from './src/screens/EventTimer/index';
import TicketSold from './src/screens/TicketSold/index';
import ShareLink from './src/screens/ShareLink';
import JoinParty from './src/screens/JoinParty';
import SendTicket from './src/screens/SendTicket';
import WeeklyEventLocation from './src/screens/WeeklyEventLocation';
import WeeklyEventMap from './src/screens/WeeklyEventMap';
import Liked from './src/screens/Liked';
import Match from './src/screens/Match';
import Chat from './src/screens/Chat';
import ChatQNA from './src/screens/ChatQNA';
import ChatQNA2 from './src/screens/ChatQNA2';
import ChatQuestion from './src/screens/ChatQuestion';
import ChatOwnQuestion from './src/screens/ChatOwnQuestion';
import SignUpEmail from './src/screens/SignUpEmail';
import EditAccount from './src/screens/EditAccount';
import AccountSettings from './src/screens/AccountSettings';

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return <MainStackNavigation />;
};

export default App;
