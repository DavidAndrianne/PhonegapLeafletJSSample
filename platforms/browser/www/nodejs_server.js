let sys = require("util"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs");
my_http.createServer(function(request,response){
	console.log("received request!");
    let my_path = url.parse(request.url).pathname;
	let full_path = path.join(process.cwd(),my_path);
	filesys.readFile(full_path, "binary", function(err, file) {  
		 if(err) {  
			console.log("ERROR : issue loading file :" + full_path);
			
			// verbose output
			/*console.log("request url : "+url.parse(request.url).pathname);
			  console.log("returned path: "+full_path); */
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
}).listen(8080);
console.log("Server Running on 8080");         