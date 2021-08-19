import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from './cvmaker.model';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  selectedInfo: Info = new Info;
  users: Info[] = [];

  readonly baseURL = 'http://localhost:3000/info';
  
  constructor(private http: HttpClient) { }

  postInfo(emp: Info){
    return this.http.post(this.baseURL, emp);
  }

  getInfoList() {
    return this.http.get(this.baseURL);
  }

}
