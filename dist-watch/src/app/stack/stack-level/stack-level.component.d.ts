import { EventEmitter } from '@angular/core';
import { UserStackInfoModel } from '../models/stack-report.model';
export declare class StackLevelComponent {
    userStack: UserStackInfoModel;
    outliers: any;
    changeFilter: EventEmitter<any>;
    licenseInfo: any;
    securityInfo: any;
    constructor();
    ngOnChanges(): void;
    handleFilter(filterBy: any): void;
    private handleStatistics(outliers);
    private sortChartColumnData(array);
    private handleSecurityInformation(tab);
    private handleLicenseInformation(tab);
}
