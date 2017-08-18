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
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthenticationService } from 'ngx-login-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
var FeedbackService = (function () {
    function FeedbackService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        if (this.auth.getToken() !== null) {
            this.headers.set('Authorization', 'Bearer ' + this.auth.getToken());
        }
    }
    FeedbackService.prototype.submit = function (feedback) {
        var url = 'https://recommender.api.openshift.io/api/v1/user-feedback';
        var options = new RequestOptions({
            headers: this.headers
        });
        return this.http
            .post(url, JSON.stringify(feedback), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    FeedbackService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    FeedbackService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return FeedbackService;
}());
FeedbackService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        AuthenticationService])
], FeedbackService);
export { FeedbackService };
//# sourceMappingURL=feedback.service.js.map