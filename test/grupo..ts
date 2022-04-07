import { Equipo } from "./equipo";

export class Grupo{
    public Nombre: string ;
    public Equipos: Equipo[] = [];

    constructor(nombre: string){
        this.Nombre = nombre;
    }
    public AgregarEquipo(equipos: Equipo){
        if(equipos.Nombre != "" && equipos.Codigo != ""){
        const aux = new Equipo(equipos.Nombre, equipos.Codigo);
        this.Equipos.push(aux);
        } 
    }


    public getNombre(){
        return this.Nombre;
    }
}