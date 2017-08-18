var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modal';
import { TabsModule } from 'ng2-bootstrap';
import { GlobalConstants } from '../constants/constants.service';
import { StackDetailsComponent } from './stack-details.component';
/** New UX */
import { StackLevelModule } from '../stack-level/stack-level.module';
import { ComponentLevelModule } from '../component-level/component-level.module';
/** New UX */
var StackDetailsModule = (function () {
    function StackDetailsModule() {
    }
    return StackDetailsModule;
}());
StackDetailsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpModule,
            FormsModule,
            ModalModule,
            StackLevelModule,
            ComponentLevelModule,
            TabsModule.forRoot()
        ],
        declarations: [
            StackDetailsComponent
        ],
        exports: [
            StackDetailsComponent
        ],
        providers: [GlobalConstants],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __metadata("design:paramtypes", [])
], StackDetailsModule);
export { StackDetailsModule };
//# sourceMappingURL=stack-details.module.js.map