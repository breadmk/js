var calc2 = require('./calc2');
console.log('모듈로 분리한후 - calc.add: ' + calc2.add(30,30));

var nconf = require('nconf'); //제공되는건 경로없어도 가능.
nconf.env();
var value = nconf.get('OS');
console.log('OS 환경변수의 값 : ' + value);



