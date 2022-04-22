export interface Interfaces {
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


export interface tpDemanda {
    id_tp_demanda:number,
    desc_tp_demanda:string
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
    desc_tp_demanda:string,
    caso_id_caso:number,
    nom_comuna_dmdo:string,
    nom_comuna_dmte:string,
}

export interface demandaAgregar{
    id_demanda:string,
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
    tipo_demanda_id_tp_demanda:string,
    caso_id_caso:string,
    id_comuna_dmdo:string,
    id_comuna_dmte:string,
}


export interface usuario {
    id_usuario:number,
    rut_usuario:string,
    nombre_usuario:string,
    rol_id_rol:number
}

export interface estado{
    id_estado:number,
    desc_estado:string
}

export interface casoAgregar {
    id_caso:string,
    fecha_caso:string,
    estado:string,
    seguimiento:string,
    detalle_caso:string,
    usuario_id_usuario:string,
}

export interface casoModificar{  
    estado:string,
    seguimiento:string,
    detalle_caso:string,
    usuario_id_usuario:string,
    id_caso:string,    
}

export interface demandaModificar{
    id_demanda:number,
    detalle_demanda:string,
    rut_demandado:string,
    nom_demandado:string,
    ape_demandado:string,
    tel_demandado:string,
    rut_dmte:string,
    nom_dmte:string,
    ape_dmte:string,
    tel_dmte:string,
    tipo_demanda_id_tp_demanda:string,
    caso_id_caso:number,
    id_comuna_dmdo:string,
    id_comuna_dmte:string,
}

export interface login {
    rut_usuario:string,
    password:string,
}