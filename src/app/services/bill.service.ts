import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.restUrl());
  }

  get(id): Observable<any> {
    return this.http.get(`${this.restUrl()}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(this.restUrl(), data);
  }

  protected restUrl(): string {
    return environment.config.api.bill;
  }
}
