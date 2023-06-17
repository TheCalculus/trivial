<template>
    <h1 class="subtitle"><q>{{ triviality }}</q></h1>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            triviality: "",
            currentIndex: 0,
        };
    },
    mounted() {
        this.updateSubtitle();
        setInterval(this.updateSubtitle, 2000);
    },
    methods: {
        updateSubtitle() {
            this.triviality = this.data[this.currentIndex];
            this.currentIndex = (this.currentIndex + 1) % this.data.length;
        },
    },
};
</script>
