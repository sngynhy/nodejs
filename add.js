// 모듈 생성하기
const add = (a, b) => {
    return a + b;
};

// 외부에서 해당 모듈을 사용할 수 있도록 export해줌
module.exports = add;