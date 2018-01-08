
<template>
<div id="downloadapp" class="downloadapp" v-if="hasDownloadBar">
    <a href="ciw://home" class="download-open" @click="toDownload">
        <p>
            <!--<mt-button class="download-close" icon="icon-guanbi" @click="closeDownload">关闭</mt-button>-->
            <img src="~/static/images/common/appicon.png" alt="">
            <b>中国婚博会APP</b>
            <span class="btn">下载</span>
        </p>
    </a>
</div>
</template>
<script type="text/javascript">
    import appCall from '~/plugins/appCall.js';

	export default {
	  name: 'downloadbar',
	  props: {
	  	value: [String]
	  },
	  head: {
	    title: '这是自定义title',
	  },
  	data(){
  		return {
              hasDownloadBar:true
  		}
  	},
  	methods: {
  		updateData(){
  			this.$emit('onClick', '我是被点击触发的😯')
        },
        closeDownload(){
            this.hasDownloadBar=false
        },
        toDownload(){
            appCall.active({isdownload:true});
        }
  	}
	}
</script>
<style lang="scss" scoped>
    .downloadapp{
        width: 100%;
        height: 100px;
        position: relative;
        background-color: #F6F6F6;
        box-shadow: 0 4px 8px #eee;

        .download-open{
            /*.download-close{*/
                /*height: 35px;*/
                /*padding: 0;*/
                /*font-size: 15px;*/
            /*}*/
            p{
                display: -webkit-box;
                display: flex;
                height: 100%;
                overflow: hidden;
                -webkit-box-align: center;
                align-items: center;
                margin-left: 30px;
                b{
                    color:#333;
                    font-size:28px;
                    font-weight: normal;
                    margin-left: 20px;
                }
                img {
                    width: 70px;
                    height: 70px;
                }
                .btn{
                    display: inline-block;
                    width: 140px;
                    height: 60px;
                    line-height: 60px;
                    text-align: center;
                    border: 1.2px solid #FF6363;
                    border-radius: 30px;
                    color: #FF6363;
                    font-size: 30px;
                    margin-left: 264px;
                }
            }

        }
    }
</style>

