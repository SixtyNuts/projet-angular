import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-incentive',
  templateUrl: './home-incentive.component.html',
  styleUrls: ['./home-incentive.component.scss']
})
export class HomeIncentiveComponent implements OnInit {

  @Input() number: number;
  @Input() label: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
