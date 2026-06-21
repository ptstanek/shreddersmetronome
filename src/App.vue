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
</style>
