<template>
    <button @click="toggleNavbar();" class="navbarToggle"></button>
    <nav ref="nav" @mousemove="handleMouseMove">
        <h1 class="title">Trivial:</h1>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/proofs">Proofs</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
        <RouterLink to="/tech">Technologies</RouterLink>
        <h1 class="subtitle">
            QED. <span class="qed-symbol"></span>
        </h1>
    </nav>
    <div ref="overlay" class="overlay"></div>
</template>

<style scoped src="../assets/nav.css"></style>
<script src="./navbar.js"></script>
