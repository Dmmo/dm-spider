const curl = require('curl');

class tool {
   *downloadImage(url) {
      let resp = yield curl.get(url, {}, function(err, resp, body){
         //return {err, resp, body};

         console.log({err, resp, body})
      });

      return resp;
   }
}
module.exports = new tool();
