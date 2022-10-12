"use strict";
exports.__esModule = true;
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department($departmentId, $departmentName) {
        this.departmentId = $departmentId;
        this.departmentName = $departmentName;
    }
    Object.defineProperty(Department.prototype, "$departmentId", {
        /**
         * Getter $departmentId
         * @return {number}
         */
        get: function () {
            return this.departmentId;
        },
        /**
         * Setter $departmentId
         * @param {number} value
         */
        set: function (value) {
            this.departmentId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "$departmentName", {
        /**
         * Getter $departmentName
         * @return {string}
         */
        get: function () {
            return this.departmentName;
        },
        /**
         * Setter $departmentName
         * @param {string} value
         */
        set: function (value) {
            this.departmentName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Department;
}());
exports.Department = Department;
