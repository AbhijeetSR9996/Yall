import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {signupStyles} from './signupStyles';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {CircularButton} from '../../component/Buttons/circular';


const {height} = Dimensions.get('window');

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
        <Text style={{color: '#AAAAAA'}}>Sent to 1234567990 - </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpMobile1')}>
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
      <CircularButton path="GovtRegisterID" style={{marginTop: 480}} />
    </View>
  );
};
export default VerificationCode;
