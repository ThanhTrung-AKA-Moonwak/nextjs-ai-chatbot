module.exports = {

"[project]/.next-internal/server/app/api/fingpt/v1/chat/completions/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-experimental.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-experimental.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-experimental.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-experimental.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-experimental.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-experimental.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-experimental.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-experimental.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/api/fingpt/v1/chat/completions/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/server.js [app-route] (ecmascript)");
;
const FINGPT_BASE_URL = process.env.FINGPT_BASE_URL || "http://localhost:8000";
async function POST(req) {
    try {
        const body = await req.json();
        console.log("📡 Chat completions request:", body);
        const { ticker, end_date, past_weeks = 4, include_financials = true, temperature = 0.2, stream = true } = body;
        // Validate required fields
        if (!ticker) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing required field: ticker"
            }, {
                status: 400
            });
        }
        // Prepare request for FinGPT service
        const fingptRequest = {
            ticker: ticker.toUpperCase(),
            end_date: end_date || new Date().toISOString().split("T")[0],
            past_weeks,
            include_financials,
            temperature,
            stream
        };
        console.log("📤 Forwarding to FinGPT:", fingptRequest);
        const response = await fetch(`${FINGPT_BASE_URL}/v1/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fingptRequest)
        });
        console.log("📥 FinGPT response status:", response.status);
        if (!response.ok) {
            const errorText = await response.text();
            console.error("❌ FinGPT service error:", errorText);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "FinGPT service error",
                details: errorText
            }, {
                status: response.status
            });
        }
        // Handle streaming response
        if (stream) {
            console.log("📺 Streaming response enabled");
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](response.body, {
                headers: {
                    "Content-Type": "text/event-stream",
                    "Cache-Control": "no-cache",
                    "Connection": "keep-alive"
                }
            });
        }
        // Handle non-streaming response
        const data = await response.json();
        console.log("✅ Non-streaming response received");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (error) {
        console.error("❌ Chat completions error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to connect to FinGPT service",
            details: String(error)
        }, {
            status: 503
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__95e99776._.js.map