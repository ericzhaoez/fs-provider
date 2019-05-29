import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Rental } from '../models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public currentRental: Rental;
  public loggedIn: boolean = true;
  public rentals: Array<Rental> = new Array();

  constructor(private  navCtrl:  NavController) {

  this.currentRental = new Rental();
  this.currentRental.city = "Lisbon";
  this.currentRental.country = "Portugal";
  this.currentRental.duration = 48;
    
  let rental1 = new Rental();
      rental1.city = "Tel Aviv";
      rental1.country = "Israel";
      rental1.duration = 30;
      rental1.cityimage = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/05/11/tel-aviv-jaffa.jpg?w968h681";

  let rental2 = new Rental();
      rental2.city = "Berlin";
      rental2.country = "Germany";
      rental2.duration = 18;
      rental2.cityimage = "https://www.berlin.de/binaries/asset/image_assets/5244280/ratio_2_1/1554712090/972x486/";
  
  let rental3 = new Rental();
      rental3.city = "Cape Town";
      rental3.country = "South Africa";
      rental3.duration = 4;
      rental3.cityimage = "https://d1ljaggyrdca1l.cloudfront.net/wp-content/uploads/sites/5/2018/07/cape-town-aerial-view-greenpoint-stadium-1600x900.jpg";

  let rental4 = new Rental();
      rental4.city = "Sydney";
      rental4.country = "Australia";
      rental4.duration = 10;
      rental4.cityimage = "https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200";

  this.rentals.push(rental1);
  this.rentals.push(rental2);
  this.rentals.push(rental3);
  this.rentals.push(rental4);
  
    }

  goHome() {
    this.navCtrl.navigateForward('tabs');
  }

  goListing() {
    this.navCtrl.navigateForward('rental-details');
  }
  
}


