var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var TriggerFilterComponent = (function () {
    function TriggerFilterComponent() {
        this.filter = new EventEmitter();
    }
    TriggerFilterComponent.prototype.ngOnChanges = function () {
    };
    TriggerFilterComponent.prototype.handleClick = function () {
        this.filter.emit({
            filterBy: this.filterBy
        });
    };
    return TriggerFilterComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], TriggerFilterComponent.prototype, "message", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TriggerFilterComponent.prototype, "filterBy", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], TriggerFilterComponent.prototype, "filter", void 0);
TriggerFilterComponent = __decorate([
    Component({
        selector: 'trigger-filter',
        template: require('./trigger-filter.component.html'),
        styles: [require('./trigger-filter.component.css').toString()],
    })
], TriggerFilterComponent);
export { TriggerFilterComponent };
//# sourceMappingURL=trigger-filter.component.js.map