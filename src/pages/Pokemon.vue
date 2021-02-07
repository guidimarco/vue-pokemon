<template>
    <div id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>{{ title }}</h1>
                    <p>{{ msg }}</p>

                    <!-- form input -> search pokemon -->
                    <Form @newPokemonSearch="searchUserPokemon" />

                    <div v-if="isSearchedPokemon">
                        <SearchedPokemon @closeUserPokemonCard="deletePokemonSearch"
                            :name="searchedPokemon.name"
                            :img="searchedPokemon.sprites.other.dream_world.front_default"
                            :abilities="searchedPokemon.abilities"
                            :moves="searchedPokemon.moves"
                        />
                    </div>

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
    import SearchedPokemon from "./../components/SearchedPokemon.vue"

    export default {
        name: "Pokemon",
        components: {
            Card,
            Form,
            SearchedPokemon,
        },
        props: {
            title: String,
            msg: String
        },
        data() {
            return {
                pokemons: [],
                searchedPokemon: {},
                isSearchedPokemon: false,
            }
        },
        methods: {
            searchUserPokemon(userPokemon) {
                // console.log(userPokemon);

                this.axios.get(this.base_url + 'pokemon/' + userPokemon).then(response => {
                    // DATA
                    // console.log(response.data);
                    // console.log(response.data.name);
                    // console.log(response.data.abilities); // array of obj -> ability
                    // console.log(response.data.moves); // array of obj -> move
                    // console.log(response.data.sprites.other.dream_world.front_default); // img-url
                    // this.searchedPokemon = response;

                    this.searchedPokemon = response.data;
                    this.isSearchedPokemon = true;
                });
            },
            deletePokemonSearch() {
                this.searchedPokemon = {};
                this.isSearchedPokemon = false;
            },
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
