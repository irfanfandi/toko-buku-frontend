import React, {useState} from 'react';
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row
} from "reactstrap";
import Header from "components/Headers/Header.jsx";

const DatatablePage = props => {
  
  const [categorys, setKategori] = useState([])

  const categ = props.categorys  
 
  const handleAdd = e => {
    props.onAdd(categorys)
    setKategori('')
  }

  const deleteTodo = id => {
    props.onDelete(id)
  }

  return (
    <> 
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
              <input
                type="text"
                placeholder="Masukkan"
                value={categorys}
                onChange={e => setKategori(e.target.value)}
                class="form-input"
              />
              <button
                type="submit"
                onClick={() => handleAdd()}
              >
                Tambah Kategori
              </button>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
              <thead>
                  <tr>
                    <th>Name Kategori</th>
                    <th>Created At</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {categ.length > 0 ? (
                  categ.map(lists => (
                    <tr key={lists._id}>
                      <td>{lists.nm_category}</td>
                      <td>{lists.created_at}</td>
                      <td>
                        <button className="btn btn-sm btn-primary">Edit</button>
                        <button 
                          className="btn btn-sm btn-danger" 
                          onClick={() => deleteTodo(lists._id)}
                        >Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No Data</td>
                  </tr>
                )}
                </tbody>                       
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default DatatablePage;
