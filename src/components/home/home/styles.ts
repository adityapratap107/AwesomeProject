import {StyleSheet} from 'react-native';
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
    innerContainer: {
      marginLeft: '3%',
    },
    headerView: {
      flexDirection: 'row',
      marginTop: '2%',
    },
    searchContainerStyle: {
      backgroundColor: 'red',
      width: widthPercentageToDP(65),
      height: heightPercentageToDP(3),
      borderRadius: 8,
      left: '8%',
      top: '10%',
      padding: 0,
    },
    inputContainerStyle: {
      height: heightPercentageToDP(4.5),
      width: widthPercentageToDP(70),
      backgroundColor: '#dde3ed',
      bottom: '3%',
      borderRadius: 8,
      right: '22%',
    },
    searchInput:{
      color: 'black'
    },
    chatIcon: {
      position: 'absolute',
      left: '88%',
    },
    lineView: {
      height: 8,
      backgroundColor: '#e3ded8',
    },
    lineOuterView: {
      marginTop: '3%',
    },
    flatList: {
      paddingBottom: heightPercentageToDP(10),
    },
  });
};
export default useStyle;
