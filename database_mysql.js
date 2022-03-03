const mysql = require("mysql");
const conn = { // mysql 접속 설정
    host : 'localhost',
    user : 'root',
    password : 'qwer',
    database : 'test'
};

var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect(); // DB 접속

var select_sql = "SELECT * FROM test";

connection.query(select_sql, (err, rows, fields) => {
    if (err) return console.log(err);
    console.log(rows)
    // for (var i=0; i<rows.length; i++) {
    //     console.log(rows[i].name);
    // }
});

// var insert_sql = "INSERT INTO test (id, pw, name) VALUES (?, ?, ?)";
// var params = ['ang', 'angg', '앙띠'];

// connection.query(insert_sql, params, (err, rows, fields) => { // 매개변수로 배열 형태의 params를 전달하면 ? 값으로 알아서 삽입된다.
//     if (err) return console.log(err);
//     console.log(' insertId :', rows.insertId);
// });

// var update_sql = "UPDATE test SET id = ?, pw = ?, name = ? WHERE idx = ?";
// var params = ['아이디', '비밀번호', '이름', 2];

// connection.query(update_sql, params, (err, rows, fields) => {
//     if (err) return console.log(err);
//     console.log(rows)
// });

var delete_sql = "DELETE FROM test WHERE idx = ?";
var params = [8];

connection.query(delete_sql, params, (err, rows, fields) => {
    if (err) return console.log(err);
    console.log(rows)
});

connection.end();