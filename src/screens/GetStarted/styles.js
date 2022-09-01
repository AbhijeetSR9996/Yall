import { StyleSheet } from 'react-native';
import { width, height } from '../../services/helper';

const Styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  image_background: {
    flex: 1,
    justifyContent: 'center'
  },
  logo_img: {
    alignSelf: 'center',
    display: 'flex',
    bottom: '26%'
  },
  headline: {
    fontFamily: 'Inter',

    fontSize: 15,

    width: 319,
    alignSelf: 'center',
    textAlign: 'center',

    letterSpacing: -0.017,
    color: '#FFFFFF',
    lineHeight: 18,
    top: '10%'
  },

})

export default Styles;

