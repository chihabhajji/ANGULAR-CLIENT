import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {NgxSpinnerService} from "ngx-spinner";
import {finalize} from "rxjs/operators";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private count = 0;
  constructor(private spinnerService: NgxSpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.count === 0 && !request.url.includes('paginated')) {
      this.spinnerService.show();
    }
    this.count++;
    return next.handle(request).pipe(
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.spinnerService.hide();
        }
      }));
  }
}
