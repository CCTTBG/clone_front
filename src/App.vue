<template>
<div>
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

</style>
