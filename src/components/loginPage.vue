<template>
    <div>
        <h2>로그인</h2>
        <button @click="handleLogin">로그인하기</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogin() {
        // 로그인 성공 시
            localStorage.setItem('islogin', 'true')
            this.$router.push('/my-info')
        }
    } 
}
</script>
