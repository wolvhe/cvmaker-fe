import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { InfoService } from '../shared/info.service';
import { Info } from '../shared/cvmaker.model';
import { CroppedEvent } from 'ngx-photo-editor';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css'],
  providers: [InfoService]
})
export class PinfoComponent implements OnInit {
  imageChangedEvent: any;
  base64: any;
  lang:any;

  constructor(public styling:CommonService, public infoService: InfoService) { 

  }
  ngOnInit(): void {
    this.base64="";
    this.refreshInfoList();
    this.resetForm();

  }


public url="";


reset(){

  this.url="";
  this.base64="";

  console.log(this.url);
}
onSubmit(form : NgForm) {
    form.value.photo=this.base64;
    this.infoService.postInfo(form.value).subscribe((res) => {
      this.refreshInfoList();
      console.log("hello",res)
      console.log(res)
    });

}
refreshInfoList() {
  this.infoService.getInfoList().subscribe((res) => {
    this.infoService.users = res as Info[];
  })
}


fileChangeEvent(event: any) {
  this.imageChangedEvent = event;
}

imageCropped(event: CroppedEvent) {
  this.base64 = event.base64;
  this.url=this.base64;
  console.log(this.base64);
  console.log(typeof this.base64);

}

resetForm(form ?: NgForm) {
  if(form)
  form.reset();
  this.infoService.selectedInfo = {
    _id: "",
    photo: "",
    fname: "",
    lname:"",
    email:"",
    phone_no: null,
    address:"",
    zip_code: "",
    city: "",
    dob: "",
    pob: "",
    driving_license: "",
    gender: "",
    nationality: "",
    marital_status: "",
    linkedin: "",
    website: "",
  }
}


}