"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let greeting = "Welcome";
const object = {
    greeting: "How are you !",
    function() {
        const greeting = "How are you !";
        const arrowfunction = () => {
            console.log(this.greeting);
        };
        arrowfunction();
    },
};
object.function();
