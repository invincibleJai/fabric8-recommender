import { Http } from '@angular/http';
import { AuthenticationService } from 'ngx-login-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export declare class StackAnalysesService {
    private http;
    private auth;
    private headers;
    private stackAnalysesUrl;
    private cvssScale;
    constructor(http: Http, auth: AuthenticationService);
    getStackAnalyses(url: string): Observable<any>;
    getCvssObj(score: number): any;
    private extractData(res);
    private handleError(error);
}
