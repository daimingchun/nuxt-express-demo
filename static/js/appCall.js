/**
 * 功能：唤起app
 * 时间：2017/12/25
 * 创建：jinghuanhuan
 * 业务逻辑：
 *      当调传入的参数是'ciw://'开头的链接，则尝试唤起app,并跳转到下载页。当传入的是http:开头的链接，则尝试在APP中
 *   打开对应的页面,并跳转到下载页,由于微信阻止直接在微信中唤起其他app,现在采用的是通过应用宝作为中间媒介，ios跳转到
 *   AppStore中打开需要唤起的app。
 *  参数说明:
     url->跳转的地址
     isdownload -> 是否跳转到下载页；(true：跳转；false：不跳转；)
     customtext -> 自定义文本，不设置默认为：是否打开中国婚博会APP？
     limitopen->num/false, 是否限制打开次数（默认值为false）,num为限制几次(TODO)
     appsign->'ciw'/'ybs' ,标志是跳到ciw,还是ybs,当传入的地址是https链接时有用，若不传默认跳到ciw
     gourl->点击当前页面跳转的地址，点击唤起app后，唤起app，同时跳到该地址
 调用方法：
 ```
    import appCall from '~/static/js/appCall.js';
    appCall.init({
                        url:xxx,
                        isdownload:XX,
                        customtext:XXX,
                        closelimit:XX,
                        gourl:'XXX',
                    });
```
 */
import browser from '~/static/js/browser.js';
import cookie from '~/static/js/cookies.js'
import { setTimeout } from 'timers';
import { MessageBox } from 'mint-ui';
let appCall = {
    init (opt) {
        var opt = opt || {};
         //app的默认配置
         let _defopt = {
             ciw:{
                customtext:'是否打开中国婚博会APP',
                cookieName:'open_ciw',
                url:"ciw://home",
                qqUrl:'http://a.app.qq.com/o/simple.jsp?pkgname=com.china.hunbohui',
                downloadurl:'http://www.jiehun.com.cn/mobile/download/'
            },
            ybs:{
                customtext:'是否打开婴芭莎APP',
                url:"ybs://home",
                cookieName:'open_ybs',
                qqUrl:'http://a.app.qq.com/o/simple.jsp?pkgname=com.hunbohui.yingbasha',
                downloadurl:'http://www.jiehun.com.cn/mobile/muying/download'
            }
         };

        if(!opt.appsign){
            opt.appsign  = this.isAppUrl(opt.url)||'ciw';
        }
        var defopt  = _defopt[opt.appsign];
        for( let i in defopt){
            if(!opt[i]){
                opt[i] = defopt[i];
            }
        }
        if(!this.isAppUrl(opt.url)){//wap链接拼接app标识
            if(opt.appsign=='ybs'){
                opt.url = 'ybs://wap?params={"url":"' + opt.url + '"}';
            } else{ //默认ciw
                opt.url = 'ciw://wap?params={"url":"' + opt.url + '"}';
            }
        }

        var iswap = browser.mobile && !browser.ciw && !browser.ybs;
        var getCookie = cookie.getCookie,setCookie = cookie.setCookie;
        //是到达有次数限制
        var cooklimit = opt.limitopen && getCookie(opt.cookieName)
        if(!iswap || cooklimit){
            return false;
        }
        setCookie(defopt.cookieName,true,'','/');
        this.openApp(opt);
        
    },
    /**
     * 打开app
     * @param {*} defopt 
     */
    openApp (defopt){
        //微信和ios的qq通过js不能唤起app,跳到应用宝
        if(browser.weixin || (browser.ios && browser.qq)){
            layer.open({
                type:0,
                content:defopt.customtext,
                btn:['确定','取消'],
                anim:'up',
                no: function(index){
                    layer.closeAll();
                },
                yes: function(index){
                    window.location = defopt.qqUrl;
                }
            });
            return false;
        }

        var loadDateTime = new Date(), timeOutDateTime = loadDateTime;
        if(defopt.gourl){//指定跳转地址
            setTimeout(function () {
                location = defopt.gourl;
            },1000);
        } else if (defopt.isdownload) {
           
            setTimeout(function () {
                timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 5000) {
                    MessageBox({
                        title: '提示',
                        message: '是否跳转到app下载页?',
                        showCancelButton: true
                      }).then(function(opt){
                          if(opt == 'confirm'){
                                location = defopt.downloadurl;
                          }
                      });
                } else {
                    window.close();
                }
            }, 1000);
        }
        // 安卓直接就打开就好了 , ios 还要在处理一下
        console.log(defopt.url)
        // location = defopt.url;
        // ios 2秒后 在刷新一下本页面
        if (browser.ios && !defopt.isdownload) {
            window.setTimeout(function () {
                timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 2000) {
                    window.location.reload();
                } else {
                    window.close();
                }
            }, 1900);
        }
    },
    /**
     * 判断是否是app链接，是则返回app标识，否则返回false
     * @param {*} url 
     */
    isAppUrl (url) { 
        var app = {
            ybs:'ybs://',
            ciw:'ciw://'
        };
        for(var i in app){
            if(url.indexOf(app[i]) > -1){
                return i;
            }
        }
        return false;
    }
}

export default appCall