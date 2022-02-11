const { result } = require("underscore");

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function callback(element) {
	console.log(element);
    // if(element.length > 6) {
    // 	return true;
    // } else {
    // 	return false;
    // }
    return element.length > 6;
}
newWords = words.filter(callback);
console.log(newWords);

// 익명함수로 콜백함수 사용하기
newWords = words.filter(function(element) {
    return element.length > 6;
});
// function 생략하고 => 로 대체 가능
newWords = words.filter((element) => {
    return element.length > 6;
});
// 파라미터가 한 개인 경우 () 생략 가능, 함수 블록 {}의 코드가 한 줄인 경우 {}, return도 생략 가능
newWords = words.filter(element => element.length > 6);

// 위의 기능과 동일한 myfilter 함수 생성
function myfilter(origin, callback) { // myfilter(기존 배열, 콜백 함수)
    var result = [];
    for (var i=0; i<origin.length; i++) {
        var current = origin[i];
        if (callback(current)) { // 만약 current값이 element값이 되고 element.length > 6 조건에 성립하면
            result.push(current);
        }
    }
    return result;
}
newWords = myfilter(words, element => element.length > 6); // callback == element => element.length > 6
console.log(newWords);