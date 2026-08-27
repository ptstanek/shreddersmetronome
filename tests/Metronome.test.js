import { render } from 'vitest-browser-vue'; 
import { expect, test, it, describe } from 'vitest';
import { page } from 'vitest/browser';

import Metronome from '../src/Metronome.vue';

it('renders on the page', async () => {
    const screen = page.render(Metronome);
    const headerText = screen.getByText("shredder's metronome");

    await expect.element(headerText).toBeInTheDocument();
});

it('the start button becomes a stop button when pressed', async () => { 
    const screen = page.render(Metronome);
    const startButton = screen.getByText("Start");

    await startButton.click();

    const stopButton = screen.getByText("Stop");

    await expect.element(stopButton).toBeInTheDocument();
});

it('the start button button starts the LCD timer', async () => { 
    const screen = page.render(Metronome);
    const startButton = screen.getByText("Start");
    const lcdElement = screen.getByText('00:00');

    await startButton.click();

    await expect.element(lcdElement).not.toBe('00:00');
});


it('timer module doesnt start with NaN values', async () => {
    const screen = page.render(Metronome);
    const headerText = screen.getByText("00:00");

    await expect.element(headerText).not.toBeNaN();
});

