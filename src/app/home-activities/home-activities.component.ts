import { Component, OnInit, ViewChild } from '@angular/core';
import { Activity } from '../shared/models/Activity';

@Component({
  selector: 'app-home-activities',
  templateUrl: './home-activities.component.html',
  styleUrls: ['./home-activities.component.scss']
})
export class HomeActivitiesComponent implements OnInit {

  @ViewChild('wrapper') wrapper: any;

  activities: Array<Activity>;

  currentActivityIndex: number = 0;

  activityCardWidth: number = 280;

  activityCardMargin: number = 8;

  activityCardTotalWidth: number = this.activityCardWidth + (this.activityCardMargin * 2);

  wrapperOffset: number;

  // @TODO: Modifier la gestion des activités pour ne plus avoir qu'une liste de types et que titre,
  // altText et description soient gérées dans le fichier de traductions
  // => Nécessite une gestion différente côté template

  constructor() {

      this.activities = [
      {
        type: 'ambiance',
        title: `Jeux d'ambiance`,
        // tslint:disable-next-line:max-line-length
        description: `Des jeux d'ambiance à sortir en toute occasion, avec les amis, la famille, pour partager un moment de délire ensemble. Règles simples, parties courtes.`,
      },
      {
        type: 'plateau',
        title: `Jeux de plateau`,
        // tslint:disable-next-line:max-line-length
        description: `Dans les jeux de plateau, les parties se déroulent la plupart du temps sur un plateau de jeu qui représente l’espace à parcourir ou à conquérir.
                      Ces jeux ont souvent pour avantage de présenter de belles illustrations et de nombreux accessoires qui participent au
                      réalisme et au plaisir de jouer.
                      Ils se déclinent pour tous les âges et selon des thèmes très variés.`,
      },
      {
        type: 'adresse',
        title: `Jeux d'adresse`,
        description: `Les jeux d'adresse sont des jeux destinés à tous les joueurs, grands et petits, nécessitant souvent de lancer
                      un objet. A chacun d'être le plus habile, le plus adroit pour atteindre un objectif donné.`,
      },
      {
        type: 'role',
        title: `Jeux de rôle`,
        // tslint:disable-next-line:max-line-length
        description: `Le jeu de rôle est un jeu de simulation qui permet à chaque participant d'incarner un personnage de son invention
                      et de le faire évoluer dans un univers imaginaire. Il peut être défini comme une fiction interactive
                      dans laquelle chaque joueur intervient pour ajouter sa propre histoire.`,
      },
      {
        type: 'cartes',
        title: `Jeux de cartes`,
        // tslint:disable-next-line:max-line-length
        description: `/// Des jeux pour tester votre culture générale ou bien vos connaissances sur un thème précis ou bien, en affrontant vos amis et votre famille.
                      Rassurez-vous, ces jeux permettent en général de participer même lorsqu'on n'est pas un spécialiste.`,
      },
      {
        type: 'reflexion',
        title: `Jeux de connaissances`,
        // tslint:disable-next-line:max-line-length
        description: `Des jeux pour tester votre culture générale ou bien vos connaissances sur un thème précis ou bien, en affrontant vos amis et votre famille.
                      Rassurez-vous, ces jeux permettent en général de participer même lorsqu'on n'est pas un spécialiste.`,
      },
      {
        type: 'des',
        title: `Jeux de dés`,
        // tslint:disable-next-line:max-line-length
        description: `/// Des jeux pour tester votre culture générale ou bien vos connaissances sur un thème précis ou bien, en affrontant vos amis et votre famille.
                      Rassurez-vous, ces jeux permettent en général de participer même lorsqu'on n'est pas un spécialiste.`,
      },
      {
        type: 'classique',
        title: `Jeux classiques`,
        // tslint:disable-next-line:max-line-length
        description: `/// Des jeux pour tester votre culture générale ou bien vos connaissances sur un thème précis ou bien, en affrontant vos amis et votre famille.
                      Rassurez-vous, ces jeux permettent en général de participer même lorsqu'on n'est pas un spécialiste.`,
      },
      {
        type: 'enquete',
        title: `Jeux d'enquête`,
        // tslint:disable-next-line:max-line-length
        description: `/// Des jeux pour tester votre culture générale ou bien vos connaissances sur un thème précis ou bien, en affrontant vos amis et votre famille.
                      Rassurez-vous, ces jeux permettent en général de participer même lorsqu'on n'est pas un spécialiste.`,
      },
      {
        type: 'figurines',
        title: `Jeux de figurines`,
        // tslint:disable-next-line:max-line-length
        description: `/// Des jeux pour tester votre culture générale ou bien vos connaissances sur un thème précis ou bien, en affrontant vos amis et votre famille.
                      Rassurez-vous, ces jeux permettent en général de participer même lorsqu'on n'est pas un spécialiste.`,
      },
      {
        type: 'rapidite',
        title: `Jeux de rapidité`,
        // tslint:disable-next-line:max-line-length
        description: `/// Des jeux pour tester votre culture générale ou bien vos rapidite sur un thème précis ou bien, en affrontant vos amis et votre famille.
                      Rassurez-vous, ces jeux permettent en général de participer même lorsqu'on n'est pas un spécialiste.`,
      },
      {
        type: 'enfant',
        title: `Jeux pour les enfants`,
        // tslint:disable-next-line:max-line-length
        description: `Il existe de très nombreux jeux destinés aux enfants, qu'il s'agisse de jeux d'éveil pour les plus jeunes, ou bien de jeux de
                      société dont les règles ont été adaptées pour un jeune public. Ces jeux permettent aux enfants
                      d'acquérie de nouvelles connaissances
                      tout en les initiant aux mécaniques classiques des jeux de société et en développant leur esprit logique.`,
      }
    ];

  }

  isCurrentActivity(activity: Activity): boolean {
    return this.activities[this.currentActivityIndex].type === activity.type;
  }

  getWrapperOffset(): string {
    return `translate3d(${this.wrapperOffset}px,0,0)`
  }

  selectNext(event: MouseEvent) {
    
    event.preventDefault();
    event.stopPropagation();

    if (this.currentActivityIndex == this.activities.length - 1){
      
      return

    } else {

      this.currentActivityIndex += 1;

    }

    this.wrapperOffset -= this.activityCardTotalWidth;

  }

  selectPrevious(event: MouseEvent) {

    event.preventDefault();
    event.stopPropagation();

    if (this.currentActivityIndex == 0){
      
      return

    } else {

      this.currentActivityIndex -= 1;

    }

    this.wrapperOffset += this.activityCardTotalWidth;

  }

  calculInitialOffset(): number  {

    if (this.activities.length % 2 == 0) {

      return this.wrapperOffset = ((this.activities.length / 2) * this.activityCardTotalWidth) - (this.activityCardTotalWidth / 2);

    } else {

      return this.wrapperOffset = Math.floor(this.activities.length / 2) * this.activityCardTotalWidth;

    }
    
  }

  ngOnInit() {

    this.calculInitialOffset();

  }

  ngAfterViewInit() {

  }

    // this.viewPortWidth = window.innerWidth;
    // let firstActivityCard = this.wrapper.nativeElement.firstElementChild;
    // let firstActivityCardClone = firstActivityCard.cloneNode(true);
    // this.wrapper.nativeElement.insertBefore(firstActivityCardClone, firstActivityCard);
    // this.wrapper.nativeElement.appendChild(firstActivityCard);
    // this.wrapper.nativeElement.removeChild(firstActivityCardClone);
    // this.wrapper.nativeElement.insertBefore(lastActivityCard, firstActivityCard);
    // let activityCard = this.wrapper.nativeElement.querySelector('app-home-activity-card:not(.active)');

}
