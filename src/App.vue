<template>
    <div id="app">
        <NavBar />
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    </div>
</template>

<script>
    import NavBar from "./components/NavBar.vue";

    export default {
      name: "App",
      components: {
        NavBar
      }
    };
</script>

<style lang="scss">
    @import "./assets/scss/app.scss";

</style>
