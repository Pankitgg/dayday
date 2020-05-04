import 'whatwg-fetch';
import Cookies from 'js-cookie';


//fetch 重构
export function doFetch({url,data={},type='GET',responseType,ContentType='application/json;charset=utf-8'}){
    let options = {
        credentials: 'include',
        headers: {
            'accept': 'application/json',
            'Content-Type':ContentType,
            'Cache-Control':'no-store'
        }
    };

    if (type.toLocaleUpperCase() === 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        });

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = encodeURI(url + '?' + dataStr);
        }
    }else{
        options.body = JSON.stringify(data);
    }
    if (url.indexOf("?") >= 0) {//判断url中是否已经带有参数
        url = url + "&t=" + (new Date()).valueOf();
    } else {
        url = url + "?t=" + (new Date()).valueOf();
    }
    options.method = type;

    return fetch(url,options).then((response)=>{
        Cookies.set('last_request_time',Date.now());
        return responseType=='text' ? response.text() : response.json();
    }).then(isLogin);
}



export function isLogin(response) {
    let HttpCode = parseInt(response.code, 10);
    if(HttpCode === 401 || HttpCode === 400) {
        window.unLogin = true;
        location.href = response.desc || '/home.html';
    }
    return response;
}
//接口写法
export const getAnalydatatotal=(data)=>doFetch({url:"http://localhost:5000/data",data, type:"GET"});