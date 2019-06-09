import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { User, Rental } from '../models';
import { HttpClient } from "@angular/common/http";
import { RentalService } from '../services/rental.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rentaldetails',
  templateUrl: './rentaldetails.page.html',
  styleUrls: ['./rentaldetails.page.scss'],
})
export class RentaldetailsPage implements OnInit {

    public property: any = {
      name: "",
      location: "",
      imageUrl: "",
      price: ""
    };

    private id: number;
    public city: string;
    public currentRental: Rental;

    public rentaldetails: Rental;
    public loggedIn: boolean = true;
    public rentals: Array<Rental>;
  
    constructor(
      private httpClient: HttpClient,
      private navCtrl:  NavController,
      private activatedRoute: ActivatedRoute,
      private rentalService: RentalService,
      private toastController: ToastController
      ) {

    this.rentalService.getAllRentals();
    this.rentals = this.rentalService.rentals;

      }

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

    ngOnInit() {
      // let receivedQueryParams = function(data: any) {
    //   console.log(data);
    //   console.log(data.params.rentalName);

    //   /*will not work*/ this.nameOfRental = data.params.rentalName;
    // }

    let arrow = (data: any) => {
      // this.city = data.params.rentalName;
      this.id = data.params.rentalId;

      // // Find the right rental by ID
      // this.rentals.forEach(
      //   (rental: Rental) => {
      //     if (rental.id == this.id) {
      //       // Display this rental
      //       this.currentRental = rental;
      //     }
      //   }
      // )
      this.currentRental = this.rentalService.findRentalById(this.id);

      if (!this.currentRental) {
        alert("Rental not found!");
        this.navCtrl.navigateBack("");
      }
    };

    this.activatedRoute.queryParamMap.subscribe(
      // receivedQueryParams,
      arrow
    );

  }
  
    goCreate() {
      this.navCtrl.navigateForward('tabs/tab2');
    }
  
    goListing() {
      this.navCtrl.navigateForward('rental-details');
    }
    
    goRentals() {
      this.navCtrl.navigateForward('tabs/tab3');
      this.goToast();
    }
  }
