var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { StackAnalysesService } from '../stack-analyses.service';
import { getStackReportModel } from '../utils/stack-api-utils';
var StackDetailsComponent = (function () {
    function StackDetailsComponent(stackAnalysisService) {
        this.stackAnalysisService = stackAnalysisService;
        this.error = {};
        this.componentLevelInformation = {};
        this.userComponentInformation = [];
        this.companionLevelRecommendation = {};
        this.dataLoaded = false;
        this.recommendationsArray = [];
        this.stackLevelOutliers = {};
        this.companionLevel = {};
        this.componentLevel = {};
        this.componentFilterBy = '';
        this.feedbackConfig = {};
        this.tabs = [];
        this.userStackInformationArray = [];
    }
    StackDetailsComponent.prototype.tabSelection = function (tab) {
        tab['active'] = true;
        var currentIndex = tab['index'];
        var recommendations = this.recommendationsArray[currentIndex];
        debugger;
        this.stackLevelOutliers = {
            'usage': recommendations.usage_outliers
        };
        this.componentLevelInformation = {
            recommendations: recommendations,
            dependencies: tab.content.user_stack_info.dependencies,
            manifestinfo: tab.content.manifest_name
        };
        this.companionLevelRecommendation = {
            dependencies: recommendations.companion
        };
    };
    StackDetailsComponent.prototype.ngOnChanges = function () {
        this.resetFields();
        this.stackId = this.stack && this.stack.split('/')[this.stack.split('/').length - 1];
        // this.init(this.stack);
        this.initFeedback();
        this.componentLevel = {
            header: 'Analysis of your application stack',
            subHeader: 'Recommended alternative dependencies'
        };
        this.companionLevel = {
            header: 'Possible companion dependencies',
            subHeader: 'Consider theses additional dependencies'
        };
        this.modalStackModule.open();
        this.displayName = this.displayName || 'Stack Reports';
    };
    StackDetailsComponent.prototype.handleChangeFilter = function (filterBy) {
        this.componentFilterBy = filterBy.filterBy;
    };
    StackDetailsComponent.prototype.handleError = function (error) {
        this.error = error;
    };
    StackDetailsComponent.prototype.initFeedback = function () {
        this.feedbackConfig = {
            name: 'Feedback',
            stackId: this.stackId,
            title: 'Tell us your experience',
            poll: [{
                    question: 'How useful do you find this?',
                    type: 'rating'
                }, {
                    question: 'How likely do you recommend this to others?',
                    type: 'rating'
                }, {
                    question: 'Tell us more',
                    type: 'text'
                }]
        };
    };
    StackDetailsComponent.prototype.resetFields = function () {
        this.tabs = [];
        this.recommendationsArray = [];
        // this.dataLoaded = false;
    };
    StackDetailsComponent.prototype.init = function (url) {
        var _this = this;
        this.stackAnalysisService
            .getStackAnalyses(url)
            .subscribe(function (data) {
            _this.error = null;
            if (data && (!data.hasOwnProperty('error') && Object.keys(data).length !== 0)) {
                var resultInformation = getStackReportModel(data);
                resultInformation.subscribe(function (response) {
                    console.log(response);
                    debugger;
                    var result = response.result;
                    _this.totalManifests = result.length;
                    _this.userStackInformationArray = result.map(function (r) { return r.user_stack_info; });
                    result.forEach(function (r, index) {
                        console.log('HEre');
                        _this.tabs.push({
                            title: r.manifest_file_path,
                            content: r,
                            index: index
                        });
                        _this.recommendationsArray.push(r.recommendations); //Change if the API key changes
                    });
                    _this.dataLoaded = true;
                    _this.tabSelection(_this.tabs[0]);
                });
            }
            else {
                _this.handleError({
                    message: data.error,
                    code: data.statusCode,
                    title: 'Please, wait a while more'
                });
            }
        }, function (error) {
            // this.handleError(error);
            console.log(error);
            var title = '';
            if (error.status >= 500) {
                title = 'Something unexpected happened';
            }
            else if (error.status === 404) {
                title = 'You are looking for something which isn\'t there';
            }
            else if (error.status === 401) {
                title = 'You don\'t seem to have sufficient privileges to access this';
            }
            _this.handleError({
                message: error.statusText,
                code: error.status,
                title: title
            });
            console.log(_this.error);
        });
    };
    return StackDetailsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], StackDetailsComponent.prototype, "stack", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StackDetailsComponent.prototype, "displayName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StackDetailsComponent.prototype, "repoInfo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StackDetailsComponent.prototype, "buildNumber", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StackDetailsComponent.prototype, "appName", void 0);
__decorate([
    ViewChild('stackModule'),
    __metadata("design:type", Object)
], StackDetailsComponent.prototype, "modalStackModule", void 0);
StackDetailsComponent = __decorate([
    Component({
        selector: 'stack-details',
        template: require('./stack-details.component.html'),
        providers: [StackAnalysesService],
        encapsulation: ViewEncapsulation.None,
        styles: [require('./stack-details.component.css').toString()],
    }),
    __metadata("design:paramtypes", [StackAnalysesService])
], StackDetailsComponent);
export { StackDetailsComponent };
//# sourceMappingURL=stack-details.component.js.map