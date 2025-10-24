(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__c19a4267._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/lib/db/utils.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateDummyPassword": (()=>generateDummyPassword),
    "generateHashedPassword": (()=>generateHashedPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$7_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+provider-utils@3.0.7_zod@3.25.76/node_modules/@ai-sdk/provider-utils/dist/index.mjs [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcrypt$2d$ts$40$5$2e$0$2e$3$2f$node_modules$2f$bcrypt$2d$ts$2f$dist$2f$browser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/bcrypt-ts@5.0.3/node_modules/bcrypt-ts/dist/browser.mjs [middleware-edge] (ecmascript)");
;
;
function generateHashedPassword(password) {
    const salt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcrypt$2d$ts$40$5$2e$0$2e$3$2f$node_modules$2f$bcrypt$2d$ts$2f$dist$2f$browser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["genSaltSync"])(10);
    const hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bcrypt$2d$ts$40$5$2e$0$2e$3$2f$node_modules$2f$bcrypt$2d$ts$2f$dist$2f$browser$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["hashSync"])(password, salt);
    return hash;
}
function generateDummyPassword() {
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$3$2e$0$2e$7_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateId"])();
    const hashedPassword = generateHashedPassword(password);
    return hashedPassword;
}
}}),
"[project]/lib/constants.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DUMMY_PASSWORD": (()=>DUMMY_PASSWORD),
    "guestRegex": (()=>guestRegex),
    "isDevelopmentEnvironment": (()=>isDevelopmentEnvironment),
    "isProductionEnvironment": (()=>isProductionEnvironment),
    "isTestEnvironment": (()=>isTestEnvironment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/utils.ts [middleware-edge] (ecmascript)");
;
const isProductionEnvironment = ("TURBOPACK compile-time value", "development") === "production";
const isDevelopmentEnvironment = ("TURBOPACK compile-time value", "development") === "development";
const isTestEnvironment = Boolean(process.env.PLAYWRIGHT_TEST_BASE_URL || process.env.PLAYWRIGHT || process.env.CI_PLAYWRIGHT);
const guestRegex = /^guest-\d+$/;
const DUMMY_PASSWORD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["generateDummyPassword"])();
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$_lf4dsd2wn3kcsbic2smqoubypy$2f$node_modules$2f$next$2d$auth$2f$jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51._lf4dsd2wn3kcsbic2smqoubypy/node_modules/next-auth/jwt.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@auth+core@0.37.2/node_modules/@auth/core/jwt.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [middleware-edge] (ecmascript)");
;
;
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    /*
   * Playwright starts the dev server and requires a 200 status to
   * begin the tests, so this ensures that the tests can start
   */ if (pathname.startsWith("/ping")) {
        return new Response("pong", {
            status: 200
        });
    }
    if (pathname.startsWith("/api/auth")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2$2f$node_modules$2f40$auth$2f$core$2f$jwt$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getToken"])({
        req: request,
        secret: process.env.AUTH_SECRET,
        secureCookie: !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"]
    });
    if (!token) {
        const redirectUrl = encodeURIComponent(request.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/api/auth/guest?redirectUrl=${redirectUrl}`, request.url));
    }
    const isGuest = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["guestRegex"].test(token?.email ?? "");
    if (token && !isGuest && [
        "/login",
        "/register"
    ].includes(pathname)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.url));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/",
        "/chat/:id",
        "/api/:path*",
        "/login",
        "/register",
        /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */ "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__c19a4267._.js.map