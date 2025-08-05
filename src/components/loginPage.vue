<template>
    <div>
        <h2>로그인</h2>
        <div>
        아이디: <input v-model="userId" class="userId" />
        비밀번호: <input v-model="userPass" class="userPass" type="password" />

        </div>
        <button @click="handleLogin">로그인하기</button>
    </div>
</template>

<script>
    export default {
    data() {
        return {
        userId: '',
        userPass: ''
        }
    },
    methods: {
        async handleLogin() {
        const response = await fetch('instarJson/userdata.json')
        const users = await response.json()
            console.log(users);
        const userData = users.find(u => u.userId === this.userId.trim() && u.passWord === this.userPass.trim());

        if (userData) {
            localStorage.setItem('islogin', 'true')
            this.$router.push('/my-info')
        } else {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.')
        }
        }
    }
    }
</script>

<style>

</style>
