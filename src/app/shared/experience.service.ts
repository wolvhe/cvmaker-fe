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
  // readonly baseURL = 'http://localhost:3000/experience';
  
  constructor(private http: HttpClient) { }

  postInfo(emp: Experience){
    console.log(emp)
    return this.http.post(this.baseURL, emp);
  }

  getInfoList() {
    return this.http.get(this.baseURL);
  }
}
