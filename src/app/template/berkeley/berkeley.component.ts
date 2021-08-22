import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Experience, Info } from 'src/app/shared/cvmaker.model';
import { ExperienceService } from 'src/app/shared/experience.service';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-berkeley',
  templateUrl: './berkeley.component.html',
  styleUrls: ['./berkeley.component.css'],
  providers: [ExperienceService,InfoService]
})
export class BerkeleyComponent implements OnInit {

  constructor(public styling: CommonService, public expService: ExperienceService,public infoService: InfoService) { }

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
