import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const footer = () => {
  return (
    <div>
      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <h2>WEBSITE LINKS</h2>
            <p>
              Mapa de sitio
            </p>
            <p>
              Termionos y cindiciones de uso del sitio
            </p>
            <p>
              Aviso de privacidad
            </p>
            <p>
              Politica de privacidad
            </p>
            <p>
              Sobre garnier
            </p>
          </div>
          <div className="box">
            <h2>¡Síguenos en las redes sociales!</h2>
            <div className="redes-sociales">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
          <div className="box">
            <div>
              <h2>Servicio al cliente</h2>
              <p>
                Para mas informacion sobre nuestros productos llama de lunes a viernes de 8:00am a 8:00pm en la CMDX y Area Metropolitana al 5999-5998 del interior de la Republuica sin costo al 800 654 276 473
              </p>
            </div>
            <h4>Correo</h4>
            <p>centroatencion@latam.garnier.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
