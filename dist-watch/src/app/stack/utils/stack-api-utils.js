import { Observable } from 'rxjs';
export function getStackReportModel(data) {
    var result = data;
    return Observable.create(function (observer) {
        var model = result;
        // Object.assign(model, result);
        observer.next(model);
        observer.complete();
    });
}
//# sourceMappingURL=stack-api-utils.js.map