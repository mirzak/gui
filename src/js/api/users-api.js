import Cookies from 'universal-cookie';
import { unauthorizedRedirect } from '../auth';
const cookies = new Cookies();
var request = require('superagent');

const Api = {
  get: url => {
    var token = cookies.get('JWT');
    return new Promise((resolve, reject) =>
      request
        .get(url)
        .use(unauthorizedRedirect)
        .auth(token, { type: 'bearer' })
        .end((err, res) => {
          if (err || !res.ok) {
            reject({ error: err, res: res });
          } else {
            resolve(res.body);
          }
        })
    );
  },
  postLogin: (url, userData) => {
    let body = {};
    if (userData.hasOwnProperty('token2fa')) {
      body = { token2fa: userData.token2fa };
    }
    return new Promise((resolve, reject) =>
      request
        .post(url)
        .auth(userData.email, userData.password)
        .set('Content-Type', 'application/json')
        .send(body)
        .end((err, res) => {
          if (err || !res.ok) {
            var errorResponse = {
              text: err.response ? JSON.parse(err.response.text) : err,
              code: err.status
            };
            reject({ error: errorResponse, res: res });
          } else {
            var response = {
              text: res.text,
              code: res.status
            };
            resolve(response);
          }
        })
    );
  },
  putVerifyTFA: (url, userData) => {
    var token = cookies.get('JWT');
    let body = {};
    if (userData.hasOwnProperty('token2fa')) {
      body = { token2fa: userData.token2fa };
    }
    return new Promise((resolve, reject) =>
      request
        .put(url)
        .auth(token, { type: 'bearer' })
        .set('Content-Type', 'application/json')
        .send(body)
        .end((err, res) => {
          if (err || !res.ok) {
            var errorResponse = {
              text: err.response ? JSON.parse(err.response.text) : err,
              code: err.status
            };
            reject({ error: errorResponse, res: res });
          } else {
            var response = {
              text: res.text,
              code: res.status
            };
            resolve(response);
          }
        })
    );
  },
  post: (url, userData) => {
    var token = cookies.get('JWT');
    return new Promise((resolve, reject) =>
      request
        .post(url)
        .use(unauthorizedRedirect)
        .auth(token, { type: 'bearer' })
        .set('Content-Type', 'application/json')
        .send(userData)
        .end((err, res) => {
          if (err || !res.ok) {
            reject({ error: err, res });
          } else {
            resolve(res);
          }
        })
    );
  },
  put: (url, userData) => {
    var token = cookies.get('JWT');
    return new Promise((resolve, reject) =>
      request
        .put(url)
        .use(unauthorizedRedirect)
        .auth(token, { type: 'bearer' })
        .set('Content-Type', 'application/json')
        .send(userData)
        .end((err, res) => {
          if (err || !res.ok) {
            reject({ error: err, res: res });
          } else {
            resolve(res.header);
          }
        })
    );
  },
  delete: url => {
    var token = cookies.get('JWT');
    return new Promise((resolve, reject) =>
      request
        .del(url)
        .use(unauthorizedRedirect)
        .auth(token, { type: 'bearer' })
        .end((err, res) => {
          if (err || !res.ok) {
            reject({ error: err, res: res });
          } else {
            resolve(res.header);
          }
        })
    );
  }
};

export default Api;
