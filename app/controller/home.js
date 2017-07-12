'use strict';
const FormStream = require('formstream');
const fs = require('fs');
const path = require('path');
module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      // const { ctx } = this;
      // let src = 'http://tp.lingyu.me/bz/uploads/2016/09/www.lingyu.me_20160907040534726.jpg';
      // let img = yield ctx.curl(src);
      //
      // const form = new FormStream();
      // form.buffer('smfile', new Buffer(img.data), path.basename(src));
      // form.field('ssl', 'true');
      // form.field('format', 'json');
      //
      // let uploads = yield ctx.curl('https://sm.ms/api/upload',{
      //    method: 'POST',
      //    headers: form.headers(),
      //    stream: form,
      // });
      //
      // console.log(uploads);
      // console.log('------------------------------------------------------------------------------------');
      // console.log(uploads.data.toString());
      this.ctx.body = 'hi, egg';
    }
  }
  return HomeController;
};
