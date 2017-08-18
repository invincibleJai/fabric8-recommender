import { OnChanges } from '@angular/core';
import { ComponentInformationModel, RecommendationsModel } from '../models/stack-report.model';
export declare class ComponentLevelComponent implements OnChanges {
    component: any;
    isCompanion: boolean;
    filterBy: string;
    config: any;
    header: string;
    subHeader: string;
    data: any;
    dependencies: Array<ComponentInformationModel>;
    recommendations: RecommendationsModel;
    messages: any;
    private dependenciesList;
    private headers;
    private keys;
    private alternate;
    private usageOutliers;
    private fieldName;
    private fieldValue;
    private filters;
    private currentFilter;
    private orderByName;
    private direction;
    private angleUp;
    private angleDown;
    sortDirectionClass: string;
    constructor();
    /**
     * handleKeyUpEvent - takes an event and returns nothing
     *
     * Gets triggered everytime a value is typed in the filter box
     * Sets the received value to the fieldValue
     */
    handleKeyUpEvent(event: Event): void;
    /**
     * Handles the click after changing the filters.
     */
    handleDropDownClick(element: Element): void;
    handleCollapseClick(event: Event): void;
    private toggleEntries(id, isCollapsed);
    handleFilterFieldClick(element: Element, field: any, event: Event): void;
    /**
     * Handles the column header click.
     * This changes the tables entries either to ascending order or
     * desending order in context to the field
     */
    handleTableOrderClick(header: any): void;
    ngOnChanges(): void;
    private handleDependencies(dependencies);
    private setParams(input, canCreateWorkItem);
    private putNA(count);
    private checkAlternate(name, version, list, parentId);
    private isUsageOutlier(packageName);
    handleCreateWIclick(recommender: any, event: Event): void;
}
