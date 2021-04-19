let users = [{name : '소녀시대', age : 20},{name : '걸스데이', age : 22}];

let oper = function(a,b){
    return a+b;
}

users.push(oper);
console.log(users);
console.log('세 번째 배열 요소를 함수로 실행 : ' + users[2](20,20));


























