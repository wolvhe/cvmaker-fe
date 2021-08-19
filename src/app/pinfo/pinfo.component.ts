import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { InfoService } from '../shared/info.service';
import { Info } from '../shared/cvmaker.model';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css'],
  providers: [InfoService]
})
export class PinfoComponent implements OnInit {

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

zoom : any=1;
 
rotate(){
  this.value=this.value+90;
  if(this.value>360){
    this.value=this.value-360;
  }
  return this.value;

}

reset(){

  this.url="";

  console.log(this.url);
}
change(e:any){
  this.zoom=e.target.value;
  console.log(e)
}
onSubmit(form : NgForm) {
  if(form.value._id == "") {
    this.infoService.postInfo(form.value).subscribe((res) => {
      // this.resetForm(form);
      this.refreshInfoList();
      console.log("hello",res)
    });
    
  }
  // else {
  //   this.employeeService.putInfo(form.value).subscribe((res) => {
  //     // this.resetForm(form);
  //     // this.refreshEmployeeList();
  //   });
  // }
}
refreshInfoList() {
  this.infoService.getInfoList().subscribe((res) => {
    this.infoService.users = res as Info[];
  })
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
