import { Equipo } from "./equipo";
import { Grupo } from "./grupo.";
export class Partido {
    public NumeroPartido: Number;
    public Grupo: Grupo
    public equipoLocal: Equipo
    public equipoVisitante: Equipo;
    public Partido: Partido[] = [];



public CreacionPartido(numero: Number, grupo: Grupo, local: Equipo, visitante: Equipo) {
    for (let i = 0; i < 4; i++) {
        if (grupo.Equipos[i].Nombre == local.Nombre) {
            for (let j = 0; j < 4; j++) {
                if (grupo.Equipos[j].Nombre == visitante.Nombre) {
                    this.NumeroPartido = numero;
                    this.Grupo = grupo;
                    this.equipoLocal = local;
                    this.equipoVisitante = visitante;
                }
            }
        }
    }
}
public AgregarPartido(partido: Partido){
    if(partido != null){
        this.Partido.push(partido);
        return true;
    }
    else{
        return false;
    }
}

public devolverPartido(partido: Partido): string {
    return "Local: " + partido.equipoLocal.Nombre + " Visitante: " + partido.equipoVisitante.Nombre;

}


}