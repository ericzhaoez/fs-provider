export class Review {
    public wordreview: string;
    public rating: number;
    public author: string;
    public avatar: string;

    constructor() {
        this.wordreview = "";
    }

    public setWordreview(wordreview:string){
        this.wordreview = wordreview;
    
    }
    
    public setRating(rating:number){
        this.rating = rating;
    
    }

}