import "./Front.css";

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
        <iframe
          title="Demo Hotel Virtual Assitant"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/2-6Xt6ees0g"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Front;
