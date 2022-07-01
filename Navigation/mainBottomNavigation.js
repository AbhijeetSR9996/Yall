import React from "react";
import {Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./BottomNav/Screen1";
import Screen2 from "./BottomNav/Screen2";
import Screen3 from "./BottomNav/Screen3";
import Screen4 from "./BottomNav/Screen4";
import Screen5 from "./BottomNav/Screen5";
import ProfileDisplay from "../src/screens/ProfileDisplay/ProfileDisplay";
//import HomeSvg from "./assets/svgs/home.svg";
import SplashScreen from '../src/screens/splashScreen/splashScreen';
import SignUp from '../src/screens/SignUp/SignUp';
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

const Tab = createBottomTabNavigator();

const MainBottomNavigation = () => {
   return (
    //<NavigationContainer>
        <Tab.Navigator
          screenOptions={{headerShown:false}}
          backBehavior='none'
          tabBarOptions={{
            labelStyle:{fontSize:1},
            activeTintColor:'red',
            inactiveTintColor:'black'
          }}>
          {/* <Tab.Screen name="ProfileDisplay" component={ProfileDisplay} />   */}
          <Tab.Screen
            name="Screen 1"
            component={Screen1}
            options={{
                tabBarIcon:() =>  
                (<Image source={require("../assets/images/home.png")} 
                style={{width:22,height:20}} />)
            }}/>
          <Tab.Screen
            name="Screen 2"
            component={Screen2}
            options={{
                tabBarIcon:() => (<Image source={require("../assets/images/heart.png")} 
                style={{width:22,height:20}} />)
            }}/>
          <Tab.Screen
            name="Screen 3"
            component={Screen3}
            options={{
                tabBarIcon:() => (<Image source={require("../assets/images/glass.png")} 
                style={{width:13,height:22}} />)
            }}/>    
          <Tab.Screen
            name="Screen 4"
            component={Screen4}
            options={{
                tabBarIcon:() => (<Image source={require("../assets/images/message.png")} 
                style={{width:20,height:20}} />)
            }}/>
          <Tab.Screen
            name="Screen 5"
            component={Screen5}
            options={{
                tabBarIcon:() => (<Image source={require("../assets/images/user2.png")} 
                style={{width:20,height:20}} />)
            }}/>     
            {/* <Tab.Screen name="SplashScreen" component={SplashScreen} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="SignUpMobile" component={SignUpMobile} />
        <Tab.Screen name="SignUpMobile1" component={SignUpMobile1} />
        <Tab.Screen name="VerificationCode" component={VerificationCode} />
        <Tab.Screen name='MainTabNavigation' component={MainBottomNavigation}/>
        <Tab.Screen name="UserName" component={UserName} />
        <Tab.Screen name="UserDOB" component={UserDOB} />
        <Tab.Screen name="UserEmail" component={UserEmail} />
        <Tab.Screen name="UserGender" component={UserGender} />
        <Tab.Screen name="UserJob" component={UserJob} />
        <Tab.Screen name="GovtRegisterID" component={GovtRegisterID} />
        <Tab.Screen name="AboutPrivacy" component={AboutPrivacy} />
        <Tab.Screen name="SignEmail" component={SignEmail} />
        <Tab.Screen name="Gender" component={Gender} />
        <Tab.Screen name="Gender1" component={Gender1} />
        <Tab.Screen name="Gender2" component={Gender2} />
        <Tab.Screen name="Gender3" component={Gender3} />
        <Tab.Screen name="Gender4" component={Gender4} />
        <Tab.Screen name="AddPhoto" component={AddPhoto} /> */}
        </Tab.Navigator>
    //</NavigationContainer>
   );
};

export default MainBottomNavigation;
