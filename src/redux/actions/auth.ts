import {LOGIN} from '../../config/urls';
import {apiPost, setUserData} from '../../utils/utils';

export const postLoginDetails = (data: any) => {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then(res => {
        setUserData(res)
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};
