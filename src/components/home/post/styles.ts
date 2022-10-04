import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    innerContainer: {
      alignItems: 'flex-start',
    },
    createPostView: {
      marginBottom: heightPercentageToDP(5),
      marginTop: heightPercentageToDP(8),
    },
    createPostText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    titleInputView: {
      width: widthPercentageToDP(60),
    },
    titleInput: {
      borderWidth: 1,
      borderRadius: 8,
      height: 55,
      width: widthPercentageToDP(81),
      paddingRight: 10,
      paddingLeft: 10,
      borderColor: 'grey',
      backgroundColor: '#fff',
    },
    descriptionInput: {
      borderWidth: 1,
      borderRadius: 8,
      height: 140,
      width: widthPercentageToDP(81),
      // paddingLeft: 10,
      paddingTop: 12,
      // paddingRight: 10,
      borderColor: 'grey',
      // backgroundColor: '#fff',
      alignItems: 'flex-start',
      marginTop: 4,
      paddingStart: 10,
      paddingEnd: 10,
    },
    uploadImageTextView: {
      marginTop: heightPercentageToDP(4),
      alignItems: 'center',
    },
    uploadImageText: {
      fontSize: 20,
      color: '#497bcc',
      textDecorationLine: 'underline',
    },
    imagePreviewView: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    imagePreview: {
      height: 180,
      width: widthPercentageToDP(50),
      borderRadius: 5,
      marginTop: heightPercentageToDP(2),
    },
    postButton: {
      position: 'absolute',
      top:
        Platform.OS === 'android'
          ? heightPercentageToDP(75)
          : heightPercentageToDP(68),
      marginTop: heightPercentageToDP(10),
      backgroundColor: '#497bcc',
      padding: 10,
      borderRadius: 20,
      width: widthPercentageToDP(38),
    },
    postButtonText: {
      color: 'white',
      fontWeight: '600',
      textAlign: 'center',
      fontSize: 16,
    },
    postDisabledButton: {
      position: 'absolute',
      top:
        Platform.OS === 'android'
          ? heightPercentageToDP(75)
          : heightPercentageToDP(68),
      marginTop: heightPercentageToDP(10),
      backgroundColor: '#497bcc',
      padding: 10,
      borderRadius: 20,
      width: widthPercentageToDP(38),
      opacity: 0.6,
    },
    deleteIcon: {
      position: 'absolute',
      left: widthPercentageToDP(40),
      bottom: 8,
      backgroundColor: 'lightgrey',
      borderRadius: 5,
    },
  });
};
export default useStyle;
