// 즉시 실행 함수
// 함수의 정의와 동시에 즉시 호출이 되는 함수로 단 한번만 호출이 되며 다시 호출할 수 없다.
// 함수의 이름이 없는 익명함수를 사용하는 것이 일반적이며 반드시 () - 그룹연산자로 감싼다.

(function () {});

// var test = function () {};

// test();

(function hello(name) {
  console.log(`기명 즉시 실행함수! 함수 정의와 동시에 호출!`);
  console.log(`name : ${name}`);
})("홍길동");

// console.log(hello); ReferenceError: hello is not defined
