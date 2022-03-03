<<<<<<< HEAD
var express = require('express');
var fs = require('fs');
var app = express();

app.locals.pretty = true; // pug 파일 줄바꿈
app.set('view engine', 'pug'); // 템플릿 엔진
app.set('views', './views_file');

// 1. 사용자로부터 입력받은 title을 파일명으로 description을 내용으로 하는 파일을 data 폴더에 저장
app.get('/topic/new', function(req, res){ // 입력 화면으로 이동
    fs.readdir('./data', function(err, files){
        if (err) {
            console.log(err);22
            res.status(500).send('잘못된 경로입니다.');
        }
        res.render('new', {topics: files});
    });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/topic', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    // 파일 쓰기(저장) - fs.writeFile(fileName, data[, options], callback);
    fs.writeFile('./data/' + title, description, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('잘못된 경로입니다.')
        }
        // res.send(' 파일 저장 완료');
        res.redirect('topic/' + title); // 작성 후 해당 게시글 페이지로 이동
    })
});

// 2,3번의 코드를 합쳐 중복 코드 없애기
app.get(['/topic','/topic/:id'], function(req, res){
    fs.readdir('./data', function(err, files){
        if (err) {
            console.log(err);
            res.status(500).send('잘못된 경로입니다.');
        }
        var id = req.params.id;
        if (id) { // id 값이 있을 때
            fs.readFile('./data/' + id, 'utf8', function(err, data){
                if (err) {
                    console.log(err);
                    res.status(500).send('잘못된 경로입니다.');
                }
                res.render('view', {topics: files, title: id, description: data});
            })
        } else { // id 값이 없을 때, 즉 id가 '빈 문자열' or 'null' or 'undefined' == false
            res.render('view', {topics: files, title:'Welcome', description:'Hello, JavaScript for Server'});
        }
    })
});

// 2. 글 목록 브라우저에 출력하기
/**
app.get('/topic', function(req, res){
    // 파일 목록 불러오기 - fs.readdir(path[, options], callback(err, files)); - files : 디렉토리에 있는 파일 이름의 배열
    fs.readdir('./data', function(err, files){
        if (err) {
            console.log(err);
            res.status(500).send('잘못된 경로입니다.');
        }
        res.render('view', {topics: files}); // files를 topics에 담아 view.pug에 전달 (즉, files의 값들을 view에서 사용할 수 있도록 topics 변수에 담아둔다.)
    })
});

// 3. 사용자가 선택한 게시글(id)의 본문 페이지로 이동
app.get('/topic/:id', function(req, res){
    var id = req.params.id;
    fs.readdir('./data', function(err, files){
        if (err) {
            console.log(err);
            res.status(500).send('잘못된 경로입니다.');
        }
        // 파일 읽기 - fs.readFile(path[, options], callback(err, data)); - data : 파일 내용 (파일의 전체 내용을 비동기적으로 읽음)
        fs.readFile('./data/' + id, 'utf8', function(err, data){
            if (err) {
                console.log(err);
                res.status(500).send('잘못된 경로입니다.');
            }
            res.render('view', {topics: files, title: id, description: data});
        })
    })
});
 */

app.listen(3000, function(){
    console.log('Connected, 3000 port!');
=======
var express = require('express');
var fs = require('fs');
var app = express();

app.locals.pretty = true; // pug 파일 줄바꿈
app.set('view engine', 'pug'); // 템플릿 엔진
app.set('views', './views_file');

// 1. 사용자로부터 입력받은 title을 파일명으로 description을 내용으로 하는 파일을 data 폴더에 저장
app.get('/topic/new', function(req, res){ // 입력 화면으로 이동
    fs.readdir('./data', function(err, files){
        if (err) {
            console.log(err);22
            res.status(500).send('잘못된 경로입니다.');
        }
        res.render('new', {topics: files});
    });
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/topic', function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    // 파일 쓰기(저장) - fs.writeFile(fileName, data[, options], callback);
    fs.writeFile('./data/' + title, description, (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('잘못된 경로입니다.')
        }
        // res.send(' 파일 저장 완료');
        res.redirect('topic/' + title); // 작성 후 해당 게시글 페이지로 이동
    })
});

// 2,3번의 코드를 합쳐 중복 코드 없애기
app.get(['/topic','/topic/:id'], function(req, res){
    fs.readdir('./data', function(err, files){
        if (err) {
            console.log(err);
            res.status(500).send('잘못된 경로입니다.');
        }
        var id = req.params.id;
        if (id) { // id 값이 있을 때
            fs.readFile('./data/' + id, 'utf8', function(err, data){
                if (err) {
                    console.log(err);
                    res.status(500).send('잘못된 경로입니다.');
                }
                res.render('view', {topics: files, title: id, description: data});
            })
        } else { // id 값이 없을 때, 즉 id가 '빈 문자열' or 'null' or 'undefined' == false
            res.render('view', {topics: files, title:'Welcome', description:'Hello, JavaScript for Server'});
        }
    })
});

// 2. 글 목록 브라우저에 출력하기
/**
app.get('/topic', function(req, res){
    // 파일 목록 불러오기 - fs.readdir(path[, options], callback(err, files)); - files : 디렉토리에 있는 파일 이름의 배열
    fs.readdir('./data', function(err, files){
        if (err) {
            console.log(err);
            res.status(500).send('잘못된 경로입니다.');
        }
        res.render('view', {topics: files}); // files를 topics에 담아 view.pug에 전달 (즉, files의 값들을 view에서 사용할 수 있도록 topics 변수에 담아둔다.)
    })
});

// 3. 사용자가 선택한 게시글(id)의 본문 페이지로 이동
app.get('/topic/:id', function(req, res){
    var id = req.params.id;
    fs.readdir('./data', function(err, files){
        if (err) {
            console.log(err);
            res.status(500).send('잘못된 경로입니다.');
        }
        // 파일 읽기 - fs.readFile(path[, options], callback(err, data)); - data : 파일 내용 (파일의 전체 내용을 비동기적으로 읽음)
        fs.readFile('./data/' + id, 'utf8', function(err, data){
            if (err) {
                console.log(err);
                res.status(500).send('잘못된 경로입니다.');
            }
            res.render('view', {topics: files, title: id, description: data});
        })
    })
});
 */

app.listen(3000, function(){
    console.log('Connected, 3000 port!');
>>>>>>> fbbe559c19d519f30e63834d3d49e92d52170b55
});