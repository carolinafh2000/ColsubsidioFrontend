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

export class User {
    id: string =""; // :? no es obligatorio
    name: string;
    email: string;
    password: string;
    phones?: Phones;

    constructor(name: string, email: string, password: string, phones: Phones){
        this.name = name;
        this.email = email;
        this.password = password;
        this.phones = phones;
    }
}
