import React, { useContext } from "react";
import { listContext } from "../App";
const CompContent = () => {
  const { list, listaFiltrada } = useContext(listContext);
  const handleclick = (e) => {
    listaFiltrada(e.target.value);
  };
  return (
    <>
      <select name="" id="" onChange={(e) => handleclick(e)}>
        <option value="todos">Todos</option>
        <option value="Deporte por equipo">Deporte por equipo</option>
        <option value="Deporte de mesa">Deporte de mesa</option>
        <option value="Deporte de motor">Deporte de motor</option>
      </select>
      <div className="contenedor__card">
        {list.map((jugador, index) => (
          <div
            className="card cardcontent"
            key={index}
            style={{
              backgroundImage: ` linear-gradient(to bottom, transparent, black), url(${jugador.img})`,
            }}
          >
            <div className="card__header"></div>
            <div className="card__body">
              <h3>{jugador.name}</h3>
              <p>{jugador.descripcion}</p>
              <p>{`Categoria: ${jugador.categoria}`}</p>
              <p>{`Equipo: ${jugador.equipo}`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompContent;
