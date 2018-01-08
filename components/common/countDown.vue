<template>
	<p id="countdown" class="countdown"></p>
</template>

<script>
export default {
	name: 'countdown',
	props: {
	  	date: [String]  // 格式为 2018-01-11 00:00:00
	},
    mounted () {
    	var _this = this;
        var countdown = document.getElementById('countdown');
        function tow(n) {
            return n >= 0 && n < 10 ? '0' + n : '' + n;
        }
        function getDate() {
            var oDate = new Date(), 
	            oldTime = oDate.getTime(),
	            newDate = new Date(_this.date),
	            newTime = newDate.getTime(),
	            second = Math.floor((newTime - oldTime) / 1000),
	            day = Math.floor(second / 86400),
	            second = second % 86400;
            if(newTime - oldTime<0){
               day = hour = minute = second = 0
            }else{
                var hour = Math.floor(second / 3600);
                    second %= 3600;
                var minute = Math.floor(second / 60);
                    second %= 60;
            }
           

            var str = '<span>'+tow(day)+'</span><em>天</em>'
                + '<span>'+ tow(hour) + '</span>:'
                + '<span>'+ tow(minute) + '</span>:'
                + '<span>'+ tow(second) + '</span>';
            countdown.innerHTML = str ;
        }
        getDate();
        setInterval(getDate, 1000);
    }
}
</script>
<style lang="scss">
    .countdown{
        overflow: hidden; color: #333; display: inline-block;
        span{
            display: inline-block; width: 44px; text-align: center; height: 44px; line-height: 44px; margin:0 8px; color:#fff; background-color: #333; border-radius: 50%;
        }
        :first-child{
            margin-left: 0;
        }
        em{
            font-style: normal; font-size: 18px; vertical-align:-10px;
        }
    }
</style>