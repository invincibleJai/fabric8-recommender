import {Component, OnInit, OnChanges, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'stack-report-inshort',
    templateUrl: './stack-report-inshort.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./stack-report-inshort.component.scss'],
})

export class StackReportInShortComponent implements OnInit, OnChanges {
    public tabs: Array<any> = [];
    constructor() {

    }
    ngOnInit(): void {
        this.ngOnChanges();
    }
    ngOnChanges(): void {
        this.tabs.push({
            title: 'File 1',
            content: 'Sample',
            index: 0
        });
    }
}
