<script setup>
import { ref } from "vue";
import { useSettings } from "./useSettings";
import { useRouter } from "vue-router";

const settings = useSettings();
const router = useRouter();

const goToMetronome = () => {
    router.push("/");
};

</script>

<template>
    <div>
        <h1>Settings</h1>
        <div class="settingsbox">
            <label>
                <input type="checkbox" v-model="settings.darkMode" />
                Dark Mode
            </label>
            <label for="volumeslider" style="padding-top: 1em; justify-self: left">
                Volume
            </label>
            <input type="range" id="volumeslider" v-model="settings.volume" min="0" max="100" />
            
            <button class="button-8" role="button" @click="goToMetronome" style="font-size: 1em; margin-top: 10px">
                Back
            </button>
        </div>
    </div>
</template>

<style scoped>
h1 {
    vertical-align: middle;
    text-align: center;
    font-family: "Noto Sans", sans-serif;
    font-size: 2em;
}

.settingsbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;

    width: 20%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    padding-bottom: 10px;
}

input[type="checkbox"] {
    /* */
    font-family: "Noto Sans", sans-serif;
    width: 20px;
    height: 20px;
    padding-right: 10px;
    margin-right: 10px;
    border-radius: 20px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #ffffff;
    border: 1px solid #7aa7c7;
}

input[type="checkbox"]:checked {
    width: 20px;
    height: 20px;
    padding-right: 10px;
    margin-right: 10px;
    border-radius: 20px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #ffffff;
    box-shadow: inset 1em 1em var(--text-color);
    border: 1px solid #7aa7c7;
}

label {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    user-select: none;
}

@media only screen and (max-width: 600px) {
    .settingsbox {
        width: 95%;
        border-style: solid;
        filter: none;
        box-shadow: none;
    }
}
</style>
