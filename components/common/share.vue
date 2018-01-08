
<template>
  <div class="share-dom">
    <span  @click="active">
        <slot name='target'>
            <button >点击分享</button>          
        </slot>
    </span>
     
      <div>
            <div v-show="wxshow" class="wxShareMask" @click="isshow=false"></div>
      </div>
      <div>
        <script src="//static.bshare.cn/b/buttonLite.js#style=999&amp;uuid=5015406&amp;pophcol=3&amp;lang=zh"></script>
        <script src="//static.bshare.cn/b/bshareC0.js"></script>
        <div v-if="wapshow" class="share-dlg-mask" style="display: block;"></div>
        
        <div v-if="wapshow" class="dialog muying share-dlg" >
            <div class="hd"><p class="title"></p><a class="close hicon-remove" title="关闭" @click="wapshow=false"></a></div>
            <div class="bd" style="width: 100%; height: 248px;">
               <div class="share-box sharebox">
                 <h2>分享到</h2>
                <ul>
                    <li><a onclick="javascript:bShare.share(event,'qzone',0);return false;" class="bshare-qzone qzone"></a><p>QQ空间</p></li>
                    <li><a onclick="javascript:bShare.share(event,'sinaminiblog',0);return false;" class="bshare-sinaminiblog tsina"></a><p>新浪微博</p></li>
                    <li><a onclick="javascript:bShare.share(event,'qqim',0);return false;" class="bshare-qqim qq"></a><p>QQ好友</p></li>
                    <li><a onclick="javascript:bShare.share(event,'weixin',0);return false;" class="bshare-weixin weixin"></a><p>朋友圈</p></li>
                </ul>
            </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
/**
 * @author jinghuanhuan
 * @date 2017-12-30
 *  parmes:
 *  ele（必填项）        string      触发分享的元素（点击事件）
 *  title（可选项）      string      自定义    分享时的内容，默认使用页面的title
 *  content(可选)        string      分享的描述
 *  url（可选项）        string      自定义    分享时的Url地址，默认使用当前页面的网址
 *  shareImg可选项）     string      自定义    分享时的图片的地址,不填则默认抓取第一张图片的地址
 *  weixinimg           string      微信分享的指引图片的地址，可不填，有默认图
 * */
import Browser from "~/plugins/browser";
export default {
  props: {
    options: [Object]
  },
  data() {
      let params ;
    if (!this.options) {
      params = {};
    } else {
      params = this.options;
    }
    return {
        browser:{},
        params:params,
        wapshow: false,
        wxshow:false,
        app_url:''
    };
  },
  mounted() {
    this.browser = Browser();
    var _defaults = {
      title: document.title,
      content:document.title,
      img_url: document.querySelectorAll("img")[0].src,
      url: location.href,
      weixinimg: "~/static/common/wxshare.png"
    };
    for (var i in _defaults) {
      if (!this.params[i]) {
        this.params[i] = _defaults[i];
      }
    }
    if (this.browser.weixin) {
          // 1.微信分享
          this.wxShare();
      } else if (this.browser.extra.p) { 
          //2.调用App接口分享
          this.appShare();
      } else {
          //3.wap分享
          this.wapShare();
      }
  },
  methods: {
    hideimg() {
      this.isshow = false;
    },
    active() {
     if (this.browser.weixin) {
          this.wxshow= true;
      } else if (this.browser.extra.p) {
         window.location.href = this.app_url;
      } else {
          this.wapshow = true;
      }
    },
    appShare() {
      var params = this.params;
      var appName = this.browser.extra.p || "ciw";
      var shareurl = encodeURIComponent(params["url"]);
      var share_url = appName + "://common/content/share?params={";
      share_url += '"title":"' + params["title"] + '",';
      share_url += '"content":"' + params["content"] + '",';
      share_url += '"url":"' + shareurl + '",';
      share_url += '"callback":"' + shareurl + '",';
      share_url += '"img_url":"' + params["shareImg"] + '"';
      share_url += "}";
      this.app_url = share_url;
    },
    wxShare(params) {
      this.isshow = true;
      //微信引导图
      var params = this.params;
      var title = params.title,
        link = params.url,
        imgUrl = params.img_url,
        desc = params.content;
      //需要在AC做对应的配置
      if (window.wx) {
        //微信jsdk
        wx.ready(function() {
          wx.onMenuShareTimeline({
            title: title,
            link: link,
            imgUrl: imgUrl,
            success: function() {
              //成功回调
            },
            cancel: function() {
              //取消分享回调
            },
            fail: function() {
              //失败回调
            }
          });
          wx.onMenuShareAppMessage({
            title: title,
            link: link,
            imgUrl: imgUrl,
            desc: desc,
            success: function(res) {
              //成功回调
            },
            cancel: function(res) {
              //取消分享回调
            },
            fail: function(res) {
              //失败回调
            }
          });
          wx.onMenuShareQQ({
            title: title,
            link: link,
            imgUrl: imgUrl,
            desc: desc,
            success: function(res) {
              //成功回调
            },
            cancel: function(res) {
              //取消分享回调
            },
            fail: function(res) {
              //失败回调
            }
          });
          wx.onMenuShareWeibo({
            title: title,
            link: link,
            imgUrl: imgUrl,
            desc: desc,
            success: function(res) {
              //成功回调
            },
            cancel: function(res) {
              //取消分享回调
            },
            fail: function(res) {
              //失败回调
            }
          });
          wx.onMenuShareQZone({
            title: title,
            link: link,
            imgUrl: imgUrl,
            desc: desc,
            success: function(res) {
              //成功回调
            },
            cancel: function(res) {
              //取消分享回调
            },
            fail: function(res) {
              //失败回调
            }
          });
        });
      }
    },
    wapShare() {
        var params = this.params;
        setTimeout(function() {
            window.bShare.addEntry({
            pic: params.shareImg,
            title: params.title, // 获取文章标题
            url: params.url, // 获取文章链接
            summary: params.content // 从postBody中获取文章摘要
            });
        }, 1000);
    }
  }
};
</script>
<style lang="scss">
.wxShareMask {
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  background-image: url("~/static/images/common/wxshare.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.share-dlg-mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10004;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: .6
}
.share-dlg {
    position: fixed;
    z-index: 10005;
    height:400px;
    width: 600px;
    top: 50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%,-50%);
    border-radius: 25px;
    overflow: hidden;
    font-size:30px;
    -webkit-transform: translate(-50%,-50);
    .hd{
        background-color: #fff;
        height: 90px;
        line-height: 90px;
        color: #fff;
        border-radius: 25px  0 0;
        border: none;
        position: relative;
        .close{
            width: 50px;
            height: 50px;
            position: absolute;
            top: 0;
            right: .5rem;
            background: url('~/static/images/common/shareclose.png') no-repeat;
            background-size: 100%;
        }
    }
}
.share-box {
    width: 450px;;
    margin: 0 auto;
    text-align: center;
    h2 {
        font-size: 34px;
        color: #333;
        font-weight: 400;
        text-align: center;
        position: relative;
        top: -40px;
    }
    li {
        width: 25%;
        text-align: center;
        float: left;
        padding-bottom: 25px;
        p {
            text-align: center;
            font-size: 20px;;
            color: #666
        }
    }
    a {
        float: initial;
        padding: 0;
        display: block;
        margin: 0 auto;
        width: 70px;
        height: 70px;
        background-image: url('~/static/images/common/share_img.png');
        background-size: cover;
        &.weixin {
            background-position: 0 19.5%
        }
        &.qzone {
            background-position: 0 75.5%
        }

        &.tsina {
            background-position: 0 57%
        }

        &.qq {
            background-position: 0 38.5%
        }
        &.cp {
            background-position: 0 94%
        }
    }
}


</style>


