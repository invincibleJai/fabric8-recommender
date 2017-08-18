var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe, Injectable } from '@angular/core';
var TableFilter = (function () {
    function TableFilter() {
    }
    TableFilter.prototype.transform = function (items, field) {
        if (!items) {
            return [];
        }
        if (!field) {
            return items;
        }
        if (field === 'reset') {
            return items;
        }
        return items.filter(function (item) {
            return item[field] === true;
        });
    };
    return TableFilter;
}());
TableFilter = __decorate([
    Pipe({
        name: 'filter'
    })
    /*
     *  A generic filter that gives you the filtered output
     *  on passing the key and value to be filtered upon
     *  Takes a key - fielname, and a value - fieldValue
     *  Returns the filtered Array of objects or anything
     *
     *  Name: 'filter'
     *  Usage:
     *
     *  Use as a pipe,
     *  In a loop:
     *  *ngFor="let something of (manythings | filter : fieldNameAsVariable {or 'simply name'} : fieldValueAsVariable {or 'simply value'})"
     */
    ,
    Injectable()
], TableFilter);
export { TableFilter };
//# sourceMappingURL=table-filter.pipe.js.map