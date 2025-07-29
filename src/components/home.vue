<template>
<div class="mainContent">
    <NaviBar />
    <baseContent />
    <rowNavi />
</div>
</template>

<script>
import NaviBar from '@/components/navi.vue'
import baseContent from '@/components/baseContent.vue'
import rowNavi from '@/components/row_navi.vue'

export default {
    name: 'App',
    data(){
        return{
        }
    },
    components: {
        NaviBar,
        baseContent,
        rowNavi
    },
    methods:{

    }
}
</script>

<style>
    .mainContent{
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid black;
    }
</style>
