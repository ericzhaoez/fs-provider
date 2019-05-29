export class Rental {
    public city: string;
    public country: string;
    public duration: number;
    public cityimage: string;


constructor() {
    this.city = "";
    this.country = "";
}

public setCity(city:string){
    this.city = city;

}

public setCountry(country:string){
    this.country = country;

}

public setDuration(duration:number){
    this.duration = duration;

}

}