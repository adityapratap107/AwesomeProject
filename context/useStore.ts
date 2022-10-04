import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

interface Props<M> {
  KEY: string;
  initData: M;
}

const UseStore = <M>({KEY, initData}: Props<M>) => {
  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [data, setData] = useState<M>(initData);

  const getData = async () => {
    let asyncData;
    try {
      const dataString = await AsyncStorage.getItem(KEY);
      asyncData = dataString && (await JSON.parse(dataString));
      console.log('Data fetched from async', asyncData);
      if (asyncData) {
        setData(asyncData);
      }
      setDataRetrieved(true);
    } catch (error) {
      console.log(error);
    }
    return asyncData;
  };

  const storeData = async (newData: M) => {
    try {
      const updatedData = {...data, ...newData};
      setData(updatedData);
      const stringObj = JSON.stringify(newData);
      await AsyncStorage.setItem(KEY, stringObj);
      console.log('DATA STORED IN ASYNC  #####', updatedData);
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      const updatedData = {...initData};
      setData(updatedData);
      const dataString = JSON.stringify(updatedData);
      await AsyncStorage.setItem(KEY, dataString);
      console.log('Data updated', updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    dataRetrieved,
    getData,
    storeData,
    removeData,
  };
};

export default UseStore;
