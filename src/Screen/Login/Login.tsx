import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import colors from '../../styles/colors';
import CommonTextInput from '../../Components/CommonTextInput/CommonTextInput';
import CommonButton from '../../Components/CommonButton/CommonButton';
import {scaledSize, scaleHeight, scaleWidth} from '../../styles/dimensions';
import strings from '../../constants/lang';
import {saveUserData} from '../../redux/slices/userDataSlice';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import {useDispatch} from 'react-redux';
import actions from '../../redux/actions';
import Loader from '../../Components/Loader/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isEmailValid = () => {
    if (!!email) {
      setEmailError('');
      return true;
    } else {
      setEmailError(strings.PLEASE_ENTER_A_VALID_EMAIL);
      return false;
    }
  };
  const isPasswordValid = () => {
    if (!!password) {
      setPasswordError('');
      return true;
    } else {
      setPasswordError(strings.PLEASE_ENTER_A_VALID_PASSWORD);
      return false;
    }
  };

  const onPressLogin = () => {
    isPasswordValid()
    if (isEmailValid() && isPasswordValid()) {
      setIsLoading(true);
      const body = {
        username: email,
        password: password,
        // username: 'emilys',
        // password: 'emilyspass',
      };
      actions
        .postLoginDetails(body)
        .then(res => {
          console.log(res);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          Alert.alert(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  const [name, setUser] = React.useState('');
  return (
    <SafeAreaView style={styles.mainContiner}>
      <Loader isLoading={isLoading} />
      <View style={styles.header} />
      <View style={styles.content}>
        <View style={styles.fieldContainer}>
          <TextInput value={name} onChangeText={setUser} testID="input" />
          <CommonTextInput
            testID={'email-input'}
            placeholder={strings.EMAIL}
            value={email}
            onChangeText={setEmail}
            validationError={emailError}
            editable={true}
            showHeading={false}
          />
          <CommonTextInput
            testID={'password-input'}
            placeholder={strings.PASSWORD}
            value={password}
            onChangeText={setPassword}
            validationError={passwordError}
            secureTextEntry={true}
            editable={true}
            showHeading={false}
          />
          <CommonButton text={strings.LOGIN} onPress={onPressLogin} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContiner: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: colors.backgroundColor,
    borderRadius: scaledSize(30),
    flex: 2,
    paddingHorizontal: scaleWidth(15),
    paddingTop: scaleHeight(25),
    top: -scaleHeight(25),
  },
  fieldContainer: {flex: 1},
  header: {
    backgroundColor: colors.secondaryColor,
    flex: 1,
  },
  input: {
    marginVertical: scaleHeight(10),
  },
  loginBtn: {
    marginTop: scaleHeight(15),
  },
});
