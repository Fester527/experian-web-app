import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeDataService {

  constructor(private http: HttpClient) { }

  
  private zipCodeSearchUrl = 'https://experian-api.herokuapp.com/search'; //API url to seach for a zipcode

  /**
   * Function to retrieve zip code data from API. Returns response as an array of strings (JSON).
   */
  getZipCodeData (code: string): Observable<String[]> {
    const url = `${this.zipCodeSearchUrl}/${code}`;
    return this.http.get<String[]>(url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  /**
   * Handles any errors that may occur during the HTTP call in the function getZipCodeData();
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
  
}
