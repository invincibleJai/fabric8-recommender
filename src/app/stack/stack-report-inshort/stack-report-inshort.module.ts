import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TabsModule} from 'ng2-bootstrap';
import {StackReportInShortComponent} from './stack-report-inshort.component';

@NgModule({
    imports: [
        CommonModule,
        TabsModule.forRoot()
    ],
    declarations: [StackReportInShortComponent],
    exports: [StackReportInShortComponent]
})

export class StackReportInShortModule {}
