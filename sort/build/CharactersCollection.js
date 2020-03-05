"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (idx) {
        return this.data[idx].toLowerCase() > this.data[idx + 1].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (idx) {
        var arr = this.data.split('');
        var temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
        this.data = arr.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
