import "./Caracteristicas.css";
import character1 from "./assets/character1.jpg";
import character2 from "./assets/character2.jpg";
import character3 from "./assets/character3.png";

function Caracterisitcas() {
  return (
    <section className="sectionCharacter" id="caracteristicas">
      <div className="line2">
        <h1 className="titleCharacter">Caracteristicas</h1>
        <div className="charateresContainer">
          <div className="characterBox">
            <p>
              La aplicación no necesita un manual para poder ser utilizado por
              el usuario, debido a la simplicidad de la arquitectura, el usuario
              solo debe ingresar y buscar la opción que necesite, como si
              estuviera dando las indicaciones a una persona.
            </p>
            <div className="boxImage">
              <img src={character1} />
            </div>
          </div>
          <div className="characterBox">
            <div className="boxImage">
            <img src={character2} />
            </div>
            <p>
              Esta aplicación se udecúa a las características del hotel donde se
              va a utilizar, ya que la información debe ingresarlo el personal
              del hotel como el tipo de comidas que se sirven, el tipo de
              bebidas, las horas de atención, etc.
            </p>
          </div>
          <div className="characterBox">
            <p>
              Se pueden consultar los problemas de manera detallada en la
              sección de problemas. Así, el personal del hotel podrá estar listo
              y sabrá qué herramientas o qué personas deben ir a atender el
              problema que el huésped tiene en el momento, reduciendo el tiempo
              de respuesta al problema.
            </p>
            <div className="boxImage">
              <img src={character3} />
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
}

export default Caracterisitcas;
