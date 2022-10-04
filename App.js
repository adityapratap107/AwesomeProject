import React, {useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import Routes from './src/navigation';
import UserStorage from './context/userStorage';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <UserStorage>
        <QueryClientProvider client={queryClient}>
          <Routes />
          <FlashMessage position={'top'} />
        </QueryClientProvider>
      </UserStorage>
    </Provider>
  );
};

export default App;
