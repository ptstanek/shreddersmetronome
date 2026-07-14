<script setup>
import { ref } from "vue";

const props = defineProps({
    text: String,
});

</script>

<template>
    <div class="LCD">
        <p>{{ text }}</p>
    </div>
</template>

<style scoped>
.LCD {
    background-color: #ffffff; /* I wanted to make it look green like winamp but white is fine too */
    border-style: solid;
    border-width: 2px;
    padding: 10px;
    -webkit-box-shadow: inset 0px 0px 10px 1px #000000;
    box-shadow: inset 0px 0px 10px 1px #000000;
    user-select: none;
    font-size: 30px;
}

p {
    justify-content: center;
    display: flex;
    margin: auto;
    font-family: 'PixelSix10';
    color: #000000;
    text-shadow: 1px 1px 2px red;
}
</style>