import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private base = `${environment.apiUrl}/contacts`;

  constructor(private http: HttpClient) {}

  // List: GET /contacts?q=&page=&per_page=
  list(q = '', page = 1, per_page = 20): Observable<any> {
    let params = new HttpParams()
      .set('page', String(page))
      .set('per_page', String(per_page));

    if (q) params = params.set('q', q);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`, // token guardado al hacer login
      'X-CANDIDATE-ID': 'CAND_0029',
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(this.base, { headers, params });
  }

  // Create: POST /contacts
  create(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'X-CANDIDATE-ID': 'CAND_0029',
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.base, payload, { headers });
  }

  // Bulk: POST /contacts/bulk with { rows: [...] }
  bulk(rows: any[]): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'X-CANDIDATE-ID': 'CAND_0029',
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.base}/bulk`, rows, { headers });
  }
}
