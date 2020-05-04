const http = require('http');
const url = require('url')
http.createServer((req, res) => {

    console.log(req.url);//获取客户端浏览器传来参数


    //响应头..设置的编码，要与页面保持一致

    res.writeHead(200, { "Content-type": "text/html;charset='utf-8'" })

    res.write("<head><meta charset='utf-8'></head>")//解决网页乱码
    res.write('nnn你');//html默认非utf8

    if (req.url !== '/favicon.ico') {
        var getValue = url.parse(req.url, true).query
        console.log(`姓名: ${getValue.name} --- 年龄：${getValue.age}`);
    }

    res.end();//结束相应

}).listen(5000);