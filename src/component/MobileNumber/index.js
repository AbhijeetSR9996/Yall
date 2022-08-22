import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Styles from './styles';
//import { signupStyles } from '../../screens/SignUp/signupStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { CircularButton } from '../../component/Buttons/circular';
import { icons } from '../../../assets/icons/icons';
import { height, width } from '../../services/helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
    { label: 'IN +91', value: '1' },
    { label: '+92', value: '2' },
    { label: '+11', value: '3' },
    { label: '+12', value: '4' },
];

// const saveData = () => {
//     let name = "Abhi";
//     AsyncStorage.setItem('user', name);
// }

// async function displayData() {
//     try {
//         let user = await AsyncStorage.getItem('user');
//         alert(user);
//     }
//     catch (error) { alert(error) }
// }


export const MobileNumber = ({ navigation }) => {

    const [value, setValue] = useState(null);

    const [number, setNumber] = useState("");
    const handleNumber = (value) => {
        setNumber(value);
    }


    return (
        <View>
            <View style={{ width: 214, height: 70, top: 85, left: 21 }}>
                <Text style={{
                    color: '#000000',
                    fontFamily: 'BakbakOne-Regular',
                    //fontWeight: '800',
                    fontSize: 25,
                    lineHeight: 35,
                }}>Whats your phone number?
                    {number}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', top: 120 }}>
                <Dropdown
                    style={{
                        left: 22,
                        width: 70,
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        textAlign: 'center',
                        alignItems: 'center',
                        color: '#000000',
                        height: 40,
                        top: -10,
                    }}
                    placeholder="IN +91"
                    placeholderStyle={{
                        fontSize: 15,
                        alignItems: 'center',
                        //fontWeight: '400',
                        height: 18,
                        fontFamily: 'Inter',
                        //fontWeight: '400',
                        color: '#000000',
                    }}
                    selectedTextStyle={{
                        color: '#000000',
                        textAlign: 'center',
                    }}
                    data={data}
                    labelField="label"
                    valueField="value"
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />

                <TextInput
                    placeholder="Enter Number"
                    placeholderTextColor="#000000"
                    keyboardType="numeric"
                    maxLength={10}
                    onChangeText={handleNumber}
                    style={{
                        borderBottomWidth: 1.5,
                        width: 165,
                        left: 74,
                        letterSpacing: 3,
                        fontSize: 15,
                        color: '#000000',
                        height: 40,
                        top: -10,
                    }}></TextInput>
            </View>
            <Text
                style={{
                    width: 314,
                    left: 25,
                    top: 130,
                    fontFamily: 'Inter',
                    //fontWeight: '400',
                    fontSize: 15,
                    display: 'flex',
                    alignItems: 'center',
                    color: '#AAAAAA',
                }}>
                Please enter your valid phone number. We will send you 4-digital code to
                verify your
            </Text>
            <Text
                style={{
                    width: 314,
                    left: 25,
                    top: 130,
                    fontFamily: 'Inter',
                    //fontWeight: '400',
                    fontSize: 15,
                    display: 'flex',
                    alignItems: 'center',
                    color: '#AAAAAA',
                }}>
                account.
            </Text>
            {/* <View>
                <TouchableOpacity onPress={saveData}><Text>Click to save data</Text></TouchableOpacity>
                <TouchableOpacity onPress={displayData}><Text>Click to display data</Text></TouchableOpacity>
            </View> */}
        </View>
    );
};
export default MobileNumber;
