import React, {useState} from 'react';
import {
  Card,
  CardHeader,
  Container,
  Row
} from "reactstrap";
import Header from "components/Headers/Header.jsx";


const BukuAddView = props => {

  const [_id, set_id] = useState('')
  const [nm_book, setnm_book] = useState('')
  const [detail, setdetail] = useState('')
  const [author, setauthor] = useState('')
  const [publisher, setpublisher] = useState('')
  const [year, setyear] = useState('')
  const [price, setprice] = useState('')
  const [stock, setstock] = useState('')
  // const [lists._id, set_id] = useState('')

  const categ = props.categorys 
  console.log(nm_book);

  const handleAdd = e => {
    props.onAdd(_id,nm_book,detail,author,publisher,year,price,stock)
    set_id('')
    setnm_book('')
    setdetail('')
    setauthor('')
    setpublisher('')
    setyear('')
    setprice('')
    setstock('')
  }

    return (
        <>
            <Header />
            <Container className="mt--7" fluid>
                <Row>
                <div className="col">
                    <Card className="shadow">
                    <CardHeader className="border-0">
                    </CardHeader>
                   
                    <label>Kategori</label>
                    {/* <input type="text" value={books} onChange={handleInputChange} /> */}
                    <select >
                        {categ.map(lists =>
                        <option key={lists._id} value={lists._id} onChange={e => setnm_book(e.target.value)} >{lists.nm_category}</option>
                        )};
                    </select>
                    <label>Nama Buku</label>
                    <input type="text" value={nm_book} onChange={e => setnm_book(e.target.value)} />
                    <label>Detail</label>
                    <input type="textarea" value={detail} onChange={e => setdetail(e.target.value)} />
                    <label>Author</label>
                    <input type="text" value={author} onChange={e => setauthor(e.target.value)} />
                    <label>Publisher</label>
                    <input type="text"  value={publisher} onChange={e => setpublisher(e.target.value)} />
                    <label>Year</label>
                    <input type="text"  value={year} onChange={e => setyear(e.target.value)} />
                    <label>Price</label>
                    <input type="number"  value={price} onChange={e => setprice(e.target.value)} />
                    <label>Stock</label>
                    <input type="number" value={stock} onChange={e => setstock(e.target.value)} />
            
                    <button type="submit" onClick={() => handleAdd()}>Save</button>
                    
                    </Card>
                </div>
                </Row>
            </Container>
        </>
    )
}

export default BukuAddView;