var a = [3,1,2];
// console.log(a.sort()); // sort() : 오른차순 정렬
function b1(v1, v2) {
    return v2-v1; // 내림차순
}
function b2(v1, v2) {
    return v1-v2; // 오름차순
}
function b3(v1, v2) {
    return 0;
}
console.log(a.sort(b1)); // 함수의 파라미터로 들어가는 함수를 callback함수라고 한다.
console.log(a.sort(b2));
console.log(a.sort(b3));

a.sort(function(v1,v2){return v2-v1;}); // 함수를 선언하지 않고 파라미터에 직접 작성하는 경우 해당 콜백함수를 '익명함수'라고 함
console.log(a);