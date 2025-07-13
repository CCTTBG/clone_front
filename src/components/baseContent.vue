<template lang="">
        <div class="contentWrapper">
                <div class="content" v-for="user in userContent" :key="user.id">
                    <div class= "userData">
                        <img class="contentUserImg" :src="user.img" />
                        <div class="contentUserName">{{ user.name }}</div>
                    </div>
                    <div class= "userContent">
                            <img class="contentImg" :src="user.contentrImg" />
                            <div class ="userText">{{user.contentText}}</div>
                    </div>
                </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            userContent:[],
        }
    },
    mounted(){
        fetch('/instarJson/userContent.json')
        .then((res)=>res.json())
        .then((data)=>{
            this.userContent=data;
        })
    .catch((err) => console.error('JSON 불러오기 실패:', err));
    },
}
</script>
<style>
.contentWrapper{
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
}
.userData{
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    border-bottom: 1px solid black ;
}
.contentUserImg{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #f004c4;
    object-fit: cover;
}
.contentUserName{
    font-size: 15px;
    margin-top: 6px;
    text-align: center;
}

.contentImg {
    width: 100%;
    max-width: 500px; 
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
    object-fit: cover;
}
</style>