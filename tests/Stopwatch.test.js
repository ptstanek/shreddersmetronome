import { expect, test, it, describe } from 'vitest';
import Stopwatch from '../src/Stopwatch.js';

it('returns formatted time', async () => {
    const testwatch = new Stopwatch();
    const formattedTime = testwatch.getFormattedTime();
    
    await expect(formattedTime).toBe("00:00");
});

it('ticks', async () => {
    const testwatch = new Stopwatch();

    testwatch.tick(); // ticking the timer

    const formattedTime = testwatch.getFormattedTime();
    
    await expect(formattedTime).toBe("00:01");
});

it('sets the timer values with the set function', async () => {
    const testwatch = new Stopwatch();
    
    testwatch.set(1, 1);

    const formattedTime = testwatch.getFormattedTime();
    await expect(formattedTime).toBe("01:01");
});
