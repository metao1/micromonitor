import { McmEventManager } from 'ng-mcmonitor';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private eventManager: McmEventManager) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).do(
            (event: HttpEvent<any>) => {},
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (!(err.status === 401 && (err.message === '' || (err.url && err.url.indexOf('/api/account') === 0)))) {
                        if (this.eventManager !== undefined) {
                            this.eventManager.broadcast({ name: 'NgMcmonitorRegistryApp.httpError', content: err });
                        }
                    }
                }
            }
        );
    }
}
