<template>
<div class="mainContent">
  <NaviBar />
  <baseContent />
</div>
</template>

<script>
import NaviBar from '@/components/navi.vue'
import baseContent from '@/components/baseContent.vue'

export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
    NaviBar,
    baseContent
  }
}
</script>

<style>
.mainContent{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  }
</style>
