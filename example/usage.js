"use strict";
exports.__esModule = true;
var moostorejs_1 = require("moostorejs");
var configuration_1 = require("moostorejs/configuration");
var __1 = require("..");
var Usage = /** @class */ (function () {
    function Usage() {
    }
    Usage.prototype.main = function () {
        var credentials = {
            username: ''
        };
        var baseURL = 'https://gofood.co.id';
        var configuration = new configuration_1["default"]({
            credentials: credentials,
            baseURL: baseURL
        });
        var moostore = new moostorejs_1["default"](configuration);
        var gofood = new __1["default"](moostore);
        gofood
            .product()
            .getFromURL('https://gofood.co.id/bandung/restaurant/soto-sate-ayam-pa-somad-karees-timur-6f98f851-e797-471a-bb72-31c6c85ef09d')
            .then(function (data) {
            console.log(data);
        })["catch"](function (err) {
            console.log(err);
        });
    };
    return Usage;
}());
exports["default"] = Usage;
new Usage().main();
