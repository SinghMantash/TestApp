import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import {Profile} from '../Screen';
const Stack = createNativeStackNavigator();
const options = {
  headerShown: false,
  animation: 'slide_from_right',
};
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={options}
      />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
