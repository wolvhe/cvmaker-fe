import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from './cvmaker.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  selectedExperience: Experience = new Experience;
  experience: Experience[] = [];

  readonly baseURL = 'http://localhost:3000/experience';
  
  constructor(private http: HttpClient) { }

  postInfo(emp: Experience){
    return this.http.post(this.baseURL, emp);
  }

  getInfoList() {
    return this.http.get(this.baseURL);
  }
}
