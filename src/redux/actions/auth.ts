import {LOGIN} from '../../config/urls';
import {apiPost, setUserData} from '../../utils/utils';
import { saveUserData } from '../slices/userDataSlice';
import store from '../store';
const {dispatch} = store
export const postLoginDetails = (data: any) => {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then(res => {
        setUserData(res)
        dispatch(saveUserData(res));
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};
