import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 30,
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
  });
};

export default useStyle;
