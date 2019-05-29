import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { User, Review } from '../models';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  public firstname: string;
  public users: Array<User> = new Array();
  public reviews: Array<Review> = new Array();
  
  public setFirstname(firstname: string) {
    this.firstname = firstname;
  }

  public currentUser: User;
  public loggedIn: boolean = true;

  public review: Review;

  constructor(private  navCtrl:  NavController) {

  let review1 = new Review();
    review1.wordreview = "Pretty nice.";
    review1.rating = 4;
    review1.author = "Alan";
    review1.avatar = "https://www.thewrap.com/wp-content/uploads/2018/09/mcclean.jpg";

  let review2 = new Review();
    review2.wordreview = "Cleaned up everything!";
    review2.rating = 5;
    review2.author = "Jenn";
    review2.avatar = "https://createherstock.com/wp-content/uploads/2018/05/createherstock-downtown-isha-gaines-40-640x360.jpg";

  let review3 = new Review();
    review3.wordreview = "Thank you for staying over!"
    review3.rating = 5;
    review3.author = "Lee";
    review3.avatar = "https://images.thestar.com/F0VhDpMu7NB9Waf6wxVcgPEfbL0=/650x650/smart/filters:cb(1548689313694)/https://www.thestar.com/content/dam/thestar/entertainment/television/analysis/2019/01/25/is-this-the-breakout-year-for-asian-men-in-leading-roles/simu_liu.jpg";

  this.reviews.push(review1);
  this.reviews.push(review2);
  this.reviews.push(review3);

  this.currentUser = new User();
  this.currentUser.firstname = "Eric";
  this.currentUser.lastname = "Zhao";
  this.currentUser.city = "Toronto";
  this.currentUser.country = "Canada";
  this.currentUser.email = "ez.zhao@mail.utoronto.ca"
  this.currentUser.phone = "+1 647-330-1891";
  this.currentUser.bookings = 3;

  let user1 = new User();
    user1.firstname = "First";
    user1.lastname = "Name";

  let user2 = new User();
    user2.firstname = "Middle";
    user2.lastname = "Name";

  let user3 = new User();
    user3.firstname = "Last";
    user3.lastname = "Name";

    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);

  // this.review1 = new Review();
  // this.review1.wordreview = "Pretty nice.";
  // this.review1.rating = 4;

  // this.review2 = new Review();
  // this.review2.wordreview = "Cleaned up everything!";
  // this.review2.rating = 5;

  }

  ngOnInit() {
  }
  
  goLog() {
    this.navCtrl.navigateForward('login');
  }
  
}
