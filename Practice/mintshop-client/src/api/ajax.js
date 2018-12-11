import axios from 'axios';

export default function ajax(url = '', data = {}, methods = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    let dataStr = '';
    if (methods === 'GET') {
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      })
      if (dataStr != '') {
        url += '?' + dataStr;
      }
      promise = axios.get(url);
    }else {
      promise = axios.post(url);
    }
    promise.then(response=>{
      resolve(response)
    }).catch(error=>{
      reject(error);
    })
  })
}
