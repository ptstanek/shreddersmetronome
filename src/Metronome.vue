<script setup>
import { onMounted, ref } from "vue";
import { useSettings } from "./useSettings";
import { useRouter } from "vue-router";
import LCD from "./LCD.vue";
import Stopwatch from "./Stopwatch.js";

const stopwatch = new Stopwatch();
const stopwatchID = ref(null);

const playing = ref(false);
const bpm = ref(90); // default value of 90 BPM.
const timerID = ref(null);

const settings = useSettings();
const router = useRouter();

let audioBuffer;
const audioContext = new AudioContext();
const gainNode = audioContext.createGain();

onMounted(async () => {
    // retrieving the saved stopwatch data (if any is there)
    stopwatch.retrieveFromLocalStorage();

    // loading the click file.
    try {
        const audioFileResponse = await fetch("audio/click.mp3");

        if (!audioFileResponse.ok) {
            throw new Error(`error - ${audioFileResponse.status}`);
        }

        const arrayBuffer = await audioFileResponse.arrayBuffer();

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

    // console.log(`CLICK -> ${parseInt(settings.value.volume)}`);

    // Imagine these are like nodes on a graph    
    clickSource.connect(gainNode);
    gainNode.connect(audioContext.destination);

    clickSource.start();
}

const togglePlaying = () => {
    playing.value = !playing.value;

    gainNode.gain.setValueAtTime(parseFloat(settings.value.volume / 100), audioContext.currentTime); // setting the gain

    if (playing.value) {
        timerID.value = setInterval(click, parseInt(60000 / bpm.value));
        stopwatchID.value = setInterval(() => stopwatch.tick(), 1000); // increment stopwatch every second 
    }
    else {
        clearInterval(timerID.value);
        clearInterval(stopwatchID.value);
        stopwatch.save(); // save stopwatch values
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
        <LCD :text="stopwatch.getFormattedTime()" style="margin-bottom:5px;" />
        <button class="button-8" role="button" @click="togglePlaying">
            {{ playing ? "Stop" : "Start" }}
        </button>
        <button class="button-8" role="button" @click="stopwatch.set(0, 0)"
            style="font-size: 1em; margin-top: 10px; background-color: #db7d80; color: #ffffff">
            Clear timer
        </button>
        <button class="button-8" role="button" @click="goToSettings"
            style="font-size: 1em; margin-top: 10px; background-color: #dadada">
            Settings
        </button>
    </div>
</template>

<style scoped>
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
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

h1 {
    font-family: "Noto Sans", sans-serif;
    font-size: 2em;
}
/*

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
*/

@media only screen and (max-width: 600px) {
    .metronomecontainer {
        width: 95%;
        border-style: none;
        filter: none;
        box-shadow: none;
    }
}
</style>
