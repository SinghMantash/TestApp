import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import {Login} from '../Screen';
const Stack = createNativeStackNavigator();
const options = {
  headerShown: false,
  animation: 'slide_from_right',
};
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
