var _ = require('underscore'); // underscore 모듈 사용 - 배열 처리 시 유용한 기능들을 제공하는 모듈
var arr = [3,6,9,1,12];
console.log(arr[0]);
console.log(_.first(arr)); // 배열의 첫번째 값
console.log(arr[arr.length-1]);
console.log(_.last(arr)); // 배열의 마지막 값
