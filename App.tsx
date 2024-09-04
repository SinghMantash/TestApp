import React, {useEffect} from 'react';
import Routes from './src/Navigation/Routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider, useDispatch} from 'react-redux';
import store from './src/redux/store';
import {getUserData} from './src/utils/utils';
import {saveUserData} from './src/redux/slices/userDataSlice';

const App = () => {
  const {dispatch} = store;
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let userData = await getUserData();
    if (!!userData) {
      dispatch(saveUserData(userData));
    }
  };
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
