import { Phones } from "./phones";

export class User {
    id: string =""; // :? no es obligatorio
    name: string;
    email: string;
    password: string;
    //Phones phones;

    constructor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password
    }
}
