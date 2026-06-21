<script setup>
import { onMounted, ref } from "vue";
import { useSettings } from "./useSettings";
import { useRouter } from "vue-router";

const playing = ref(false);
const bpm = ref(90); // default value of 90 BPM.
const timerID = ref(null);

const settings = useSettings();
const router = useRouter();

let audioBuffer;
let audioContext;

onMounted(async () => {
    // loading the click file.
    try {
        const audioFileResponse = await fetch("audio/click.mp3");

        if (!audioFileResponse.ok) {
            throw new Error(`error - ${audioFileResponse.status}`);
        }

        const arrayBuffer = await audioFileResponse.arrayBuffer();

        audioContext = new AudioContext();
        audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        console.log("AUDIO CONTEXT:", audioContext);
        console.log("AUDIO BUFFER:", audioBuffer);

    }
    catch (err) {
        console.log(`${err} - couldn't fetch click file.`);
    }
});

const click = () => {
    let clickSource = audioContext.createBufferSource();
    clickSource.buffer = audioBuffer;
    clickSource.connect(audioContext.destination);

    clickSource.start();
}

const togglePlaying = () => {
    playing.value = !playing.value;

    if(playing.value) { 
        timerID.value = setInterval(click, parseInt(60000 / bpm.value));
    }

    if (!playing.value) {
        clearInterval(timerID.value);
    }
};

const goToSettings = () => {
    if (playing.value) {
        togglePlaying();
    }
    router.push("/settings");
};
</script>

<template>
    <div class="metronomecontainer">
        <h1>Shredder's Metronome</h1>
        <input v-model="bpm" />
        <button class="button-8" role="button" @click="togglePlaying">
            {{ playing ? "Stop" : "Start" }}
        </button>
        <button class="button-8" role="button" @click="goToSettings"
            style="font-size: 1em; margin-top: 10px; background-color: #dadada">
            Settings
        </button>
    </div>
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pixelsix");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

h1 {
    margin-left: auto;
    margin-right: auto;
}

.metronomecontainer {
    width: 20%;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    flex-direction: column;

    padding: 10px;
    padding-bottom: 20px;

    border-radius: 15px;
    border-style: solid;
    border-width: 2px;
    border-color: #3b3b3b;

    box-shadow: 6px 12px 20px 0px #000;
    /* font-family: 'PixelSix00', sans-serif; /* only gonna use this font for the timer components */
}

input {
    font-family: "PixelSix00", sans-serif;
    font-size: 3em;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

h1 {
    font-family: "Noto Sans", sans-serif;
    font-size: 2em;
}

button {
    border-radius: 20px;
    background-color: #00abfa;
    border-style: solid;
    border-color: white;

    font-family: "Noto Sans", sans-serif;
    font-weight: 500px;
    font-size: 2em;

    color: #ffffff;
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
    box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.button-8:active {
    background-color: #a0c7e4;
    box-shadow: none;
    color: #2c5777;
}

@media only screen and (max-width: 600px) {
    .metronomecontainer {
        width: 95%;
        border-style: none;
        filter: none;
        box-shadow: none;
    }
}
</style>
