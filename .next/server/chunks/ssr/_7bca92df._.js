module.exports = {

"[project]/lib/ai/providers.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "myProvider": (()=>myProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$2$2e$0$2e$52_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+openai@2.0.52_zod@3.25.76/node_modules/@ai-sdk/openai/dist/index.mjs [app-rsc] (ecmascript)");
;
const gatewayOpenAI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$openai$40$2$2e$0$2e$52_zod$40$3$2e$25$2e$76$2f$node_modules$2f40$ai$2d$sdk$2f$openai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpenAI"])({
    apiKey: process.env.AI_GATEWAY_API_KEY,
    baseURL: process.env.AI_GATEWAY_URL
});
const myProvider = {
    languageModel (name) {
        const map = {
            "title-model": gatewayOpenAI("gpt-4o-mini"),
            "chat-model": gatewayOpenAI("gpt-4o")
        };
        return map[name] ?? gatewayOpenAI(name);
    }
};
}}),
"[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402e9e0b9aac405bba42ae9b7b7d8d7ee0f695254d":"updateChatVisibility","4086e9bffb9826bf267391184aeab09f4aedfb5f1b":"generateTitleFromUserMessage","40c35b258ba4060854e3cf51bb20eb7255e0757f78":"saveChatModelAsCookie","40da48a361eb455e41eabd1473efb11d7d387a18f1":"deleteTrailingMessages"},"",""] */ __turbopack_context__.s({
    "deleteTrailingMessages": (()=>deleteTrailingMessages),
    "generateTitleFromUserMessage": (()=>generateTitleFromUserMessage),
    "saveChatModelAsCookie": (()=>saveChatModelAsCookie),
    "updateChatVisibility": (()=>updateChatVisibility)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$5$2e$0$2e$26_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/ai@5.0.26_zod@3.25.76/node_modules/ai/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/providers.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function saveChatModelAsCookie(model) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set("chat-model", model);
}
async function generateTitleFromUserMessage({ message }) {
    const { text: title } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$5$2e$0$2e$26_zod$40$3$2e$25$2e$76$2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generateText"])({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$providers$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["myProvider"].languageModel("title-model"),
        system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`,
        prompt: JSON.stringify(message)
    });
    return title;
}
async function deleteTrailingMessages({ id }) {
    const [message] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessageById"])({
        id
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteMessagesByChatIdAfterTimestamp"])({
        chatId: message.chatId,
        timestamp: message.createdAt
    });
}
async function updateChatVisibility({ chatId, visibility }) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateChatVisiblityById"])({
        chatId,
        visibility
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveChatModelAsCookie,
    generateTitleFromUserMessage,
    deleteTrailingMessages,
    updateChatVisibility
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveChatModelAsCookie, "40c35b258ba4060854e3cf51bb20eb7255e0757f78", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateTitleFromUserMessage, "4086e9bffb9826bf267391184aeab09f4aedfb5f1b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTrailingMessages, "40da48a361eb455e41eabd1473efb11d7d387a18f1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateChatVisibility, "402e9e0b9aac405bba42ae9b7b7d8d7ee0f695254d", null);
}}),
"[project]/artifacts/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40d50d88dbbc74e29ad8d17f3ef65066dc6bb741c1":"getSuggestions"},"",""] */ __turbopack_context__.s({
    "getSuggestions": (()=>getSuggestions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getSuggestions({ documentId }) {
    const suggestions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSuggestionsByDocumentId"])({
        documentId
    });
    return suggestions ?? [];
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getSuggestions
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSuggestions, "40d50d88dbbc74e29ad8d17f3ef65066dc6bb741c1", null);
}}),
"[project]/.next-internal/server/app/(chat)/chat/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/artifacts/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/actions.ts [app-rsc] (ecmascript)");
;
;
;
;
}}),
"[project]/.next-internal/server/app/(chat)/chat/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/artifacts/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$chat$292f$chat$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(chat)/chat/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/artifacts/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(chat)/chat/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/artifacts/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "402e9e0b9aac405bba42ae9b7b7d8d7ee0f695254d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateChatVisibility"]),
    "40c35b258ba4060854e3cf51bb20eb7255e0757f78": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveChatModelAsCookie"]),
    "40d50d88dbbc74e29ad8d17f3ef65066dc6bb741c1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSuggestions"]),
    "40da48a361eb455e41eabd1473efb11d7d387a18f1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTrailingMessages"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/artifacts/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$chat$292f$chat$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(chat)/chat/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/artifacts/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(chat)/chat/[id]/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/artifacts/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "402e9e0b9aac405bba42ae9b7b7d8d7ee0f695254d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$chat$292f$chat$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["402e9e0b9aac405bba42ae9b7b7d8d7ee0f695254d"]),
    "40c35b258ba4060854e3cf51bb20eb7255e0757f78": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$chat$292f$chat$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40c35b258ba4060854e3cf51bb20eb7255e0757f78"]),
    "40d50d88dbbc74e29ad8d17f3ef65066dc6bb741c1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$chat$292f$chat$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40d50d88dbbc74e29ad8d17f3ef65066dc6bb741c1"]),
    "40da48a361eb455e41eabd1473efb11d7d387a18f1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$chat$292f$chat$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["40da48a361eb455e41eabd1473efb11d7d387a18f1"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$chat$292f$chat$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(chat)/chat/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/artifacts/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$chat$292f$chat$2f5b$id$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f28$chat$292f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$artifacts$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(chat)/chat/[id]/page/actions.js { ACTIONS_MODULE0 => "[project]/app/(chat)/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/artifacts/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/(chat)/twitter-image.png.mjs { IMAGE => \"[project]/app/(chat)/twitter-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(chat)/twitter-image.png.mjs { IMAGE => \"[project]/app/(chat)/twitter-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/(chat)/opengraph-image.png.mjs { IMAGE => \"[project]/app/(chat)/opengraph-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(chat)/opengraph-image.png.mjs { IMAGE => \"[project]/app/(chat)/opengraph-image.png (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/(chat)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(chat)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/components/chat.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Chat": (()=>Chat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Chat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Chat() from the server but Chat is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/chat.tsx <module evaluation>", "Chat");
}}),
"[project]/components/chat.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Chat": (()=>Chat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Chat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Chat() from the server but Chat is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/chat.tsx", "Chat");
}}),
"[project]/components/chat.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/chat.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/chat.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/components/data-stream-handler.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataStreamHandler": (()=>DataStreamHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DataStreamHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DataStreamHandler() from the server but DataStreamHandler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/data-stream-handler.tsx <module evaluation>", "DataStreamHandler");
}}),
"[project]/components/data-stream-handler.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataStreamHandler": (()=>DataStreamHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DataStreamHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DataStreamHandler() from the server but DataStreamHandler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/data-stream-handler.tsx", "DataStreamHandler");
}}),
"[project]/components/data-stream-handler.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$stream$2d$handler$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/data-stream-handler.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$stream$2d$handler$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/components/data-stream-handler.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$stream$2d$handler$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/lib/ai/models.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DEFAULT_CHAT_MODEL": (()=>DEFAULT_CHAT_MODEL),
    "chatModels": (()=>chatModels)
});
const DEFAULT_CHAT_MODEL = "chat-model";
const chatModels = [
    {
        id: "chat-model",
        name: "Grok Vision",
        description: "Advanced multimodal model with vision and text capabilities"
    },
    {
        id: "chat-model-reasoning",
        name: "Grok Reasoning",
        description: "Uses advanced chain-of-thought reasoning for complex problems"
    }
];
}}),
"[project]/app/(chat)/chat/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0-canary.31_@opentelemetry+api@1.9.0_@playwright+test@1.51.0_react-dom@19.0.0-rc-45_mlqzopqn56t6gad76627omqvii/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(auth)/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/chat.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$stream$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data-stream-handler.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai/models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function Page(props) {
    const params = await props.params;
    const { id } = params;
    const chat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChatById"])({
        id
    });
    if (!chat) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$auth$292f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/api/auth/guest");
    }
    if (chat.visibility === "private") {
        if (!session.user) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        }
        if (session.user.id !== chat.userId) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        }
    }
    const messagesFromDb = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMessagesByChatId"])({
        id
    });
    const uiMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertToUIMessages"])(messagesFromDb);
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const chatModelFromCookie = cookieStore.get("chat-model");
    if (!chatModelFromCookie) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chat"], {
                    autoResume: true,
                    id: chat.id,
                    initialChatModel: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2f$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_CHAT_MODEL"],
                    initialLastContext: chat.lastContext ?? undefined,
                    initialMessages: uiMessages,
                    initialVisibilityType: chat.visibility,
                    isReadonly: session?.user?.id !== chat.userId
                }, void 0, false, {
                    fileName: "[project]/app/(chat)/chat/[id]/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$stream$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DataStreamHandler"], {}, void 0, false, {
                    fileName: "[project]/app/(chat)/chat/[id]/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$chat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chat"], {
                autoResume: true,
                id: chat.id,
                initialChatModel: chatModelFromCookie.value,
                initialLastContext: chat.lastContext ?? undefined,
                initialMessages: uiMessages,
                initialVisibilityType: chat.visibility,
                isReadonly: session?.user?.id !== chat.userId
            }, void 0, false, {
                fileName: "[project]/app/(chat)/chat/[id]/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0$2d$canary$2e$31_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$playwright$2b$test$40$1$2e$51$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$45_mlqzopqn56t6gad76627omqvii$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2d$stream$2d$handler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DataStreamHandler"], {}, void 0, false, {
                fileName: "[project]/app/(chat)/chat/[id]/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(chat)/chat/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(chat)/chat/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_7bca92df._.js.map