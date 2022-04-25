// 1、引入express
const express = require('express');
// 2、创建应用的对象
const app = express();
// 3、设置路由 req：对请求报文的封装，res：对响应报文的封装
app.get('/serve', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Hello World get');
});
app.all('/serve', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send('Hello World post');
});
// JSON案例
app.all('/json-server', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'atguigu',
        age: 10
    };
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    res.send(str);
});
// 超时案例
app.all('/timeout', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        res.send('Hello World timeout');
    }, 3000);
});
// jQuery案例
app.all("/jquery-server", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send('Hello World jquery');
});
// axios案例
app.all("/axios-server", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.send('Hello World axios');
});
// 跨域请求
//jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});

// 4、监听端口
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
