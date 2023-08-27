import React, { useContext, useState } from "react";
import { listContext } from "../App";

function CompCreate() {
  const { list, setList, setActiveComponent } = useContext(listContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleAgregarNombre = () => {
    const nuevoNombre = { nombre, apellido };
    setList([...list, nuevoNombre]);
    setActiveComponent("content");
  };

  return (
    <div className="contenedor__form">
      <div className="imagen"></div>
      <form action="" className="form">
        <h2>Agregar Nuevo Nombre</h2>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          value={apellido}
          onChange={handleApellidoChange}
        />
        <br />
        <button onClick={handleAgregarNombre}>Agregar</button>
      </form>
    </div>
  );
}

export default CompCreate;
