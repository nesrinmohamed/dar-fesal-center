export default defineNuxtRouteMiddleware((to, from) => {
    console.log("From auth middleware");

    console.log("to");
});
