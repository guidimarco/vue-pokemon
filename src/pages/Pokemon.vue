<template>
    <div id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>{{ title }}</h1>
                    <p>{{ msg }}</p>

                    <!-- form input -> search pokemon -->
                    <Form />

                    <!-- card all pokemons -->
                    <div class="d-flex justify-content-between flex-wrap">
                        <Card v-for="(pokemon, index) in pokemons" :key="index" :name="pokemon.name" :url="pokemon.url" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "./../components/Card.vue";
    import Form from "./../components/Form.vue";

    export default {
        name: "Pokemon",
        components: {
            Card,
            Form
        },
        props: {
            title: String,
            msg: String
        },
        data() {
            return {
                pokemons: [],
            }
        },
        mounted() {
            const thisComponent = this; // rename this component -> self

            this.axios.get(this.base_url + 'pokemon').then(response => {
                // console.log(response.data.results);
                thisComponent.pokemons = response.data.results;
            });
        }
    }
</script>

<style scoped lang="scss">
    #wrapper {
        // background-color: #ffffce;
        color: #31639c;
    }
</style>
