<template>
    <section class="bottom-fixed">
        <a href="" class="on">
            <b class="icon index"></b>
            <h3>首页</h3>
        </a>
        <a href="" class="">
            <b class="icon cash"></b>
            <h3>现金券</h3>
        </a>
        <a href="" class="">
            <b class="icon community"></b>
            <h3>社区</h3>
        </a>
        <a href="" class="">
            <b class="icon my"></b>
            <h3>我的</h3>
        </a>
    </section>
</template>
<style lang="scss" scoped>
    .bottom-fixed{
        z-index: 100;
        padding-top: 10px;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 98px;
    a{
        display: inline-block;
        width: 25%;
        text-align: center;
        color: #666;
        font-size:18px;
    h3{
        font-weight: normal;
    }
    .icon{
        background: url('/static/images/index/bottom-icons.png') no-repeat;
        background-size: cover;
        width: 50px;
        height: 50px;
        display: block;
        margin: 0 auto;
    }
    .cash{
        background-position: -254px 0;
    }
    .community{
        background-position: -116px 0;
    }
    .my{
        background-position: -390px 0;
    }
    }
    a.on{
        color: #ff6363;
    .index{
        background-position: -56px 0;
    }
    .cash{
        background-position: -325px 0;
    }
    .community{
        background-position: -182px 0;
    }
    .my{
        background-position: -454px 0;
    }
    }

    }
</style>