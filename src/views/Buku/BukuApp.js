import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Buku from './BukuView.jsx'

const BukuPage = () => {

  const [books, setBuku] = useState([])

  async function fetchData() {
    const request = await axios.get('http://localhost:3000/books')
    const data = request.data
    setBuku(data)
  }

  const onDelete = async id => {
    await axios.delete(`http://localhost:3000/books/${id}`)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
      <Buku books={books} onDelete={onDelete} />
    </>
  )
}

export default BukuPage