import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CommonButton = ({text = '', onPress = () => {}, styles = {}}) => {
  return (
    <View style={[styles]}>
      <Button title={text} onPress={onPress} testID="commonBtn" />
    </View>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
