"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var xwing = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    spped: 50,
    weapons: 4
};
console.log(_.camelCase(xwing.pilot));
