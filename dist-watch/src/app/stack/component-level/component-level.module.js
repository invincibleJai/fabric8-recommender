var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLevelComponent } from './component-level.component';
import { EllipsisDirective } from '../utils/ellipsis.directive';
// import {SentimentModule} from '../utils/sentiment/sentiment.module';
import { TableFilter } from '../utils/table-filter.pipe';
// import {TableOrderByPipe} from '../utils/table-orderby.pipe';
var ComponentLevelModule = (function () {
    function ComponentLevelModule() {
    }
    return ComponentLevelModule;
}());
ComponentLevelModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            ComponentLevelComponent,
            EllipsisDirective,
            TableFilter
        ],
        exports: [
            ComponentLevelComponent
        ]
    })
], ComponentLevelModule);
export { ComponentLevelModule };
//# sourceMappingURL=component-level.module.js.map