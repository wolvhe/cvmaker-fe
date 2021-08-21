import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Experience } from 'src/app/shared/cvmaker.model';
import { ExperienceService } from 'src/app/shared/experience.service';

@Component({
  selector: 'app-otago',
  templateUrl: './otago.component.html',
  styleUrls: ['./otago.component.css']
})
export class OtagoComponent implements OnInit {

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
