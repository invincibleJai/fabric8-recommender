import { Component } from '@angular/core';

@Component({
    selector: 'f8-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    //public stackUrl: string = 'https://recommender.api.openshift.io/api/v1/stack-analyses/4dee41bf900a4c05aa96c91bd7a064c3';
    public stackUrl: string = 'http://ose-vm1.lab.eng.blr.redhat.com:32000/api/v1/stack-analyses/f5cf6a67ccaa41049997714db0e7da5f';
}
