import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export declare class AppComponent implements OnInit {
    private route;
    stackUrl: string;
    constructor(route: ActivatedRoute);
    label: string;
    routerLink: string;
    changeLabel(): void;
    ngOnInit(): void;
}
