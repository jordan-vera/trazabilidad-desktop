export class Canton{

    public IDCANTON: number;
    public IDPROVINCIA: number;
    public CANTON: string;

    constructor(
        IDCANTON: number,
        IDPROVINCIA: number,
        CANTON: string
    ){
        this.IDCANTON = IDCANTON;
        this.IDPROVINCIA = IDPROVINCIA;
        this.CANTON = CANTON;
    }
}

export class Provincia {
    public IDPROVINCIA: number;
    public PROVINCIA: string;

    constructor(
        IDPROVINCIA: number,
        PROVINCIA: string,
    ){
        this.IDPROVINCIA = IDPROVINCIA;
        this.PROVINCIA = PROVINCIA;
    }
}