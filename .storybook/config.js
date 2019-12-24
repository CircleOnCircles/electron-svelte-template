import { configure } from '@storybook/svelte';

configure(require.context('../renderer', true, /\.stories\.js$/), module);
