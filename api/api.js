const axios = require('axios');

const api = {
    async login(data) {
        return new Promise(async (resolve, reject) => {
            await axios({
                method: 'POST', url: 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in', data: {
                    email: data.email,
                    password: data.password
                },
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            })
        })

    },
    async enterprises(data) {
        return new Promise(async (resolve, reject) => {
            await axios({
                method: 'GET',
                url: 'http://empresas.ioasys.com.br/api/v1/enterprises',
                data: {},
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'access-token': data['access-token'],
                    'client': data['client'],
                    'uid': data['uid']
                }
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            })
        })
    },
    async show(data) {
        return new Promise(async (resolve, reject) => {
            await axios({
                method: 'GET',
                url: `http://empresas.ioasys.com.br/api/v1/enterprises/${data.id}`,
                data: {},
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'access-token': data['access-token'],
                    'client': data['client'],
                    'uid': data['uid']
                }
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            })
        })
    },
    async filter(data) {
        let url = 'http://empresas.ioasys.com.br/api/v1/enterprises?';
        url = data.filterEntrepise ? url + `name=${data.filterEntrepise}` : url;
        url = data.filterType ? url + `enterprise_types=${data.filterType}` : url;
        return new Promise(async (resolve, reject) => {
            await axios({
                method: 'GET',
                url: url,
                data: {},
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'access-token': data['access-token'],
                    'client': data['client'],
                    'uid': data['uid']
                }
            }).then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            })

        })
    }
}

export default api