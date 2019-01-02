import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { microMonitorRegistryTestModule } from '../../../test.module';
import { McmHistoryComponent, McmHistoryService } from '../../../../../../main/webapp/app/registry';

describe('Component Tests', () => {
    describe('HistoryComponent', () => {
        let comp: McmHistoryComponent;
        let fixture: ComponentFixture<McmHistoryComponent>;

        beforeEach(
            async(() => {
                TestBed.configureTestingModule({
                    imports: [microMonitorRegistryTestModule],
                    declarations: [McmHistoryComponent],
                    providers: [McmHistoryService]
                })
                    .overrideTemplate(McmHistoryComponent, '')
                    .compileComponents();
            })
        );

        beforeEach(() => {
            fixture = TestBed.createComponent(McmHistoryComponent);
            comp = fixture.componentInstance;
            fixture.detectChanges();
        });

        it(
            'refresh data',
            fakeAsync(
                inject([McmHistoryService], (service: McmHistoryService) => {
                    const response = {
                        canceled: {
                            '11052017': 'instance1'
                        },
                        registered: {
                            '11022017': 'instance2'
                        }
                    };
                    spyOn(service, 'findAll').and.returnValue(Observable.of(response));

                    comp.refresh();
                    tick();

                    expect(service.findAll).toHaveBeenCalled();
                    expect(comp.data).toEqual(response);
                })
            )
        );

        it(
            'activate registered tab',
            fakeAsync(
                inject([McmHistoryService], (service: McmHistoryService) => {
                    const response = {
                        canceled: {
                            '11052017': 'instance1'
                        },
                        registered: {
                            '11022017': 'instance2'
                        }
                    };
                    spyOn(service, 'findAll').and.returnValue(Observable.of(response));

                    comp.ngOnInit();
                    tick();
                    comp.activate('registered');

                    expect(comp.items[0]).toEqual({ key: '11022017', value: 'instance2' });
                })
            )
        );
    });
});
