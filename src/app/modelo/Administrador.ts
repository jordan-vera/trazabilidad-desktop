export class Administrador {

    public idadmin: number;
    public nombres: string;
    public nick: string;
    public clave: string;
    public tipo: string;

    constructor(
        idadmin: number,
        nombres: string,
        nick: string,
        clave: string,
        tipo: string
    ){
        this.idadmin = idadmin;
        this.nombres = nombres;
        this.nick = nick;
        this.clave = clave;
        this.tipo = tipo;
    }
}