import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/266479',
    timeout: 15000,
    withCredentials: true
});

export default class Xhr {
    static get(url: string, data: any, config?: any) {
        return new Promise((resolve, reject) => {
            instance.get(url, {params: data}).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static post(url: string, data?: any, config?: any) {
        return new Promise((resolve, reject) => {
            instance.post(url, data, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static patch(url: string, data?: any, config?: any) {
        return new Promise((resolve, reject) => {
            instance.patch(url, data, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static delete(url: string, config?: any) {
        return new Promise((resolve, reject) => {
            instance.delete(url, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static put(url: string, data?: any, config?: any) {
        return new Promise((resolve, reject) => {
            instance.put(url, data, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
};


//添加请求的拦截器
// instance.interceptors.request.use(config => {
//     // let token = sessionStorage.getItem('access_token')
//     // token有效期24h
//     let token = 'gAAAAABe2aZY4Plgpd8oHUmrTGqvGl3yQm4KoHxk2Uid5rsPXLWo1MKuRO0W9lIgfUxZXePpqEKyhbIV9XqPe3p4IocLtt8VPsUHnCmLzO_38ane2XsxkTtnYVhoMZGlLyd_PBzOX90MeoHYU2Yn4baQiAeTliSAk22SikIm3dXM6mdKInuZQKk'
//     if (token) {
//         config.headers['X-Auth-Token'] = token;
//     }
//     return config;
// }, err => {
//     return Promise.reject(err);
// })


