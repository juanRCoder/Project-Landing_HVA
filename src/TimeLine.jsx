import "./TimeLine.css";

function TimeLine() {
  return (
    <section className="sectionTimeLine" id="transcurso">
      <hr />
      <h1 className="titleTimeLine">Linea de Tiempo</h1>
      <div className="containerTime">
        <div className="sectionTime">
          <p className="date">04/12 - 09/12</p>
          <p className="title">Seleccion del proyecto</p>
          <p className="text">
            Para la selección del proyecto, analizamos diferentes proyectos que
            se nos ocurrieron. Consultamos con inteligencia artificial para
            obtener mejoras o ideas para proyectos potenciados que estuvieran a
            nuestro alcance. Luego, debatir con nuestros compañeros, tomamos
            este proyecto como el indicado.
          </p>
        </div>
        <div className="sectionTime">
          <p className="date">11/12 - 16/12</p>
          <p className="title">Planificación</p>
          <p className="text">
            Después de escoger el proyecto, consultamos con nuestro tutor a
            cargo para darle una visión de nuestro proyecto. Luego, pasamos al
            tema de la planificación, en donde separamos el proyecto en 3
            secciones, organizamos un trello del proyecto, la documentación y
            los roles de trabajo para cada uno.
          </p>
        </div>
        <div className="sectionTime">
          <p className="date">18/12 - 23/12</p>
          <p className="title">Desarrollo</p>
          <p className="text">
            Después de planificar todo el proyecto y dividirlo, en el tema del
            desarrollo, nos reunimos una vez al día para consultar cambios en el
            proyecto y ayudarnos mutuamente en diferentes partes del proyecto.
            Poco a poco, consultábamos nuestro trabajo y nos comunicábamos para
            evitar sobreexigirnos.
          </p>
        </div>
        <div className="sectionTime">
          <p className="date">25/12 - 30/12</p>
          <p className="title">Conexión del proyecto</p>
          <p className="text">
            Llegando casi al final despues de realizar todas nuestras tareas
            programadas en el trello nos reunimos y trabajamos en codigo abierto
            para conectar nuestro proyecto con la parte que hizo cada uno, asi
            probamos la funcionalidad del proyecto para un correcto
            funcionamiento y visualización agradable.
          </p>
        </div>
        <div className="sectionTime">
          <p className="date">01/01 - 06/01</p>
          <p className="title">Landing Page</p>
          <p className="text">
            En esta ultima semana nos reunimos para planificar y diseñar el
            landing page del proyecto de acorde con las pautas que nos dieron,
            diseñamos el landing page, colocamos información que interese al
            usuario para que interactue o tenga curiosidad por nuestro proyecto
            web, y listo estamos para presentar.
          </p>
        </div>
      </div>
      <button className="boxButton">
        <a
          href="https://github.com/juanRCoder/Hotel_Virtual_Assitant"
          target="_BLANK"
        >
          Repositorio del proyecto
        </a>
      </button>
    </section>
  );
}

export default TimeLine;
