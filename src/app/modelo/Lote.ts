export class Lote {

    public IDLOTE: number;
    public NOMBRELOTE: string;
    public HECTAREAS: string;
    public PLANTACION: number;

    constructor(
        IDLOTE: number,
        NOMBRELOTE: string,
        HECTAREAS: string,
        PLANTACION: number
    ) {
        this.IDLOTE = IDLOTE;
        this.NOMBRELOTE = NOMBRELOTE;
        this.HECTAREAS = HECTAREAS;
        this.PLANTACION = PLANTACION;
    }
}