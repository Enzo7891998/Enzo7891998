import { Equipo } from "./equipo"
import { Estadio } from "./estadio";
import { Grupo } from "./grupo.";
import { Partido } from "./partido";

test("Cuando_SeCreaUnEquipo_Deberia_CrearseConNombreYCodigo", () => { 
const Equipo1 = new Equipo("Argentina", "ARG");
expect (Equipo1.Nombre).toBe("Argentina");
expect (Equipo1.Codigo).toBe("ARG");





} );

test('101_Cuando_SeCreaUnEstadio_Deberia_CrearseConNombre', () => {
  const estadio = new Estadio("La Bombonera");
  expect(estadio.Nombre).toBe('La Bombonera');
});

test('201_Cuando_SeCreaUnGrupo_Deberia_CrearseConLetraY4Equipos', () => {
    const grupo = new Grupo("A");
    grupo.AgregarEquipo(new Equipo("Argentina", "ARG"));
    grupo.AgregarEquipo(new Equipo("Brasil", "BR"));
    grupo.AgregarEquipo(new Equipo("Bolivia", "BO"));
    grupo.AgregarEquipo(new Equipo("Ecuador", "EC"));
    expect(grupo.getNombre()).toBe("A");
    expect(grupo.Equipos.length).toBe(4);
    expect(grupo.Equipos[0].Nombre).toBe("Argentina");
    expect(grupo.Equipos[1].Nombre).toBe("Brasil");
    expect(grupo.Equipos[2].Nombre).toBe("Bolivia");
    expect(grupo.Equipos[3].Nombre).toBe("Ecuador");
  });

  test('202_Cuando_SeCreaUnGrupoConMasDeUnaLetra_Deberia_ArrojarUnError', () => {
    const grupo = new Grupo("AR");
    try {
      expect(grupo.getNombre()).toBe("A");
    } catch (error) {
  
    }
  });


test('204_Cuando_SePidePartido1_Deberia_DevolverElPartido1DelGrupoLocalEquipo1VisitanteEquipo2', () => {
  const grupo = new Grupo("A");
  grupo.AgregarEquipo(new Equipo("Argentina", "AR"));
  grupo.AgregarEquipo(new Equipo("Mexico", "MX"));
  grupo.AgregarEquipo(new Equipo("Bolivia", "BO"));
  grupo.AgregarEquipo(new Equipo("Ecuador", "EC"));

  const local = new Equipo("Argentina", "AR");
  const visitante = new Equipo("Mexico", "MX");

  const partido = new Partido;
  partido.CreacionPartido(1, grupo, local, visitante);
  partido.AgregarPartido(partido);


  expect(partido.devolverPartido(partido)).toBe("Local: Argentina Visitante: Mexico");
});

