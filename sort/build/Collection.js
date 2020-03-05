"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection = /** @class */ (function () {
    function Collection(data) {
        this.data = data;
    }
    Object.defineProperty(Collection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return Collection;
}());
exports.Collection = Collection;
