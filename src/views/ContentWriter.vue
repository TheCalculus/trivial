<template>
    <div class="content">
        <h1 class="title">Trivial</h1>
        <textarea
            placeholder="input"
            ref="markdownInput"
            @input="renderRequest"
            @change="this.input"
            @keypress="this.input"
            @paste="this.input"
        ></textarea>
        <textarea placeholder="output" ref="markdownOutput"></textarea>
        <div ref="markdownPreview" class="markdownPreview"></div>
    </div>
</template>

<style scoped src="../assets/content.css"></style>

<script>
import { markdownRenderer } from "../libs/markdown";

let markdownInput, markdownPreview, markdownOutput;

export default {
    data() {
        return {};
    },
    mounted() {
        markdownInput = this.$refs.markdownInput;
        markdownPreview = this.$refs.markdownPreview;
        markdownOutput = this.$refs.markdownOutput;
    },
    methods: {
        renderRequest() {
            const output = markdownRenderer(markdownInput.value);
            markdownOutput.innerHTML = output; // result is sanitized, safe enough?
            markdownPreview.innerHTML = output;
        },
    },
};
</script>
