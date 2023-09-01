import { useContext, useState } from "react";
import { listContext } from "../App";
const CompContent = () => {
  // Obtener el contexto "list" del componente padre usando useContext
  const { list } = useContext(listContext);
  // Estado para mantener la lista filtrada
  const [listaFiltrada, setListaFiltrada] = useState(list);

  // Manejar el cambio en el selector de categorías
  const handleclick = (e) => {
    filtrar(e.target.value);
  };
  // Función para filtrar la lista según la categoría seleccionada
  const filtrar = (nombre) => {
    if (nombre === "todos") {
      setListaFiltrada(list); // Restaurar la lista original
    } else {
      const filteredList = list.filter(
        (elemento) => elemento.categoria === nombre
      );
      setListaFiltrada(filteredList);
    }
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
        {listaFiltrada.map((jugador, index) => (
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
              <p className="descripcion">{jugador.descripcion}</p>
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
