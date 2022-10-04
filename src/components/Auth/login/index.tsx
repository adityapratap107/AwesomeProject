import React, {useContext, useRef, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useStyle from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {showToast} from '../../utils/commonAlert';
import {useNav, useRoutes} from '../../../navigation/useNav';
import TextInputComp from '../../common/TextInputComp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validatePassword, _validateEmail} from '../../utils/validations';
import {UserContext} from '../../../../context/userStorage';
import {generateToken} from '../../utils/generateToken';
import {verifyLogin} from '../../../network/apiCalls';
import {useQueryClient} from 'react-query';

const LoginScreen = () => {
  const styles = useStyle();
  const navigation = useNav();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const email_ref = useRef<TextInput>(null);
  const password_ref = useRef<TextInput>(null);
  const {data: user, storeData} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const checkValidation = () => {
    if (userEmail.trim().length === 0 && userPassword.trim().length === 0) {
      showToast('danger', 'Please enter your email and password', 2000);
      return false;
    } else if (userEmail.trim().length === 0) {
      showToast('danger', 'Please enter your email', 2000);
    } else if (userPassword.trim().length === 0) {
      showToast('danger', 'Please enter your password', 2000);
    } else if (!_validateEmail(userEmail)) {
      showToast(
        'danger',
        'Please enter your email in a valid format (ex. name@email.com)',
        2000,
      );
    } else if (!validatePassword(userPassword)) {
      showToast(
        'danger',
        'Password must be 8 chars long, Alphanumeric + 1 capital letter + at least 1 special character',
        2000,
      );
    } else {
      return true;
    }
  };

  const verifyUserLogin = async () => {
    setLoading(true);
    try {
      const response = await queryClient.fetchQuery(
        [
          'verifyLogin',
          {
            payload: {
              email: userEmail,
              password: userPassword,
            },
          },
        ],
        verifyLogin,
      );
      setLoading(false);
      console.log(response.data);
      if (response.data.message) {
        showToast('success', response.data.message, 2000);
        console.log(response.data)
        storeData({
          access_token: response.data.data.accessToken,
        });
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomTabs'}],
        });
      } else {
        showToast('danger', response.data.data, 2000);

      }
    } catch (err) {
      console.log(err);
    }
  };

  const onLoginPress = async () => {
    if (checkValidation()) {
      verifyUserLogin();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Login</Text>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.nameText}>Email</Text>
              <TextInputComp
                placeholder="Email"
                style={styles.textInput}
                keyboardType={'email-address'}
                onChangeText={setUserEmail}
                autoCapitalize={'none'}
                maxLength={50}
                refs={email_ref}
                onSubmitEditing={() =>
                  password_ref.current && password_ref.current.focus()
                }
                value={userEmail}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.nameText}>Password</Text>
              <TextInputComp
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry
                onChangeText={setUserPassword}
                autoCapitalize={'none'}
                maxLength={50}
                refs={password_ref}
                value={userPassword}
                onSubmitEditing={onLoginPress}
              />
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => onLoginPress(userEmail, userPassword)}>
                <LinearGradient
                  colors={['#497bcc', '#34d5eb']}
                  style={styles.signin}>
                  <Text style={styles.textsign}>Login</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.newUserView}>
              <Pressable
                onPress={() => {
                  navigation.replace('SignUpScreen');
                }}>
                <Text style={styles.newUserText}>Create a new user</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
