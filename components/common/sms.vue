<template>
    <div class="vcode">
        <mt-field label="验证码" v-model="vcode" placeholder="请输入图形验证码" type='number'>
            <img class="vcodeimg"  @click="imgRefash" :src="imgUrl" >
        </mt-field>
        
        <mt-field label="手机号" placeholder="请输入手机号" type="tel"  v-model="phones">
            <span class="countTime" @click="getsms" :class="{graybtn:iscount}">{{countTimeText}}</span>
        </mt-field>
    </div>
</template>
<script>
import getMd5 from "~/plugins/md5";
import axios from "~/plugins/axios";
import { Toast } from "mint-ui";
// import { getSms} from '~/api/mock'
import { getSms } from "~/api";



export default {
  model: {
    prop: "phone", //v-model的数据在该组件内的名字（自定义）
    event: "input" //触发事件名称（自定义）
  },
  props: ["phone", "value"],
  data() {
    var hash = getMd5(Math.random(1, 100000));
    return {
      state:'',
      hash: hash,
      phones: this.phone,
      vkey: "",
      countTimeText: "获取验证码",
      vcode: "",
      random: "",
      iscount: false,
      imgUrl: "https://bj.jiehun.com.cn/util/vcode?_vkey=" + hash
    };
  },
  watch: {
    random() {
      this.imgUrl =
        "https://bj.jiehun.com.cn/util/vcode?_vkey=" +
        this.hash +
        "&t=" +
        this.random;
    },
    phones(v1, v2) {
      this.$emit("input", v1);
    },
    phone(v1, v2) {
      this.phones = this.phone;
    }
  },
  methods: {
    getsms() {
      if (this.iscount) {
        return false;
      } else {
        var res = this.verifyCode();
      }
    },
    coutTime() {
      //倒计时
      var count = 0;
      var _this = this;
      var time = setInterval(function() {
        if (count > 60) {
          clearInterval(time);
          _this.countTimeText = "获取验证码";
          return;
        }
        _this.countTimeText = count + "s";
        count++;
      }, 1000);
    },
    codeErr() {
      //验证码错误时
      this.imgRefash();
    },
    imgRefash() {
      //刷新验证码
      let t = new Date().getTime();
      this.random = t;
    },
    submitPhone() {
      //提交手机号
    },
    verifyCode() {
      //验证验证码
      if (!this.vcode) {
        Toast({
          message: "验证码未填写",
          position: "bottom",
          duration: 2000
        });
        return;
      } else if(!/^1[3|4|5|8|9|7][0-9]\d{4,8}$/.test(this.phones)){
        Toast({
          message: "请填入正确的手机号",
          position: "bottom",
          duration: 2000
        });
      }
      getSms({
        phone: this.phones,
        _vcode: this.vcode,
        _vkey: this.hash,
        checkvcode:"check"
      }).then(res => {
        console.log(res.data);
        if (res.data == "success") {
          this.iscount = true;
          this.coutTime();
        }
      });
    }
  }
};
</script>



