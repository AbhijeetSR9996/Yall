import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { CircularButton } from '../../component/Buttons/circular';
import { VerifyingCode } from '../../component/VerifyingCode/index';
import { height, width } from '../../services/helper';
import { icons } from '../../../assets/icons/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CELL_COUNT = 4;

const MobileCode2
    = ({ navigation }) => {

        return (
            <View style={{ flex: 1 }}>

                <VerifyingCode path="SignedUpMobile" />

                <View
                    style={{
                        position: 'relative',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        //top: 600,
                        left: 25,
                        width: '90%',
                        top: '143%',
                    }}>
                    <TouchableOpacity>
                        <Text style={{
                            //bottom: 60,
                            //top: '50%',
                            color: '#6E3E89',
                            fontFamily: 'Inter',
                            //fontWeight: '400',
                            fontSize: 15,
                            display: 'flex',
                            alignItems: 'center',
                            position: 'absolute',
                        }}>Didn't get a code?</Text>
                    </TouchableOpacity>
                </View>

                {/* <CircularButton path="GovtRegisterID" style={{ marginTop: 480 }} /> */}

                <View style={{ display: 'flex', marginTop: '135%', marginRight: '10%', alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('GovtRegisterID')}>
                        <View
                            style={{
                                //backgroundColor: '#DCC7E1',
                                justifyContent: 'flex-end',
                                marginTop: '100%',
                                borderRadius: 50,
                                width: 40
                            }}>
                            {/* {icons.rightcirclearrow} */}
                            <AntDesign name="rightcircleo" size={40} color="black" style={{ backgroundColor: '#DCC7E1', borderRadius: 50, }} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    };
export default MobileCode2;

