import { ref } from "vue";

export default class Stopwatch {
    constructor() {
        this.seconds = ref(0);
        this.minutes = ref(0);
        this.hours = ref(0); 
    }

    getFormattedTime() {
        return `${this.hours.value}:${this.minutes.value}:${this.seconds.value}`;
    }

    tick() {
        if(this.seconds.value === 59) {
            this.seconds.value = 0;
            this.minutes.value++;
        }
        else { 
            this.seconds.value++; 
        }
        if(this.minutes.value === 59) {
            this.minutes.value = 0; 
            this.hours.value++;
        }
        // console.log("!!!! TICK !!!!");
    }
    
    save() {
        localStorage.setItem("time", this.getTotalSeconds().toString());
    }

    getTotalSeconds() {
        let total = this.seconds.value + (this.minutes.value*60) + ((this.hours.value*60)*60);
        return total;
    }
}