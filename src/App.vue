<template>
    <div id="app">
        <!-- vue-component -> navbar -->
        <NavBar />

        <!-- vue-component -> title -->
        <CustomTitle />
    </div>
</template>

<script>
    import NavBar from "./components/NavBar.vue";
    import CustomTitle from "./components/CustomTitle.vue";

    export default {
      name: "App",
      components: {
        NavBar,
        CustomTitle
      }
    };
</script>

<style lang="scss">
    @import "./assets/scss/app.scss";

</style>
