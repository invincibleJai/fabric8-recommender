import { Observable } from 'rxjs/Observable';
export declare class GlobalConstants {
    constructor();
    /**
     * getMessages - gets the componentKey as a string and returns the Observable
     *
     * The component here is the key that enables to load the desired component.
     * For eg.) To load the messages for StackDetailsComponent,
     * call getMessages('stackDetails')
     *
     * The key mapping is found in constants-mapper.ts
     *
     * In case no match is found, it returns a null.
     */
    getMessages(component: string): Observable<any>;
}
