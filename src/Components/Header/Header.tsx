import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';
import {scaleHeight} from '../../styles/dimensions';

const Header = ({title=""}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText} testID='header-text'>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryColor,
    height: scaleHeight(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 25,
    color: colors.backgroundColor,
  },
});
