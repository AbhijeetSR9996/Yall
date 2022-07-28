import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {signupStyles} from '../../screens/SignUp/signupStyles';
import {useNavigation} from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


const {height} = Dimensions.get('window');

const CELL_COUNT = 4;

 export const VerifyCode = ({path,paths}) => {

  const navigation = useNavigation();

  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
      <View>
      <View style={signupStyles.mainView}>
        <Text style={signupStyles.text}>Enter your verification code.</Text>
      </View>
      <View style={signupStyles.text1}>
        <Text style={{color: '#AAAAAA'}}>Sent to 1234567990 - </Text>
        <TouchableOpacity onPress={() => navigation.navigate(path)}>
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
          onPress={()=>{navigation.navigate(paths)}}
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
      </View>
  );
};
export default VerifyCode;