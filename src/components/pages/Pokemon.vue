<template>
    <div id="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>{{ title }}</h1>
                    <p>{{ msg }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pokemon",
        props: {
            title: String,
            msg: String
        },
        mounted() {
            // const thisComponent = this; // rename this component -> self

            this.axios.get(this.base_url + 'pokemon').then(response => {
                console.log(response);
            });
        }
    }
</script>

<style scoped lang="scss">
    #wrapper {
        background-color: #ffffce;
        color: #31639c;
    }
</style>
