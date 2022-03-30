export interface Interfaces {
}


export interface demanda{
    id:number,
    fecha:string,
    tipoDemanda:string,
    detalleDemanda:string,
    rutDdo:string,
    NombreDdo:string,
    apeDdo:string,
    telDdo:string,
    comDdo:string,
    rutDte:string,
    NombreDte:string,
    apeDte:string,
    telDte:string,
    comDte:string,
}

export interface caso {
    id:string,
    fecha:string,
    abogado:string,
    seguimiento:string,
    estado:string
    // demanda:demanda[];
}
