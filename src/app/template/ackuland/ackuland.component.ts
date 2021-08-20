import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ExperienceService } from 'src/app/shared/experience.service';
import { Experience } from 'src/app/shared/cvmaker.model';


@Component({
  selector: 'app-ackuland',
  templateUrl: './ackuland.component.html',
  styleUrls: ['./ackuland.component.css'],
  providers: [ExperienceService]
})
export class AckulandComponent implements OnInit {
  constructor(public styling: CommonService, public expService: ExperienceService) {}

  ngOnInit(): void {
    this.refreshInfoList();
  }
  refreshInfoList() {
    this.expService.getInfoList().subscribe((res) => {
      this.expService.experience = res as Experience[];
    })
    }
 

}
