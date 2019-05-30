import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private  navCtrl:  NavController,
    private toastController: ToastController
    ) { }

  goHome() {
    this.navCtrl.navigateForward('tabs');
  }

  async goToast() {
    const toast = await this.toastController.create({
      header: 'Thank you for your submission!',
      duration: 5000,
      position: 'bottom',
      buttons: [
        {
          text: 'Hide',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
