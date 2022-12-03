import {createRouter, createWebHashHistory} from "vue-router";
import Login from "../components/Login.vue";
import Welcome from "../components/Welcome.vue";
import Register from "@/components/Register";

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: Welcome,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

console.log(router);
