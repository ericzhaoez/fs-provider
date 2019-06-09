import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  constructor(
    private httpClient: HttpClient,
    private  navCtrl:  NavController,
    private alertController: AlertController,
    private toastController: ToastController
    ) { }

    submit() {
      console.log("Submitting to the server...");
      console.log(this.user);
  
      this.httpClient
        .post("http://localhost:3000/api/users", this.user)
        .subscribe(
          (response: any) => {
            console.log(response);
            // this.goLogin();
            const userId = response.id;
            localStorage.setItem("user_id", userId);
            this.navCtrl.navigateForward('tabs/tab3', {
              queryParams: {
                userId: response.id
              }
            });
            this.goToast();
          },
          (err) => {
            console.log(err);
            this.goAlert();
          }
        );
    }

  ngOnInit() {
  }
  goLogin() {
    this.navCtrl.navigateForward('login');
  }

  async goAlert() {
  
    const alert = await this.alertController.create({
      header: 'Registration error',
      // subHeader: 'A user already exists with this email',
      message: 'A user already exists with this email address',
      buttons:[
        {
          text: 'OK',
          handler: () => {
            // console.log('OK clicked');
          }
        }
      ]
    });
    return await alert.present();
  }

  async goToast() {
  
    const toast = await this.toastController.create({
      message: 'Registration Successful',
      duration: 3000,
      position: "top"
    });
    toast.present();
  }

}
