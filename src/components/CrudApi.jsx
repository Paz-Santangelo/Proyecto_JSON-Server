import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect } from "react";
import FormApi from "./FormApi";
import TableApi from "./TableApi";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/students";

  useEffect(() => {
    setLoading(true);

    api.get(url).then((res) => {
      //console.log(res);

      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    const now = new Date();

    const year = now.getFullYear() % 100; // Obtener los últimos dos dígitos del año
    const month = now.getMonth() + 1; // Obtener el mes actual
    data.id = `${year}${month}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estás seguro de eliminar el registro del alumno con el id n° ${id}?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = { headers: { "content-type": "application/json" } };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h1 className="text-center">Crud Fake API</h1>
      <FormApi
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />

      {db && (
        <TableApi
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};

export default CrudApi;
