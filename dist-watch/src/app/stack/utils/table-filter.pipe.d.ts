import { PipeTransform } from '@angular/core';
export declare class TableFilter implements PipeTransform {
    transform(items: Array<any>, field: string): Array<any>;
}
