<template>
    <button @click="toggleNavbar()" class="navbarToggle"></button>
    <nav ref="nav" @mousemove="handleMouseMove">
        <h1 class="title">Trivial:</h1>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/proofs">Proofs</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/accounts">Accounts</RouterLink>
        <RouterLink to="/tech">Technologies</RouterLink>
        <h1 class="subtitle">QED. <span class="qed-symbol"></span></h1>
    </nav>
    <div ref="overlay" class="overlay"></div>
</template>

<style scoped src="../assets/nav.css"></style>
<script>
let nav, overlay;

export default {
    data() {
        return {
            padding: 0,
            open: false,
        };
    },
    mounted() {
        nav = this.$refs.nav;
        overlay = this.$refs.overlay;

        this.toggleNavbar();
    },
    methods: {
        handleMouseMove(event) {
            const mouseY = event.clientY;
            const smoothening = 100;

            this.padding = mouseY / smoothening;
            nav.style.paddingTop = `${this.padding}px`;
        },
        toggleNavbar() {
            if (this.open) {
                nav.style.left = "0%";
                overlay.style.opacity = "1";
                overlay.style.zIndex = "4";
            } else {
                nav.style.left = "-100%";
                overlay.style.opacity = "0";
                overlay.style.zIndex = "-4";
            }

            this.open = !this.open;
        },
    },
};
</script>
