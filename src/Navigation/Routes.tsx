import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
const options = {
  headerShown: false,
  animation: 'slide_from_right',
};
const Stack = createNativeStackNavigator();

const Routes = () => {
  const {userData} = useSelector(state => state);

  console.log(userData, 'ROUTES');

  return (
    <NavigationContainer>
      {userData?.token ? (
        <>
          <MainStack />
        </>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
