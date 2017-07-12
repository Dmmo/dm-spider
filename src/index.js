const TOOL = require('./public/tools');
const curl = require('curl');
const co = require('co');
const thunkify = require('thunkify');
const request = thunkify(curl.get);
// let test = TOOL.downloadImage('http://tp.lingyu.me/bz/uploads/2017/04/www.lingyu.me_2017042610130429.jpg');
//
// console.log(test);
//
// function *(){
//    let test = yield curl.get('http://tp.lingyu.me/bz/uploads/2017/04/www.lingyu.me_2017042610130429.jpg',{});
//    console.log(test);
// }();



var test = function *(){
   const test = yield request('http://tp.lingyu.me/bz/uploads/2017/04/www.lingyu.me_2017042610130429.jpg', {});
   console.log(test);
};

test();
