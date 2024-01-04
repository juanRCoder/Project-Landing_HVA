import "./Front.css";

function Front() {
  return (
    <section className="bgFront">
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
        <button className="CallAction">
          <a
            href="https://github.com/juanRCoder/Hotel_Virtual_Assitant"
            target="_BLANK"
          >
            Aplicativo
          </a>
        </button>
      </div>
    </section>
  );
}

export default Front;
