<template>
    <form @submit.prevent="askForPokemon">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Inserisci il nome di un pokemon da cercare" v-model='searchPokemon'>

            <div class="input-group-append">
                <input type="submit" class="btn btn-primary" value="Cerca">
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Form",
        data() {
            return {
                searchPokemon: '',
            }
        },
        methods: {
            askForPokemon() {
                // console.log(this.searchPokemon);
                this.$emit('newPokemonSearch', this.searchPokemon);
                this.searchPokemon = '';
            }
        }
    }
</script>

<style media="screen">

</style>
