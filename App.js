import React from "react";
import MainStackNavigation from './Navigation/mainStackNavigation'
import SplashScreen from './src/screens/splashScreen/splashScreen'
import SignUpMobile1 from "./src/screens/SignUp/signUpMobile1";
import NumberCode from "./src/screens/SignUp/verificationCode";
import UserName from "./src/screens/User details/userName";
import UserDOB from "./src/screens/User details/userDOB";
import VerificationCode from "./src/screens/SignUp/verificationCode";
import UserEmail from "./src/screens/User details/userEmail";
import UserGender from "./src/screens/User details/userGender";
import GovtRegisterID from "./src/screens/govtRegister.js/govtRegisteration";
import UserJob from "./src/screens/User details/userJob";
import SignEmail from "./src/screens/SignInEmail/signEmail";
import AboutPrivacy from "./src/screens/aboutPrivacy/privacy";
import Gender from "./src/screens/genderScreens/gender";
import Gender1 from "./src/screens/genderScreens/gender1";
import Gender4 from "./src/screens/genderScreens/gender4";
import AddPhoto from "./src/screens/AddPhoto/addPhoto";

import ProfileDisplay from "./src/screens/ProfileDisplay/ProfileDisplay";
//import MainBottomNavigation from "./Navigation/mainBottomNavigation";

export default function App() {
   
  return <MainStackNavigation />;
   //return <MainBottomNavigation/>;
 
};
