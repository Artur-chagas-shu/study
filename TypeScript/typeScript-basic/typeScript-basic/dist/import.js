"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
let xwing = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    spped: 50,
    weapons: 4
};
_.camelCase(xwing.pilot);
console.log(xwing);
