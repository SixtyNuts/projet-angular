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
        label: 'Rencontrez vos voisins',
        text: 'Rencontrez vos voisins dans une ambiance ludique'
      },
      {
        name: 'advantages',
        label: 'Obtenez des avantages',
        text: 'Obtenez des avantages dans les commerces locaux'
      },
      {
        name: 'share-moment',
        label: 'Des activités à partager',
        text: 'Des activités à partager avec toutes les générations'
      },
      {
        name: 'try-games',
        label: 'Essayer les jeux avant de les acheter',
        text: 'Essayer les jeux avant de les acheter'
      },
      {
        name: 'member-rewards',
        label: 'Récompenses pour nos membres actifs',
        text: 'Nous récompensons nos membres actifs'
      },
      {
        name: 'play-everywhere',
        label: 'Des parties où que vous soyez',
        text: 'Des parties où que vous soyez'
      },
    ];
  }

}
