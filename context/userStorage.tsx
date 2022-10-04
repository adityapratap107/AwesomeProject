import React, {createContext, useState} from 'react';
import {initialUser, UserModel} from '../src/network/models/user';
import UseStore from './useStore';

const USER_DATA_KEY = 'USER_DATA_KEY';

export const UserContext = createContext({
  data: initialUser,
  storeData: (data: UserModel) => {
    console.log(data);
  },
  removeData: () => {},
});

const UserStorage = ({children}: any) => {
  const {data, dataRetrieved, storeData, removeData} = UseStore<UserModel>({
    KEY: USER_DATA_KEY,
    initData: initialUser,
  });
  return (
    <UserContext.Provider value={{data, storeData, removeData}}>
      {dataRetrieved && children}
    </UserContext.Provider>
  );
};

export default UserStorage;
