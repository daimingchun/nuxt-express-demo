<template>
<div>
  <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>

</div>
</template>
<script>
export default {
    model: {
        prop: "city", //v-model的数据在该组件内的名字（自定义）
        event: "input" //触发事件名称（自定义）
    },
  watch:{
      city(v1,v2){
        this.$emit("input", v1);
      },
      value(v1,v2){
        this.$emit("input", v1);
      }
  },
  data() {
    return {
        value:this.city,
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, 
        {
          divider: true,
          content: '-',
          className: 'slot2'
        }
        , {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
  methods:{
      onValuesChange(v){
        this.value = v;
        // this.city = v;
      }
  }
}
</script>

