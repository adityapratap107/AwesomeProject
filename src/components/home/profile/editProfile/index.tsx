import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import useStyle from './styles';
import Cross from '../../../../assets/images/common/cross.svg';
import {useNav} from '../../../../navigation/useNav';
import TextInputComp from '../../../common/TextInputComp';
import {UserContext} from '../../../../../context/userStorage';
import {showToast} from '../../../utils/commonAlert';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useFocusEffect} from '@react-navigation/native';
import {
  updateUserDetails,
  verifyUserDetails,
} from '../../../../network/apiCalls';
import {useQueryClient} from 'react-query';

interface EditDetails {
  name: string;
  headline: string;
  bio: string;
  companyName: string;
  country: string;
  city: string;
}

const initialData = {
  name: '',
  headline: '',
  bio: '',
  companyName: '',
  country: '',
  city: '',
};
const EditProfile = () => {
  const styles = useStyle();
  const navigation = useNav();
  const [editedData, setEditedData] = useState<EditDetails>(initialData);

  const {data: user} = useContext(UserContext);
  const name_ref = useRef<TextInput>(null);
  const headline_ref = useRef<TextInput>(null);
  const bio_ref = useRef<TextInput>(null);
  const company_ref = useRef<TextInput>(null);
  const country_ref = useRef<TextInput>(null);
  const city_ref = useRef<TextInput>(null);
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const checkValidation = () => {
    if (editedData.name.trim() == '') {
      showToast('danger', 'Please enter your name', 2000);
      return false;
    } else if (editedData.headline.trim() == '') {
      showToast('danger', 'Please enter headline.', 2000);
      return false;
    } else if (editedData.bio.trim() == '') {
      showToast('danger', 'Please enter bio.', 2000);
      return false;
    } else if (editedData.companyName.trim() == '') {
      showToast('danger', 'Please enter company name.', 2000);
      return false;
    } else if (editedData.country.trim() == '') {
      showToast('danger', 'Please enter your country.', 2000);
      return false;
    } else if (editedData.city.trim() == '') {
      showToast('danger', 'Please enter your city.', 2000);
      return false;
    }
    else {
      return true;
    }
  };

  const updateProfileDetails = async () => {
    if (checkValidation()) {
      const payload = {
        name: editedData.name,
        headline: editedData.headline,
        bio: editedData.bio,
        companyName: editedData.companyName,
        country: editedData.country,
        city: editedData.city,
      };
      setLoading(true);
      try {
        const response = await queryClient.fetchQuery(
          [
            'updateUserDetails',
            {
              privateToken: user.access_token,
              payload: payload,
            },
          ],
          updateUserDetails,
        );
        console.log(response.data);
        showToast('success', response.data.message, 2000);
        navigation.navigate('ProfileScreen');
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getUserDetails = async () => {
    setLoading(true);
    try {
      const response = await queryClient.fetchQuery(
        [
          'verifyUserDetails',
          {
            privateToken: user.access_token,
            payload: {},
          },
        ],
        verifyUserDetails,
      );
      setLoading(false);
      setUserDetails(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(() => {
    getUserDetails();
  });

  const updateByKey = (key: string, value: string) => {
    setEditedData({
      ...editedData,
      [key]: value,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.headerView}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Cross height={25} width={25} />
          </Pressable>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </View>
        <KeyboardAwareScrollView style={styles.editConainer}>
          <View>
            <Text style={styles.heading}>Name*</Text>
            <TextInputComp
              placeholder="Enter full Name"
              style={styles.nameInput}
              defaultValue={userDetails.name}
              value={editedData.name}
              onChangeText={val => updateByKey('name', val)}
              maxLength={70}
              returnKeyType={'next'}
              refs={name_ref}
              onSubmitEditing={() => {
                headline_ref.current && headline_ref.current?.focus();
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Headline*</Text>
            <TextInputComp
              placeholder="Add Headline"
              style={styles.nameInput}
              defaultValue={userDetails.headline}
              onChangeText={val => updateByKey('headline', val)}
              maxLength={70}
              returnKeyType={'next'}
              refs={headline_ref}
              onSubmitEditing={() => {
                bio_ref.current && bio_ref.current?.focus();
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Bio (Optional)</Text>
            <TextInputComp
              placeholder="Add bio"
              style={styles.nameInput}
              defaultValue={userDetails.bio}
              onChangeText={val => updateByKey('bio', val)}
              maxLength={70}
              returnKeyType={'next'}
              refs={bio_ref}
              onSubmitEditing={() => {
                company_ref.current && company_ref.current?.focus();
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Company Name</Text>
            <TextInputComp
              placeholder="Add Company"
              style={styles.nameInput}
              defaultValue={userDetails.companyName}
              onChangeText={val => updateByKey('companyName', val)}
              maxLength={70}
              returnKeyType={'next'}
              refs={company_ref}
              onSubmitEditing={() => {
                country_ref.current && country_ref.current?.focus();
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.boldHeading}>Location</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Country</Text>
            <TextInputComp
              placeholder="Add Country"
              style={styles.nameInput}
              defaultValue={userDetails.country}
              onChangeText={val => updateByKey('country', val)}
              maxLength={70}
              returnKeyType={'next'}
              refs={country_ref}
              onSubmitEditing={() => {
                city_ref.current && city_ref.current?.focus();
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>City</Text>
            <TextInputComp
              placeholder="Add City"
              style={styles.nameInput}
              defaultValue={userDetails.city}
              onChangeText={val => updateByKey('city', val)}
              maxLength={70}
              returnKeyType={'next'}
              refs={city_ref}
              onSubmitEditing={() => {
                updateProfileDetails();
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.saveButton}
          onPress={() => {
            updateProfileDetails();
          }}>
          <Text style={styles.saveButtonText}>Save</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
