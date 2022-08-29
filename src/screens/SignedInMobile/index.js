import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { signupStyles } from './signupStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { CircularButton } from '../../component/Buttons/circular';
import { icons } from '../../../assets/icons/icons';
import MobileNumber from '../../component/MobileNumber/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { height, width } from '../../services/helper';
import { handleNumber } from '../../component/MobileNumber/index';


const SignedInMobile = ({ navigation }) => {
    const [value, setValue] = React.useState(null);

    // const Number = async () => {
    //     const res = await mobileNumber(userData);
    //     const data = await res.json();
    //     console.log('success');
    // }

    return (
        <View style={{ flex: 1 }}>

            <MobileNumber />

            <View style={{ display: 'flex', marginTop: '130%', marginRight: '10%', alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ width: 20 }} onPress={() => [navigation.navigate('MobileCode1'), handleNumber]}>
                    <View
                        style={{
                            justifyContent: 'flex-end',
                            marginTop: '100%',
                            borderRadius: 50,
                            width: 40
                        }}>
                        <AntDesign name="rightcircleo" size={40} color="black" style={{ backgroundColor: '#DCC7E1', borderRadius: 50 }} />
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
};
export default SignedInMobile;
