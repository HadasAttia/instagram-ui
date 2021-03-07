import Cookies from 'js-cookie';
import environment from '../environments/index';

export class UserService {

  static getToken() {
    return Cookies.get('instagram-user');
  }

    static async me() {
          const res = await fetch(environment.apiUrl + '/user/me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: UserService.getToken()
        },
      });
      if (res.status !== 200) {
        return null;
      }
      return await res.json();
    }

    static create(data) {
      return fetch(environment.apiUrl + '/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    }

    static login(credentials) {
      return fetch(environment.apiUrl + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
    }

    static async getPosts(username) {
        const res = await fetch(environment.apiUrl + '/user/' + username + '/posts', {
          headers: {
            Authorization: UserService.getToken()
          }
        });
        return res.json();
    }
    static async get(username) {
      const res = await fetch(environment.apiUrl + '/user/' + username, {
        headers: {
          Authorization: UserService.getToken()
        }
      });
      return res.json();
    }

    static async search(username) {
      const res = await fetch(environment.apiUrl + '/user/?username=' + username, {
        headers: {
          Authorization: UserService.getToken()
        }
      });
      return res.json();
    }
}