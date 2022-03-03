// WebServer 생성 코드
const http = require('http'); // node.js에서 제공하는 내장 'http' 모듈 사용 - 초기값이 변하지 않도록 상수(const)로 선언

const hostname = '127.0.0.1';
const port = 1337;

// createServer() : 컴퓨터의 포트에서 수신 대기하는 서버 생성
// server.listen() : 지정된 포트 또는 경로에 리스너를 생성
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});