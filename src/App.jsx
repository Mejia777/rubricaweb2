import { createContext, useEffect, useState } from "react";
import "./App.css";
import CompContent from "./Components/CompContent";
import CompCreate from "./Components/CompCreate";
import CompOver from "./Components/CompOver";
import Footer from "./Components/footer";
//creo el contexto de la lista
const listContext = createContext();
const listaOver = [
  {
    name: "Lionel Messi",
    img: "https://i.pinimg.com/1200x/35/de/10/35de10ae4099652e4cf0de9adc31b670.jpg",
    descripcion:
      "Talento futbolístico icónico, habilidoso, goleador, líder, visionario, carismático, legendario, dedicado, inspirador, excepcional.",
    active: false,
  },
  {
    name: "Cristiano Ronaldo",
    img: "https://fondosmil.com/fondo/6858.jpg",
    descripcion:
      "Atleta destacado, goleador carismático, versátil, tenaz, influyente, determinado, competitivo, campeón, internacional, polifacético.",
    active: false,
  },
  {
    name: "Neymar Jr",
    img: "https://www.todofondos.net/wp-content/uploads/neymar-jr-fondo-de-pantalla-movil.png",
    descripcion:
      "Jugador creativo, hábil regateador, carismático, rápido, impredecible, showman, talentoso, dribbling maestro, controvertido.",
    active: false,
  },
  {
    name: "Ronaldinho",
    img: "https://w0.peakpx.com/wallpaper/989/164/HD-wallpaper-ronaldinho-gauchor10-barcelona-brasil-futbol-magia-mundial-r10-soccer.jpg",
    descripcion:
      "Jugador Maravilloso, hábil regateador, carismático, impredecible, showman, internacional, talentoso, dribbling maestro, Estrella.",
    active: false,
  },
];
const listaDeportes = [
  {
    name: "Futbol",
    img: "https://i.pinimg.com/564x/34/36/a6/3436a66af90c5f0e36f1293b668ffae7.jpg",
    descripcion:
      "El fútbol, deporte global, enfrenta equipos compitiendo con destreza en el campo, generando emoción y camaradería.",
    categoria: "Deporte por equipo",
    equipo: "Barcelona",
  },
  {
    name: "Baloncesto",
    img: "https://i.pinimg.com/564x/d0/b3/90/d0b390e5a37d3d8fda183bb78cd19402.jpg",
    descripcion:
      "Dinámico juego de habilidad donde equipos anotan en aros opuestos, fomentando rapidez, estrategia y cooperación.",
    categoria: "Deporte por equipo",
    equipo: "Miami Heat",
  },
  {
    name: "Beisbol",
    img: "https://i.pinimg.com/564x/86/8a/02/868a02939a224b1d0bc71ae4d012f08e.jpg",
    descripcion:
      "Clásico deporte de bateo y campo que combina estrategia, precisión y trabajo en equipo en cada entrada.",
    categoria: "Deporte por equipo",
    equipo: "Cardenales",
  },
  {
    name: "Formula 1",
    img: "https://i.pinimg.com/564x/8d/05/fe/8d05fe01bf48829ab6e548cffac73fd8.jpg",
    descripcion:
      "Competición automovilística de alta velocidad con tecnología avanzada, pilotos hábiles y carreras emocionantes globalmente.",
    categoria: "Deporte de motor",
    equipo: "RedBull",
  },
  {
    name: "MotoGP",
    img: "https://i.pinimg.com/564x/ee/99/0c/ee990cacde8096326013001eeb1c0d4e.jpg",
    descripcion:
      "Serie de carreras de motocicletas de élite que presenta velocidad, destreza y emoción en circuitos internacionales.",
    categoria: "Deporte de motor",
    equipo: "Aprilia Racing",
  },
  {
    name: "Rally",
    img: "https://i.pinimg.com/564x/f9/0b/cf/f90bcf3edd59a4f97796c1c3bb10e5d4.jpg",
    descripcion:
      "Competición de conducción extrema en diversas ubicaciones, resaltando resistencia, navegación precisa y destreza.",
    categoria: "Deporte de motor",
    equipo: "Toyota",
  },
  {
    name: "Tenis de Mesa",
    img: "https://i.pinimg.com/564x/74/1b/9a/741b9ab9f63d2bc94a45608613754fcb.jpg",
    descripcion:
      "Juego de habilidad rápido con raquetas, donde se golpea una pequeña pelota sobre una mesa dividida.",
    categoria: "Deporte de mesa",
    equipo: "Colombia",
  },
  {
    name: "Billar",
    img: "https://i.pinimg.com/564x/ed/a4/92/eda492de2906a8827a6266e32bcd3ffb.jpg",
    descripcion:
      "Juego de precisión y estrategia donde se golpean bolas con un taco en una mesa cubierta de paño, buscando anotar puntos en los bolsillos.",
    categoria: "Deporte de mesa",
    equipo: "Ralph Greenleaf",
  },
  {
    name: "Futbolin",
    img: "https://i.pinimg.com/564x/41/cd/6e/41cd6e7055e647118e4f4e8126707d31.jpg",
    descripcion:
      "Juego de mesa competitivo que simula el fútbol, con jugadores controlados por barras giratorias.",
    categoria: "Deporte de mesa",
    equipo: "España",
  },
];
//para cargar los datos de los favoritos en el localstorage
const valorInicialList = JSON.parse(localStorage.getItem("list")) || listaOver;
//creo el array jugadores

function App() {
  const [jugadores, setJugadores] = useState(valorInicialList);
  const [list, setList] = useState(listaDeportes); //

  const [activeComponent, setActiveComponent] = useState("overviews");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <>
      <listContext.Provider value={{ list, setList, setActiveComponent }}>
        <div style={{ backgroundColor: "#18203a" }}>
          <nav className="navbar">
            <div>
              <img src="https://i.ibb.co/sbX4xjL/logomaker.png" alt="logo" />
            </div>
            <div className="navbar__buttons">
              <button onClick={() => handleButtonClick("overviews")}>
                OverViews
              </button>
              <button onClick={() => handleButtonClick("content")}>
                Content
              </button>
              <button onClick={() => handleButtonClick("create")}>
                Create
              </button>
            </div>
          </nav>
        </div>
        <div style={{ width: "80%", margin: "auto" }}>
          {activeComponent === "overviews" && (
            <CompOver jugadores={jugadores} setJugadores={setJugadores} />
          )}
          {activeComponent === "content" && <CompContent />}
          {activeComponent === "create" && <CompCreate />}
        </div>
      </listContext.Provider>
      <Footer />
    </>
  );
}

export { App, listContext };
