import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="contactos">
          <h3 className="h3">Contactos:</h3>
          <ul className="ul">
            <li>+51 956 402 456 (Juan Ramirez)</li>
            <li>+51 924 119 907 (Oscar Morales)</li>
            <li>+51 992 295 394 (Jhonny Arana)</li>
          </ul>
        </div>
        <div className="dedicacion">
          <h3 className="h3">Dedicado:</h3>
          <p>
            Proyecto hecho para la mejora en los hoteles pequeños y medianos que
            no alcanzan el presupuesto para gestionar la carga de atencion al
            cliente.{" "}
          </p>
        </div>
        <div className="enlaces">
          <h3 className="h3">Enlaces:</h3>
          <ul className="ul">
            <li>
              <a href="#caracteristicas">Caracteristicas</a>
            </li>
            <li>
              <a href="#inspiracion">Acerca de</a>
            </li>
            <li>
              <a href="#transcurso">LineaDeTiempo</a>
            </li>
            <li>
              <a href="#equipo">Equipo</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyrigth &copy; 2024 HotelVirtualAssitant.</p>
    </footer>
  );
}

export default Footer;
