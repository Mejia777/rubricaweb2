import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const footer = () => {
  return (
    <div>
      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <h2>Sobre nosotros</h2>
            <p>
              ¡Hola! Somos un apasionado grupo de estudiantes de Ingeniería de
              Sistemas que estamos trabajando juntos en un emocionante proyecto
              como parte de nuestra evaluación parcial.
            </p>
            <p>
              Nuestra misión es aplicar los conocimientos y habilidades que
              hemos adquirido en el aula para abordar desafíos del mundo real y
              crear soluciones innovadoras.
            </p>
            <p>
              A medida que avanzamos en nuestra educación, buscamos no solo
              aprobar exámenes, sino también marcar una diferencia en la
              industria y la sociedad mediante la aplicación práctica de la
              tecnología.
            </p>git
          </div>
          <div className="box">
            <h2>¡Síguenos en las redes sociales!</h2>
            <div className="redes-sociales">
              <a href="https://github.com/Mejia777">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="box">
            <div>
              <h2>Servicio al cliente</h2>
              <p>
                Estamos aquí para ayudarte en cualquier momento. Si tienes
                preguntas, inquietudes o necesitas asistencia, no dudes en
                contactarnos.
              </p>
            </div>
            <div>
              <h4>Horario de Atención</h4>
              <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábados: 10:00 AM - 2:00 PM</p>
              <p>Domingos: Cerrado</p>
            </div>
            <h4>Contacto</h4>
            <p>Teléfono: (605) 456-7890</p>
            <p>Correo: nosotrosTeAyudamos@gmail.com</p>
          </div>
        </div>
        <div className="grupo-2">
          <small>
            {" "}
            © 2024 Samuel Mejia - Julian Garcia . Todos los derechos reservados 
          </small>
        </div>
      </footer>
    </div>
  );
};

export default footer;
