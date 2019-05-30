import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Rental } from '../models';

@Component({
  selector: 'app-rental1',
  templateUrl: './rental1.page.html',
  styleUrls: ['./rental1.page.scss'],
})
export class Rental1Page implements OnInit {

    public rental1: Rental;
    public loggedIn: boolean = true;
    public rentals: Array<Rental> = new Array();
  
    constructor(private  navCtrl:  NavController) {
  
    this.rental1 = new Rental();
    this.rental1.city = "Tel Aviv";
    this.rental1.country = "Israel";
    this.rental1.duration = 30;
    this.rental1.cityimage = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/05/11/tel-aviv-jaffa.jpg?w968h681";
    
      }
  
    goCreate() {
      this.navCtrl.navigateForward('tabs/tab2');
    }
  
    goListing() {
      this.navCtrl.navigateForward('rental-details');
    }
    
    goRentals() {
      this.navCtrl.navigateForward('tabs/tab3');
    }

    
    ngOnInit() {
    }

  }
  
  

