import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {signupStyles} from '../../screens/SignUp/signupStyles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from '@react-navigation/native';
import {CircularButton} from '../../component/Buttons/circular';
import {VerifyCode} from '../../component/Buttons/verifycode';


const {height} = Dimensions.get('window');

const CELL_COUNT = 4;

export const VerifyCode2 = ({path}) => {
    const navigation = useNavigation();


  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View >
      <View
        style={[
          signupStyles.textView,
          {
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        ]}>
        <TouchableOpacity>
          <Text style={signupStyles.text2}>Didn't get a code?</Text>
        </TouchableOpacity>
      </View>
      
      <CircularButton path={path} style={{marginTop: 480}} />

    </View>
  );
};


