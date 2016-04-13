var sys = require("util"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs");
my_http.createServer(function(request,response){
	console.log("received request!");
    var my_path = url.parse(request.url).pathname;
    var full_path = "C:\\Users\\David\\Documents\\phonegap-template-hello-world-master\\platforms\\browser\\www\\index.html";//path.join(process.cwd(),my_path);
    /*path.exists(full_path,function(exists){
        if(!exists){
            response.writeHeader(404, {"Content-Type": "text/plain"});  
            response.write("404 Not Found\n");  
            response.end();
        }
        else{*/
            filesys.readFile(full_path, "binary", function(err, file) {  
                 if(err) {  
					console.log(err);
                     response.writeHeader(500, {"Content-Type": "text/plain"});  
                     response.write(err + "\n");  
                     response.end();  
                
                 }  
                 else{
					 console.log("writing page!");
                    response.writeHeader(200);  
                    response.write(file, "binary");  
                    response.end();
                }
                      
            });
        //}
    //});
}).listen(8080);
console.log("Server Running on 8080");         