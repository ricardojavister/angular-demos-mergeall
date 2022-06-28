import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';
import { Record, RootObject } from '../model/record';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: Record[] = [];
  private myProducts = new BehaviorSubject<Record[]>([]);
  myProducts$ = this.myProducts.asObservable();

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<RootObject> {
    let headers = new HttpHeaders();
    headers = headers.set(
      'X-Master-Key',
      '$2b$10$ghNHmZWM5nvdrV5tDL6akuKN6JanJ9/iG9vAa4F1yJF8X/ccv3o9C'
    );
    const url = 'https://api.jsonbin.io/v3/b/62b9ef87192a674d291cb521';
    return this.httpClient.get<RootObject>(url, { headers: headers });
  }

  getProductsByName(name: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set(
      'X-Master-Key',
      '$2b$10$ghNHmZWM5nvdrV5tDL6akuKN6JanJ9/iG9vAa4F1yJF8X/ccv3o9C'
    );
    const url = 'https://api.jsonbin.io/v3/b/62b9ef87192a674d291cb521';
    const data = this.httpClient.get<RootObject>(url, { headers: headers });
    return data.pipe(
      map((x) => {
        return x.record;
      }),
      map((y) => {
        let filtered = y.filter((c) => c.name === name);
        return filtered.length > 0 ? filtered[0] : null;
      })
    );
  }
}
