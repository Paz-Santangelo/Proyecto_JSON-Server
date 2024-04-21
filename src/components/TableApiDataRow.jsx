/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const TableApiDataRow = ({ el, setDataToEdit, deleteData }) => {
  let { id, name, lastname, email } = el;

  return (
    <tr className="content-table">
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td className="buttons">
        <button
          className="btn btn-success btn-sm"
          onClick={() => setDataToEdit(el)}
        >
          Editar
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => deleteData(id)} >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default TableApiDataRow;
