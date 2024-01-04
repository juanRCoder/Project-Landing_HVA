import juanPhoto from "./assets/juan.jpeg";
import oscarPhoto from "./assets/oscar.jpeg";
import JhonyPhoto from "./assets/jhony.jpeg";
import "./Team.css";

function Team() {
  return (
    <section className="sectionTeam" id="equipo">
      <div className="line">
        <h1 className="titleTeam">Equipo de desarrollo</h1>
        <div className="containerTeam">
          <div className="boxDeveloper">
            <div className="photoDeveloper">
              <img src={juanPhoto} alt="juan" title="juanRCoder" />
            </div>
            <h1>Juan Ramirez</h1>
            <h5>Desarrollador back-end</h5>
            <p>
              Conectar la web con la bases de datos , generar solicitudes y
              manejar la lógica detrás del proyecto.
            </p>
            <div className="redesDeveloper">
              <span>
                <a
                  href="https://www.linkedin.com/in/juan-ramirez-490b84271/"
                  target="_BLANK"
                >
                  Linkedin
                </a>
              </span>
              <span>
                <a href="https://github.com/juanRCoder" target="_BLANK">
                  Github
                </a>
              </span>
              <span className="twitter">
                <a href="https://www.instagram.com/juanrcoder/" target="_BLANK">
                  Instagram
                </a>
              </span>
            </div>
          </div>
          <div className="boxDeveloper">
            <div className="photoDeveloper">
              <img src={oscarPhoto} alt="0skarmp" title="0skarmp" />
            </div>
            <h1>Oscar Morales</h1>
            <h5>Desarrollador front-end</h5>
            <p>
              Diseñar y generar las interacciones que se va a mostrar, botones,
              gráficos con los cuales el huésped va interactuar.
            </p>
            <div className="redesDeveloper">
              <span>
                <a
                  href="https://www.linkedin.com/in/oskarmorales/"
                  target="_BLANK"
                >
                  Linkedin
                </a>
              </span>
              <span>
                <a href="https://github.com/0skarmp" target="_BLANK">
                  Github
                </a>
              </span>
              <span className="twitter">
                <a href="">Twitter</a>
              </span>
            </div>
          </div>
          <div className="boxDeveloper">
            <div className="photoDeveloper">
              <img src={JhonyPhoto} alt="Jharanza" title="Jharanza" />
            </div>
            <h1>Jhonny Arana</h1>
            <h5>Database Administrator</h5>
            <p>
              Diseñar la base de datos, las consultas y las búsquedas de pedidos
              de los huespedes en el hotel.
            </p>
            <div className="redesDeveloper">
              <span>
                <a
                  href="https://www.linkedin.com/in/jhony-arana-carranza-a103b350/"
                  target="_BLANK"
                >
                  Linkedin
                </a>
              </span>
              <span>
                <a href="https://github.com/Jharanza" target="_BLANK">
                  Github
                </a>
              </span>
              <span className="twitter">
                <a href="">Twitter</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
