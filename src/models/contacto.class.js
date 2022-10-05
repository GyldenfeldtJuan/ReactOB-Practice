export class Contacto {
    /*Nombre: que será un String.
    Apellido: también un String.
    Email: de nuevo un String.
    Conectado: será un booleano que nos
    indicará si la persona está
    conectada o no.*/
    name = '';
    surname = '';
    email = '';
    conected = false

    constructor(name, surname, email, conected){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.conected = conected;
    }

}