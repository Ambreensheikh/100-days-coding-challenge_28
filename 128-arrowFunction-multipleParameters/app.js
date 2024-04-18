"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// arrow function returns multiple parameters with rest parameters
//rest parameter is dnoted by ...
const multiplyParameters = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(2, 3, 4, 5));
