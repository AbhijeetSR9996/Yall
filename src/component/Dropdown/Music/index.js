import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const musicdata = [
    { label: 'soccer', value: 'soccer' },
    { label: 'basketball', value: 'basketball' },
    { label: 'Bigender', value: 'Bigender' },
    { label: 'tennis', value: 'tennis' },
    { label: 'baseball', value: 'baseball' },
    { label: 'golf', value: 'golf' },
    { label: 'running', value: 'running' },
    { label: 'Gender Fluid', value: 'Gender Fluid' },
    { label: 'roller skating', value: 'roller skating' },
    { label: 'badminton', value: 'badminton' },
    { label: 'Enby', value: 'Enby' },
    { label: 'table tennis', value: 'table tennis' },
    { label: 'cricket', value: 'cricket' },
    { label: 'Polygender', value: 'Polygender' },
    { label: 'table tennis', value: 'table tennis' },
    { label: 'cricket', value: 'cricket' },
    { label: 'Polygender', value: 'Polygender' },
    { label: 'soccer', value: 'soccer' },
    { label: 'basketball', value: 'basketball' },
    { label: 'Bigender', value: 'Bigender' },
    { label: 'tennis', value: 'tennis' },
    { label: 'baseball', value: 'baseball' },
    { label: 'golf', value: 'golf' },
    { label: 'running', value: 'running' },
    { label: 'Gender Fluid', value: 'Gender Fluid' },
    { label: 'roller skating', value: 'roller skating' },
    { label: 'badminton', value: 'badminton' },
    { label: 'Enby', value: 'Enby' },
    { label: 'table tennis', value: 'table tennis' },
    { label: 'cricket', value: 'cricket' },
    { label: 'Polygender', value: 'Polygender' },
    { label: 'soccer', value: 'soccer' },
    { label: 'basketball', value: 'basketball' },
    { label: 'Bigender', value: 'Bigender' },
    { label: 'tennis', value: 'tennis' },
    { label: 'baseball', value: 'baseball' },
    { label: 'golf', value: 'golf' },
    { label: 'running', value: 'running' },
    { label: 'Gender Fluid', value: 'Gender Fluid' },
    { label: 'roller skating', value: 'roller skating' },
    { label: 'badminton', value: 'badminton' },
    { label: 'Enby', value: 'Enby' },
    { label: 'table tennis', value: 'table tennis' },
    { label: 'cricket', value: 'cricket' },
    { label: 'Polygender', value: 'Polygender' },
    { label: 'Others', value: 'Others' },
];

const Music = () => {

    const [value, setValue] = useState(null);

    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'space-evenly', height: 279, marginTop: '0%', }}>
            <View style={{
                width: '100%',
                height: '30%',
                //width: '80%',
                fontSize: 15,
                color: '#000000',
                alignSelf: 'center',
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderColor: '#6B6B6B',
                //paddingLeft: '10%'

            }}>

                <Dropdown
                    style={{
                        //left: 22,
                        //right: '52%',
                        //width: 150,
                        width: '100%',
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        //textAlign: 'center',
                        //alignItems: 'center',
                        color: '#000000',
                        height: 40,
                        backgroundColor: 'transparent'
                        //top: -10,
                    }}
                    placeholder="        Music"
                    placeholderStyle={{
                        fontSize: 15,
                        //alignItems: 'center',
                        textAlign: 'left',
                        height: 18,
                        fontFamily: 'BakbakOne-Regular',
                        lineHeight: 21,
                        letterSpacing: -0.017,
                        color: '#000000',
                        bottom: '1%'
                    }}
                    selectedTextStyle={{
                        color: '#000000',
                        fontFamily: 'BakbakOne-Regular',
                        textAlign: 'left',
                        lineHeight: 21,
                        letterSpacing: -0.017,
                        left: '100%'
                    }}
                    data={musicdata}
                    iconColor='transparent'
                    labelField="label"
                    valueField="value"
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                />

            </View>


            <Text style={{
                fontSize: 13,
                //fontFamily: 'Bakbak One',
                fontFamily: 'Inter',
                color: '#919191',
                alignSelf: 'center',
                justifyContent: 'center',
                marginRight: '-13%',
                marginBottom: '10%',
                //right: '140%',
                lineHeight: 15,
                letterSpacing: -0.017,
                width: '90%',
            }}>{value}
            </Text>

        </View>
    );
};

export default Music;

