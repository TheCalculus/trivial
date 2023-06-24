<template v-if="!isLoggedIn">
    <div class="content">
        <SignIn v-if="hasAccount" :auth="auth"/>
        <SignUp v-else :auth="auth"/>
        <button @click="toggleAccountStatus" ref="toggle">
            already have an account?
        </button>
    </div>
</template>

<style scoped src="../assets/account.css"></style>

<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

import { firebaseApp } from "../libs/firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default {
    data() {
        return {
            hasAccount: false,
            isLoggedIn: false,
            auth: null,
        };
    },
    components: {
        SignIn,
        SignUp,
    },
    mounted() {
        this.auth = auth;
    },
    methods: {
        toggleAccountStatus() {
            this.hasAccount = !this.hasAccount;
            this.$refs.toggle.innerHTML = !this.hasAccount
                ? "already have an account?"
                : "don't have an account?";
        },
    },
};
</script>
