import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Experience } from 'src/app/shared/cvmaker.model';
import { ExperienceService } from 'src/app/shared/experience.service';

@Component({
  selector: 'app-princeton',
  templateUrl: './princeton.component.html',
  styleUrls: ['./princeton.component.css'],
  providers: [ExperienceService]
})
export class PrincetonComponent implements OnInit {

  constructor(public styling: CommonService, public expService: ExperienceService) { }

  ngOnInit(): void {
    this.refreshInfoList();
  }
  refreshInfoList() {
    this.expService.getInfoList().subscribe((res) => {
      this.expService.experience = res as Experience[];
    })
    }


}
