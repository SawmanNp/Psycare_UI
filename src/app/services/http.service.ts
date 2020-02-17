import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { urls } from "../services/url.enum";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}
  cookie?: string;
  getHeaders() {
    console.log(this.cookie);
    let urlHeaders = new HttpHeaders().set("Content-Type", "application/json");
    urlHeaders = urlHeaders.set("Accept", "application/json");
    urlHeaders = urlHeaders.set("Authorization", "Bearer " + this.cookie);
    return urlHeaders;
  }

  get(relativeUrl: string): Observable<any> {
    return this.http.get(urls.baseUrl + relativeUrl, {
      headers: this.getHeaders()
    });
  }

  post(relativeUrl: string, data: any): Observable<any> {
    return this.http.post(urls.baseUrl + relativeUrl, data, {
      headers: this.getHeaders()
    });
  }

  put(relativeUrl: string, data: any): Observable<any> {
    return this.http.put(urls.baseUrl + relativeUrl, data, {
      headers: this.getHeaders()
    });
  }

  delete(relativeUrl: string): Observable<any> {
    return this.http.delete(urls.baseUrl + relativeUrl, {
      headers: this.getHeaders()
    });
  }
}
