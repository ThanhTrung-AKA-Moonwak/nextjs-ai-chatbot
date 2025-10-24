(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__0e5a8a4d._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:events [external] (node:events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}}),
"[project]/instrumentation.ts [instrumentation] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$otel$40$1$2e$12$2e$0_$40$opentelemetry$2b$api$2d$logs$40$0$2e$200$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$opentelemetry$2b$r_576elojv652cqaawgguoqsp23a$2f$node_modules$2f40$vercel$2f$otel$2f$dist$2f$edge$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@vercel+otel@1.12.0_@opentelemetry+api-logs@0.200.0_@opentelemetry+api@1.9.0_@opentelemetry+r_576elojv652cqaawgguoqsp23a/node_modules/@vercel/otel/dist/edge/index.js [instrumentation] (ecmascript)");
;
function register() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$vercel$2b$otel$40$1$2e$12$2e$0_$40$opentelemetry$2b$api$2d$logs$40$0$2e$200$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$opentelemetry$2b$r_576elojv652cqaawgguoqsp23a$2f$node_modules$2f40$vercel$2f$otel$2f$dist$2f$edge$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerOTel"])({
        serviceName: "ai-chatbot"
    });
}
}}),
"[project]/edge-wrapper.js { MODULE => \"[project]/instrumentation.ts [instrumentation] (ecmascript)\" } [instrumentation] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_context__.i("[project]/instrumentation.ts [instrumentation] (ecmascript)"));
modProm.catch(()=>{});
self._ENTRIES["middleware_instrumentation"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0e5a8a4d._.js.map