import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-incentives',
  templateUrl: './home-incentives.component.html',
  styleUrls: ['./home-incentives.component.scss']
})
export class HomeIncentivesComponent implements OnInit {

  // incentives: Array<Incentive>
  public incentives: any;

  constructor() { }

  ngOnInit() {
    this.incentives = [
      {
        name: 'meet-neighbors',
        text: 'Rencontrez vos voisins dans une ambiance ludique'
      },
      {
        name: 'advantages',
        text: 'Obtenez des avantages dans les commerces locaux'
      },
      {
        name: 'share-moment',
        text: 'Des activités à partager avec toutes les générations'
      },
      {
        name: 'try-games',
        text: 'Essayer les jeux avant de les acheter'
      },
      {
        name: 'member-rewards',
        text: 'Nous récompensons nos membres actifs'
      },
      {
        name: 'play-everywhere',
        text: 'Des parties où que vous soyez'
      },
    ];
  }

}
