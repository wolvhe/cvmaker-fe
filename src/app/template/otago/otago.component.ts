import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Experience, Info } from 'src/app/shared/cvmaker.model';
import { ExperienceService } from 'src/app/shared/experience.service';
import { InfoService } from 'src/app/shared/info.service';

@Component({
  selector: 'app-otago',
  templateUrl: './otago.component.html',
  styleUrls: ['./otago.component.css'],
  providers: [ExperienceService,InfoService]


})
export class OtagoComponent implements OnInit {

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
