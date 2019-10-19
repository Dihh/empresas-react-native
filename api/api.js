const axios = require('axios');

const api = {
    login() {
        return new Promise(async (resolve, reject) => {
            await axios({
                method: 'POST', url: 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in', data: {
                    email: 'testeapple@ioasys.com.br',
                    password: '12341234'
                },
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            }).then(function (response) {
                // handle success
                resolve(response);
            }).catch(function (error) {
                // handle error
                reject(error);
            })
        })

    }
}

export default api