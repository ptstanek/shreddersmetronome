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
            <button
                class="button-8"
                role="button"
                @click="goToMetronome"
                style="font-size: 1em; margin-top: 10px"
            >
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
    font-family: "Noto Sans", sans-serif;
    width: 20px;
    height: 20px;
    padding-right: 10px;
    margin-right: 10px;
}

label {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.2em;
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 600px) {
    .settingsbox {
        width: 95%;
        border-style: solid;
        filter: none;
        box-shadow: none;
    }
}

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
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.button-8:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
}
</style>
