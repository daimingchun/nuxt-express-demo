<template>
    <div class="hotel-wrap">
        <ul>
            <li>
                <div class="img">
                    <img src="http://3.tthunbohui.cn/n/00804z!W00i921hMMwcE268-c350x232-16e8b7.jpg" alt="">
                </div>
                <div class="f-l">
                    <h5 class="one-text-line">注意这里注意这里注意这里注意这里注意这里</h5>
                    <!--商品列表页中的宴会厅列表页需要显示商家名称-->
                    <p class="storename one-text-line">注意这里：商品列表页中的宴会厅列表页需要显示商家名称</p>
                    <p class="det">桌数<span>26桌</span>层高<span>8m</span>柱子<span>无</span></p>
                    <p class="des one-text-line"><span>会员节</span>展后三周、全部套系88折起</p>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="http://3.tthunbohui.cn/n/00804z!W00i921hMMwcE268-c350x232-16e8b7.jpg" alt="">
                </div>
                <div class="f-l">
                    <h5>温莎厅</h5>
                    <p class="det">桌数<span>26桌</span>层高<span>8m</span>柱子<span>无</span></p>
                    <p class="des one-text-line"><span>会员节</span>展后三周、全部套系88折起</p>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="http://3.tthunbohui.cn/n/00804z!W00i921hMMwcE268-c350x232-16e8b7.jpg" alt="">
                </div>
                <div class="f-l">
                    <h5>温莎厅</h5>
                    <p class="det">桌数<span>26桌</span>层高<span>8m</span>柱子<span>无</span></p>
                    <p class="des one-text-line"><span>会员节</span>展后三周、全部套系88折起</p>
                </div>
            </li>
            <li>
                <div class="img">
                    <img src="http://3.tthunbohui.cn/n/00804z!W00i921hMMwcE268-c350x232-16e8b7.jpg" alt="">
                </div>
                <div class="f-l">
                    <h5>温莎厅</h5>
                    <p class="det">桌数<span>26桌</span>层高<span>8m</span>柱子<span>无</span></p>
                    <p class="des one-text-line"><span>会员节</span>展后三周、全部套系88折起</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
    .hotel-wrap{
        ul{
            background:#fff;
            li{
                overflow: hidden;
                padding:30px;
                .img{
                    float:left;
                    width:240px;
                    height:160px; 
                    margin-right:30px;
                    img{
                        display:block;
                        width:240px;
                        height:160px; 
                    }
                }
                .f-l{
                    float: left;
                    width:420px;
                    h5{
                        height:45px; 
                        font-size:32px;
                        color:rgba(51,51,51,1);
                        line-height:45px;
                    }
                    .storename{
                        margin:16px 0 9px;
                        font-size:26px;
                        color:#999;
                    }
                    .det{
                        color:#878787;
                        font-size:26px;
                        margin: 16px 0 22px 0;
                        span{
                            color:#262626;
                            margin:0 30px 0 12px;
                        }
                    }
                    .des{
                        font-size:24px;
                        color:#666;
                        span{
                            width:86px;
                            margin-right:20px;
                            display: inline-block;
                            height:40px; 
                            line-height: 40px;
                            text-align: center;
                            color:#FF6363;
                            border:2px solid #FF6363;
                            border-radius: 4px ; 
                            
                        }
                    }
                }
            }
        }
        
    }
</style>


