import { useEffect, useState } from "react";

const CompOver = ({ jugadores, setJugadores }) => {
  // esta es la funcion encargada de modificar el corazon o megusta
  const handleclick = (nombre) => {
    setJugadores((prevJugadores) =>
      prevJugadores.map((jugador) => {
        if (jugador.name === nombre) {
          return { ...jugador, active: !jugador.active };
        }
        return jugador;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(jugadores));
  });

  return (
    <div className="contenedor__card">
      {jugadores.map((jugador, index) => (
        <div
          className="card"
          key={index}
          style={{
            backgroundImage: ` linear-gradient(to bottom, transparent, black), url(${jugador.img})`,
          }}
        >
          <div className="card__header"></div>
          <div className="card__body">
            <h3>{jugador.name}</h3>
            <img
              src="https://i.ibb.co/rMdrfJz/like-Active.png"
              className="like"
              style={{
                filter: `${
                  jugador.active ? "none" : "brightness(100%) contrast(0)"
                }`,
              }}
              onClick={() => handleclick(jugador.name)}
              alt="Like Icon"
            />
            <p lassName="descripcion">{jugador.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompOver;
