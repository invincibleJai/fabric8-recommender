var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import * as c3 from 'c3';
// require('../../node_modules/c3/c3');
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
var ChartComponent = (function () {
    function ChartComponent(elementReference) {
        // Below configs have been captured from C3 Reference Doc's Need 
        // to be updated if in case c3 includes new options
        this.c3Configs = [
            'axis',
            'tooltip',
            'grid',
            'legend',
            'zoom',
            'regions',
            'subchart'
        ];
        /**
         *  Below options have been captured from C3 Reference Doc's
         *  This doesnot include call back methods those options would be captured seperately
         */
        this.c3Options = [
            'size',
            'padding',
            'color',
            'interaction',
            'transition',
            'point',
            'line',
            'area',
            'bar',
            'pie',
            'donut',
            'gauge',
            'oninit',
            'onrendered',
            'onmouseover',
            'onmouseout',
            'onresize',
            'onresized'
        ];
        this.element = elementReference.nativeElement;
        // Adding the below line to specify CSS for the ng2-c3 selector
        this.element.className += ' ng2-c3';
    }
    // Checks for the changes made in the data and re-renders the charts accordingly
    ChartComponent.prototype.ngOnChanges = function () {
        try {
            this.__render(this.data, this.chartOptions, this.configs);
        }
        catch (err) {
            console.log(err);
        }
    };
    ChartComponent.prototype.__render = function (inputData, chartOptionsData, chartConfigsData) {
        var _this = this;
        if (this.isValid(inputData)) {
            var c3InputData = {};
            c3InputData['bindto'] = _this.element;
            c3InputData['data'] = inputData;
            /**
             * Options for the charts provided
             * Options listed like axis, tooltip, grid, legend, zoom , point
             * Individual options are parsed and set in c3InputData Json
             * to be provided to c3
             */
            if (this.isValid(chartConfigsData)) {
                this.updateIfValidInput(chartConfigsData, c3InputData, this.c3Configs);
            }
            /*
             * Chart Configuration could have multiple Options
             * Size, padding, color Pattern, Transition
             * Some callback initializers like OnInit, Onrendered, OnMouseOver, OnMouseOut
             *
             */
            if (this.isValid(chartOptionsData)) {
                this.updateIfValidInput(chartOptionsData, c3InputData, this.c3Options);
            }
            /**
             * Should find a way to check for proper inputs
             * if(!this.isValidInput(c3InputData)) {
             *     throw new Error('Invalid Configuration passed');
             * }
             *
             */
            c3.generate(c3InputData);
            // Generates the C3 chart for the given configuration 
            // and places it inside the directive's element.
        }
    };
    // A utility method to check if a provided value is valid
    ChartComponent.prototype.isValid = function (randomInput) {
        return randomInput !== undefined && randomInput !== null;
    };
    /**
     * A utility method to traverse through teh input map, checks with the given config
     *  Updates the  output map if input is present in config
     *  skips the field if the given input is not present in config map
     *
     */
    ChartComponent.prototype.updateIfValidInput = function (inputMap, outputMap, config) {
        for (var key in inputMap) {
            if (inputMap.hasOwnProperty(key)) {
                var isValidOption = config.indexOf(key);
                if (isValidOption >= 0) {
                    outputMap[key] = inputMap[key];
                }
            }
        }
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    Component({
        selector: 'f8-chart',
        template: "",
        encapsulation: ViewEncapsulation.None,
        inputs: ['data', 'chartOptions', 'configs'],
        styles: [
            ".ng2-c3 {\n            display:block; // This is required for proper positioning of tooltip\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [ElementRef])
], ChartComponent);
export { ChartComponent };
//# sourceMappingURL=chart-component.js.map