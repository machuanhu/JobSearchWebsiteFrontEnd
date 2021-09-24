
var http = require('http');
var fs = require('fs');
var url = require('url');
var path=require('path');
 
 
// 创建服务器
http.createServer( function (request, response) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   if(pathname.substr(1)==""){
    fs.readFile("home.html", function (err, data) {
        if (err) {
           console.log(err);
           // HTTP 状态码: 404 : NOT FOUND
           // Content Type: text/html
           response.writeHead(404,{'Content-Type': 'text/html'});
        }else{             
           // HTTP 状态码: 200 : OK
           // Content Type: text/html
           
           // 响应文件内容
           response.write(data.toString());        
        }
        //  发送响应数据
        response.end();
     });   
   }else{
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
           console.log(err);
           // HTTP 状态码: 404 : NOT FOUND
           // Content Type: text/html
           response.writeHead(404, {'Content-Type': 'text/html'});
        }else{             
           // HTTP 状态码: 200 : OK
           // Content Type: text/html
           var extname = path.extname(pathname);
           var mime = getMime(extname);
           response.writeHead(200,{'Content-Type': mime});    
          
           
           // 响应文件内容
           response.write(data.toString());        
        }
        //  发送响应数据
        response.end();
     });   
   }
   
   // 从文件系统中读取请求的文件内容
   
}).listen(3000);
function getMime(extname){
	switch(extname){
		case ".html" :
			return "text/html";
			break;
		case ".js" : 
			return "text.js";
			break;
		case ".css":
			return "text/css";
			break;
        case ".jpg":
            return "image/jpg";
            break;   
            case ".gif":
                return "image/gif";
                break;     
	}
}
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:3000/');