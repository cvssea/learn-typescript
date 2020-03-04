"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbers = new NumbersCollection_1.NumbersCollection([32, 325, 26, 2]);
var sorter = new Sorter_1.Sorter(numbers);
sorter.sort();
console.log(numbers);
