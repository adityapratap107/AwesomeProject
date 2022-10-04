import {Keyboard, Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    contentContainer: {
      flex: 1,
      marginTop: 16,
    },
    headerView: {
      flexDirection: 'row',
    },
    editProfileText: {
      fontSize: 20,
      fontWeight: '600',
      color: 'black',
      marginLeft: 30,
    },
    editConainer: {
      marginTop: 30,
      left: 4,
    },
    nameInput: {
      borderBottomWidth: 1,
      borderRadius: 8,
      height: 40,
      width: widthPercentageToDP(92),
      paddingRight: 10,
      paddingLeft: 10,
      borderColor: 'grey',
      backgroundColor: '#fff',
    },
    inputContainer: {
      marginTop: 20,
    },
    heading: {
      fontWeight: '500',
      color: 'black',
    },
    saveButton: {
      backgroundColor: '#497bcc',
      padding: 10,
      borderRadius: 20,
      width: widthPercentageToDP(92),
      height: 40,
    },
    saveButtonText: {
      color: 'white',
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 16,
    },
    boldHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    buttonView: {
      justifyContent: 'center',
      alignItems: 'center',
      height: heightPercentageToDP(8),
      width: widthPercentageToDP(100),
      borderTopWidth: 0.6,
      borderTopColor: 'lightgrey',
    },
  });
};
export default useStyle;
