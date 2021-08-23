import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Experience, Info } from 'src/app/shared/cvmaker.model';
import { ExperienceService } from 'src/app/shared/experience.service';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-berkeley',
  templateUrl: './berkeley.component.html',
  styleUrls: ['./berkeley.component.css'],
  providers: [ExperienceService,InfoService]
})
export class BerkeleyComponent implements OnInit {
  newData: any | string; newData_fname: any | string;
  newData_lname: any;
  newData_address: any;
  newData_city: any;
  newData_dob: any;
  newData_driving_license: any;
  newData_email: any;
  newData_gender: any;
  newData_linkedin: any;
  newData_marital_status: any;
  newData_nationality: any;
  newData_phone_no: any;
  newData_photo: any;
  newData_website: any;
  newData_pob: any;
  expData: any;
  expData_achiev_des: any;
  expData_res_des: any;
  expData_work_jobtitle: any;
  expData_edu_degree: any;
  expData_hobby: any;
  expData_ref_companyName: any;
  expData_skill: any;
  expData_lang: any;
  expData_course_des: any;
  expData_publi_des: any;

  constructor(public styling: CommonService, public expService: ExperienceService,public infoService: InfoService) { }

  ngOnInit(): void {
    this.refreshInfoList();
    this.refreshPersonalInfoList();
  }
  refreshInfoList() {
    this.expService.getInfoList().subscribe((res) => {
      this.expService.experience = res as Experience[];
      for(let i=0; i<2; i++){
        this.expData = this.expService.experience[0];
        this.expData_res_des = this.expData.res_des;
        this.expData_work_jobtitle = this.expData.work_jobtitle;
        this.expData_edu_degree = this.expData.edu_degree;
        this.expData_hobby = this.expData.hobby;
        this.expData_ref_companyName = this.expData.ref_companyName;
        this.expData_skill = this.expData.skill;
        this.expData_lang = this.expData.lang;
        this.expData_course_des = this.expData.course_des;
        this.expData_achiev_des = this.expData.achiev_des;
        this.expData_publi_des = this.expData.publi_des;
      }
    })
    }
    refreshPersonalInfoList() {
      this.infoService.getInfoList().subscribe((res) => {
        this.infoService.users = res as Info[];
        for(let i=0; i<2; i++){
          this.newData = this.infoService.users[0];
          this.newData_fname = this.newData.fname;
          this.newData_lname = this.newData.lname;
          this.newData_address = this.newData.address;
          this.newData_city = this.newData.city;
          this.newData_dob = this.newData.dob;
          this.newData_driving_license = this.newData.driving_license;
          this.newData_email = this.newData.email;
          this.newData_gender = this.newData.gender;
          this.newData_linkedin = this.newData.linkedin;
          this.newData_marital_status = this.newData.marital_status;
          this.newData_nationality = this.newData.nationality;
          this.newData_phone_no = this.newData.phone_no;
          this.newData_photo = this.newData.photo;
          this.newData_pob = this.newData.pob;
          this.newData_website = this.newData.website;
        }
      })
    }
}
