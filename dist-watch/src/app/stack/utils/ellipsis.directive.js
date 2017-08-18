var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener } from '@angular/core';
var EllipsisDirective = (function () {
    function EllipsisDirective(el) {
        this.el = el;
        this.element = el.nativeElement;
        this.element.classList.add('ellipsis');
    }
    EllipsisDirective.prototype.onMouseEnter = function () {
        this.element.style.whiteSpace = 'unset';
    };
    EllipsisDirective.prototype.onMouseLeave = function () {
        this.element.style.whiteSpace = 'nowrap';
    };
    return EllipsisDirective;
}());
__decorate([
    HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EllipsisDirective.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EllipsisDirective.prototype, "onMouseLeave", null);
EllipsisDirective = __decorate([
    Directive({
        selector: '[ellipsis]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], EllipsisDirective);
export { EllipsisDirective };
//# sourceMappingURL=ellipsis.directive.js.map