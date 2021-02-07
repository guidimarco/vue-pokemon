<template>
    <div id="wrapper-pokemon">
        <div id="user-pokemon" class="card" style="width: 18rem;">
            <!-- btn close -->
            <div id="close" class="text-right p-2">
                <button type="button" class="close" aria-label="Close" @click="closePokemonCard">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <img class="card-img-top" :src="img" alt="Card image cap">

            <div class="card-body">
                <h2>{{ name }}</h2>
                <p>
                    Abilità:
                    <span v-for="(ability, index) in abilities" :key="index">
                        {{ ability.ability.name }}<span v-if="index != Object.keys(abilities).length - 1">, </span>
                    </span>
                </p>
                <p>
                    Mosse:
                    <span v-for="(move, index) in moves" :key="index">
                        {{ move.move.name }}<span v-if="index != Object.keys(moves).length - 1">, </span>
                    </span>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchedPokemon",
        props: {
            'name': String,
            'img': String,
            'moves': Array,
            'abilities': Array
        },
        methods: {
            closePokemonCard() {
                // console.log("chiudi");
                this.$emit('closeUserPokemonCard');
            },
            // stampAbilities() {
            //     console.log(this.abilities);
            // }
        },
    }
</script>

<style scoped lang="scss">
    #wrapper-pokemon {
        position: fixed;
        left: 0; right: 0; top: 0; bottom: 0;
        z-index: 10;
        backdrop-filter: blur(2px);

        #user-pokemon {
            position: absolute;
            left: 50%; top: 50%;
            transform: translate(-50%, -50%);
            // z-index: 1;
            .card-body {
                max-height: 200px;
                overflow: auto;
            }
        }
    }
</style>
