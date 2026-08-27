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

