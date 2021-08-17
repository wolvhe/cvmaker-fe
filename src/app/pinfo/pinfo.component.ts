import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css']
})
export class PinfoComponent implements OnInit {

  constructor() { 
  }
  ngOnInit(): void {
  console.log(this.url);
  }

public url="./assets/banner1.jpg";
public deg=0;

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

}

reset(){

  this.url="";

  console.log(this.url);
}



}  
