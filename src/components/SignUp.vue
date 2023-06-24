<template>
    <h1>sign up here</h1>
    <input type="text" placeholder="email" ref="email" />
    <input type="password" placeholder="password" ref="password" />
    <button @click="createAccount">create account</button>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
    props: ["auth"],
    methods: {
        createAccount() {
            createUserWithEmailAndPassword(
                this.$props.auth,
                this.$refs.email.value,
                this.$refs.password.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;

                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    switch (errorCode) {
                        case "auth/invalid-email":
                            console.error("invalid email");
                            break;
                        /* ... */
                    }
                });
        },
    },
};
</script>
