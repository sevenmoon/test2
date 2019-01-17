import Axios from 'axios'

var baseUrl = 'https://ws.mammasay.com/'; 
var axios = Axios.create({
    baseURL:baseUrl,
    timeout:'15000',
    headers:{'X-Custom-Header': 'foobar'}
})

axios.interceptors.request.use(
    function(config){
        return config;
    },function(error){
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function(response){
        if(response.data.Code == 0){
            return response.data;
        }else if(response.data.Code==1){
            return response.Message;
        }
    },function(error){
        return Promise.reject(error);
    }
)
export default axios