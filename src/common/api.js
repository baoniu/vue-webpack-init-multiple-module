import axios from 'axios'
import qs from 'qs'
import * as _ from '../common/tool'

// axios 配置
axios.defaults.timeout = 30000;
axios.defaults.baseURL = '/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.headers['X-Requested-With'] = "XMLHttpRequest"; //这是一个ajax请求
//axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name="csrf-token"]').attr('content');


//传参序列化
axios.interceptors.request.use((config) => {
    config.data = qs.stringify(config.data);
    //if(config.method  === 'post'){
    //    config.data = qs.stringify(config.data);
    //}
    return config;
},(error) =>{
    //_.toast("错误的传参", 'warn', 1500, 'bottom');
    alert('参数错误')
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(res.data.hasOwnProperty('status')) {
        if(res.data.status !== '200'){
            return Promise.reject(res);
        }
        return res;
    } else {
        alert('数据格式错误');
    }
}, (error) => {
    alert('网络异常');
    return Promise.reject(error);
});

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
              .then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
              .catch((error) => {
            reject(error)
        })
    })
}
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
              .then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
              .catch((error) => {
            reject(error)
        })
    })
}

export function objToRequestParams(params) {
    if(params && ! _.isEmptyObject(params)) {
        let str = '';
        for(let n in params) {
            str += n +'=' + params[n] +'&'
        }

        return '?' + str.substring(0, str.lastIndexOf('&'));
    }
    return '';
}

export default {
    /**
     * 示例调用方法
     */
    getProfile(params) {
        return get('/worker/profile' + objToRequestParams(params))
    },
    postProfile(parmas) {
        return post('/worker/profile', parmas)
    },
}
