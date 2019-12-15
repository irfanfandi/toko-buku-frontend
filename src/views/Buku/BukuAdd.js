import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Buku from './BukuAddView.jsx'

const BukuAddPage = () => {

  const [books, setBuku] = useState([])
  const [categorys, setKategori] = useState([])

  async function fetchData() {
    const request = await axios.get('http://localhost:3000/books')
    const data = request.data
    setBuku(data)
  }

  async function Data() {
    const request = await axios.get('http://localhost:3000/categorys')
    const data = request.data
    setKategori(data)
  }

  const onAddBuku = async (_id, nm_book, detail, author, publisher, year, price, stock)  => {
    await axios.post('http://localhost:3000/books', {
      id_category: '22222',
      nm_book,
      detail,
      author,
      publisher,
      year,
      price,
      stock,
      created_by: 'Admin',
      updated_by: 'Admin'
    })
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    Data()
  }, [])
  
  return (
    <>
      <Buku books={books} onAdd={onAddBuku} categorys={categorys}/>
    </>
  )
}

export default BukuAddPage