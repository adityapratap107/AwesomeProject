import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNav} from '../../../navigation/useNav';
import useStyle from './styles';

const OnboardingScreen = () => {
  const styles = useStyle();
  const navigation = useNav();

  const onSignupPress = () => {
    navigation.navigate('SignUpScreen');
  };
  const onSigninPress = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity onPress={onSignupPress}>
          <LinearGradient colors={['#497bcc', '#34d5eb']} style={styles.signin}>
            <Text style={styles.textsign}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={onSigninPress}>
          <LinearGradient colors={['#497bcc', '#34d5eb']} style={styles.signin}>
            <Text style={styles.textsign}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;
