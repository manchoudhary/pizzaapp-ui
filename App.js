import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './app/navigator';
import store from './app/lib/createStore';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <NativeBaseProvider>
          <AppNavigator />
        </NativeBaseProvider>
      </Provider>
    </View>
  );
}
