let http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Hello Node.js');
    response.end();
}

// http 모듈에 createServer 함수에서 할일을 다 한다음에
// onRequest 콜백 함수를 실행시켜달라고 매개변수로 던짐
http.createServer(onRequest).listen(8888);