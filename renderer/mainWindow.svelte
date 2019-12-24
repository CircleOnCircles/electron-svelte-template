<script>
  let NODE_VERSION = process.versions.node;
  let ELECTRON_VERSION = process.versions.electron;

  const svelte = require("svelte/compiler");
  let SVELTE_VERSION = svelte.VERSION;
</script>

<h1>Hello World!</h1>
<!-- All of the Node.js APIs are available in this renderer process. -->
We are using Node.js
<strong>{NODE_VERSION}</strong>
, and Electron
<strong>{ELECTRON_VERSION}</strong>
, and svelte
<strong>{SVELTE_VERSION}</strong>
.
