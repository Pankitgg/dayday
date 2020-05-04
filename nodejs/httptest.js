const http=require('http');
const url=require('url')

var api='http://www.baidu.com?name=zhangsan&age=12';
console.log(url.parse(api,true));

var getValue=url.parse(api,true).query;
console.log(`姓名: ${getValue.name} --- 年龄：${getValue.age}`)


// http.createServer((req,res)=>{

//     console.log(req.url);//获取客户端浏览器传来参数

//     //响应头..设置的编码，要与页面保持一致

//     res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})

//      res.write("<head><meta charset='utf-8'></head>")//解决网页乱码
//         res.write('nnn你');//html默认非utf8
//         url.parse()




//         res.end();//结束相应

// }).listen(5000);
