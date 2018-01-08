<template>
  <div>测试表单验证

      <form action="">
          {{errdata}}
        <div v-for="(item,key) in formdata"  >
            <!-- <input type="text" v-model="formdata[key]"  @blur="validator(formdata,key)"> -->
            <mt-field label="邮箱" :state="errdata[key]" v-model="formdata[key]" @change="validateItem(formdata,key)"></mt-field>
            <!-- <span v-if="errdata[key]" style="color:red">
                {{errdata[key]}}
            </span> -->
            <br>
        </div>
        <div @click="validator">
            点击验证
        </div>
      </form>

  </div>
</template>

<script>
import schema  from "async-validator";

var descriptor = {
  name: { required: true,message:'不能为空'},
  name1: {type: "string", required: true,message:'必须为字符串'},
  name2: {type: "string", required: true,message:'必须为字符串'},
  name3: {type: "string", required: true,message:'必须为字符串'},
  name4:{pattern:/^1[3|5|7|8|9][0-9]{9}$/,message:'手机号验证失败'}
}
var validator = new schema(descriptor);
var formdata = {name1:'rr',name2:333,name3:888}



// validator.validate({name: "muji",name1:}, (errors, fields) => {
    
//   if(errors) {
//     // validation failed, errors is an array of all errors
//     // fields is an object keyed by field name with an array of
//     // errors per field
//     console.log(12313)
//     // return handleErrors(errors, fields);
//   }
//   // validation passed
// });
export default {
    data(){
        var errdata = {}
        return {
            errdata:errdata,
            formdata
        }
    },
    methods:{
        validator(data,key){
            var _this = this;
            validator.validate({},function(errors, fields){
                _this.errdata = {}
                if(errors){
                    for(var i in errors){
                        // _this.$set(_this.errdata,errors[i].field,errors[i].message)
                        _this.$set(_this.errdata,errors[i].field,'error')
                    }
                    console.log(errors)
                    return handleErrors(errors, fields);
                }
                console.log('arguments',arguments)
                console.log('error====',errors)
                console.log('fields====',fields)
            });
        },
        validateItem(data,key){
            console.log(666)
            var input = {},_this = this;
            input[key]  =data[key];
            validator.validate(input,function(errors, fields){
                _this.errdata = {}
                if(errors){
                    for(var i in errors){
                        // _this.$set(_this.errdata,errors[i].field,errors[i].message)
                        _this.$set(_this.errdata,errors[i].field,'error')
                    }
                    console.log(errors)
                }
                console.log('arguments',arguments)
                console.log('error====',errors)
                console.log('fields====',fields)
            });
        }
    }
}
</script>
