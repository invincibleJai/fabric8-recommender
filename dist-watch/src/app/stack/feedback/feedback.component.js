var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FeedbackService } from './feedback.service';
var FeedbackComponent = (function () {
    function FeedbackComponent(service) {
        this.service = service;
        this.canShowModal = false;
        this.hasEnteredFeedback = false;
        this.result = {};
        this.mouseover = [];
        this.feedbackItems = {};
    }
    FeedbackComponent.prototype.ngOnChanges = function () {
        console.log(this.config);
        this.feedbackItems = this.config.poll;
        for (var i in this.feedbackItems) {
            if (this.feedbackItems.hasOwnProperty(i)) {
                var item = this.feedbackItems[i];
                this.result[i] = item.type === 'rating' ? 0 : '';
                this.mouseover[i] = 0;
            }
        }
    };
    FeedbackComponent.prototype.getFeedActive = function (index, value) {
        return this.result[index] >= value || this.mouseover[index] >= value;
    };
    FeedbackComponent.prototype.getFeedInActive = function (index, value) {
        var max = Math.max(this.result[index], this.mouseover[index]);
        return max < value || this.result[index] === undefined;
    };
    FeedbackComponent.prototype.openFeedbackModal = function () {
        this.canShowModal = true;
    };
    FeedbackComponent.prototype.closeFeedbackModal = function () {
        this.canShowModal = false;
        this.result = {};
        this.mouseover = [];
    };
    FeedbackComponent.prototype.clickedRatings = function (index, value) {
        this.result[index] = value;
    };
    FeedbackComponent.prototype.submitFeedback = function () {
        var _this = this;
        var output = {};
        var feedback = [];
        output['request_id'] = this.config.stackId;
        for (var index in this.result) {
            if (this.result.hasOwnProperty(index)) {
                feedback.push({
                    question: this.feedbackItems[index].question,
                    answer: this.result[index]
                });
            }
        }
        output['feedback'] = feedback;
        console.log(output);
        this.service.submit(output).subscribe(function (response) {
            _this.handleMessage('success');
        }, function (error) {
            _this.handleMessage('error');
        });
    };
    FeedbackComponent.prototype.handleMessage = function (type) {
        var _this = this;
        this.hasEnteredFeedback = true;
        switch (type.toLowerCase()) {
            case 'success':
                this.responseClass = 'success-feedback';
                this.responseMessage = 'Thanks for your valuable feedback!';
                break;
            case 'error':
                this.responseClass = 'error-feedback';
                this.responseMessage = 'Something unexpected happened :(';
                break;
            default:
                break;
        }
        setTimeout(function () {
            _this.closeFeedbackModal();
        }, 4000);
    };
    return FeedbackComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], FeedbackComponent.prototype, "config", void 0);
FeedbackComponent = __decorate([
    Component({
        selector: 'feedback',
        template: require('./feedback.component.html'),
        providers: [FeedbackService],
        styles: [require('feedback.component.css').toString()]
    }),
    __metadata("design:paramtypes", [FeedbackService])
], FeedbackComponent);
export { FeedbackComponent };
//# sourceMappingURL=feedback.component.js.map