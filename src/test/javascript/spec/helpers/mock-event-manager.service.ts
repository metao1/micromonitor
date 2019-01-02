import { SpyObject } from './spyobject';
import { McmEventManager } from 'ng-mcmonitor';
import Spy = jasmine.Spy;

export class MockEventManager extends SpyObject {
    broadcastSpy: Spy;

    constructor() {
        super(McmEventManager);
        this.broadcastSpy = this.spy('broadcast').andReturn(this);
    }
}
