import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.page.html',
  styleUrls: ['./rental-details.page.scss'],
})
export class RentalDetailsPage {

  constructor(private  navCtrl:  NavController) { }

  goHome() {
    this.navCtrl.navigateForward('tabs');
  }

}