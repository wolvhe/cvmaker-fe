import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html', 
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent implements OnInit {
 
  constructor() { }

  ngOnInit(){
  
  
}
  filterArray(index: any) {
    console.log(index)
    this.formArray = this.formArray.filter((d,i) => i!= index)
  }

  filterSkillArray(index: any) {
    console.log(index)
    this.formSkillArray = this.formSkillArray.filter((d,i) => i!= index)
  }

  filterLanguageArray(index: any) {
    console.log(index)
    this.formLanguageArray = this.formLanguageArray.filter((d,i) => i!= index)
  }

  filterCourseArray(index: any) {
    console.log(index)
    this.formCourseArray = this.formCourseArray.filter((d,i) => i!= index)
  }

  
  formArray = [{}]

  formSkillArray = [{}]

  formLanguageArray = [{}]

  formCourseArray = [{}]
  
  editorModules = {toolbar: [
    [
      'bold', 'italic', 'underline'
    ],
    [
      {
        'list': 'ordered'
      },
      {
        'list': 'bullet'
      }
    ]
  ]}

  log = 0;
  showLog = false;
  onShowCountDescription() {
    this.showLog = true;
    return (this.log = this.log + 1);
  }
  log1 = 0;
  showLog1 = false;
  onShowCountWork() {
    this.showLog1 = true;
    return (this.log1 = this.log1 + 1);
  }
  log2 = 0;
  showLog2 = false;
  onShowCountEducation() {
    this.showLog2 = true;
    return (this.log2 = this.log2 + 1);
  }
  log3 = 0;
  showLog3 = false;
  onShowCountInterests() {
    this.showLog3 = true;
    return (this.log3 = this.log3 + 1);
  }
  log4 = 0;
  showLog4 = false;
  onShowCountReferences() {
    this.showLog4 = true;
    return (this.log4 = this.log4 + 1);
  }
  log5 = 0;
  showLog5 = false;
  onShowCountSkills() {
    this.showLog5 = true;
    return (this.log5 = this.log5 + 1);
  }
  log6 = 0;
  showLog6 = false;
  onShowCountLanguagues() {
    this.showLog6 = true;
    return (this.log6 = this.log6 + 1);
  }
  log7 = 0;
  showLog7 = false;
  onShowCountCourses() {
    this.showLog7 = true;
    return (this.log7 = this.log7 + 1);
  }
  log8 = 0;
  showLog8 = false;
  onShowCountAchievements() {
    this.showLog8 = true;
    return (this.log8 = this.log8 + 1);
  }
  log9 = 0;
  showLog9 = false;
  onShowCountPublications() {
    this.showLog9 = true;
    return (this.log9 = this.log9 + 1);
  }





}
