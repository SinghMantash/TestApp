import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {scaleHeight} from '../../styles/dimensions';
import colors from '../../styles/colors';
interface Props {
  placeholder: string;
  value: string;
  onChangeText?: any;
  validationError?: string;
  secureTextEntry?: boolean;
  editable: boolean;
  showHeading: boolean;
}
const CommonTextInput = ({
  placeholder,
  value,
  onChangeText,
  validationError,
  secureTextEntry,
  editable = true,
  showHeading,
}: Props) => {
  return (
    <View>
      {showHeading && <Text>{placeholder}</Text>}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
      <Text style={styles.errorText}>
        {!!validationError && validationError}
      </Text>
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  input: {
    marginTop: scaleHeight(10),
    borderWidth:1,
    borderColor:colors.secondaryColor,
    borderRadius:50,
    paddingLeft:16
  },
  errorText: {
    color: colors.error,
  },
});
