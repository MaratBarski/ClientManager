import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoadingService } from './loading.service';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) { }

  private createTokenHeader(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
  }

  getData(apiUrl: string): Observable<any> {
    this.loadingService.isLoading = true;
    return this.http.get<any>(environment.serverUrl + apiUrl,
      {
        headers: this.createTokenHeader()
      });
  }

  updateData(apiUrl: string, data: any): Observable<any> {
    this.loadingService.isLoading = true;
    return this.http.post(
      environment.serverUrl + apiUrl, data,
      { headers: this.createTokenHeader() }
    );
  }

}
