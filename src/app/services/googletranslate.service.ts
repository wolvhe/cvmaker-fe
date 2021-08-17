import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})



export class GoogletranslateService {

  url = "https://translation.googleapis.com/language/translate/v2?key=";
key = "";
constructor(private http: HttpClient) { }
translate(obj: GoogleObj) {
return this.http.post(this.url + this.key, obj);
}
}

export interface GoogleObj {
  q: string[];
  target: string;
  }