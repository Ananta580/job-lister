import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiKey: string = '084227eac0msh826fc15a269fbd4p16e1cfjsn152e26c3dc83';
  private host: string = 'jsearch.p.rapidapi.com';

  private baseUrl: string = 'https://jsearch.p.rapidapi.com';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': `${this.apiKey}`,
      'x-rapidapi-host': this.host,
    });
  }

  public get<T>(url: string, params?: any): Observable<T> {
    const options = {
      headers: this.getHeaders(),
      params: params,
    };
    return this.http.get<T>(`${this.baseUrl}${url}`, options);
  }

  public post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, body, {
      headers: this.getHeaders(),
    });
  }
}
