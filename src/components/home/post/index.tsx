import React, {useContext, useRef, useState} from 'react';
import {
  Keyboard,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TextInputComp from '../../common/TextInputComp';
import useStyle from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import {useNav} from '../../../navigation/useNav';
import {showToast} from '../../utils/commonAlert';
import Delete from '../../../assets/images/common/trash.svg';
import {useQueryClient} from 'react-query';
import {verifyCreatePost} from '../../../network/apiCalls';
import {UserContext} from '../../../../context/userStorage';
import axios, {AxiosError} from 'axios';
import Axios from '../../../network/interceptor';
import {VERIFY_CREATE_POST} from '../../../network/apiList';

const Post = () => {
  const styles = useStyle();
  const navigation = useNav();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedImg, setUploadedImg] = useState('');
  const [loading, setLoading] = useState(false);
  const title_ref = useRef<TextInput>(null);
  const description_ref = useRef<TextInput>(null);
  const queryClient = useQueryClient();
  const {data: user} = useContext(UserContext);

  const onChangeTitle = val => {
    setTitle(val);
  };

  const onPressUpload = async () => {
    const imageResponse = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
    setUploadedImg(imageResponse.path);
  };

  const onDeletePress = () => {
    setUploadedImg('');
  };

  // const createNewPost = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await queryClient.fetchQuery(
  //       [
  //         'verifyCreatePost',
  //         {
  //           privateToken: user.access_token,
  //           data: title,
  //           // description,
  //           // },
  //           picture: uploadedImg,
  //         },
  //       ],
  //       verifyCreatePost,
  //     );
  //     setLoading(false);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const createNewPost = async () => {
    try {
      const formdata = new FormData();
      formdata.append('data', {title, description});
      formdata.append('picture', uploadedImg);
      const response = await Axios.post(VERIFY_CREATE_POST, formdata, {
        headers: {
          Authorization: user.access_token,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const createNewPost = async () => {
  //   const formdata = new FormData();
  //   formdata.append('data', {title: title, description: description});
  //   formdata.append('picture', uploadedImg);
  //   const response = await axios({
  //     method: "POST",
  //     url: VERIFY_CREATE_POST,
  //     data: formdata,
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //       Authorization: user.access_token,
  //     }
  //   });
  //   console.log(response.data);
  // }
  
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={styles.container}
        accessible={false}>
        <View style={styles.createPostView}>
          <Text style={styles.createPostText}>Create Post</Text>
        </View>
        <View style={styles.innerContainer}>
          <TextInputComp
            placeholder="Enter Title"
            style={styles.titleInput}
            value={title}
            onChangeText={onChangeTitle}
            maxLength={70}
            returnKeyType={'next'}
            refs={title_ref}
            onSubmitEditing={() => {
              description_ref.current && description_ref.current?.focus();
            }}
          />
          <TextInputComp
            placeholder="Description"
            style={styles.descriptionInput}
            value={description}
            onChangeText={setDescription}
            multiline={true}
            maxLength={300}
            refs={description_ref}
            textAlignVertical={'top'}
          />
        </View>
        <Pressable onPress={onPressUpload} style={styles.uploadImageTextView}>
          <Text style={styles.uploadImageText}>Upload an Image</Text>
        </Pressable>
        <View style={styles.imagePreviewView}>
          {uploadedImg ? (
            <>
              <Image source={{uri: uploadedImg}} style={styles.imagePreview} />
              <Pressable style={styles.deleteIcon} onPress={onDeletePress}>
                <Delete height={30} width={30} />
              </Pressable>
            </>
          ) : null}
        </View>

        {title ? (
          <Pressable
            style={styles.postButton}
            onPress={() => {
              showToast('success', 'Post created successfully.', 2000);
              navigation.navigate('HomeScreen');
              createNewPost();
            }}>
            <Text style={styles.postButtonText}>Post</Text>
          </Pressable>
        ) : (
          <Pressable
            style={styles.postDisabledButton}
            onPress={() => {
              showToast('danger', 'Please enter title.', 2000);
            }}>
            <Text style={styles.postButtonText}>Post</Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default Post;
