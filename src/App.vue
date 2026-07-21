<script setup>
import { watch } from "vue";
import PageFooter from "./PageFooter.vue";
import { useSettings } from "./useSettings";

const settings = useSettings();

watch(
    () => settings.value.darkMode,
    (isDark) => {
        if (isDark) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    },
    { immediate: true },
);
</script>

<template>
    <RouterView />
    <PageFooter />
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/pixelsix");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

:root {
    --bg-color: #ffffff;
    --text-color: #000000;
}

body.dark-mode {
    --bg-color: #000000;
    --text-color: #ffffff;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    padding-top: 10px;
    overflow: hidden;
}

/* CSS */
/* stack overflow's button style */
.button-8 {
    background-color: #e1ecf4;
    border-radius: 3px;
    border: 1px solid #7aa7c7;
    box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #39739d;
    cursor: pointer;
    display: inline-block;
    font-family:
        -apple-system, system-ui, "Segoe UI", "Liberation Sans", sans-serif;
    font-size: 2.5em;
    font-weight: 400;
    line-height: 1.15385;
    margin: 0;
    outline: none;
    padding: 8px 0.8em;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    white-space: nowrap;
}

.button-8:hover,
.button-8:focus {
    background-color: #b3d3ea;
    color: #2c5777;
}

.button-8:focus {
    /* box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15); */
}

.button-8:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
}
</style>
