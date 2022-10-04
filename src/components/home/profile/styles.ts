import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    coverView: {
      backgroundColor: 'darkgrey',
      height: heightPercentageToDP(18),
      alignItems: 'flex-end',
    },
    coverCameraView: {
      position: 'absolute',
      backgroundColor: 'white',
      borderRadius: 100,
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignItems: 'center',
      top: '10%',
      right: '2%',
    },
    innerContainer: {
      marginLeft: '5%',
    },
    profilePicView: {
      borderRadius: 100,
      height: 150,
      width: 150,
      bottom: '50%',
      borderWidth: 0.3,
      backgroundColor: 'white',
    },
    addIconView: {
      position: 'absolute',
      left: '80%',
      top: '65%',
      backgroundColor: 'white',
      borderRadius: 100,
      padding:2
    },
    editProfileView: {
      position: 'absolute',
      alignItems: 'flex-end',
      right: '5%',
      bottom: '80%',
    },
    headingView: {
      position: 'absolute',
      top: '60%',
    },
    nametext: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    designationText: {
      marginTop: '2%',
      color: 'black',
      fontSize: 16,
    },
    bioText: {
      color: 'grey',
      marginTop: '1%',
    },
    companyName: {
      color: 'black',
      marginTop: '3%',
    },
    connectionsView: {
      flexDirection: 'row',
      marginTop: '4%',
    },
    connectionsText: {
      color: '#497bcc',
      fontWeight: '800',
    },
    buttonsView: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: '4%',
    },
    openToButton: {
      backgroundColor: '#497bcc',
      padding: 10,
      width: widthPercentageToDP(38),
      borderRadius: 20,
    },
    openButtonText: {
      color: 'white',
      fontWeight: '700',
      textAlign: 'center',
    },
    addSectionButton: {
      backgroundColor: '#fff',
      padding: 10,
      width: widthPercentageToDP(38),
      borderRadius: 20,
      borderWidth: 0.6,
      marginLeft: widthPercentageToDP(2),
    },
    addSectionButtonText: {
      textAlign: 'center',
      fontWeight: '600',
      color: 'grey',
    },
    moreButton: {
      backgroundColor: '#fff',
      padding: 10,
      width: widthPercentageToDP(10),
      borderRadius: 40,
      borderWidth: 0.6,
      marginLeft: widthPercentageToDP(2),
    },
    moreButtonText: {
      fontWeight: '900',
      textAlign: 'center',
      bottom: 2,
    },
    lineView: {
      height: 8,
      backgroundColor: '#e3ded8',
    },
    lineOuterView: {
      marginTop:
        Platform.OS === 'android'
          ? heightPercentageToDP(24)
          : heightPercentageToDP(18),
    },
    boldTextView: {
      marginTop: '3%',
    },
    boldText: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
    },
    eyeView: {
      flexDirection: 'row',
    },
    regularText: {
      color: 'grey',
      fontSize: 14,
    },
    profileViews: {
      marginTop: '5%',
      flexDirection: 'row',
    },
    profileViewsText: {
      fontWeight: '600',
      color: 'black',
      fontSize: 16,
      left: '30%',
    },
    descriptionText: {
      color: 'grey',
      left: 37,
      bottom: '2%',
    },
    seperatorView: {
      height: 1,
      backgroundColor: '#dde3ed',
      width: '95%',
      marginTop: 5,
    },
    searchText: {
      left: '80%',
    },
    searchDescriptionText: {
      top: '1%',
    },
    searchSeperatorView: {
      top: 20,
    },
    belowLineView: {
      top: '3%',
    },
    aboutBoldText: {
      fontSize: 24,
      fontWeight: '600',
      color: 'black',
      marginTop: '5%',
    },
    aboutText: {
      color: 'grey',
      bottom: '2%',
      marginTop: '5%',
    },
    image: {
      height: 150,
      width: 150,
      borderRadius: 100,
    },
    coverImageStyle: {
      width: '100%',
      height: heightPercentageToDP(18),
    },
    experienceView: {
      flexDirection: 'row',
      marginTop: '4%',
    },
    addEditIcon: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    plusIcon: {
      position: 'absolute',
      right: '15%',
      bottom: '10%',
    },
    editIcon: {
      position: 'absolute',
      bottom: '10%',
      right: '4%',
    },
    experienceLineView: {
      top: '2%',
    },
    logoutView: {
      top: '20%',
      alignItems: 'center',
      marginBottom: '10%',
    },
    aboutView: {
      marginTop: '6%',
    }
  });
};
export default useStyle;

