export interface Interfaces {
}


export interface demanda{
    id_demanda:number,
    fecha_demanda:string,
    detalle_demanda:string,
    rut_demandado:string,
    nom_demandado:string,
    ape_demandado:string,
    tel_demandado:string,
    rut_dmte:string,
    nom_dmte:string,
    ape_dmte:string,
    tel_dmte:string,
    tipo_demanda_id_tp_demanda:number,
    caso_id_caso:number,
    id_comuna_dmdo:number,
    id_comuna_dmte:number,
}

export interface caso {
    id_caso:string,
    fecha_caso:string,
    nombre_usuario:string,
    seguimiento:string,
    detalle_caso:string,
    estado:string
    // demanda:demanda[];
}

export interface comuna {
    id_comuna:number,
    nom_comuna:string,
}
