var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MESSAGE_MAP } from './constants-mapper';
var GlobalConstants = (function () {
    function GlobalConstants() {
    }
    /**
     * getMessages - gets the componentKey as a string and returns the Observable
     *
     * The component here is the key that enables to load the desired component.
     * For eg.) To load the messages for StackDetailsComponent,
     * call getMessages('stackDetails')
     *
     * The key mapping is found in constants-mapper.ts
     *
     * In case no match is found, it returns a null.
     */
    GlobalConstants.prototype.getMessages = function (component) {
        return Observable.create(function (observer) {
            if (MESSAGE_MAP.hasOwnProperty(component)) {
                observer.next(MESSAGE_MAP[component]);
            }
            else {
                observer.next(null);
            }
            observer.complete();
        });
    };
    return GlobalConstants;
}());
GlobalConstants = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], GlobalConstants);
export { GlobalConstants };
//# sourceMappingURL=constants.service.js.map