import React, {useContext, useRef, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNav} from '../../../navigation/useNav';
import useStyle from './styles';
import TextInputComp from '../../common/TextInputComp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useQueryClient} from 'react-query';
import UserStorage, {UserContext} from '../../../../context/userStorage';
import {verifySignup} from '../../../network/apiCalls';
import {showToast} from '../../utils/commonAlert';
import {validatePassword, _validateEmail} from '../../utils/validations';

interface Signup {
  name: string;
  email: string;
  password: string;
  cnfPassword: string;
  phoneNumber: string;
}

const initialData = {
  name: '',
  email: '',
  password: '',
  cnfPassword: '',
  phoneNumber: '',
};

const SignUpScreen = () => {
  const styles = useStyle();
  const navigation = useNav();
  const [signUpData, setSignUpData] = useState<Signup>(initialData);
  const name_ref = useRef<TextInput>(null);
  const email_ref = useRef<TextInput>(null);
  const password_ref = useRef<TextInput>(null);
  const cnf_password_ref = useRef<TextInput>(null);
  const phone_ref = useRef<TextInput>(null);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const {storeData} = useContext(UserContext);

  const checkValidation = () => {
    if (signUpData.name.trim() === '') {
      showToast('danger', 'Please enter your name.', 2000);
      return false;
    } else if (signUpData.email.trim() === '') {
      showToast('danger', 'Please enter your email.', 2000);
      return false;
    } else if (!_validateEmail(signUpData.email)) {
      showToast(
        'danger',
        'Please enter your email in a valid format (ex. name@email.com)',
        2000,
      );
      return false;
    } else if (signUpData.password.trim() === '') {
      showToast('danger', 'Please enter your password.', 2000);
      return false;
    } else if (!validatePassword(signUpData.password)) {
      showToast(
        'danger',
        'Password must be 8 chars long, Alphanumeric + 1 capital letter + at least 1 special character',
        2000,
      );
      return false;
    } else if (signUpData.cnfPassword.trim() === '') {
      showToast('danger', 'Please enter confirm password.', 2000);
      return false;
    } else if (signUpData.password !== signUpData.cnfPassword) {
      showToast(
        'danger',
        'Password and Confirm password does not match.',
        2000,
      );
      return false;
    } else if (signUpData.phoneNumber.trim() === '') {
      showToast('danger', 'Please enter your phone number.', 2000);
    } else {
      return true;
    }
  };

  const onSignupPress = async () => {
    if (checkValidation()) {
      const payload = {
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      };
      setLoading(true);
      try {
        const response = await queryClient.fetchQuery(
          [
            'verifySignup',
            {
              payload: {
                name: payload.name,
                email: payload.email,
                password: payload.password,
              },
            },
          ],
          verifySignup,
        );
        setLoading(false);
        console.log(response.data);
        if (response.data.message) {
          showToast('success', response.data.message, 2000);
          storeData({
            access_token: response.data.data.accessToken,
          });
          navigation.navigate('LoginScreen', {
            payload: {
              ...payload,
            },
          });
        } else {
          showToast('danger', response.data.data, 2000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateByKey = (key: string, value: string) => {
    setSignUpData({
      ...signUpData,
      [key]: value,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Register Now</Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.contentContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.nameText}>Name</Text>
              <TextInputComp
                placeholder="Name"
                style={styles.textInput}
                onChangeText={val => updateByKey('name', val)}
                value={signUpData.name}
                refs={name_ref}
                onSubmitEditing={() =>
                  email_ref.current && email_ref.current?.focus()
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.nameText}>Email</Text>
              <TextInputComp
                placeholder="Email"
                style={styles.textInput}
                onChangeText={val => updateByKey('email', val)}
                value={signUpData.email}
                refs={email_ref}
                autoCapitalize={'none'}
                onSubmitEditing={() =>
                  password_ref.current && password_ref.current?.focus()
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.nameText}>Password</Text>
              <TextInputComp
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry
                onChangeText={val => updateByKey('password', val)}
                value={signUpData.password}
                refs={password_ref}
                onSubmitEditing={() =>
                  cnf_password_ref.current && cnf_password_ref.current?.focus()
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.nameText}>Confirm Password</Text>
              <TextInputComp
                placeholder="Confirm Password"
                style={styles.textInput}
                secureTextEntry
                onChangeText={val => updateByKey('cnfPassword', val)}
                value={signUpData.cnfPassword}
                refs={cnf_password_ref}
                onSubmitEditing={() =>
                  phone_ref.current && phone_ref.current?.focus()
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.nameText}>Phone</Text>
              <TextInputComp
                placeholder="Phone number"
                style={styles.textInput}
                onChangeText={val => updateByKey('phoneNumber', val)}
                value={signUpData.phoneNumber}
                refs={phone_ref}
                onSubmitEditing={onSignupPress}
                keyboardType={'number-pad'}
                maxLength={10}
              />
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => {
                  onSignupPress();
                }}>
                <LinearGradient
                  colors={['#497bcc', '#34d5eb']}
                  style={styles.signin}>
                  <Text style={styles.textsign}>Sign Up</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.alreadyAccountView}>
              <Pressable
                onPress={() => {
                  navigation.replace('LoginScreen');
                }}>
                <Text style={styles.alreadyAccountText}>
                  Already have account? Login
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
