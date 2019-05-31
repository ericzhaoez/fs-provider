import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental } from '../models';
import { RentalService } from '../services/rental.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public currentRental: Rental;
  public rental: Rental;
  public rentaldetails: Rental; 
  public rentals: Array<Rental> = new Array();

  constructor(
    private  navCtrl:  NavController,
    private rentalService: RentalService
    ) {

    
  this.rentaldetails = new Rental();
  // this.rentaldetails.id = 1;
  this.rentaldetails.city = "Tel Aviv";
  this.rentaldetails.country = "Israel";
  this.rentaldetails.duration = 30;

  console.log(this.rentalService);
  this.rentalService.getAllRentals();
  this.rentals = this.rentalService.rentals;

    }

    goRentals(rental: Rental) {
      this.navCtrl.navigateForward('rentaldetails', 
      {queryParams: {q: "ionic", 
        rentalId: rental.id

      }
    });
  }

  goCreate() {
    this.navCtrl.navigateForward('tabs/tab2');
  }

  goListing() {
    this.navCtrl.navigateForward('rental-details');
  }

  goBack() {
    this.navCtrl.navigateForward('tabs/tab3');
  }

  

}
