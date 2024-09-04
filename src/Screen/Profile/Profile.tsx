import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useReducer} from 'react';
import userDataSlice, {
  deleteUserData,
  reset,
} from '../../redux/slices/userDataSlice';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../../Components/CommonButton/CommonButton';
import strings from '../../constants/lang';
import {clearUserData} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import navigationStrings from '../../constants/navigationStrings';
import Header from '../../Components/Header/Header';
import CommonTextInput from '../../Components/CommonTextInput/CommonTextInput';
import {moderateScale, scaleHeight, scaleWidth} from '../../styles/dimensions';
import colors from '../../styles/colors';
import Radiobutton from '../../Components/Radiobutton/Radiobutton';

const Profile = () => {
  const {userData} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onLogout = () => {
    dispatch(reset());
    clearUserData();

    // navigation.navigate(navigationStrings.LOGIN);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title={strings.PROFILE} />
      <ScrollView>
        <View style={styles.innerContiner}>
          <Image
            source={{
              uri: userData?.image,
            }}
            style={styles.profileImage}
          />
          <CommonTextInput
            showHeading
            placeholder={strings.USERNAME}
            value={userData?.username}
            editable={false}
          />
          <CommonTextInput
            showHeading
            placeholder={strings.EMAIL_ONLY}
            value={userData?.email}
            editable={false}
          />
          <CommonTextInput
            showHeading
            placeholder={strings.FIRST_NAME}
            value={userData?.firstName}
            editable={false}
          />
          <CommonTextInput
            showHeading
            placeholder={strings.LAST_NAME}
            value={userData?.lastName}
            editable={false}
          />
          <Radiobutton
            title={strings.GENDER}
            list={['Male', 'Female']}
            selectedBtn={'Female'}
          />

          <CommonButton
            text={strings.LOGOUT}
            onPress={onLogout}
            styles={styles.btnStyles}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  innerContiner: {
    margin: 16,
  },
  profileImage: {
    width: scaleWidth(100),
    height: scaleHeight(100),
    borderWidth: 2,
    borderColor: colors.secondaryColor,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  btnStyles: {
    marginTop: moderateScale(50),
  },
});
