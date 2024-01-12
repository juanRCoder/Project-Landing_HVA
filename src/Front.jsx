import "./Front.css";
import DEMO from "./assets/DEMO_HVA.mp4";

function Front() {
  return (
    <section className="bgFront" id="front">
      <nav className="navegacion">
        <ul>
          <li>
            <a className="enlace" href="#caracteristicas">
              Caracteristicas
            </a>
          </li>
          <li>
            <a className="enlace" href="#inpiracion">
              Inspiración
            </a>
          </li>
          <li>
            <a className="enlace" href="#transcurso">
              Transcurso
            </a>
          </li>
          <li>
            <a className="enlace" href="#equipo">
              Equipo
            </a>
          </li>
        </ul>
      </nav>
      <h1>Hotel Virtual Assitant</h1>
      <h5>“Descubre un servicio excepcional en cada interacción”</h5>
      <div className="boxButton2">
        <video src={DEMO} controls></video>
      </div>
    </section>
  );
}

export default Front;
