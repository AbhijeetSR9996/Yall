import React, { useState, useEffect } from 'react';
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


export const MobileNumber = ({ navigation }) => {

    // const [userData, setUserData] = useState({
    //     mobilenumber: null,
    // });
    const [value, setValue] = useState({
        countrycode: 'IN +91',
        mobilenumber: null
    });
    // const [value, setValue] = useState(null);
    // const [number, setNumber] = useState("");
    // const handleNumber = (value) => {
    //     setNumber(value);
    // }

    const onChangeCountry = (values, key) => {
        setValue({ ...value, [key]: values });
    };

    const onChangeNumber = (values, key) => {
        setValue({ ...value, [key]: values });
    };


    // const storePhoneNumber = async (value) => {
    //     try {
    //         await AsyncStorage.setItem("phonenumber", JSON.stringify(number));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (

        <View>
            <View style={{ width: 214, height: 70, top: 85, left: 21 }}>
                <Text style={{
                    color: '#000000',
                    fontFamily: 'BakbakOne-Regular',
                    fontSize: 25,
                    lineHeight: 35,
                }}>Whats your phone number?
                    {/* {number} */}
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
                    // onChange={item => {
                    //     setValue(item.value);
                    // }}
                    onChange={(countrycode) => onChangeCountry(countrycode, "countrycode")}
                />

                <TextInput
                    placeholder="Enter Number"
                    placeholderTextColor="#000000"
                    keyboardType="numeric"
                    maxLength={10}
                    // onChangeText={handleNumber}
                    onChangeText={(mobilenumber) => onChangeNumber(mobilenumber, "mobilenumber")}
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
            {/* <TouchableOpacity onPress={storeUser} style={{ top: '20%' }}><Text>Click</Text></TouchableOpacity> */}
        </View>
    );
};
export default MobileNumber;
