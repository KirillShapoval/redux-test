import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wearepush-learn-redux-task3-ba.herokuapp.com/api/v1/',
});

export const usersAPI = {
  getNews() {
    return instance.get(`news`)
  },
  getUsersProfile() {
    return instance.get(`user-info/1`)
  },
  // loginPost({email, login}) {
  //   return instance.post(`validate`)
  // }
}
