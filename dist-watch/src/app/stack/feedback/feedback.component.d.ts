import { OnChanges } from '@angular/core';
import { FeedbackService } from './feedback.service';
export declare class FeedbackComponent implements OnChanges {
    private service;
    config: any;
    canShowModal: boolean;
    hasEnteredFeedback: boolean;
    result: any;
    mouseover: Array<any>;
    responseClass: string;
    responseMessage: string;
    private feedbackItems;
    constructor(service: FeedbackService);
    ngOnChanges(): void;
    getFeedActive(index: number, value: number): boolean;
    getFeedInActive(index: number, value: number): boolean;
    openFeedbackModal(): void;
    closeFeedbackModal(): void;
    clickedRatings(index: number, value: number): void;
    submitFeedback(): void;
    private handleMessage(type);
}
