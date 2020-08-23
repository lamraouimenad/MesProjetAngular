import { Component , OnInit } from '@angular/core';
import {DeveloppeurService} from './services/developpeur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectAngularDev';
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 200
    );
  });
  isAuth = false;
  developpeurs: any[];
  constructor(private developpeurService: DeveloppeurService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnInit() {
    this.developpeurs = this.developpeurService.developpeurs;
  }
  // tslint:disable-next-line:typedef
  onAllumer() {
    alert('On allume tout !');
  }
}
