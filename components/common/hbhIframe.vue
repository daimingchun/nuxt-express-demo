<<template>
    <iframe v-if="true"  
            :name="name"
            :id="id"
            :src="url"
            frameborder="false" 
            scrolling="auto" 
            allowtransparency="true" 
    >
    </iframe>       
</template>
<<script>
export default {
    name: 'hbhiframe',
	props: {
        url: [String],
        name: [String],
        id:[String]
    },
    mounted () {
        var _this = this;

        //iframe 高度自适应
        const oIframe = document.getElementById(_this.id);
        const deviceWidth = document.documentElement.clientWidth;
        const deviceHeight = document.documentElement.clientHeight;
        oIframe.style.width = deviceWidth + 'px';
        oIframe.style.height = deviceHeight + 'px';

    }
}
</script>
