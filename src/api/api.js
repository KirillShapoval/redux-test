import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wearepush-learn-redux-task3-ba.herokuapp.com/api/v1/',
});

export const usersAPI = {
  getNews() {
    return instance(`news`,  { method: 'get' })
  },
  getUsersProfile() {
    return instance(`user-info/1`, { method: 'get' })
  },
  loginPost(data) {
    return instance(`validate`, { method: 'post', data })
  }
}
