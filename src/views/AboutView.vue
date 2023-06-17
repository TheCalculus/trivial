<template>
    <div class="content">
        <h1 class="title">Trivial</h1>
        <TrivialDisplay :data="data" />
    </div>
</template>

<style scoped src="../assets/about.css"></style>

<script>
import TrivialDisplay from "../components/TrivialDisplay.vue";

export default {
    components: {
        TrivialDisplay,
    },
    data() {
        return {
            data: [
                "The proof is left as an exercise to the reader",
                "The proof is trivial and is left as an exercise to the reader.",
                "The proof is straightforward and trivial, and I leave it as an exercise to the reader.",
                "The proof is easily deduced by the reader, hence left as an exercise.",
                "The proof, being trivial in nature, is left as an exercise for the reader.",
                "The proof can be solved effortlessly by the reader, so I leave it as an exercise.",
                "The proof is deemed trivial, so I assign it as an exercise for the reader.",
                "The proof is of such triviality that I challenge the reader to solve it.",
            ],
        };
    },
};
</script>
