/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import TableApiDataRow from "./TableApiDataRow";

const TableApi = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="table-container">
      <h3>Tabla de Datos de Alumnos</h3>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <TableApiDataRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan="5">Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableApi;
