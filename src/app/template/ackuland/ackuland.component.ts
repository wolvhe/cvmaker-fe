import { Component, OnInit, Output,ElementRef,ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ExperienceService } from 'src/app/shared/experience.service';
import { Experience, Info } from 'src/app/shared/cvmaker.model';
import { InfoService } from 'src/app/shared/info.service';
import {jsPDF} from 'jspdf'


@Component({
  selector: 'app-ackuland',
  templateUrl: './ackuland.component.html',
  styleUrls: ['./ackuland.component.css'],
  providers: [ExperienceService,InfoService]
})
export class AckulandComponent implements OnInit {
  constructor(public styling: CommonService, public expService: ExperienceService,public infoService: InfoService) {}

  @ViewChild('content',{static:false}) el!:ElementRef;
  
  makePDF(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("file.pdf");
      }
    })
    pdf.save();
  }

  ngOnInit(): void {
    this.refreshInfoList();
    this.refreshPersonalInfoList();
  }
  refreshInfoList() {
    this.expService.getInfoList().subscribe((res) => {
      this.expService.experience = res as Experience[];
    })
    }
    refreshPersonalInfoList() {
      this.infoService.getInfoList().subscribe((res) => {
        this.infoService.users = res as Info[];
      })
    }
 

}
