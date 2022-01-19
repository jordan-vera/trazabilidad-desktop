export class Evaluador {

    public IDEVALUADOR: number;
    public NOMBRES: string;
    public CEDULA: string;
    public EMPRESA: string;

    constructor(
        IDEVALUADOR: number,
        NOMBRES: string,
        CEDULA: string,
        EMPRESA: string,
    ){
        this.IDEVALUADOR = IDEVALUADOR;
        this.NOMBRES = NOMBRES;
        this.CEDULA = CEDULA;
        this.EMPRESA = EMPRESA;
    }
}