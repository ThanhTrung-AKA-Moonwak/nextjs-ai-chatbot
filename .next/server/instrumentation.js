const CHUNK_PUBLIC_PATH = "server/instrumentation.js";
const runtime = require("./chunks/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/node_modules__pnpm_f31a57f0._.js");
runtime.loadChunk("server/chunks/[root-of-the-server]__afca2822._.js");
runtime.getOrInstantiateRuntimeModule("[project]/instrumentation.ts [instrumentation-edge] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/instrumentation.ts [instrumentation-edge] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
