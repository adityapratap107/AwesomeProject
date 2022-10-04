import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useStyle from './styles';
import User from '../../../assets/images/common/userImg.svg';
import Chat from '../../../assets/images/common/chat.svg';
import Search from '../../../assets/images/common/search.svg';
import {SearchBar} from '@rneui/themed';
import {useNav} from '../../../navigation/useNav';
import HomeCard from '../../common/HomeCard';

const Home = () => {
  const styles = useStyle();
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  const DATA = [
    {
      title: 'Hello',
      time: 'Wednesday, 27 Sept 2022',
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1664511646200-49fe631ce931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Title 2',
      time: 'Wednesday, 27 Sept 2022',
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Title 3',
      time: 'Wednesday, 27 Sept 2022',
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1664519803504-a8ed329d9381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60r',
    },
  ];

  const navigation = useNav();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerView}>
          <Pressable
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <User height={30} width={30} />
          </Pressable>
          <View>
            <SearchBar
              placeholder="Search"
              onChangeText={updateSearch}
              value={search}
              containerStyle={styles.searchContainerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              lightTheme={true}
              inputStyle={styles.searchInput}
              placeholderTextColor={'black'}
              searchIcon={<Search height={20} width={20} />}
            />
          </View>
          <TouchableOpacity
            style={styles.chatIcon}
            onPress={() => {
              navigation.navigate('MessageScreen');
            }}>
            <Chat height={30} width={30} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lineOuterView}>
        <View style={styles.lineView} />
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={HomeCard}
          initialNumToRender={1}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
