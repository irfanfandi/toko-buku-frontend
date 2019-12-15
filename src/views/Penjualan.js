import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Buku from './Index.jsx'

const PenjualanPage = () => {

  const [penjualan, setPenjualan] = useState([])

  async function fetchData() {
    const request = await axios.get('http://localhost:3000/purchase_a')
    const data = request.data
    setPenjualan(data)
  }

//   const onDelete = async id => {
//     await axios.delete(`http://localhost:3000/books/${id}`)
//     fetchData()
//   }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <>
      <Buku penjualan={penjualan} />
    </>
  )
}

export default PenjualanPage