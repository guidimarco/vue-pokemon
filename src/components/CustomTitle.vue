<template>
    <div class="container">
        <h1 class="my-2">{{ title }}</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "CustomTitle",
        props: {
            title: String,
            msg: String,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
