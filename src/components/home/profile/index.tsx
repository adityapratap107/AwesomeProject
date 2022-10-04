import React, {useContext, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import useStyle from './styles';
import Camera from '../../../assets/images/common/camera.svg';
import Add from '../../../assets/images/common/addFill.svg';
import Edit from '../../../assets/images/common/edit.svg';
import Eye from '../../../assets/images/common/eye.svg';
import People from '../../../assets/images/common/people.svg';
import Search from '../../../assets/images/common/search.svg';
import Plus from '../../../assets/images/common/plus.svg';
import Bar from '../../../assets/images/common/graph.svg';
import {showToast} from '../../utils/commonAlert';
import {useNav} from '../../../navigation/useNav';
import {UserContext} from '../../../../context/userStorage';
import ImagePicker from 'react-native-image-crop-picker';
import {useQueryClient} from 'react-query';
import {verifyUserDetails} from '../../../network/apiCalls';
import {useSelector} from 'react-redux';

const Profile = () => {
  const styles = useStyle();
  const navigation = useNav();
  const {data: user, removeData} = useContext(UserContext);
  const [profileImage, setProfileImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const queryClient = useQueryClient();

  const amount = useSelector(state => state.amount);

  const onLogoutPress = () => {
    showToast('success', 'Logout Successfully', 2000);
    removeData();
    navigation.reset({
      index: 0,
      routes: [{name: 'OnboardingScreen'}],
    });
  };

  const profileImageHandler = async () => {
    console.log('clicked');
    const imageResponse = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    setProfileImage(imageResponse.path);
  };

  const coverImageHandler = async () => {
    const imageResponse = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    setCoverImage(imageResponse.path);
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
      console.log(response.data.data);
      setUserDetails(response.data.data);
      console.log('User Details', userDetails);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <ScrollView>
          <View style={styles.coverView}>
            <Image
              source={{uri: coverImage}}
              style={styles.coverImageStyle}
              resizeMode={'cover'}
            />
            <TouchableOpacity
              style={styles.coverCameraView}
              onPress={coverImageHandler}>
              <Camera height={15} width={15} />
            </TouchableOpacity>
          </View>
          <View style={styles.innerContainer}>
            <View style={styles.profilePicView}>
              <Image
                source={{uri: profileImage}}
                style={styles.image}
                resizeMode={'contain'}
              />
              <TouchableOpacity
                style={styles.addIconView}
                onPress={profileImageHandler}>
                <Add height={30} width={30} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.editProfileView}
              onPress={() => {
                navigation.navigate('EditProfileScreen');
              }}>
              <Edit height={20} width={20} />
            </TouchableOpacity>
            <View style={styles.headingView}>
              <Text style={styles.nametext}>
                {userDetails?.name === undefined ? '' : userDetails?.name}
              </Text>
              <Text style={styles.designationText}>
                {userDetails?.headline === undefined
                  ? ''
                  : userDetails?.headline}
              </Text>
              <Text style={styles.bioText}>
                {userDetails?.bio === undefined ? '' : userDetails?.bio}
              </Text>
              <Text style={styles.companyName}>
                {userDetails?.companyName === undefined
                  ? ''
                  : userDetails?.companyName}
              </Text>
              {userDetails.country ? (
                <Text style={styles.bioText}>
                  {userDetails?.city === undefined ? '' : userDetails?.city}
                  {', '}
                  {userDetails?.country === undefined
                    ? ''
                    : userDetails?.country}
                </Text>
              ) : null}

              <View style={styles.connectionsView}>
                <Text style={styles.connectionsText}>
                  487 followers . 485 connections
                </Text>
              </View>
              <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.openToButton}>
                  <Text style={styles.openButtonText}>Open to</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addSectionButton}>
                  <Text style={styles.addSectionButtonText}>Add section</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.moreButton}>
                  <Text style={styles.moreButtonText}>...</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.lineOuterView}>
            <View style={styles.lineView} />
          </View>
          <View style={styles.innerContainer}>
            <View style={styles.boldTextView}>
              <Text style={styles.boldText}>Analytics</Text>
            </View>
            <View style={styles.eyeView}>
              <Eye height={20} width={20} />
              <Text style={styles.regularText}> Private to you</Text>
            </View>
            <View style={styles.profileViews}>
              <People height={28} width={28} />
              <Text style={styles.profileViewsText}>80 profile views</Text>
            </View>
            <Text style={styles.descriptionText}>
              Discover who's viewed your profile.
            </Text>
            <View style={styles.seperatorView} />
            <View style={styles.profileViews}>
              <Bar height={28} width={28} />
              <Text style={styles.profileViewsText}>20 post impressions</Text>
            </View>
            <Text style={styles.descriptionText}>
              Start a post to increase engagement.{'\n'}Past 7 days
            </Text>
            <View style={styles.seperatorView} />
            <View style={styles.profileViews}>
              <Search height={20} width={20} />
              <Text style={[styles.profileViewsText, styles.searchText]}>
                50 search appearances
              </Text>
            </View>
            <Text
              style={[styles.descriptionText, styles.searchDescriptionText]}>
              See how often you appear in search results.
            </Text>
          </View>
          <View style={[styles.lineView, styles.belowLineView]} />
          <View style={styles.innerContainer}>
            <View style={[styles.boldTextView, styles.aboutView]}>
              <Text style={styles.aboutBoldText}>About</Text>
              <Text style={styles.aboutText}>Talks about #programming</Text>
            </View>
          </View>
          <View style={[styles.lineView, styles.experienceLineView]} />
          <View style={styles.innerContainer}>
            <View style={styles.experienceView}>
              <Text style={styles.aboutBoldText}>Logout</Text>
            </View>
            <View style={styles.addEditIcon}>
              <Plus height={20} width={20} style={styles.plusIcon} />
              <Edit height={20} width={20} style={styles.editIcon} />
            </View>
            <View style={styles.logoutView}>
              <TouchableOpacity
                style={styles.openToButton}
                onPress={onLogoutPress}>
                <Text style={styles.openButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.lineView, styles.experienceLineView]} />
          <View style={styles.innerContainer}>
            <View style={styles.experienceView}>
              <Text style={styles.aboutBoldText}>Total Money - {amount}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Profile;
