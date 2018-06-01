import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {catchError, retry} from 'rxjs/operators';
import {Observable} from "rxjs/Observable";

@Injectable()
export class RequestService{
  constructor(private http:HttpClient){}

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return Observable.throw('Something bad happened; please try again later.');
  };

  commonRequest(url:string):Observable<HttpResponse<any>>{
    return this.http.get(url,{ observe: 'response' })
      .pipe(retry(3),catchError(this.handleError));
  }
}
