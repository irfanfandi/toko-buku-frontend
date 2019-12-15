import React  from 'react';
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row
} from "reactstrap";
import Header from "components/Headers/Header.jsx";

const DatatablePage = props => {

  const sell = props.penjualan  

  return (
    <> 
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
              <thead>
                  <tr>
                    {/* <th>Name</th> */}
                    <th>Alamat</th>
                    <th>Total Harga</th>
                    <th>Created By</th>
                    <th>Created At</th>
                    <th>Updated By</th>
                    <th>Updated At</th>
                  </tr>
                </thead>
                <tbody>
                {sell.length > 0 ? (
                  sell.map(lists => (
                    <tr key={lists._id}>
                      {/* <td>{lists.nm_category}</td> */}
                      <td>{lists.shipping_address}</td>
                      <td>{lists.total_price}</td>
                      <td>{lists.created_by}</td>
                      <td>{lists.created_at}</td>
                      <td>{lists.updated_by}</td>
                      <td>{lists.updated_at}</td>
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
