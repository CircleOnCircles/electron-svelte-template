// subWindow.js - Serve as an entry point for rollup

import App from './subWindow.svelte';

const app = new App({
    target: document.body,
});

export default app;
