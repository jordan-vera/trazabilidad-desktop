export class Trazabilidad {

    public IDTRAZABILIDAD: number;
    public IDEVALUADOR: number;
    public FECHA: string;
    public HORA: string;
    public SEMANA: number;
    public PORCENTAJEHIGIENE: string;
    public CALIFICACIONEVALUADOR: string;
    public CANTIDADCAJAS: string;
    public IDEXPORTADORA: number;

    constructor(
        IDTRAZABILIDAD: number,
        IDEVALUADOR: number,
        FECHA: string,
        HORA: string,
        SEMANA: number,
        PORCENTAJEHIGIENE: string,
        CALIFICACIONEVALUADOR: string,
        CANTIDADCAJAS: string,
        IDEXPORTADORA: number
    ) {
        this.IDTRAZABILIDAD = IDTRAZABILIDAD;
        this.IDEVALUADOR = IDEVALUADOR;
        this.FECHA = FECHA;
        this.HORA = HORA;
        this.SEMANA = SEMANA;
        this.PORCENTAJEHIGIENE = PORCENTAJEHIGIENE;
        this.CALIFICACIONEVALUADOR = CALIFICACIONEVALUADOR;
        this.CANTIDADCAJAS = CANTIDADCAJAS;
        this.IDEXPORTADORA = IDEXPORTADORA;
    }
}


export class InfoQR {

    public lote: string;
    public exportadora: string;
    public evaluador: string;
    public fecha: string;
    public hora: string;
    public semana: string;
    public higiene: string;
    public calificacion: string;

    constructor(
        lote: string,
        exportadora: string,
        evaluador: string,
        fecha: string,
        hora: string,
        semana: string,
        higiene: string,
        calificacion: string
    ) {
        this.lote = lote;
        this.exportadora = exportadora;
        this.evaluador = evaluador;
        this.fecha = fecha;
        this.hora = hora;
        this.semana = semana;
        this.higiene = higiene;
        this.calificacion = calificacion;
    }
}