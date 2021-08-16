import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css']
})
export class PinfoComponent implements OnInit {

  lang:any;

  constructor() { 
  }
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'english';
  }

  changeLang(lang: any){
      localStorage.setItem('lang', lang);
      window.location.reload();

  }

public url="./assets/banner1.jpg";

onselectFile(e:any){
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }
}
}  
