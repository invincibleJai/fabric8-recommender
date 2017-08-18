export declare class ApiLocatorService {
    readonly DEFAULT_API_ENV_VAR_NAMES: Map<string, string>;
    readonly DEFAULT_API_PREFIXES: Map<string, string>;
    readonly DEFAULT_API_PATHS: Map<string, string>;
    private envVars;
    constructor();
    readonly witApiUrl: string;
    readonly realm: string;
    readonly recommenderApiUrl: string;
    private loadEnvVar(key);
    private buildApiUrl(key);
}
