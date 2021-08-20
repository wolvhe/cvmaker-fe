import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Info } from 'src/app/shared/cvmaker.model';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-ackuland',
  templateUrl: './ackuland.component.html',
  styleUrls: ['./ackuland.component.css'],
})
export class AckulandComponent implements OnInit {
 
  constructor(public styling: CommonService,public infoService: InfoService) {}

  ngOnInit(): void {}

  refreshInfoList() {
    this.infoService.getInfoList().subscribe((res) => {
      this.infoService.users = res as Info[];
    })
  }

 

}
