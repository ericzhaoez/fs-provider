import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public property: any = {
    name: "",
    location: "",
    imageUrl: "",
    price: ""
  };

  constructor(
    private httpClient: HttpClient,
    private  navCtrl:  NavController,
    private toastController: ToastController
    ) { }

  submit() {
    console.log("Submitting to the server...");
    console.log(this.property);

    this.httpClient
      .post("http://localhost:3000/api/properties", this.property)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.navCtrl.navigateForward('tabs/tab3', {
            // queryParams: {
            //   propertyId: response.id
            // }
          });
          this.goToast();
        },
        (err) => {
          console.log(err);
          // this.goAlert(err.error.message);
        }
      );
  }

  goHome() {
    this.navCtrl.navigateForward('tabs');
  }

  async goToast() {
    const toast = await this.toastController.create({
      header: 'Thank you for your submission!',
      duration: 5000,
      position: 'top',
      // buttons: [
      //   {
      //     text: 'Hide',
      //     role: 'cancel',
      //     handler: () => {
      //       console.log('Cancel clicked');
      //     }
      //   }
      // ]
    });
    toast.present();
  }
}
