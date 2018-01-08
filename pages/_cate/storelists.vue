<template>
  <div>
      <filter-nav></filter-nav>
      <store-bank></store-bank>
  </div>
</template>

<script>
import filterNav from '~/components/common/shaixuan'  //筛选
import storeBank from '~/components/index/storebank'  
export default {
    components : {
        filterNav,
        storeBank
    }
}
</script>



