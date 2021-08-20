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
    console.log(this.url);
    this.lang = localStorage.getItem('lang') || 'english';
    this.refreshInfoList();
    this.resetForm();
  }

  changeLang(lang: any){
      localStorage.setItem('lang', lang);
      window.location.reload();

  }

public url="";
public value=0;

onselectFile(e:any){
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    
    }
  }
}



reset(){

  this.url="";
  this.base64="";

  console.log(this.url);
}
onSubmit(form : NgForm) {
    this.infoService.postInfo(form.value).subscribe((res) => {
      this.refreshInfoList();
      console.log("hello",res)
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
}

resetForm(form ?: NgForm) {
  if(form)
  form.reset();
  this.infoService.selectedInfo = {
    _id: "",
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

