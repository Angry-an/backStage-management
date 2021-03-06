import JsonP from 'jsonp';
import axios from 'axios'
import { Modal } from 'antd';
export default class Axios{
    static json(options){
        return new Promise((resolve,reject)=>{

            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                if(response.status==='success'){
                    resolve(response)
                }else{
                    reject(err.message)
                }
            })
            
        })
    }
    static ajax(options){
        let baseapi = 'https://www.easy-mock.com/mock/5c1a1861e29fc768e8a53882/mockapi';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseapi,
                timeout:5000,
                param:(options.data && options.data.params) || ''

            }).then((response)=>{
                if(response.status == '200'){
                    let res = response.data;
                    if(res.code == '0'){
                        resolve(res)
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}

