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

  postInfo(){
    return this.http.post(this.baseURL, this.selectedExperience);
  }

  getInfoList() {
    return this.http.get(this.baseURL);
  }
}
