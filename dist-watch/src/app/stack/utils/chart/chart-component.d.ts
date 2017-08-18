import { ElementRef } from '@angular/core';
/**
 *
 * This chart uses C3 for generating and rendering charts.
 *
 * Minimum Requirements:
 * C3, D3 (As C3 internally uses D3)
 *
 * Usage:
 * eg.) <f8-chart bind-data="dataFromTheComponentOrWherever"></f8-chart>
 *
 * 1. MultiLine chart takes the parameters
 *      a. data of c3 configuration
 */
export declare class ChartComponent {
    private data;
    private chartOptions;
    private element;
    private configs;
    private c3Configs;
    /**
     *  Below options have been captured from C3 Reference Doc's
     *  This doesnot include call back methods those options would be captured seperately
     */
    private c3Options;
    constructor(elementReference: ElementRef);
    ngOnChanges(): void;
    private __render(inputData, chartOptionsData, chartConfigsData);
    private isValid(randomInput);
    /**
     * A utility method to traverse through teh input map, checks with the given config
     *  Updates the  output map if input is present in config
     *  skips the field if the given input is not present in config map
     *
     */
    private updateIfValidInput(inputMap, outputMap, config);
}
