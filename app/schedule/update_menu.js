module.exports = app => {
   return {
      schedule: {
         interval: '2m',
         type: 'worker',
      },

      * task(ctx) {
         const {logger, service} = ctx;
         logger.info(`update_menu: ${+new Date()}`);

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
               arr.push(tmp);
               if(!tmp.isNext){
                  break;
               }
            }
         }

         //存入redis中.
         yield app.redis.set('spider_menu', JSON.stringify(arr));

         logger.info('redis, key: spider_menu is writed. datas:' + JSON.stringify(arr) + ' now：'+ +new Date());
      }
   }
}
