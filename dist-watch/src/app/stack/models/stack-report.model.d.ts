export declare class StackReportModel {
    finished_at: string;
    request_id: string;
    result: Array<ResultInformationModel>;
    started_at: string;
}
export declare class ResultInformationModel {
    audit: AuditInformationModel;
    release: string;
    manifest_name: string;
    manifest_file_path: string;
    recommendations: RecommendationsModel;
    user_stack_info: UserStackInfoModel;
}
export declare class AuditInformationModel {
    ended_at: string;
    started_at: string;
    version: string;
}
export declare class RecommendationsModel {
    alternate: Array<ComponentInformationModel>;
    companion: Array<ComponentInformationModel>;
    usage_outliers: Array<OutlierInformationModel>;
}
export declare class ComponentInformationModel {
    code_metrics: any;
    ecosystem: string;
    github: GithubModel;
    latest_version: string;
    licenses: Array<string>;
    name: string;
    osio_user_count: number;
    replaces: any;
    security: Array<any>;
    sentiment: SentimentModel;
    version: string;
}
export declare class GithubModel {
    contributors: number;
    dependent_projects: number;
    dependent_repos: number;
    first_release_date: string;
    forks_count: number;
    issues: {
        month: {
            closed: number;
            opened: number;
        };
        year: {
            closed: number;
            opened: number;
        };
    };
    latest_release_duration: string;
    pull_requests: {
        month: {
            closed: number;
            opened: number;
        };
        year: {
            closed: number;
            opened: number;
        };
    };
    size: string;
    stargazers_count: number;
    total_releases: number;
    used_by: Array<any>;
    watchers: number;
}
export declare class SentimentModel {
    latest_comment: string;
    overall_score: number;
}
export declare class OutlierInformationModel {
    outlier_probabilty: number;
    package_name: string;
}
export declare class UserStackInfoModel {
    analyzed_dependencies: Array<any>;
    analyzed_dependencies_count: number;
    dependencies: Array<ComponentInformationModel>;
    distinct_licenses: Array<string>;
    ecosystem: string;
    recommendation_ready: boolean;
    recommended_stack_licenses: Array<string>;
    stack_license_conflict: boolean;
    total_licenses: number;
    unknown_dependencies: Array<any>;
    unknown_dependencies_count: number;
}
