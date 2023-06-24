<template>
    <h1>sign in here</h1>
    <input type="text" placeholder="email" ref="email" />
    <input type="password" placeholder="password" ref="password" />
    <button @click="createAccount">sign in</button>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
    props: ["auth"],
    methods: {
        createAccount() {
            signInWithEmailAndPassword(
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
