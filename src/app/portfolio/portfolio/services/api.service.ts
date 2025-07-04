import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  post<T, R = any>(url: string, body: T):Observable<R> {
    return this.http.post<R>(url, body);
  }
}
