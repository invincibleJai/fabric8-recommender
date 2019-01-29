import {  async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsModule  } from 'ngx-bootstrap';
import { Observable, of } from 'rxjs';
import { StackReportInShortComponent } from './stack-report-inshort.component';
import { ChartModule } from '../utils/chart/chart.module';
import { StackDetailsModule } from '../stack-details/stack-details.module';
import { StackAnalysesService } from '../stack-analyses.service';
import { AuthenticationService } from 'ngx-login-client';
import { ReportSummaryModule } from '../report-summary/report-summary.module';
import { CommonService } from '../utils/common.service';

import { StackReportModel } from '../models/stack-report.model';

describe ('StackReportInShortComponent', () => {
    let component: StackReportInShortComponent;
    let element: HTMLElement;
    let fixture: ComponentFixture<StackReportInShortComponent>;
    const mockStackAnalysesService = {
        getStackAnalyses(url: string, params?: any): Observable<StackReportModel> {
          const stackDetails = of(<StackReportModel> {
            'version': 'v1',
            'started_at': '2019-01-03T18:23:05.659354',
            'release': 'None:None:None',
            'result': [
              {
                'manifest_name': 'pom.xml',
                'recommendation': {
                  'usage_outliers': [],
                  'input_stack_topics': {},
                  'companion': [],
                  'alternate': [],
                  'manifest_file_path': 'pom.xml'
                },
                'user_stack_info': {
                  'unknown_dependencies_count': 2,
                  'transitive_count': 0,
                  'analyzed_dependencies_count': 0,
                  'analyzed_dependencies': [],
                  'recommendation_ready': true,
                  'license_analysis': {},
                  'ecosystem': 'maven',
                  'unknown_dependencies': [],
                  'dependencies': [
                    {
                      'package': 'io.vertx:vertx-core',
                      'version': '3.5.4.redhat-00002'
                    },
                    {
                      'package': 'io.vertx:vertx-web',
                      'version': '3.5.4.redhat-00002'
                    }
                  ],
                  'total_licenses': 0,
                  'stack_license_conflict': true,
                  'distinct_licenses': []
                },
                'manifest_file_path': 'pom.xml'
              }
            ],
            'request_id': '85cace93321941128ac56fc76493039a',
            'finished_at': '2019-01-03T18:23:06.026235'
          });
          return stackDetails;
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ChartModule,
                StackDetailsModule,
                TabsModule.forRoot(),
                ReportSummaryModule
            ],
            providers: [
                {
                    provide: StackAnalysesService, useValue: mockStackAnalysesService
                },
                {
                    provide: AuthenticationService, useValue: {}
                },
                CommonService
            ],
            declarations: [
                StackReportInShortComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StackReportInShortComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not show in progress if stack analyses is complete', () => {
        fixture.detectChanges();
        element = fixture.nativeElement;
        const progressPercentEle = element.querySelector('.error-class>h3');
        expect(progressPercentEle).toBeNull();
    });

    it('should nor show error layout if stack analyses is complete', () => {
        fixture.detectChanges();
        element = fixture.nativeElement;
        const errorBlockEle = element.querySelector('.f8-blank-slate-card');
        expect(errorBlockEle).toBeNull();
    });

    it('should show main layout if stack analyses is complete', async () => {
        await component.ngOnChanges();
        fixture.detectChanges();
        element = fixture.nativeElement;
        const layoutEle = element.querySelector('.mainLayout');
        expect(layoutEle).toBeDefined();
    });
});
