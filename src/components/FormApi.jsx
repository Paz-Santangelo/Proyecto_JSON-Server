/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

const initialForm = {
  id: null,
  name: "",
  lastname: "",
  email: "",
};

const FormApi = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.lastname || !form.email) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          className="form-control"
          onChange={handleChange}
          value={form.name}
        />
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          name="lastname"
          id="apellido"
          placeholder="Apellido"
          className="form-control"
          onChange={handleChange}
          value={form.lastname}
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="form-control"
          onChange={handleChange}
          value={form.email}
        />

        <button type="submit" className="btn btn-primary btn-form">
          Enviar
        </button>

        <button
          type="reset"
          value="Limpiar"
          className="btn btn-primary btn-form"
          onClick={handleReset}
        >
          Limpiar
        </button>
      </form>
    </div>
  );
};

export default FormApi;
