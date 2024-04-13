import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostcodeDetails, PostcodeResponse } from '../utils/interfaces/postcode.interfaces';

@Injectable({
    providedIn: 'root',
})
export class PostcodeService {
    private baseUrl = 'https://api.postcodes.io/postcodes';

    constructor(private http: HttpClient) { }

    getFilteredPostcodes(postcode: string): Observable<PostcodeResponse<string[]>> {
        return this.http
            .get<PostcodeResponse<string[]>>(`${this.baseUrl}/${postcode}/autocomplete`)
            .pipe(
                catchError(this.handleError)
            );
    }

    getPostcodeDetails(postcode: string): Observable<PostcodeResponse<PostcodeDetails>> {
        return this.http
            .get<PostcodeResponse<PostcodeDetails>>(`${this.baseUrl}/${postcode}`)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        const errorMessage = error.error.error;
        return throwError(() => errorMessage);
    }
}
