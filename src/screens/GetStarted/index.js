import React from 'react';
import { ImageBackground, View, Text, Image } from 'react-native';
import { Rectangular } from '../../component/Buttons/Rectangular/index';
import Styles from "./styles";

const GetStarted = () => {
    return (
        <View style={Styles.main_container}>
            <ImageBackground
                source={require('../../../assets/images/core/background-signup.png')}
                resizeMode="stretch"
                style={Styles.image_background}
            >
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent' }}></View>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        resizeMode="stretch"
                        source={require('../../../assets/images/logo.png')}
                        style={Styles.logo_img}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'stretch', justifyContent: 'space-evenly', flexDirection: 'column' }}>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <Text style={Styles.headline}>
                            By clicking “Log in”, you agree with our Terms. learn how we process
                            your data in our privacy policy and cokkies policy.
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center' }}>
                        <Rectangular path="SignUp" name="Get Started" />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
export default GetStarted;


