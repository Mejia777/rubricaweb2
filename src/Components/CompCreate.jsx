import { useContext } from "react";
import { listContext } from "../App";
import { useFormik } from "formik";
import * as Yup from "yup";

const CompCreate = () => {
  const { list, actualizarLista, setActiveComponent } = useContext(listContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      descripcion: "",
      categoria: "",
      equipo: "",
      img: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Ingrese el titulo")
        .max(20, "Maximo 20 caracteres")
        .min(3, "minimo 3 cartacteres"),

      descripcion: Yup.string()
        .required("Ingrese la descripción")
        .max(200, "Maximo 200 caracteres")
        .min(50, "minimo 50 cartacteres"),

      categoria: Yup.string().required("Debe ingresar un campo de deporte"),

      equipo: Yup.string()
        .required("Ingrese un equipo")
        .max(15, "Maximo 15 caracteres")
        .min(3, "minimo 3 cartacteres"),

      img: Yup.string()
        .required("Ingrese un img")
        .max(100, "Maximo 50 caracteres")
        .min(10, "minimo 10 cartacteres"),
    }),
    onSubmit: (values) => {
      console.log(values);
      actualizarLista([...list, values]);
      setActiveComponent("content");
    },
  });
  return (
    <div className="contenedor__form">
      <div className="imagen"></div>
      <form action="" className="form" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Titulo:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="descripcion">Descripcion:</label>
          <textarea
            type="text"
            name="descripcion"
            id="descripcion"
            onChange={formik.handleChange}
            value={formik.values.descripcion}
          />
          {formik.touched.descripcion && formik.errors.descripcion ? (
            <div>{formik.errors.descripcion}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="categoria">Categoria:</label>
          <select
            name="categoria"
            id="categoria"
            onChange={formik.handleChange}
            value={formik.values.categoria}
          >
            <option value="">Selecciona la categoria</option>
            <option value="Deporte por equipo">Deporte por equipo</option>
            <option value="Deporte de motor">Deporte de motor</option>
            <option value="Deporte de mesa">Deporte de mesa</option>
          </select>
          {formik.touched.categoria && formik.errors.categoria ? (
            <div>{formik.errors.categoria}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="equipo">Equipo:</label>
          <input
            type="text"
            name="equipo"
            id="equipo"
            onChange={formik.handleChange}
            value={formik.values.equipo}
          />
          {formik.touched.equipo && formik.errors.equipo ? (
            <div>{formik.errors.equipo}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="img">Link:</label>
          <input
            type="text"
            name="img"
            id="img"
            onChange={formik.handleChange}
            value={formik.values.img}
          />
          {formik.touched.img && formik.errors.img ? (
            <div>{formik.errors.img}</div>
          ) : null}
        </div>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default CompCreate;
