import {StyleSheet} from 'react-native';
import colors from '../assets/colors';

const useStyle = () => {
  return StyleSheet.create({
    bottomTabSafeArea: {flex: 1, backgroundColor: colors.colorBlack},
    tabBarAddIcon: {
      borderRadius: 9,
      paddingHorizontal: 25,
      paddingVertical: 7,
    },
  });
};
export default useStyle;
