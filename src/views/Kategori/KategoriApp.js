import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Kategori from './KategoriView.jsx'

const KategoriPage = () => {

  const [categorys, setKategori] = useState([])

  async function fetchData() {
    const request = await axios.get('http://localhost:3000/categorys')
    const data = request.data
    setKategori(data)
  }

  const onAddKategori = async nm_category => {
    await axios.post('http://localhost:3000/categorys', {
      nm_category,
      created_by: 'Admin',
      updated_by: 'Admin'
    })
    fetchData()
  }

  const onDelete = async id => {
    await axios.delete(`http://localhost:3000/categorys/${id}`)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
      <Kategori categorys={categorys} onDelete={onDelete} onAdd={onAddKategori}   />
    </>
  )
}

export default KategoriPage