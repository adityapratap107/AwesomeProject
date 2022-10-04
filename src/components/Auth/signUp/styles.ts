import {Platform, StyleSheet, Keyboard} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {deviceHeight} from '../../utils/common';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#497bcc',
    },
    contentStyle: {
      flex: 1,
    },
    header: {
      height: '20%',
      justifyContent: 'flex-end',
      paddingHorizontal: 25,
    },
    text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      bottom: '12%',
    },
    innerContainer: {
      height: deviceHeight,
      backgroundColor: '#efe9f2',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical: 40,
    },
    contentContainer: {
      marginLeft: '5%',
    },
    inputContainer: {
      marginTop: heightPercentageToDP(2),
    },
    nameText: {
      fontSize: 14,
      color: 'black',
      bottom: heightPercentageToDP(1),
    },
    textInputView: {
      // top: '15%',
      backgroundColor: '#fff',
      borderRadius: 4,
      height:
        Platform.OS === 'ios'
          ? heightPercentageToDP(5)
          : heightPercentageToDP(6),
      width: widthPercentageToDP(90),
      justifyContent: 'center',
      borderColor: 'grey',
      marginBottom: '4%',
      paddingRight: Platform.OS === 'ios' ? '12%' : '10%',
    },
    textInput: {
      paddingLeft: 8,
    },
    button: {
      marginTop:
        Platform.OS === 'android'
          ? heightPercentageToDP(1)
          : heightPercentageToDP(2),
      alignItems: 'center',
    },
    signin: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row',
    },
    textsign: {
      color: 'white',
      fontWeight: 'bold',
    },
    eyeView: {
      position: 'absolute',
      right: '6%',
      top: '30%',
      padding: 6,
    },
    alreadyAccountView: {
      alignItems: 'center',
      top: '3%',
    },
    alreadyAccountText: {
      color: '#497bcc',
      fontSize: 15,
      fontWeight: '500',
    },
  });
};

export default useStyle;
