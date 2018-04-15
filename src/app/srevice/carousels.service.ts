import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class carousels {
  private caroselUrl = "api/carosels"; //url/:collectionName = in-memory-data.service.ts return name
  constructor(private http: HttpClient) {}
  getList(): Observable<any> {
    return this.http.get<any>(this.caroselUrl);
  }
}
