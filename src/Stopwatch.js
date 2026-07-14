import { ref } from "vue";

export default class Stopwatch {
    constructor() {
        this.seconds = ref(0);
        this.minutes = ref(0);
        // this.hours = ref(0); 
    }

    getFormattedTime() {
        // formatted values (to add a leading zero to values < 10)
        let fSeconds; 
        let fMinutes;

        // check if the seconds value is less than 10 and add a leading zero
        if(this.seconds.value < 10) { fSeconds = "0" + this.seconds.value.toString() }
        else { fSeconds = this.seconds.value};  

        // check if the minutes value is less than 10 and add a leading zero
        if(this.minutes.value < 10) { fMinutes = "0" + this.minutes.value.toString() }
        else { fMinutes = "0" + this.minutes.value };

        return `${fMinutes}:${fSeconds}`;

        // return `${this.minutes.value}:${this.seconds.value}`;
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
            // this.hours.value++;
        }
        // console.log("!!!! TICK !!!!");
    }
    
    save() {
        localStorage.setItem("time", this.getTotalSeconds().toString());
    }

    set(newSeconds) {
        this.seconds.value = newSeconds;
    }

    retrieveFromLocalStorage() {
        this.seconds.value = parseInt(localStorage.getItem("time"));
    }

    getTotalSeconds() {
        let total = this.seconds.value + (this.minutes.value*60) /* + ((this.hours.value*60)*60); */;
        return total;
    }
}