import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../shared/models/Activity';

@Component({
  selector: 'app-home-activity-card',
  templateUrl: './home-activity-card.component.html',
  styleUrls: ['./home-activity-card.component.scss']
})
export class HomeActivityCardComponent implements OnInit {

  @Input() activity: Activity;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

}
