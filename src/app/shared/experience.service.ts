import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from './cvmaker.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  selectedExperience: Experience = new Experience;
  experience: Experience[] = [];

  readonly baseURL = 'https://salty-island-35783.herokuapp.com/experience';
  
  constructor(private http: HttpClient) { }

  postInfo(emp: Experience){
    return this.http.post(this.baseURL, emp);
  }

  getInfoList() {
    return this.http.get(this.baseURL);
  }
}
