import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  dna = 123
  hired = 53
  applied = 213
  invite = 40
  offer = 503
  reject = 453
  sent = 56


  constructor() { }

  ngOnInit(): void {
  }

}
