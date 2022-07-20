import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  Switch,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './styles';
import { imageicon, icons } from '../../../assets/icons/icons';
import { CircularButton } from '../../component/Buttons/circular';

const Gender = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Which gender you prefer? </Text>

      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 110,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Man
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: ,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Woman
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Non-binary
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Agender
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Androgyne
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 45,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Bigender
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 10,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Cisgender
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Enby
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Transgender Man
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Transgender Woman
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Gender Fluid
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Gender Nonconforming
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Neutrois
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Non-Binary
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Pangender
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            left: 50,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Polygender
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 10, top: 110 }}>
        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            //left: 35,
            left: 22,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Omnigender
          </Text>
        </View>

        <View
          style={{
            borderWidth: 1.5,
            // top: 200,
            width: 'auto',
            height: 44,
            //left: 50,
            left: 35,
            backgroundColor: '#DCC7E1',
            borderBottomStartRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomWidth: 4,
            borderRightWidth: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              margin: 8,
              fontFamily: 'Inter-Regular',
              fontSize: 15,
              color: '#020203',
            }}>
            Two Spirit
          </Text>
        </View>
      </View>
      <View
        style={{
          top: 165,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          height: '10%',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 15, width: 270, color: '#000000', bottom: 20 }}>
          Learn more
        </Text>
        <Text
          style={{
            fontSize: 15,
            width: 270,
            right: '240%',
            bottom: 20,
            color:'#AAAAAA'
          }}>
          about we sue your gender
        </Text>
        <Text style={{ fontSize: 15, width: 270, right: '699%', bottom: 5, color:'#AAAAAA' }}>
          to recommend people on Yall
        </Text>
      </View>
      <CircularButton path="Gender1" style={{ marginTop: 80 }} />
    </View>
  );
};
export default Gender;
