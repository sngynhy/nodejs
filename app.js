const { application } = require('express'); // express module import
var express = require('express');
// var bodyParser = require('body-parser');
var app = express(); // express로 생성한 application을 제어하기 위한 객체 생성 필요

app.locals.pretty = true;

// 템플릿 엔진
app.set('view engine', 'pug'); // express와 pug 템플릿 엔진을 연결
    // view engine == 템플릿 엔진 : 애플리케이션에서 정적 템플릿 파일 사용가능 + 런타임 시 템플릿 엔진은 템플릿 파일의 변수를 실제 값으로 바꾸고 템플릿을 클라이언트에 전송되는 HTML 파일로 변환
    // 따라서 이 접근 방식을 사용하면 HTML 페이지를 더 쉽게 디자인할 수 있음
app.set('views', './views'); // views : 템플릿이 있는 디렉토리를 express에게 알려줌, ./views : pug파일이 저장되어있는 디렉토리명(경로)

app.use(express.static('public')); // app.use(express.static('디렉토리명')) : 정적인 파일이 위치 할 디렉토리를 지정
    // localhost:포트넘버/디렉토리에저장된이미지파일명

// Query String (쿼리스트링) - http://localhost:3000/topic?id=1
app.get('/topic', function(req, res) {
    var topics = [
        'JavaScript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
    `
    res.send(output);
});

// 시멘틱 URL - http://localhost:3000/topic/1
app.get('/topic/:id', function(req, res) {
    var topics = [
        'JavaScript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.params.id]}
    `
    res.send(output);
});

app.get('/param/:module_id/:topic_id', function(req, res){
    res.json(req.params);
});

app.get('/template', function(req, res){
    // res.render('temp', {time:'hello', data:Date()}); // rendering(랜더링) : html로 입력받아 해석해서 표준 출력 장치(모니터)로 출력 / 'temp' : views 디렉토리에 있는 pug파일명
    // 위와 같이 'temp'를 render하게 되면 epress는 내부적으로 위에 정의해놓은 'views' 디렉토리 내부에 템플릿 엔진('view engine')으로 정의한 'pug'확장자인 'temp.pug'파일을 찾아
    // 해당 파일의 내용을 pug의 문법에 따라서 해석한 후 그 결과를 사용자에게 response해준다.
    // time:'hello' - time이라는 변수에 'hello'문자열을 할당해줌 -> temp.pug에서 time변수를 사용할 수 있고 그 변수에 할당된 값이 출력됨
    res.render('temp', {time:Date(), _title:'Pug'});
})


app.get('/form', function(req, res){
    res.render('form');
});
// get 방식으로 전달된 form 데이터를 받는 방법 - req.query로 받음
app.get('/form_receiver',function(req, res){
    var title = req.query.title; // get 방식으로 전달된 데이터는 req.query로 받음
    var description = req.query.description;
    res.send(title + ', ' + description);
});

// post 방식으로 전달된 form 데이터를 받는 방법 - req.body로 받음
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// express.json(), express.urlencoded() 모두 페이로드로 들어오는 요청을 구문 분석하고 body-parser를 기반으로 함
// body파싱된 데이터를 포함하는 새 객체 request 는 미들웨어 이후의 객체에 채워지거나(ie ), 파싱할 본문이 없거나, 일치하지 않거나, 오류가 발생한 경우 req.body빈 객체( )가 채워짐
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // extended: true - 
app.post('/form_receiver', function(req, res){
    // console.log(req.body); 
    res.json(req.body); // post 방식으로 전달된 데이터는 req.body로 받음
    // res.json(req.body.title +', ' + req.body.description);
});


app.get('/', function(req, res){ // get(path, callback) : 지정된 콜백 함수를 사용하여 HTTP GET 요청을 지정된 경로로 라우팅함
    res.send('GET request to homepage'); // res.send() : 사용자에게 응답
});
app.get('/dynamic', function(req, res){
    var output = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title></title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
        <script src='main.js'></script>
    </head>
    <body>
        Hello, Dynamic!
    </body>
    </html>`;
    res.send(output);
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