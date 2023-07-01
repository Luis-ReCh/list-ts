export default function List() {
  return (
    <div className="container pt-4">
      <h1 className="text-center">Mis cosas por Hacer</h1>
      <form action="" className="d-flex">
        <input className="form-control" type="search" />
        <button className="btn btn-outline-success" type="submit">
          +
        </button>
      </form>
      <table className="table table-striped">
        {/* <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead> */}
        <tbody>
          <tr>
            <td>comer</td>

            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>correr</td>

            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>llorar</td>

            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>bailar</td>

            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>ver la tv</td>

            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>salir a pasear</td>

            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>beber una serveza o 2</td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="btn btn-success">
        Borrar todo
      </button>
    </div>
  );
}
