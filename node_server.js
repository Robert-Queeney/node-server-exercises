let http = require('http'); 

let PORT = 7000; 


function handleRequest(request, response) {

    response.end("You look marvelous!  Path hit: " +request.url);

}

let server = http.createServer(handleRequest); 

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT); 

}); 