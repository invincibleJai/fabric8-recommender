import { Http } from '@angular/http';
import { AuthenticationService } from 'ngx-login-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export declare class FeedbackService {
    private http;
    private auth;
    private headers;
    constructor(http: Http, auth: AuthenticationService);
    submit(feedback: any): Observable<any>;
    private extractData(res);
    private handleError(error);
}
