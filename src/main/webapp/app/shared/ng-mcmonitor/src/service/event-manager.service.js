import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, share } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * An utility class to manage RX events
 */
var McmEventManager = /** @class */ (function () {
    function McmEventManager() {
        var _this = this;
        this.observable = Observable.create(function (observer) {
            _this.observer = observer;
        }).pipe(share());
    }
    /**
     * Method to broadcast the event to observer
     */
    /**
         * Method to broadcast the event to observer
         */
    McmEventManager.prototype.broadcast = /**
         * Method to broadcast the event to observer
         */
    function (event) {
        if (this.observer != null) {
            this.observer.next(event);
        }
    };
    /**
     * Method to subscribe to an event with callback
     */
    /**
         * Method to subscribe to an event with callback
         */
    McmEventManager.prototype.subscribe = /**
         * Method to subscribe to an event with callback
         */
    function (eventName, callback) {
        var subscriber = this.observable.pipe(filter(function (event) {
            return event.name === eventName;
        })).subscribe(callback);
        return subscriber;
    };
    /**
     * Method to unsubscribe the subscription
     */
    /**
         * Method to unsubscribe the subscription
         */
    McmEventManager.prototype.destroy = /**
         * Method to unsubscribe the subscription
         */
    function (subscriber) {
        subscriber.unsubscribe();
    };
    McmEventManager.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    McmEventManager.ctorParameters = function () { return []; };
    McmEventManager.ngInjectableDef = i0.defineInjectable({ factory: function McmEventManager_Factory() { return new McmEventManager(); }, token: McmEventManager, providedIn: "root" });
    return McmEventManager;
}());
export { McmEventManager };
