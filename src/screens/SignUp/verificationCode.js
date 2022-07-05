import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {signupStyles} from './signupStyles';
import {icons, imageicon} from '../../../assets/icons/icons';


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;

const VerificationCode = ({navigation}) => {
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={signupStyles.container}>
      <View style={signupStyles.mainView}>
        <Text style={signupStyles.text}>Enter your verification code.</Text>
      </View>
      <View style={signupStyles.text1}>
        {/* <Text>sent Code to 1234567990 - </Text> */}
        <Text style={{color:'#AAAAAA'}}>Sent to 1234567990 - </Text>
        <TouchableOpacity>
          <Text style={signupStyles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={signupStyles.code}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={signupStyles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[
                signupStyles.cellRoot,
                isFocused && signupStyles.focusCell,
              ]}>
              <Text style={signupStyles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={signupStyles.textView}>
      <TouchableOpacity >
      <Text style={signupStyles.text2}>Didn't get a code?</Text>    
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('GovtRegisterID')}>
          <Text style={signupStyles.imageicon}> {icons.rightcirclearrow}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default VerificationCode;
