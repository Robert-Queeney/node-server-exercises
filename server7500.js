let http = require('http'); 

let PORT = 7500; 

function handleRequest(request, response){
    response.end("You look like a dumpster fire. Path hit: " + request.url); 

}

let server = http.createServer(handleRequest); 

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT); 
}); 