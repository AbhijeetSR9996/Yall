import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList, ImageBackground, Image, SafeAreaView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from "react-native-vector-icons/EvilIcons";
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Rectangular } from '../../component/Buttons/rectangular';
import { icons } from '../../../assets/icons/icons';

const PaymentMethods = ({ navigation }) => {

    return (

        <SafeAreaView >
            <View style={styles.main_view}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="angle-left" style={styles.left_arrow} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.big_text}>Payment </Text>
                <View style={styles.other_view}></View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollview}>

                    <View style={styles.container_view}>
                        <TouchableOpacity style={styles.right_container_btn}>
                            <Icon name="plus" style={styles.icon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container_view2}>
                        <TouchableOpacity style={[styles.right_container_btn, { width: width * 0.6 }]}>
                            <View style={styles.icon_view}>
                                <View style={styles.icon1} />
                                <View style={styles.icon2} />
                            </View>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '65%', bottom: '58%', fontSize: 13, color: '#FFFFFF' }]}> 09/23 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '68%', bottom: '38%', fontSize: 13, color: '#FFFFFF' }]}> 7041 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '-3%', bottom: '20%', fontSize: 13, color: '#FFFFFF' }]}> MELINA THOSE </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '53%', bottom: '18%', fontSize: 13, color: '#FFFFFF' }]}> Debit Card</Text>
                            <View style={styles.dots_view}>
                                <View style={styles.dot1} />
                                <View style={styles.dot2} />
                                <View style={styles.dot3} />
                                <View style={styles.dot4} />
                                <View style={styles.dot5} />
                                <View style={styles.dot6} />
                                <View style={styles.dot7} />
                                <View style={styles.dot8} />
                                <View style={styles.dot9} />
                                <View style={styles.dot10} />
                                <View style={styles.dot11} />
                                <View style={styles.dot12} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container_view3}>
                        <TouchableOpacity style={[styles.right_container_btn, { width: width * 0.6 }]}>
                            <View style={styles.icon_view}>
                                <View style={styles.icon1} />
                                <View style={styles.icon2} />
                            </View>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '65%', bottom: '58%', fontSize: 13, color: '#FFFFFF' }]}> 09/23 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '68%', bottom: '38%', fontSize: 13, color: '#FFFFFF' }]}> 7041 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '-3%', bottom: '20%', fontSize: 13, color: '#FFFFFF' }]}> MELINA THOSE </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '53%', bottom: '18%', fontSize: 13, color: '#FFFFFF' }]}> Debit Card</Text>
                            <View style={styles.dots_view}>
                                <View style={styles.dot1} />
                                <View style={styles.dot2} />
                                <View style={styles.dot3} />
                                <View style={styles.dot4} />
                                <View style={styles.dot5} />
                                <View style={styles.dot6} />
                                <View style={styles.dot7} />
                                <View style={styles.dot8} />
                                <View style={styles.dot9} />
                                <View style={styles.dot10} />
                                <View style={styles.dot11} />
                                <View style={styles.dot12} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container_view4}>
                        <TouchableOpacity style={[styles.right_container_btn, { width: width * 0.6 }]}>
                            <View style={styles.icon_view}>
                                <View style={styles.icon1} />
                                <View style={styles.icon2} />
                            </View>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '65%', bottom: '58%', fontSize: 13, color: '#FFFFFF' }]}> 09/23 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '68%', bottom: '38%', fontSize: 13, color: '#FFFFFF' }]}> 7041 </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '-3%', bottom: '20%', fontSize: 13, color: '#FFFFFF' }]}> MELINA THOSE </Text>
                            <Text style={[styles.icon_text, { position: 'absolute', left: '53%', bottom: '18%', fontSize: 13, color: '#FFFFFF' }]}> Debit Card</Text>
                            <View style={styles.dots_view}>
                                <View style={styles.dot1} />
                                <View style={styles.dot2} />
                                <View style={styles.dot3} />
                                <View style={styles.dot4} />
                                <View style={styles.dot5} />
                                <View style={styles.dot6} />
                                <View style={styles.dot7} />
                                <View style={styles.dot8} />
                                <View style={styles.dot9} />
                                <View style={styles.dot10} />
                                <View style={styles.dot11} />
                                <View style={styles.dot12} />
                            </View>
                        </TouchableOpacity>
                    </View>


                </ScrollView>

                <Text style={styles.small_text}>Other Payment Methods </Text>
                <View style={styles.text_view}>
                    <View style={styles.anothericon_view}><Icon name="credit-card" /></View>
                    <Text style={[styles.icon_text, { position: 'absolute', marginLeft: '20%' }]}> Credit / Debit Card</Text>
                </View>
                <View style={{ display: "flex", flexDirection: 'row', height: '8%', width: width * 0.7, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-between', marginLeft: '7%', position: 'relative' }}>
                    <View style={styles.anothericon_view}><Icon name="bank" /></View>
                    <Text style={[styles.icon_text, { position: 'absolute', marginLeft: '20%' }]}> Net Banking</Text>
                </View>
                <View style={{ display: "flex", flexDirection: 'row', height: '8%', width: width * 0.7, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-between', marginLeft: '7%', position: 'relative' }}>
                    <View style={styles.anothericon_view}><Icon name="google-wallet" /></View>
                </View>
                <View style={{ display: "flex", flexDirection: 'row', height: '8%', width: width * 0.7, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'space-between', marginLeft: '7%', position: 'relative' }}>
                    <View style={styles.anothericon_view}><Icon name="google-wallet" /></View>
                    <Text style={[styles.icon_text, { position: 'absolute', marginLeft: '20%' }]}> Other Wallets</Text>
                </View>

                <View style={styles.payment_box}>
                    <View style={styles.payment_text}>
                        <Text style={[styles.icon_text, { position: 'absolute', marginLeft: '12%', fontSize: 25, letterSpacing: -1.7, fontWeight: '600' }]}> $ 200</Text>
                        <Text style={[styles.icon_text, { position: 'absolute', marginLeft: '14%', fontSize: 15, marginTop: '30%', fontWeight: '600', letterSpacing: -1.7 }]}> View Details</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.payment_button}
                        onPress={() => navigation.navigate('BookingConfirm')}>
                        <View style={styles.payment_buttonview}>
                            <Text style={styles.payment_buttontext}>Pay Now</Text>
                            <View style={styles.payment_buttonicon}>{icons.rightarrow}</View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default PaymentMethods;