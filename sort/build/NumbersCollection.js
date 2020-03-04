"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (idx) {
        return this.data[idx] > this.data[idx + 1];
    };
    NumbersCollection.prototype.swap = function (idx) {
        var temp = this.data[idx];
        this.data[idx] = this.data[idx + 1];
        this.data[idx + 1] = temp;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
