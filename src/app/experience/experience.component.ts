import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { Experience } from '../shared/cvmaker.model';
import { ExperienceService } from '../shared/experience.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html', 
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService]
})

export class ExperienceComponent implements OnInit {
 

  constructor(public expService: ExperienceService) { }

  ngOnInit(){
    this.refreshInfoList();
    this.resetForm();
}
myFunction() {
  window.location.href="http://programminghead.com";  
}

  onSubmit(form : NgForm) {
    // if(form.value._id == "") {
    this.expService.postInfo(form.value).subscribe((res) => {
      this.refreshInfoList();
      console.log("hello",res)
    });
  // }
  }
  refreshInfoList() {
  this.expService.getInfoList().subscribe((res) => {
    this.expService.experience = res as Experience[];
  })
  }
  resetForm(form ?: NgForm) {
  if(form)
  form.reset();
  this.expService.selectedExperience = {
    _id: "",
    res_des: "",
    work_jobtitle: "",
    work_city: "",
    work_employer: "",
    work_startDate_month: "",
    work_startDate_year: "",
    work_endDate_month: "",
    work_endDate_year: "",
    work_des: "",
    edu_degree: "",
    edu_city: "",
    edu_school: "",
    edu_startDate_month: "",
    edu_startDate_year: "",
    edu_endDate_month: "",
    edu_endDate_year: "",
    edu_des: "",
    hobby: "",
    ref_companyName: "",
    ref_contactPerson: "",
    ref_phoneNo: null,
    ref_email: "",
    skill: "",
    skill_startDate: "",
    lang: "",
    lang_startDate: "",
    course_title: "",
    course_institution: "",
    course_startDate_month: "",
    course_startDate_year: "",
    course_endDate_month: "",
    course_endDate_year: "",
    course_des: "",
    achiev_des: "",
    publi_des: ""
  }
  }


  filterArray(index: any) {
    console.log(index)
    this.formArray = this.formArray.filter((d,i) => i!= index)
  }
  filterResumeArray(index: any) {
    console.log(index)
    this.formResumeArray = this.formResumeArray.filter((d,i) => i!= index)
  }
  filterEduArray(index: any) {
    console.log(index)
    this.formEduArray = this.formEduArray.filter((d,i) => i!= index)
  }
  filterInterestArray(index: any) {
    console.log(index)
    this.formInterestArray = this.formInterestArray.filter((d,i) => i!= index)
  }
  filterRefArray(index: any) {
    console.log(index)
    this.formRefArray = this.formRefArray.filter((d,i) => i!= index)
  }
  filterAchieveArray(index: any) {
    console.log(index)
    this.formAchieveArray = this.formAchieveArray.filter((d,i) => i!= index)
  }
  filterPublicArray(index: any) {
    console.log(index)
    this.formPublicArray = this.formPublicArray.filter((d,i) => i!= index)
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
  
  formResumeArray = [{}]

  formEduArray = [{}]

  formInterestArray=[{}]

  formRefArray=[{}]

  formAchieveArray = [{}]

  formPublicArray = [{}]

 

  
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
