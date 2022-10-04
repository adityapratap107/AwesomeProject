import React, {useContext} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../components/Auth/onboarding';
import SignUpScreen from '../components/Auth/signUp';
import LoginScreen from '../components/Auth/login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/home/home';
import Profile from '../components/home/profile';
import Post from '../components/home/post';
import {Platform, View} from 'react-native';
import useStyle from './style';
import HomeIcon from '../assets/images/common/home.svg';
import HomeFill from '../assets/images/common/homeFill.svg';
import UserIcon from '../assets/images/common/user.svg';
import UserFill from '../assets/images/common/userFill.svg';
import Add from '../assets/images/common/add.svg';
import AddFill from '../assets/images/common/addFill.svg';
import {UserContext} from '../../context/userStorage';
import EditProfile from '../components/home/profile/editProfile';
import Message from '../components/home/home/message';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const HomeTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="MessageScreen" component={Message} />
    </Stack.Navigator>
  );
};

const ProfileTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="EditProfileScreen" component={EditProfile} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  const styles = useStyle();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
        tabBarStyle: {paddingBottom: 10},
        tabBarHideOnKeyboard: Platform.OS !== 'ios',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarAddIcon}>
              {focused ? (
                <HomeFill height={30} width={30} />
              ) : (
                <HomeIcon height={30} width={30} />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarAddIcon}>
              {focused ? (
                <AddFill height={30} width={30} />
              ) : (
                <Add height={30} width={30} />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarAddIcon}>
              {focused ? (
                <UserFill height={30} width={30} />
              ) : (
                <UserIcon height={30} width={30} />
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const {data: user} = useContext(UserContext);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={
          user.access_token ? 'BottomTabs' : 'OnboardingScreen'
        }>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
