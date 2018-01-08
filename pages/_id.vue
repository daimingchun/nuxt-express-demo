<template>
    <div>
        <index-juhe :pageData="channelData"></index-juhe>
        <!-- {{channelData}} -->
    </div>
</template>
<script>
import { getChannelData }  from '~/api/data/channel'
import indexJuhe from '~/components/index/indexJuhe'
export default {
    components : {
        indexJuhe
    },
    async asyncData () {
        let { data } = await getChannelData()
        return { channelData : data.data }

    }
}
</script>

