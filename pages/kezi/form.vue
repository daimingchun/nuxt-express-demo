<template>
  <div class="kz-form">
      <div class="head-img">
          <img class="icon" src="~/static/images/dp/icon_bird.png" alt="">
          <div class="duihuakuang">
              <h3>让婚礼顾问或商家为你答疑解惑把</h3>
              <p>请填写一下信息，稍后会有顾问或商家联系你</p>
          </div>
      </div>
        <form  v-for="(step,key) in inputs"  class="stepbox" :class="{showstep:curstep==key}"> 
           <mt-field type="tel"></mt-field>
        <div v-for="(item,k) in step" class="relative">
          {{item}}
            <!-- 输入框 -->
            <div v-if="item.type=='input'">
                <mt-field :state="errMap[item.name]"   :label="item|label" :placeholder="item.placeholder" v-model="formdata[item.name]" ></mt-field>
            </div>
            <!-- 名字 -->
            <div v-if="item.type=='name'">
                <mt-field :state="errMap[item.name]"   :label="item|label" :placeholder="item.placeholder" v-model="formdata[item.name]" ></mt-field>
            </div>
            <!-- 身份证 -->
            <div v-if="item.type=='id'">
                <mt-field :state="errMap[item.name]"   :label="item|label" :placeholder="item.placeholder" v-model="formdata[item.name]" ></mt-field>
            </div>
            <!-- 数字 -->
            <div v-if="item.type=='number'">
              <mt-field :state="errMap[item.name]"  :label="item|label" :placeholder="item.placeholder" type="number" v-model="formdata[item.name]"></mt-field>
            </div>
            <!-- 时间控件 -->
            <div v-else-if="item.type=='time'" >
                <!-- <label class="left"> {{item.label}}</label> -->
                <div @click="openPicker('picker_'+key+'_'+k)">
                    <mt-field :state="errMap[item.name]"  :label="item|label"  :placeholder="item.placeholder"  :value="formdata[item.name]|changeDate" ></mt-field>
                </div>
                <!-- <input type="text" :value="formdata[item.name]|changeDate" placeholder="请填写" @click="openPicker('picker_'+key+'_'+k)" readonly> -->
                <mt-datetime-picker
                    :ref="'picker_'+key+'_'+k"
                    type="date"
                    :startDate="startDate"
                    :endDate="endDate"
                    year-format="{value} 年"
                    month-format="{value} 月"
                    date-format="{value} 日"
                    v-model="formdata[item.name]"
                    >
                </mt-datetime-picker>
            </div>
            <!-- 时间周期 -->
            <div v-else-if="item.type=='times'" class="form-item">
                <label class="left"> {{item|label}}</label>
                <input class="short-input" type="text" placeholder="起始时间" @click="openPicker('picker_'+key+'_'+k+'_a')"  :value="formdata[item.name].start|changeDate" readonly>
                <mt-datetime-picker
                     :ref="'picker_'+key+'_'+k+'_a'"
                    type="date"
                    year-format="{value} 年"
                    month-format="{value} 月"
                    date-format="{value} 日"
                    v-model="formdata[item.name].start">
                </mt-datetime-picker>
                <b class="fengexian">-</b>
                <input class="short-input" type="text" placeholder="结束时间" @click="openPicker('picker_'+key+'_'+k+'_b')" :value="formdata[item.name].end|changeDate"  readonly>
                <mt-datetime-picker
                    :ref="'picker_'+key+'_'+k+'_b'"
                    type="date"
                    year-format="{value} 年"
                    month-format="{value} 月"
                    date-format="{value} 日"
                    v-model="formdata[item.name].end">
                </mt-datetime-picker>
            </div>

            <!-- 多选框 -->
            <div v-else-if="item.type=='checkbox'" class="form-item f-clear">
                <label class="left">{{item|label}}</label>
                <div class="right input-list">
                    <label v-for="(v,k) in item.options"> <input type="checkbox" :name="item.name" :value="v.value" v-model="formdata[item.name]"><span class="label">{{v.label}}</span></label>
                </div>
                <span v-if="errMap[item.name]"   class="err mintui-field-error"></span>
            </div>
                <!-- 单选 -->
            <div v-else-if="item.type=='radio'" class="form-item f-clear">
                <label class="left">{{item|label}}</label>
                <div class="right input-list">
                    <label v-for="(v,k) in item.options"> <input type="radio" :name="item.name" :value="v.value" v-model="formdata[item.name]"><span class="label">{{v.label}}</span></label>
                </div>
                 <span v-if="errMap[item.name]"   class="err mintui-field-error"></span>
            </div>
            <!-- 长文本 -->
            <div v-if="item.type=='longtext'" class="form-item" >
                <!-- <mt-field :state="errMap[item.name]" :label="item.label" :placeholder="item.placeholder" type="textarea" rows="4" v-model="formdata[item.name]"></mt-field> -->
                <label class="left">{{item|label}}</label>
                <textarea v-model="formdata[item.name]" :placeholder="'请输入'+item.label+'(最多200字)'" maxlength="200"></textarea> 
                  <span v-if="errMap[item.name]"   class="err mintui-field-error"></span> 
            </div> 
            <!-- 短信验证码 -->
            <div v-if="item.type=='phone'" >
              <div class="sms">
                    <get-sms v-if="item.type='phone'" v-model="formdata[item.name]"></get-Sms>
                    <span v-if="errMap[item.name]"   class="err mintui-field-error"></span>
              </div>
              <transition name="fade">
                <div v-if="formdata[item.name]!=iphone">
                  <mt-field  :state="errMap[item.name]"  label="手机验证码" :placeholder="item.placeholder" type="number" v-model="formdata.vcode"></mt-field>
                </div>
              </transition>
              
            </div>
            <!-- 目的地 -->
            <div v-if="item.type=='dest'" >
              <!-- 目的地 -->
               <div  class="form-item f-clear">
                  <label class="left">{{item|label}}</label>
                  <div class="right input-list">
                      <label v-for="(v,k) in item.options"> <input type="radio" :name="item.name" :value="v.value" v-model="formdata[item.name].mdd"><span class="label">{{v.label}}</span></label>
                  </div>
                  <span v-if="errMap[item.name]"   class="err mintui-field-error"></span>
              </div>
                <!-- 景点 -->
              <transition name="fade">
              <div v-if="formdata[item.name].mdd"  class="form-item f-clear">
                <label class="left">景点</label>
                <div class="right input-list">
                    <label v-for="(v,k) in item.options[formdata[item.name].mdd].child"> <input type="checkbox" :name="item.name" :value="v.value" v-model="formdata[item.name].jd"><span class="label">{{v.label}}</span></label>
                </div>
                <span v-if="errMap[item.name]"   class="err mintui-field-error"></span>
              </div>
              </transition>
            </div>

            <!-- 按钮 -->
            <div v-if="item.type=='step'" class="submit" @click="verifyForm(step,key)">
                {{item.label}}
            </div>
        </div>
            {{formdata}}
        </form>
  </div>
</template>
<script>
import GetSms from "~/components/common/sms.vue";
import {getkeziForm} from "~/api";
import { Toast } from "mint-ui";
//验证规则聚合页
let verifyRule = {
  default(item,val){
      return val?false:'请填写'+item.label;
  },
  radio(item,val){
       return val?false:'请选择'+item.label;
  },
  checkbox(item,val){
    if(item.limit&&item.limit.max){
    var max = item.limit.max;
        if(val.length>max){
            return '最多可选择'+max+'个';
        }
    }
      return val.length>0?false:'请选择'+item.label;
  },
  input(item,val){
      return val?false:'请填写'+item.label;
  },
  time(item,val){
     return val?false:'请选择'+item.label;
  },
  times(item,val){
     return val.start&&val.end?false:'请填写'+item.label;
  },
  name(item,val){
      return val?'请填写'+item.label:false;
  },
  phone(item,val){
      return /^1[3|5|7|8|9][0-9]{9}$/.test(val)? false:item.label+'不正确';
  },
  email(item,val){
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|\.|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)((com(\.[a-z]{2})?)|net|cn|cc)$/i.test(val)?false:'请填写'+item.label;
  },
  id(item,val){
    return /^(\d{15})|(\d{17}([0-9xX]))$/.test(val)?false:'请填写正确的身份证信息';
  },
  dest(item,val){
    var max = item.limit.max;
    if(max){
        if(val[1].length>max){
            return '最多可选择'+max+'个';
        }
    }
    return val[0]&&val[1]?false:'选择'+item.label;
  }
}
export default {
  components: {
    GetSms
  },
  filters: {
    //格式化时间
    changeDate(value) {
      if (!value) return "";
      let date = new Date(value),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();
      return `${year}年${month}月${day}日`;
    },
    //labe加*
    label(item){
      var label = item.label;
      if(item.required){
          label= label+'*';
      }
      return label;
    }
  },
  data() {
    return {
      iphone:'18201269388',
      verifyRule:verifyRule,
      formId:'',
      city:'',
      errMap: {},
      startDate: new Date("2010-01-01"),
      endDate: new Date("2030-01-01"),
      formdata: {},
      inputs: [],
      curstep: 0
    };
  },
  mounted(){
    let _this = this,formdata = new Object(),inputs;
    getkeziForm({}).then(res=>{
    let data,inputs=[]
        inputs = res.data.data.steps;
            for(var i in inputs){
              for(var j in inputs[i]){
                var item = inputs[i][j];
                switch (item.type){
                    case 'checkbox':
                      formdata[item.name] = [];
                    break;
                    case 'times':
                      formdata[item.name] =  {start:'',end:''};
                    break;
                    case 'dest':
                      formdata[item.name] =  {mdd:'',jd:[]};
                    break;
                    case 'step':
                    break;
                    default:
                    formdata[item.name] =  '';
                }
              }
            }
            // 验证码
            formdata.vcode = '';
            _this.inputs = inputs;
            _this.formdata = formdata;
      })
  },
  methods: {
    openPicker(name) {
      this.$refs[name][0].open();
    },
    //验证单个组件
    verifyItem(item){
      if(!item.required || item.type=='step'){
        return true;
      }
      var val = this.formdata[item.name];
      var fun = this.verifyRule[item.type]||this.verifyRule['default'];
      var errmsg = fun(item,val);
      if(errmsg){
          Toast({
          message: errmsg
        });
        return false;//验证失败
      } else {
        return true;//验证成功
      }
    },
    verifyForm(form,index){
        for(var i in form){
            var res  = this.verifyItem(form[i]);
            if(!res){
                return false;
            }
        }
        //验证功了
        if(index==(this.inputs.length-1)){
            this.submit()
        }else{
            this.curstep++;
        }
    },
    submit() {
        Toast({
          message: "提交成功！"
        });
        location.href = '/kezi/success';
    }
  }
};


// var inputs = [
    //   [
    //     {
    //       type: "input",
    //       label: "短文本",
    //       name: "shortext",
    //       placeholder: "请填写姓名",
    //       required: true
    //     },
    //      {
    //       type: "number",
    //       label: "数字",
    //       name: "number",
    //       placeholder: "请填写数字",
    //       required: true
    //     },
    //     {
    //       type: "id",
    //       label: "身份证",
    //       name: "id",
    //       placeholder: "请填写身份证",
    //       required: true
    //     },
    //     {
    //       type: "time",
    //       name: "time",
    //       label: "婚礼日期",
    //       placeholder: "请选择婚礼日期",
    //       required: true
    //     },
    //      {
    //       type: "times",
    //       name: "time2",
    //       label: "时间周期",
    //       placeholder: "请选择婚礼日期",
    //       required: true
    //     },
    //     {
    //       type: "checkbox",
    //       label: "多值多选",
    //       name: "checkbox",
    //       placeholder: "请选择",
    //       required: true,
    //       content_data: [
    //         { label: "选项1", value: "1" },
    //         { label: "选项2", value: "2" },
    //         { label: "选项3", value: "3" },
    //         { label: "选项4", value: "4" }
    //       ]
    //     },
    //     {
    //       type: "radio",
    //       label: "多值单选",
    //       name: "radio",
    //       placeholder: "请选择",
    //       required: true,
    //       content_data: [
    //         { label: "选项1", value: "1" },
    //         { label: "选项2", value: "2" },
    //         { label: "选项3", value: "3" },
    //         { label: "选项4", value: "4" }
    //       ]
    //     },
    //     {
    //       type: "longtext",
    //       label: "长文本",
    //       name: "beizhu",
    //       placeholder: "请输入备注",
    //       required: true
    //     },
    //     {
    //       type: "phone",
    //       label: "手机号",
    //       name: "phone33",
    //       placeholder: "请选择",
    //       required: true
    //     },
    //     // {
    //     //   type: "vcode",
    //     //   label: "短信验证码",
    //     //   name: "code",
    //     //   placeholder: "请输入短信验证码",
    //     //   required: true
    //     // },
    //     {
    //       type: "dest",
    //       label: "目的地",
    //       name: "mudd",
    //       placeholder: "",
    //       required: true,
    //       limit:{
    //         max:3,
    //         min:1
    //       },
    //       content_data: {
    //         1:{ label: "选项1", value: "1" ,
    //           child:[
    //             { label: "选项1-1", value: "1" },
    //             { label: "选项1-2", value: "2" },
    //             { label: "选项1-3", value: "3" },
    //             { label: "选项1-4", value: "4" }
    //           ]
    //         },
    //         2:{ label: "选项2", value: "2",
    //          child:[
    //             { label: "选项2-1", value: "1" },
    //             { label: "选项2-2", value: "2" },
    //             { label: "选项2-3", value: "3" },
    //             { label: "选项2-4", value: "4" }
    //           ]
    //         },
    //         3:{ label: "选项3", value: "3",
    //         child:[
    //             { label: "选项3-1", value: "1" },
    //             { label: "选项3-2", value: "2" },
    //             { label: "选项3-3", value: "3" },
    //             { label: "选项3-4", value: "4" }
    //           ]
    //         },
    //         4:{ label: "选项4", value: "4" ,
    //         child:[
    //             { label: "选项4-1", value: "1" },
    //             { label: "选项4-2", value: "2" },
    //             { label: "选项4-3", value: "3" },
    //             { label: "选项4-4", value: "4" }
    //           ]
    //         }
    //       }
    //     },
        
    //     {
    //       type: "step",
    //       label: "下一步",
    //       placeholder: "请选择"
    //     }
    //   ],
    //   [
    //     {
    //       type: "time",
    //       name: "2time",
    //       label: "婚礼日期",
    //       placeholder: "请选择婚礼日期",
    //       required: true
    //     },
    //     {
    //       type: "checkbox",
    //       label: "多值多选",
    //       name: "2checkbox",
    //       placeholder: "请选择",
    //       required: false,
    //       content_data: [
    //         { label: "选项1", value: "1" },
    //         { label: "选项2", value: "2" },
    //         { label: "选项3", value: "3" },
    //         { label: "选项4", value: "4" }
    //       ]
    //     },
    //     {
    //       type: "radio",
    //       label: "多值单选",
    //       name: "2radio",
    //       placeholder: "请选择",
    //       required: false,
    //       content_data: [
    //         { label: "选项1", value: "1" },
    //         { label: "选项2", value: "2" },
    //         { label: "选项3", value: "3" },
    //         { label: "选项4", value: "4" }
    //       ]
    //     },
    //      {
    //       type: "name",
    //       label: "姓名",
    //       name: "2uname2",
    //       placeholder: "请填写姓名",
    //       required: true
    //     },
    //     {
    //       type: "step",
    //       label: "提交表单",
    //       placeholder: "请选择"
    //     }
    //   ]
    // ];

    // formdata = {
    //   uname: "",
    //   time: "",
    //   time2: {start:'',end:''},
    //   checkbox: [],
    //   radio: "",
    //   beizhu: "",
    //   phone: "18201269388",
    //   dest:{mdd:'',jd:[]}
    // };

</script>

<style lang="scss" >
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.kz-form {
  background-color: #fff;
}
.head-img {
  display: block;
  width: 750px;
  height: 247px;
  background-color: #F5F8FA;
  .icon{
    height: 124px;
    margin-top:32px;
    margin-left:48px;
  }
  .duihuakuang{
    float: right;
    padding:42px 59px;
    margin-top:28px;
    margin-right:41px;
    width: 511px;
    height: 207px;
    background-image: url('~/static/images/dp/duihuakuang.png');
    background-size:cover;
    h3{
      font-size:26px;
      color:#666;
      margin-bottom: 10px;
    }
    p{
      color:#999;
      font-size:22px;
    }
  }
}
.stepbox {
  display: none;
  padding: 0 40px 40px;
  &.showstep {
    display: block;
  }
}
.relative{
    position: relative;
    .err{
        font-family: "mintui" !important;
        display: inline-block;
        height: 40px;
        width:40px;
        color:#f44336;
        position: absolute;
        z-index: 999;
        top:50%;
        right:0;
        transform: translate(0,-50%);
        font-size: 40px;
    }
    .sms{
        .err{
            top:75%;
        }
    }
    
}
.form-item {
  font-size: 0;
  padding: 40px 0;
  border-bottom: 1px solid #eee;
  .left {
    display: inline-block;
    font-size: 28px;
    color: #999;
    width: 220px;
  }
  [type="text"] {
    font-size: 28px;
    width: 400px;
    &.short-input {
      width: 150px;
    }
  }
  .fengexian {
    font-size: 28px;
    margin: 0 50px;
  }
  .right {
    float: right;
    width: 450px;
  }
  .input-list {
    input {
      display: none;
      &:checked ~ .label {
        color: #ff6363;
        border-color: #ff6363;
      }
    }
    .label {
      font-size: 24px;
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 8px 20px;
      border-radius: 30px;
      border: 1px solid #666;
      &.on {
        color: #ff6363;
        border-color: #ff6363;
      }
    }
  }
  textarea {
    margin-top: 30px;
    padding: 20px 30px;
    border: none;
    height: 198px;
    width: 670px;
    font-size: 26px;
    color:#ccc;
    background-color: #f6f6f6;
    border-radius: 8px;
  }
}
.submit {
  display: block;
  margin: 100px auto 40px;
  width: 600px;
  height: 100px;
  line-height: 100px;
  border-radius: 100px;
  text-align: center;
  color: #fff;
  border: none;
  font-size: 30px;
  background-color: #ff6363;
}
.countTime {
  font-size: 28px;
  color: #333;
  width: 156px;
  height: 60px;
  display: inline-block;
  text-align: center;
  line-height: 60px;
  margin: 0 40px;
  border: 1px solid #979797;
  border-radius: 8px;
}
.graybtn {
  background-color: #999;
}
.mint-cell-wrapper {
  background-image: none;
  padding: 40px 0 40px;
  .mint-cell-title {
    display: inline-block;
    font-size: 28px;
    color: #999;
    width: 220px;
  }
}

.mint-cell-value {
  font-size: 28px;
  width: 400px;
}
.mint-cell {
  background-image: none;
  border-bottom: 1px solid #eee;
  &::before {
    left: 0;
    display: none;
  }
  &::after {
    left: 0;
    display: none;
  }
  &:last-child {
    background-image: none;
  }
}
.mint-field-core {
  width: 100px;
}
.mint-field-clear {
  font-size: 16px;
}
.mint-field-other {
  position: relative;
}
.vcodeimg {
  display: inline-block;
  width: 156px;
  height: 60px;
  margin: 0 40px;
}
</style>

