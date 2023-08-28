import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="bloque1">
          <div className="grupo">
            <h2>Sobre nosotros</h2>
            <p>Este es un trabajo escolar, queremos dar todo de nosotros</p>
            <p>para la implementacion de este codigo</p>
          </div>
          <div className="grupo">
            <h2>Siguenos</h2>
            <div className="red-social">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-github"></a>
              <a href="#" className="fa fa-twitter"></a>
            </div>
          </div>
          <div className="grupo">
            <h2>Siguenos</h2>
            <div className="red-social">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-github"></a>
              <a href="#" className="fa fa-twitter"></a>
            </div>
          </div>
        </div>
        <div className="bloque2">
          <small>
            {" "}
            © 2023 Mayerlys Lozano-Hemer Meza. Todos los derechos reservados.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default footer;
