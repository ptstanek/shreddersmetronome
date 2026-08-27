
import { render } from 'vitest-browser-vue'; 
import { expect, test, it } from 'vitest';
import { page } from 'vitest/browser';

import LCD from '../src/LCD.vue';

it('renders on the page', async () => {
    const screen = page.render(LCD);
    const lcdParagraphElement = page.getByRole('paragraph');
    await expect.element(lcdParagraphElement).toBeInTheDocument();
});

it('accepts props', async () => {
    const screen = page.render(LCD, {
        props: {
            text: 'test',
        }
    });

    const lcdLabel = screen.getByText('test');
    await expect.element(lcdLabel).toHaveTextContent('test');
});