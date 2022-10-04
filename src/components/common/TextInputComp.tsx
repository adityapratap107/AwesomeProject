import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import EyeIcon from '../../assets/images/common/eye.svg';
import EyeIconWithSlash from '../../assets/images/common/hidden.svg';

interface TextInputProps {
  value?: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
  onSubmitEditing?: () => void;
  refs?: any;
  multiline?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  returnKeyType?: 'none' | 'done' | 'next';
  textAlignVertical?: 'auto' | 'center' | 'bottom' | 'top' | '';
  defaultValue?: string;
  blurOnSubmit?: boolean;
}

const TextInputComp = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  style,
  keyboardType,
  autoCapitalize,
  maxLength,
  onSubmitEditing,
  refs,
  multiline,
  containerStyle,
  returnKeyType,
  textAlignVertical,
  defaultValue,
  blurOnSubmit,
}: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  let EyePasswordIcon;
  if (!showPassword) {
    EyePasswordIcon = <EyeIcon height={20} width={20} />;
  } else {
    EyePasswordIcon = <EyeIconWithSlash height={20} width={20} />;
  }

  const onEyeIconClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={containerStyle}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={showPassword}
        style={[styles.textInputView, style]}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        maxLength={maxLength}
        onSubmitEditing={onSubmitEditing}
        ref={refs}
        multiline={multiline}
        returnKeyType={returnKeyType}
        textAlignVertical={textAlignVertical}
        defaultValue={defaultValue}
        blurOnSubmit={blurOnSubmit}
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.eye_icon} onPress={onEyeIconClick}>
          {EyePasswordIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  textInputView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    height:
      Platform.OS === 'ios' ? heightPercentageToDP(5) : heightPercentageToDP(6),
    width: widthPercentageToDP(90),
    justifyContent: 'center',
    borderColor: 'grey',
    marginBottom: '4%',
    paddingRight: Platform.OS === 'ios' ? '12%' : '10%',
    paddingLeft: 4,
  },
  eye_icon: {
    right: '4%',
    bottom: '34%',
    padding: 8,
    width: '10%',
    position: 'absolute',
  },
});
