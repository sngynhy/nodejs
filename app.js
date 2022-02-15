var express = require('express');
var app = express(); // express로 생성한 application을 제어하기 위한 객체 생성 필요

app.use(express.static('public')); // app.use(express.static('디렉토리명')) : 정적인 파일이 위치 할 디렉토리를 지정
// localhost:포트넘버/디렉토리에저장된이미지파일명

app.get('/', function(req, res){ // get(path, callback) : 지정된 콜백 함수를 사용하여 HTTP GET 요청을 지정된 경로로 라우팅함
    res.send('GET request to homepage'); // res.send() : 사용자에게 응답
});
app.get('/login', function(req, res){
    res.send('Login page');
});
app.get('/route', function(req, res){
    res.send('Hello Router,<br> <img src="/3683.jpg">');
});
app.listen(3000, function(){
    console.log('Connected 3000 port!');
});