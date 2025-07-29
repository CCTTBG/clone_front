import { createRouter, createWebHistory } from "vue-router";
import loginPage from "@/components/loginPage.vue";
import myInfo from "@/components/myInfo.vue";
import home from "@/components/home.vue"
const routes = [
    {path:'/', component:home },
    {path:'/login', component:loginPage },
    { path:'/my-info', component: myInfo }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router