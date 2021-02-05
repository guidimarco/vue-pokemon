<template>
    <div id="app">
        <!-- vue-component -> navbar -->
        <NavBar />

        <!-- vue-component -> title -->
        <!-- <CustomTitle :title="titlePage" :msg="mainMsg" /> -->

        <!-- vue-component -> title -->
        <Pokemon :title="titlePage" :msg="mainMsg" />
    </div>
</template>

<script>
    import NavBar from "./components/NavBar.vue";
    // import CustomTitle from "./components/CustomTitle.vue";
    import Pokemon from "./components/pages/Pokemon.vue";

    export default {
        name: "App",
        components: {
            NavBar,
            // CustomTitle,
            Pokemon
        },
        data() {
            return {
                // var Custom title
                titlePage: "Titolo della pagina",
                mainMsg: "Ecco l'elenco dei Pokemon"
            }
        }
    };
</script>

<style lang="scss">
    @import "./assets/scss/app.scss";

</style>
