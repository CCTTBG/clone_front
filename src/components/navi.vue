<template>
    <header class="totalhead">
        <div  class="navibar">
                <div class="logo">instargram</div>
                <div class="icons">
                    <FontAwesomeIcon :icon="['fas', 'heart']" style="color: #B197FC;" class="icon" />
                    <FontAwesomeIcon :icon="['fas', 'comment']" class="icon"/>
                </div>
            </div>
            <div class="storys">
                <div class="story" v-for="(user,i) in users" :key="user[i]" >
                    <img class="storyImg" :src =user.userImg>
                    <p class="storyUserName">{{user.userName}}</p>
                </div>
            </div>
    </header>
</template>
<script>
import dog from '@/assets/dog.png'
import cat from '@/assets/cat.png'
import logo from '@/assets/logo.png'

export default {
    name:'NaviBar',
    data(){
        return{
            users:[
                {userName:'뷰', userImg:logo},
                {userName:'개', userImg:dog},
                {userName:'고양이', userImg:cat},
                {userName:'나무', userImg: 'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-cute-cartoon-style-green-tree-vector-transparent-png-image_1327682.jpg' },
                {userName:'병아리', userImg: 'https://i.pinimg.com/236x/4b/4a/3d/4b4a3de254fcd11bc5efa1c3150dbe75.jpg'},
                {userName:'수달', userImg: 'https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg'},
                {userName:'호랑이', userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGjtgq8yjPQeJBb9yezoeKltuh4EpfVtPxaosTlWnaJRykrQ1Qd2T-eH_75Ws907oeDU&usqp=CAU'},
                {userName:'푸들', userImg: 'https://item.kakaocdn.net/do/9c5d673c91e8f1080c2602931c81f178f43ad912ad8dd55b04db6a64cddaf76d'},
                {userName:'망고', userImg: 'https://item.kakaocdn.net/do/f9abb3b122c87f554eaa26424a99b49af43ad912ad8dd55b04db6a64cddaf76d'},
            ]
        }
    },
    components:{
    },
}
</script>
<style>
    .totalhead {
        padding: 10px 0;
        width: 100%;
    }
    .navibar{
        display: flex;
        justify-content: space-between;
        align-content: center;
        border-bottom:2px solid black;
    }
    .logo{
        font-size: 1.5rem;
        align-content: center;
    }
    .icons {
    display: flex;
    gap: 15px;
    }
    .icon{
        font-size: 1.2rem;
    }
    .storys {
    display: flex;
    gap: 12px;
    padding: 10px;
    overflow-x: auto; /* 스크롤도 가능하게 */
    }
    .story{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70px;
    }
    .storyImg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid #f004c4; 
    object-fit: cover;  /* 이미지 잘라서 커버 */
    }

    .storyUserName {
        font-size: 12px;         
        color: #444;              
        margin-top: 6px;              
        text-align: center;           
        white-space: nowrap;         /* 줄 바꿈 금지 → 한 줄로만 표시 */
        overflow: hidden;            /* 넘친 내용 숨김 */
        text-overflow: ellipsis;     /* 넘친 글자에 "..." 표시 */
    }
</style>