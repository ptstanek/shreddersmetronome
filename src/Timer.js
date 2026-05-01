// timer code from this video by Music and Coding
// (https://www.youtube.com/watch?v=x8PBWobv6NY&t=2429s)

export function Timer(callback, timeInterval) {
    this.timeInterval = timeInterval;

    this.start = () => {
        this.expected = Date.now() + this.timeInterval;
        this.timeout = setTimeout(this.round, this.timeInterval);
    } 

    this.stop = () => {
        clearTimeout(this.timeout);
        console.log("timer stopped.");
    }
 
    this.round = () => {
        let drift = Date.now() - this.expected;
        callback();
        this.expected += this.timeInterval;
        console.log(`Drift: ${drift}`);
        console.log(`${this.timeInterval - drift}`); 
        this.timeout = setTimeout(this.round, this.timeInterval - drift);
    }
}