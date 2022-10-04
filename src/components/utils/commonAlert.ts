import { StyleProp, ViewStyle } from 'react-native';
import {MessageType, showMessage} from 'react-native-flash-message';

export const showToast = (
  type: MessageType,
  message: string,
  duration: number,
) => {
  showMessage({
    type: type,
    message: message,
    duration: duration,
  });
};
