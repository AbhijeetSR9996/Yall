import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from "./BottomNav/Screen1";
import Screen2 from "./BottomNav/Screen2";
import Screen3 from "./BottomNav/Screen3";
import Screen4 from "./BottomNav/Screen4";
import Screen5 from "./BottomNav/Screen5";
import NestedScreen from './BottomNav/NestedScreen';

const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}/>
        <Stack.Screen
          name="NestedScreen1"
          component={NestedScreen}/>  
    </Stack.Navigator>
  )
}

export {FirstScreenNavigator};

const SecondScreenNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
            name="Screen2"
            component={Screen2}/>
          <Stack.Screen
            name="NestedScreen2"
            component={NestedScreen}/>  
      </Stack.Navigator>
    )
  }
  
export {SecondScreenNavigator};

const ThirdScreenNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
            name="Screen3"
            component={Screen3}/>
          <Stack.Screen
            name="NestedScreen3"
            component={NestedScreen}/>  
      </Stack.Navigator>
    )
  }

  export {ThirdScreenNavigator};

  const FourthScreenNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
            name="Screen4"
            component={Screen4}/>
          <Stack.Screen
            name="NestedScreen4"
            component={NestedScreen}/>  
      </Stack.Navigator>
    )
  }  
  
  export {FourthScreenNavigator};

  const FifthScreenNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen
            name="Screen5"
            component={Screen5}/>
          <Stack.Screen
            name="NestedScreen5"
            component={NestedScreen}/>  
      </Stack.Navigator>
    )
  }

export {FifthScreenNavigator};
