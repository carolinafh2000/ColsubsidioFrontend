export class Phones {
    //idphone: string = ""; 
    number?: any;
    citycode?: any;
    countrycode?: any;

    constructor(number: any, citycode: any, countrycode: any){
        this.number = number;
        this.citycode = citycode;
        this.countrycode = countrycode;
    }
}

export class User {
    //id: string =""; 
    name: string;
    email: string;
    password: string;
    phones?: Phones[] = [];
    ;

    constructor(name: string, email: string, password: string, phones: Phones[]){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phones = phones;
    }
}
