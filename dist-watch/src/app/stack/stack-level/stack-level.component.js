var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserStackInfoModel } from '../models/stack-report.model';
var StackLevelComponent = (function () {
    function StackLevelComponent() {
        this.changeFilter = new EventEmitter();
        this.licenseInfo = {};
        this.securityInfo = {};
    }
    StackLevelComponent.prototype.ngOnChanges = function () {
        if (this.userStack) {
            this.handleLicenseInformation(this.userStack);
            this.handleSecurityInformation(this.userStack);
        }
        if (this.outliers) {
            this.handleStatistics(this.outliers);
        }
    };
    StackLevelComponent.prototype.handleFilter = function (filterBy) {
        this.changeFilter.emit(filterBy);
    };
    StackLevelComponent.prototype.handleStatistics = function (outliers) {
    };
    StackLevelComponent.prototype.sortChartColumnData = function (array) {
        return array.sort(function (a, b) {
            if (a[1] === b[1]) {
                return 0;
            }
            return a[1] > b[1] ? -1 : 1;
        });
    };
    StackLevelComponent.prototype.handleSecurityInformation = function (tab) {
        var dependencies = tab.dependencies;
        var security = [];
        var temp = [];
        dependencies.forEach(function (dependency) {
            security = dependency.security;
            if (security.length > 0) {
                var max = security.reduce(function (a, b) {
                    return parseFloat(a['CVSS']) < parseFloat(b['CVSS']) ? b : a;
                });
                temp.push({
                    name: dependency.name,
                    cve: max
                });
            }
        });
        if (temp.length > 0) {
            var final = temp.reduce(function (a, b) {
                return parseFloat(a['cve']['CVSS']) < parseFloat(b['cve']['CVSS']) ? b : a;
            });
            var cvssValue = final.cve.CVSS;
            var indicator = void 0;
            var iconClass = 'fa fa-shield';
            var displayClass = 'progress-bar-warning';
            if (cvssValue < 0) {
                indicator = -1;
            }
            if (cvssValue >= 7.0) {
                indicator = cvssValue;
                iconClass = 'fa fa-shield';
                displayClass = 'progress-bar-danger';
            }
            this.securityInfo = {
                name: final.name,
                cve: final.cve,
                percentage: final.cve.CVSS * 10,
                status: final.cve.CVSS < 7 ? 'moderate' : 'critical',
                iconClass: iconClass,
                displayClass: displayClass
            };
        }
    };
    StackLevelComponent.prototype.handleLicenseInformation = function (tab) {
        var licenses = {};
        var columnData = [];
        var columnDataLength = 0;
        var otherLicensesArray = [];
        var otherLicensesRatio = 0;
        var temp = [];
        tab.dependencies.forEach(function (t) {
            t.licenses.forEach(function (license) {
                if (!licenses[license]) {
                    licenses[license] = 1;
                }
                else {
                    ++licenses[license];
                }
            });
        });
        for (var i in licenses) {
            if (licenses.hasOwnProperty(i)) {
                // Push names and count to be in this structure ['Name', 20] for C3
                temp = [];
                temp.push(i);
                temp.push(licenses[i]);
                columnData.push(temp);
            }
        }
        // sort the data array by license count
        columnData = this.sortChartColumnData(columnData);
        columnDataLength = columnData ? columnData.length : 0;
        if (columnDataLength > 4) {
            for (var i = 3; i < columnDataLength; i++) {
                otherLicensesArray.push(columnData[i][0]);
                otherLicensesRatio += columnData[i][1];
            }
            columnData.splice(4);
            columnData[3][0] = 'Others';
            columnData[3][1] = otherLicensesRatio;
        }
        console.log(columnData);
        this.licenseInfo = {
            data: {
                columns: columnData,
                type: 'donut',
                labels: false
            },
            chartOptions: {
                size: {
                    height: 150,
                    width: 250
                },
                donut: {
                    width: 13,
                    label: {
                        show: false
                    },
                    title: columnDataLength + ' Licenses'
                }
            },
            configs: {
                legend: {
                    position: 'right'
                },
                tooltip: {
                    format: {
                        name: function (name, ratio, id, index) {
                            if (name === 'Others') {
                                return otherLicensesArray.toString();
                            }
                            return name;
                        },
                        value: function (value, ratio, id, index) {
                            return (ratio * 100).toFixed(2) + '%';
                        }
                    }
                }
            }
        };
        console.log(licenses);
    };
    return StackLevelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", UserStackInfoModel)
], StackLevelComponent.prototype, "userStack", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StackLevelComponent.prototype, "outliers", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], StackLevelComponent.prototype, "changeFilter", void 0);
StackLevelComponent = __decorate([
    Component({
        selector: 'stack-level-information',
        template: require('./stack-level.component.html'),
        styles: [require('./stack-level.component.css').toString()],
    }),
    __metadata("design:paramtypes", [])
], StackLevelComponent);
export { StackLevelComponent };
//# sourceMappingURL=stack-level.component.js.map