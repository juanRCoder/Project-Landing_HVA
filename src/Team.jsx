import juanPhoto from "./assets/juan.jpeg";
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
              Pequeña narracion de lo que hizo durante el proyecto
              proyectoproyectoproyectoproyecto Pequeña narracion de lo que
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
              <img src={juanPhoto} alt="juan" title="juanRCoder" />
            </div>
            <h1>Juan Ramirez</h1>
            <h5>Desarrollador back-end</h5>
            <p>
              Pequeña narracion de lo que hizo durante el proyecto
              proyectoproyectoproyectoproyecto Pequeña narracion de lo que
            </p>
            <div className="redesDeveloper">
              <span>
                <a href="" target="_BLANK">
                  Linkedin
                </a>
              </span>
              <span>
                <a href="" target="_BLANK">
                  Github
                </a>
              </span>
              <span className="twitter">
                <a href="" target="_BLANK">
                  Twitter
                </a>
              </span>
            </div>
          </div>
          <div className="boxDeveloper">
            <div className="photoDeveloper">
              <img src={juanPhoto} alt="juan" title="juanRCoder" />
            </div>
            <h1>Juan Ramirez</h1>
            <h5>Desarrollador back-end</h5>
            <p>
              Pequeña narracion de lo que hizo durante el proyecto
              proyectoproyectoproyectoproyecto Pequeña narracion de lo que
            </p>
            <div className="redesDeveloper">
              <span>
                <a href="" target="_BLANK">
                  Linkedin
                </a>
              </span>
              <span>
                <a href="" target="_BLANK">
                  Github
                </a>
              </span>
              <span className="twitter">
                <a href="" target="_BLANK">
                  Twitter
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
