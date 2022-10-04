import {AxiosError} from 'axios';
import {
  UPDATE_USER_DETAILS,
  VERIFY_CREATE_POST,
  VERIFY_LOGIN,
  VERIFY_SIGNUP,
  VERIFY_USER_DETAILS,
} from './apiList';
import Axios from './interceptor';

export const verifySignup = ({queryKey}: any) => {
  const [_key, {payload}] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return Axios.post(VERIFY_SIGNUP, payload, config);
};

export const verifyLogin = ({queryKey}: any) => {
  const [_key, {payload}] = queryKey;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return Axios.post(VERIFY_LOGIN, payload, config);
};

export const verifyUserDetails = ({queryKey}: any) => {
  const [_key, {privateToken, payload}] = queryKey;
  const config = {
    headers: {
      Authorization: privateToken,
      'Content-Type': 'application/json',
    },
  };
  return Axios.post(VERIFY_USER_DETAILS, payload, config);
};

export const updateUserDetails = ({queryKey}: any) => {
  const [_key, {privateToken, payload}] = queryKey;
  const config = {
    headers: {
      Authorization: privateToken,
      'Content-Type': 'application/json',
    },
  };
  return Axios.post(UPDATE_USER_DETAILS, payload, config);
};

export const verifyCreatePost = ({queryKey}: any) => {
  const [_key, {privateToken, data, picture}] = queryKey;
  const formdata = new FormData();
  formdata.append('data', data);
  formdata.append('picture', picture);
  const config = {
    headers: {
      Authorization: privateToken,
      'Content-Type': 'multipart/form-data; charset=utf-8;',
    },
  };
  return Axios.post(VERIFY_CREATE_POST, formdata, config).catch(
    (reason: AxiosError) => {
      console.log(reason.message);
    },
  );
};
