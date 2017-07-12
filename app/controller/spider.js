'use strict';
const cheerio = require('cheerio');

module.exports = app => {
   class SpiderController extends app.Controller{
      * index(){
         const { ctx, service } = this;
         let arr = [],
         links = [{
            name: '电脑壁纸',
            link: 'http://www.lingyu.me/dnbz/'
         },{
            name: '手机壁纸',
            link: 'http://www.lingyu.me/sjbz/'
         }];

         // TODO: 下面这段代码好恶心. 一定要改!!
         for(let i = 0; i < links.length; i++){
            let j = 0, nextUrl = '', tmp;
            while(true){
               if(j == 0){
                  tmp = yield service.spiderRules.menu_lingyu_me( links[i].link );
                  nextUrl = tmp.nextLink;
               }else{
                  tmp = yield service.spiderRules.menu_lingyu_me(nextUrl);
                  nextUrl = tmp.nextLink;
               }
               j++;
               arr.concat(tmp);
               if(!tmp.isNext){
                  break;
               }
            }
         }

         ctx.body = arr;
      }
   }

   return SpiderController;
}
