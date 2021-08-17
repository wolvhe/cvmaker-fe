import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css']
})
export class PinfoComponent implements OnInit {

  lang:any;

  constructor(public styling:CommonService) { 
    
  }
  ngOnInit(): void {
    console.log(this.url);
    this.lang = localStorage.getItem('lang') || 'english';
  }

  changeLang(lang: any){
      localStorage.setItem('lang', lang);
      window.location.reload();

  }

public url="./assets/banner1.jpg";
public value=0;

onselectFile(e:any){
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    console.log(this.url);
    }
  }
}


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

}  
