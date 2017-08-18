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
import { StackReportModel } from './models/stack-report.model';
var StackAnalysesService = (function () {
    function StackAnalysesService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.stackAnalysesUrl = '';
        this.cvssScale = {
            low: {
                start: 0.0,
                end: 3.9,
                iconClass: 'pficon pficon-warning-triangle-o',
                displayClass: 'progress-bar-warning'
            },
            medium: {
                start: 4.0,
                end: 6.9,
                iconClass: 'pficon pficon-warning-triangle-o',
                displayClass: 'progress-bar-warning'
            },
            high: {
                start: 7.0,
                end: 10.0,
                iconClass: 'pficon pficon-warning-triangle-o warning-red-color',
                displayClass: 'progress-bar-danger'
            }
        };
        if (this.auth.getToken() !== null) {
            this.headers.set('Authorization', 'Bearer ' + this.auth.getToken());
        }
    }
    StackAnalysesService.prototype.getStackAnalyses = function (url) {
        var options = new RequestOptions({ headers: this.headers });
        var stackReport = null;
        // url = 'https://gist.githubusercontent.com/jyasveer/36d3197964899eef0f1fcf5a18063b76/raw/7792af364d3d35dc72e766c907db2023e4247e60/stack-analyses-v2-response.json';
        return this.http.get(url, options)
            .map(this.extractData)
            .map(function (data) {
            stackReport = data;
            console.log(typeof stackReport);
            console.log(stackReport instanceof StackReportModel);
            return stackReport;
        })
            .catch(this.handleError);
    };
    StackAnalysesService.prototype.getCvssObj = function (score) {
        if (score) {
            var iconClass = this.cvssScale.medium.iconClass;
            var displayClass = this.cvssScale.medium.displayClass;
            if (score >= this.cvssScale.high.start) {
                iconClass = this.cvssScale.high.iconClass;
                displayClass = this.cvssScale.high.displayClass;
            }
            return {
                iconClass: iconClass,
                displayClass: displayClass,
                value: score,
                percentScore: (score / 10 * 100)
            };
        }
    };
    StackAnalysesService.prototype.extractData = function (res) {
        var body = res.json() || {};
        body['statusCode'] = res.status;
        body['statusText'] = res.statusText;
        console.log(body);
        return body;
    };
    StackAnalysesService.prototype.handleError = function (error) {
        var body = {};
        if (error instanceof Response) {
            if (error && error.status && error.statusText) {
                body = {
                    status: error.status,
                    statusText: error.statusText
                };
            }
        }
        else {
            body = {
                statusText: error.message ? error.message : error.toString()
            };
        }
        return Observable.throw(body);
    };
    return StackAnalysesService;
}());
StackAnalysesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http,
        AuthenticationService])
], StackAnalysesService);
export { StackAnalysesService };
//# sourceMappingURL=stack-analyses.service.js.map