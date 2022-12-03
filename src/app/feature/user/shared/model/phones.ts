export class Phones {
    id: string = ""; 
    number?: number;
    citycode?: number;
    countrycode?: number;


    constructor(number: number, citycode: number, countrycode: number){
        this.number = number;
        this.citycode = citycode;
        this.countrycode = countrycode;
    }
}
