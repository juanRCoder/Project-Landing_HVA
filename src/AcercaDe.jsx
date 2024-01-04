import React from "react";
import "./AcercaDe.css";
import img2 from "./assets/img2.jpg";
import img1 from "./assets/img1.jpg";

function AcercaDe() {
  return (
    <section className="section" id="inpiracion">
      <h1 className="titleAcercaDe">Inspiración</h1>
      <ul className="paragraph">
        <li>
          Imagina tener una aplicación web que esté disponible las 24 horas del
          día, los 7 días de la semana, lista para brindar asistencia
          instantánea a tus clientes. Este asistente virtual puede responder
          preguntas frecuentes, proporcionar información sobre servicios y
          comodidades del hotel, e incluso ayudar con reservas y consultas
          específicas. Con esta herramienta tecnológica, podrás aliviar la carga
          de atención al cliente en tu personal, permitiéndoles enfocarse en
          tareas más estratégicas y personalizadas.
        </li>
        <li>
          No solo se estara ofreciendo un servicio excepcional a los huéspedes,
          sino que también estarás destacando entre la competencia al
          implementar soluciones innovadoras. La programación de este asistente
          virtual hotelero es un paso audaz hacia el futuro de la industria
          hotelera. Además, este asistente virtual puede aprender y adaptarse
          con el tiempo, mejorando continuamente su capacidad para brindar
          respuestas precisas y relevantes.
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
