import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  title:string="Post your job for free - Hire from over 3 million assessed candidates";
  title2:string="Reach the best candidate by posting jon in 60 seconds on india's largest assesed database ";
  title3:string="Recruitment Solutions For Employers";
  constructor() { }

  ngOnInit(): void {
  }

}
