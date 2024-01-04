import React from "react";
import "./AcercaDe.css";
import img2 from "./assets/img2.jpg";
import img1 from "./assets/img1.jpg";

function AcercaDe() {
  return (
    <section className="section" id="inpiracion">
      <h1 className="titleAcercaDe">Acerca de</h1>
      <ul className="paragraph">
        <li>
            Inspiracion a que nos llevo a crear este proyecto Inspiracion a que
            crear Inspiracion a que nos llevo a Inspiracion a que nos llevo a
            crear Inspiracion a que nos llevo a crear Inspiracion Inspiracion a
            que nos llevo a crear Inspiracion llevo a crear asdasd Inspiracion a
            que nos crear Inspiracion a que nos llevo a crear Inspiracion
            Inspiracion a que nos llevo a crear In crear Inspiracion a que nos
            llevo a crear Inspiracion Inspiracion a que nos llevo a crear In
        </li>
        <li>
          Inspiracion a que nos llevo a crear Inspiracion a que nos llevo a
          crear Inspiracion a que nos llevo a Inspiracion a que nos llevo a
          crear Inspiracion a que nos llevo a crear Inspiracion Inspiracion a
          que nos llevo a cre crear Inspiracion a que nos llevo a crear
          Inspiracion Inspiracion a que nos llevo a crear In crear Inspiracion a
          que nos llevo a crear Inspiracion Inspiracion a que nos llevo a crear
          In
        </li>
      </ul>
      <div className="imagesContainer">
        <div className="imagesBox">
          <img src={img1} />
        </div>
        <div className="imagesBox">
          <img src={img2} />
        </div>
      </div>
    </section>
  );
}

export default AcercaDe;
