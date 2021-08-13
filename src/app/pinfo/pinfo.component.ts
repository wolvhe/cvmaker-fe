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
  }

  visible:boolean=false;

  displayinfo(){
    return this.visible = !this.visible;
   }

  
}
