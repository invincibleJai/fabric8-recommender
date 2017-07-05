import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'preview',
    templateUrl: './preview.component.html',
    styleUrls: ['preview.component.scss']
})

export class PreviewComponent {
    @Input() previewData;

    public gaugeChart: any = {};

    ngOnChanges(): void {
        if (this.previewData) {
            console.log('Preview');
            console.log(this.previewData);

            this.gaugeChart = {
                data: {
                    columns: [
                        ['data', 91.4]
                    ],
                    type: 'gauge'
                },
                options: {
                    color: {
                        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
                        threshold: {
                            values: [30, 60, 90, 100]
                        }
                    },
                    size: {
                        height: 180
                    }
                }
            };

        }
    }
}
