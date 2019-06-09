import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental } from '../models';
import { RentalService } from '../services/rental.service';
import { HttpClient } from '@angular/common/http';
import { User, Review } from '../models';

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
  public user: User = new User();

  constructor(
    private navCtrl:  NavController,
    private rentalService: RentalService,
    private httpClient: HttpClient
    ) {

      const userId = localStorage.getItem("user_id");
    
      if(userId) {
        this.httpClient
          .get("http://localhost:3000/api/users/" + userId)
          .subscribe(
            //If you get problems with this code, change response type to any instead of User
            (response: User) => {
              console.log(response);
    
              //The user variable is defined above as a PUBLIC variable which we can use in this page.
              //We reference user in the html now.
              this.user.id = response.id;
              this.user.firstname = response.firstname;
              this.user.lastname = response.lastname;
              this.user.email = response.email;
            }
          );
      } else {
        //Navigate to login page
        this.navCtrl.navigateForward('login');
      }
    
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
      {queryParams: {q: "rentals", 
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
