import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitFormService {

  constructor(private api: ApiService) { }

  submitData = (url: string, data: { email: string, message: string }): Observable<any> => {
    return this.api.post<{ email: string, message: string }, any>(url, data);
  }
}
