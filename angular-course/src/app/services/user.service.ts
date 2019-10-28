import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) { }

    login(usuario: UserModel): Observable<any> {
        const url = environment.apiTokenUrl + '/auth/login';
        return this.httpClient.post<any>(url, usuario)
            .pipe(
                map(res => res),
                catchError(err => throwError(err))
            );
    }

    register(usuario: UserModel): Observable<any> {
        const url = environment.apiTokenUrl + '/auth/register';
        return this.httpClient.post<any>(url, usuario)
            .pipe(
                map(res => res),
                catchError(err => throwError(err))
            );
    }

}
