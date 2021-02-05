<template>
    <div class="card my-2 {" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ url }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            name: String,
            url: String
        }
    }
</script>

<style scoped lang="scss">
    .card {
        flex-basis: 30%;
    }
</style>
