// index.js

// Placeholder for bot name replacement
const ORIGINAL_BOT_NAME = "BAHIRAVA";
const UPDATED_BOT_NAME = "MTI CRASHER 2026";

// Sample messages and captions
const messages = {
    greeting: `Hello from ${UPDATED_BOT_NAME}!`,
    farewell: `Goodbye from ${UPDATED_BOT_NAME}!`,
};

// Replace occurrences in the code
function replaceBotName(text) {
    return text.replace(/BAHIRAVA/g, UPDATED_BOT_NAME);
}

console.log(replaceBotName(messages.greeting));
console.log(replaceBotName(messages.farewell));

// The rest of your index.js file code...