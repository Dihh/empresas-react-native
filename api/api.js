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

    }
}

export default api