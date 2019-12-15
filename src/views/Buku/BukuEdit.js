// import axios from 'axios'
// import React, {useEffect, useState} from 'react'
// // import Buku from './BukuAddView.jsx'

// const BukuEditPage = id => {

//   const [books, setBuku] = useState([])
//   const [categorys, setKategori] = useState([])

//   console.log(id);
  
//   async function fetchData() {
//     const request = await axios.get('http://localhost:3000/books')
//     const data = request.data
//     setBuku(data)
//   }

//   async function fetchData() {
//     const request = await axios.get('http://localhost:3000/categorys')
//     const data = request.data
//     setKategori(data)
//   }


//   const onEdit = async (id, _id, nm_book, detail, author, publisher, year, price, stock) => {
//     await axios.patch(`http://localhost:3000/books/${id}`, {
//         id_category: _id,
//         nm_book,
//         detail,
//         author,
//         publisher,
//         year,
//         price,
//         stock,
//         created_by: 'Admin',
//         updated_by: 'Admin'
//     })
//     fetchData()
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])
  
//   return (
//     <>
    
//       {/* <Buku books={books} categorys={categorys}/> */}
//     </>
//   )
// }

// export default BukuEditPage