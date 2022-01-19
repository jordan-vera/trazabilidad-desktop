export class Detalle {

    public IDDETALLE: number;
    public IDLOTE: number;
    public CANT_CAJAS: number;
    public FECHA_D: string;
    public OBSERVACION: string;
    public IDTRAZABILIDAD: number

    constructor(
        IDDETALLE: number,
        IDLOTE: number,
        CANT_CAJAS: number,
        FECHA_D: string,
        OBSERVACION: string,
        IDTRAZABILIDAD: number
    ){
        this.IDDETALLE = IDDETALLE;
        this.IDLOTE = IDLOTE;
        this.CANT_CAJAS = CANT_CAJAS;
        this.FECHA_D = FECHA_D;
        this.OBSERVACION = OBSERVACION;
        this.IDTRAZABILIDAD = IDTRAZABILIDAD;
    }
}

export class DetalleTemporal {
    public IDLOTE: number;
    public LOTE: string;
    public CANT_CAJAS: number;
    public OBSERVACION: string;

    constructor(
        IDLOTE: number,
        LOTE: string,
        CANT_CAJAS: number,
        OBSERVACION: string,
    ){
        this.IDLOTE = IDLOTE;
        this.LOTE = LOTE;
        this.CANT_CAJAS = CANT_CAJAS;
        this.OBSERVACION = OBSERVACION;
    }
}