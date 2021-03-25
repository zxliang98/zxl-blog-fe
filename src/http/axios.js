import vue from "vue";
import axios from "axios";

// 创建实例时设置配置的默认值
var instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {}
});

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
    vue.prototype.$notify.error({
      title: "error",
      message: "接口出问题了,老哥!"
    });
    return Promise.reject(error);
  }
);

vue.prototype.$http = instance;

export default instance;
