import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // @TODO : Gérer des loaders pendant les chargements (pour les inputs asynchrones type existence username et globaux comme register)
  // @TODO : Rediriger vers la liste des évènements lorqu'on essaie d'accéder à login ou register en étant connecté
  // @TODO : Gérer l'état de connexion et le nettoyage du localStorage au clic sur logout
  // @TODO : Gérer la partie connectée du menu
}
