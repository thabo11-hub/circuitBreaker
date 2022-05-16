"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CircuitBreaker_1 = require("./CircuitBreaker");
const circuitBreaker = new CircuitBreaker_1.CircuitBreaker({
    method: "get",
    url: "http://localhost:3050",
});
setInterval(() => {
    circuitBreaker.exec().then(console.log).catch(console.error);
}, 1000);
//# sourceMappingURL=test.js.map