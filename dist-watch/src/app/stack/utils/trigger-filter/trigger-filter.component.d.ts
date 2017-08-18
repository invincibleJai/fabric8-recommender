import { EventEmitter, OnChanges } from '@angular/core';
export declare class TriggerFilterComponent implements OnChanges {
    message: string;
    filterBy: string;
    filter: EventEmitter<any>;
    ngOnChanges(): void;
    handleClick(): void;
}
