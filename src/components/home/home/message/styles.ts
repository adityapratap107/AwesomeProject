import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    headingText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    buttonView: {
      flexDirection: 'row',
      marginTop: 40,
    },
  });
};
export default useStyle;
