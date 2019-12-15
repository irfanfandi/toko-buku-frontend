import React from 'react';
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row
} from "reactstrap";
import Header from "components/Headers/Header.jsx";
import {Link} from 'react-router-dom'

const viewPage = props => {
  
  const buku = props.books  
  
  const deleteTodo = id => {
    props.onDelete(id)
  }

  // const edit = id => {
  //   props.onEdit(id, status)
  // }

  return (
    <> 
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Link to="/admin/BukuAdd">
                    <button className="btn btn-sm btn-success">Add</button>
                </Link>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
              <thead>
                  <tr>
                    {/* <th>Kategori</th> */}
                    <th>Nama Buku</th>
                    <th>Sinopsis</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {buku.length > 0 ? (
                  buku.map(lists => (
                    <tr key={lists._id}>
                      {/* <td>{lists.Kategori}</td> */}
                      <td>{lists.nm_book}</td>
                      <td>{lists.detail}</td>
                      <td>{lists.author}</td>
                      <td>{lists.publisher}</td>
                      <td>{lists.year}</td>
                      <td>{lists.price}</td>
                      <td>{lists.stock}</td>
                      <td>
                        <Link to="/admin/BukuEdit" params={lists._id} >
                          <button 
                            className="btn btn-sm btn-primary"
                            // onClick={() => edit(lists._id)}
                          >Edit</button>
                        </Link>
                        <button 
                          className="btn btn-sm btn-danger" 
                          onClick={() => deleteTodo(lists._id)}
                        >Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No users</td>
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

export default viewPage;
