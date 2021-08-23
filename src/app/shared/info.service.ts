import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from './cvmaker.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  selectedInfo: Info = new Info;
  users: Info[] = [];

  readonly baseURL = 'https://salty-island-35783.herokuapp.com/info';
  // readonly baseURL = 'http://localhost:3000/info';
  
  constructor(private http: HttpClient) { }

  postInfo(){
     return this.http.post(this.baseURL, this.selectedInfo);
  }

  getInfoList() {
    return this.http.get(this.baseURL);
  }

}
