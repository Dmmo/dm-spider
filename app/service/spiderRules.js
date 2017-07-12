'use strict';
const cheerio = require('cheerio');

module.exports = app => {
   class SpiderRules extends app.Service {
      /**
       * 爬 http://www.lingyu.me/ 的所有目录.
       * @param url {string} lingyu.me的目录url.
       * @return {Object} obj.arr, obj.isNext, obj.nextLink
       */
      *menu_lingyu_me(url = '') {
         const { ctx, logger } = this;
         let result, $, nextEl,

            resultObj={
               arr: [],
               isNext: false,
               nextLink: ''
            };

         if(url != ''){
            result = yield ctx.curl(url, {
               headers: {
                  userAgent : 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
               }
            });
            $ = cheerio.load(result.data.toString('utf8'));
            $('#main .wow .entry-header a').each((n, item) => {
               resultObj.arr.concat({
                  link: $(item).attr('href'),
                  cats: $(item).text(),
                  isSpider: false,
               });
            });

            nextEl = $('#primary .navigation.pagination .nav-links .next.page-numbers');
            resultObj.isNext = !!nextEl.length;

            if(resultObj.isNext){
               resultObj.nextLink = nextEl.attr('href');
            }
            logger.info(`DM-Spider: ${url}`);
         }
         return resultObj;
      }
   }

   return SpiderRules;
}
