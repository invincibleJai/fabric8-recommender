import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'recommendations',
    templateUrl: './recommendations.component.html',
    styleUrls: ['recommendations.component.scss']
})

export class RecommendationsComponent {
    @Input() recommendations;
    @Output() onRecommendationSelect: EventEmitter<any> = new EventEmitter<any>();

    ngOnChanges(): void {
        if (this.recommendations) {

        }
    }

    handleTileClick(recommendation: any): void {
        this.onRecommendationSelect.emit(recommendation);
    }
}
