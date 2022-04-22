export class Lote {

    public IDLOTE: number;
    public NOMBRELOTE: string;
    public PLANTACION: number;

    constructor(
        IDLOTE: number,
        NOMBRELOTE: string,
        PLANTACION: number,
    ) {
        this.IDLOTE = IDLOTE;
        this.NOMBRELOTE = NOMBRELOTE;
        this.PLANTACION = PLANTACION;
    }
}