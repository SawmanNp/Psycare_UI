import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { urls } from "../services/url.enum";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  /*getHeaders(url: string) {
    let urlHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return urlHeaders;
  }*/

  get(relativeUrl: string): Observable<any> {
    return this.http.get(urls.baseUrl + relativeUrl, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true
    });
  }

  post(relativeUrl: string, data: any): Observable<any> {
    return this.http.post(urls.baseUrl + relativeUrl, data, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true
    });
  }

  put(relativeUrl: string, data: any): Observable<any> {
    return this.http.put(urls.baseUrl + relativeUrl, data, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true
    });
  }

  delete(relativeUrl: string): Observable<any> {
    return this.http.delete(urls.baseUrl + relativeUrl, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      withCredentials: true
    });
  }
}
