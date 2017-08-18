var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var ComponentLevelComponent = (function () {
    function ComponentLevelComponent() {
        this.dependencies = [];
        this.dependenciesList = [];
        this.headers = [];
        this.keys = [];
        this.alternate = [];
        this.usageOutliers = [];
        this.filters = [];
        this.currentFilter = '';
        this.orderByName = '';
        this.direction = '';
        this.angleUp = 'fa-angle-up';
        this.angleDown = 'fa-angle-down';
        this.sortDirectionClass = this.angleDown;
        this.keys = {
            name: 'name',
            currentVersion: 'curret_version',
            latestVersion: 'latest_version',
            cveid: 'cveid',
            cvss: 'cvss',
            license: 'license',
            linesOfCode: 'linesOfCode',
            avgCycloComplexity: 'avgCycloComplexity',
            noOfFiles: 'noOfFiles',
            dateAdded: 'dateAdded',
            publicPopularity: 'pubPopularity',
            enterpriseUsage: 'enterpriseUsage',
            teamUsage: 'teamUsage'
        };
        this.filters = [{
                name: 'All',
                identifier: 'reset'
            }, {
                name: 'Usage Outliers',
                identifier: 'isUsageOutlier',
                class: 'fa usage-outlier filter-icon'
            }, {
                name: 'Security Issues',
                identifier: 'has_issue',
                class: 'fa insecure fa-ban'
            }, {
                name: 'Alternate Components',
                identifier: 'isChild',
                class: 'fa fa-database child-icon alternate-component-icon'
            }];
        this.currentFilter = this.filters[0].name;
    }
    /**
     * handleKeyUpEvent - takes an event and returns nothing
     *
     * Gets triggered everytime a value is typed in the filter box
     * Sets the received value to the fieldValue
     */
    ComponentLevelComponent.prototype.handleKeyUpEvent = function (event) {
        var target = event.target;
        this.fieldValue = target.value;
    };
    /**
     * Handles the click after changing the filters.
     */
    ComponentLevelComponent.prototype.handleDropDownClick = function (element) {
        if (element.classList.contains('open')) {
            element.classList.remove('open');
        }
        else {
            element.classList.add('open');
        }
    };
    ComponentLevelComponent.prototype.handleCollapseClick = function (event) {
        var target = event.target;
        if (target.classList.contains('parent-icon')) {
            var parent_1 = target.parentNode.parentNode;
            var id = parent_1.id;
            if (target.classList.contains('collapsed')) {
                target.classList.remove('collapsed');
                this.toggleEntries(id, true);
            }
            else {
                target.classList.add('collapsed');
                this.toggleEntries(id, false);
            }
        }
    };
    ComponentLevelComponent.prototype.toggleEntries = function (id, isCollapsed) {
        var rows = document.getElementsByClassName(id);
        var len = rows.length;
        if (isCollapsed) {
            for (var i = 0; i < len; ++i) {
                if (rows[i].classList.contains('collapse'))
                    rows[i].classList.remove('collapse');
            }
        }
        else {
            for (var i = 0; i < len; ++i) {
                rows[i].classList.add('collapse');
            }
        }
    };
    ComponentLevelComponent.prototype.handleFilterFieldClick = function (element, field, event) {
        event.stopPropagation();
        this.currentFilter = field.name;
        this.fieldName = field.identifier;
        if (element.classList.contains('open')) {
            element.classList.remove('open');
        }
        else {
            element.classList.add('open');
        }
        event.preventDefault();
    };
    /**
     * Handles the column header click.
     * This changes the tables entries either to ascending order or
     * desending order in context to the field
     */
    ComponentLevelComponent.prototype.handleTableOrderClick = function (header) {
        if (header.isSortable) {
            this.orderByName = header.identifier;
            if (!header.direction || header.direction.toLowerCase() === 'down') {
                header.direction = 'up';
                header.sortDirectionClass = this.angleUp;
            }
            else {
                header.direction = 'down';
                header.sortDirectionClass = this.angleDown;
            }
            this.direction = header.direction;
        }
    };
    ComponentLevelComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.component) {
            console.log(this.component);
            if (this.isCompanion === undefined) {
                this.dependencies = this.component['dependencies'];
                this.recommendations = this.component['recommendations'];
                this.alternate = this.recommendations.alternate;
                this.usageOutliers = this.recommendations['usage_outliers'];
            }
            else {
                this.dependencies = this.component['dependencies'];
            }
            this.handleDependencies(this.dependencies);
        }
        if (this.filterBy) {
            this.fieldName = this.filterBy;
            this.currentFilter = this.filters.filter(function (f) { return f.identifier === _this.fieldName; })[0].name;
        }
    };
    ComponentLevelComponent.prototype.handleDependencies = function (dependencies) {
        if (dependencies) {
            var length_1 = dependencies.length;
            var dependency = void 0, eachOne = void 0;
            this.headers = [
                {
                    name: 'Package name',
                    class: 'medium',
                    order: 1
                }, {
                    name: 'Current Version',
                    class: 'small',
                    order: 2
                }, {
                    name: 'Recommended Version',
                    class: 'small',
                    order: 3
                }, {
                    name: 'Latest Version',
                    class: 'small',
                    order: 4
                }, {
                    name: 'Security Issue',
                    class: 'small',
                    order: 5
                }, {
                    name: 'License',
                    class: 'medium',
                    order: 6
                }, {
                    name: 'OSIO Usage',
                    class: 'small',
                    order: 7
                }, {
                    name: 'Github Statistics',
                    class: 'small',
                    order: 8
                }, {
                    name: 'Github Dependants',
                    class: 'large',
                    order: 9
                }, {
                    name: 'Categories',
                    class: 'medium',
                    order: 10
                }
            ];
            if (this.isCompanion) {
                this.headers.splice(2, 1);
            }
            this.dependenciesList = [];
            var linesOfCode = '';
            var noOfFiles = '';
            var tempLen = void 0;
            for (var i = 0; i < length_1; ++i) {
                eachOne = dependencies[i];
                dependency = this.setParams(eachOne, this.isCompanion !== undefined);
                dependency['isUsageOutlier'] = this.isUsageOutlier(dependency['name']);
                dependency['compId'] = 'comp-' + i;
                this.dependenciesList.push(dependency);
                tempLen = this.dependenciesList.length;
                if (this.alternate) {
                    this.checkAlternate(eachOne['name'], eachOne['version'], this.dependenciesList, dependency['compId']);
                    if (tempLen !== this.dependenciesList.length) {
                        dependency['isParent'] = true;
                    }
                }
            }
        }
    };
    ComponentLevelComponent.prototype.setParams = function (input, canCreateWorkItem) {
        var output = {};
        var github = input['github'];
        output['name'] = input['name'];
        output['current_version'] = input['version'];
        if (canCreateWorkItem) {
            output['current_version'] = '';
            output['recommended_version'] = input['version'];
        }
        else {
            output['recommended_version'] = '';
        }
        output['recommended_version'] = this.putNA(output['recommended_version']);
        output['current_version'] = this.putNA(output['current_version']);
        output['latest_version'] = this.putNA(input['latest_version']);
        output['license'] = input['licenses'] && input['licenses'].join(', ') || '-';
        output['license_analysis'] = input['license_analysis'] && input['license_analysis'];
        output['sentiment_score'] = input['sentiment'] && input['sentiment']['overall_score'];
        output['github_user_count'] = input['github'] && input['github']['dependent_repos'];
        output['github_user_count'] = this.putNA(output['github_user_count']);
        output['osio_user_count'] = input['osio_user_count'];
        output['watchers'] = this.putNA(github['watchers']);
        output['stargazers_count'] = this.putNA(github['stargazers_count']);
        output['total_releases'] = this.putNA(github['total_releases']);
        output['forks_count'] = this.putNA(github['forks_count']);
        output['contributors'] = this.putNA(github['contributors']);
        output['git_stat'] = (output['github_user_count'] > -1 || output['watchers'] > -1 || output['stargazers_count'] > -1 || output['total_releases'] > -1 || output['forks_count'] > -1 || output['contributors'] > -1);
        output['has_issue'] = input['security'].length > 0;
        output['security_issue'] = output['has_issue'] ? Math.max.apply(Math, input['security'].map(function (d) { return d.CVSS; })) : '';
        output['used_by'] = github['used_by'];
        output['categories'] = input['topic_list'];
        output['categories'] = (output['categories'] && output['categories'].length > 0 && output['categories'].join(', ')) || '';
        return output;
    };
    ComponentLevelComponent.prototype.putNA = function (count) {
        return !count || count < 0 ? '-' : count;
    };
    ComponentLevelComponent.prototype.checkAlternate = function (name, version, list, parentId) {
        var _this = this;
        if (this.alternate && this.alternate.length > 0) {
            var recom = this.alternate.filter(function (a) { return a.replaces[0].name === name && a.replaces[0].version === version; });
            recom.forEach(function (r) {
                var obj = _this.setParams(r, true);
                obj['isChild'] = true;
                obj['parent-reference'] = parentId;
                list.push(obj);
            });
        }
    };
    ComponentLevelComponent.prototype.isUsageOutlier = function (packageName) {
        if (this.usageOutliers && this.usageOutliers.length > 0) {
            var result = this.usageOutliers.filter(function (u) { return u.package_name === packageName; });
            return result && result.length > 0;
        }
    };
    /*
     *  handleCreateWorkItemAction - takes recommendation and returns nothing
     *  Creates work items in specified format to be consumed for POST request
     */
    ComponentLevelComponent.prototype.handleCreateWIclick = function (recommender, event) {
        var workItems = [];
        var message = '';
        var codebaseobj = { codebase: {
                'repository': 'Test_Repo',
                'branch': 'task-1234',
                'filename': this.component["manifest_name"],
                'linenumber': 1
            }
        };
        //TODO form data to be shared with recommender object
        if (recommender && recommender.hasOwnProperty("isChild") && recommender["isChild"]) {
            message = "Stack analytics has identified a potential missing library. It's  \n            recommended that you change " + recommender.name + " with version  " + recommender.recommended_version + " \n            to your application as many other Vert.x OpenShift applications have it included";
        }
        else {
            message = "Stack analytics has identified a potential missing library. It's  \n            recommended that you add " + recommender.name + " with version  " + recommender.recommended_version + "\n            to your application as many other Vert.x OpenShift applications have it included";
        }
        var description = message;
        var codebase = codebaseobj;
        if (this.data && this.data.git) {
            codebase['repository'] = this.data.git.uri || '';
            codebase['branch'] = this.data.git.ref || 'master';
        }
        description += '<br />';
        description += 'Repository: ' + codebase['repository'];
        description += '<br /> Branch: ' + codebase['branch'];
        description += '<br /> Filename: ' + codebase['filename'];
        description += '<br /> Line Number: ' + codebase['linenumber'];
        // let item: any = {
        //     title: recommender['workItem']['action'],
        //     description: description,
        //     codebase: codebase,
        //     key: recommender['key']
        // };
    };
    return ComponentLevelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], ComponentLevelComponent.prototype, "component", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ComponentLevelComponent.prototype, "isCompanion", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentLevelComponent.prototype, "filterBy", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ComponentLevelComponent.prototype, "config", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentLevelComponent.prototype, "header", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ComponentLevelComponent.prototype, "subHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ComponentLevelComponent.prototype, "data", void 0);
ComponentLevelComponent = __decorate([
    Component({
        selector: 'component-level-information',
        template: require('./component-level.component.html'),
        styles: [require('./component-level.component.css').toString()],
    }),
    __metadata("design:paramtypes", [])
], ComponentLevelComponent);
export { ComponentLevelComponent };
//# sourceMappingURL=component-level.component.js.map