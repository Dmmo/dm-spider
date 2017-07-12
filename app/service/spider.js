'use strict';
const FormStream = require('formstream'),
      cheerio = require('cheerio');
      
module.exports = app => {
   class Spider extends app.Service {
      /**
       * 下载图片.
       * @param url {String} 下载的图片地址.
       * @return {Buffer} 图片的Buffer.
       */
      * download(url = null) {
         const { ctx, logger } = this;
         let results = '';
         if(url != null){
            let img = yield ctx.curl(url);
            results = img.data;
         }
         return results;
      }

      /**
       * 上传图片到图床.
       * https://sm.ms/doc/
       * @param buffer {Buffer} 图片的Buffer。
       * @return {Json} sm.ms 返回的json
       */
      * upload(buffer = null) {
         const formstream = new FormStream();
         let results = {};
         if(buffer != null){
            form.buffer('smfile', new Buffer(img.data), path.basename(src));
            form.field('ssl', 'true');
            form.field('format', 'json');

            let uploads = yield ctx.curl('https://sm.ms/api/upload',{
               method: 'POST',
               headers: form.headers(),
               stream: form,
            });
            results = uploads.data;
         }

         return results;
      }

      /**
       * 爬目录,
       * @param url {string} 爬取得url,
       * @param cats {integer} 类别: 1.电脑壁纸, 2.手机壁纸.
       * @return {Array} 爬取的数组.
       */
      * spliderMenu(url = '', cats = 0, spiderRule) {

         const { ctx } = this;
         if(url !== '' && cats !== 0){
            let result = ctx.curl(url);
         }
      }
   }

   return Spider;
}
