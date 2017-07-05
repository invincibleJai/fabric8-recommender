import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'preview',
    templateUrl: './preview.component.html',
    styleUrls: ['preview.component.scss']
})

export class PreviewComponent {
    @Input() previewData;

    ngOnChanges(): void {
        if (this.previewData) {
            console.log('Preview');
            console.log(this.previewData);
        }
    }
}
