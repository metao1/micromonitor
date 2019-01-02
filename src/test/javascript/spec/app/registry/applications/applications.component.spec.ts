import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { microMonitorRegistryTestModule } from '../../../test.module';
import { McmApplicationsComponent, McmApplicationsService } from '../../../../../../main/webapp/app/registry';

describe('Component Tests', () => {
    describe('ApplicationsComponent', () => {
        let comp: McmApplicationsComponent;
        let fixture: ComponentFixture<McmApplicationsComponent>;

        beforeEach(
            async(() => {
                TestBed.configureTestingModule({
                    imports: [microMonitorRegistryTestModule],
                    declarations: [McmApplicationsComponent],
                    providers: [McmApplicationsService]
                })
                    .overrideTemplate(McmApplicationsComponent, '')
                    .compileComponents();
            })
        );

        beforeEach(() => {
            fixture = TestBed.createComponent(McmApplicationsComponent);
            comp = fixture.componentInstance;
        });

        it(
            'refresh data',
            fakeAsync(
                inject([McmApplicationsService], (service: McmApplicationsService) => {
                    const response = {
                        applications: [
                            {
                                name: 'app1',
                                instances: [
                                    {
                                        instanceId: 1,
                                        status: 'UP',
                                        homePageUrl: 'home'
                                    }
                                ]
                            },
                            {
                                name: 'app2',
                                instances: [
                                    {
                                        instanceId: 2,
                                        status: 'UP',
                                        homePageUrl: 'home'
                                    },
                                    {
                                        instanceId: 3,
                                        status: 'UP',
                                        homePageUrl: 'home'
                                    }
                                ]
                            }
                        ]
                    };
                    spyOn(service, 'findAll').and.returnValue(Observable.of(response));

                    comp.ngOnInit();
                    tick();

                    expect(service.findAll).toHaveBeenCalled();
                    expect(comp.data).toEqual(response);
                })
            )
        );
    });
});
