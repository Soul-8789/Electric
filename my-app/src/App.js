import React from 'react';
// import DataTable from 'react-data-table-component';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/navbar"
import Form from './components/Form/form';
import Footer from './components/Footer/footer';




const App = () => {
  return (
    <>
    <Navbar/>

    <Form />

    <Footer/>




    {/* <div style={{padding:"50px 10%",background:"gray"}}> */}

{/* method-1  */}

{/* <DataTable
title="Master Table Data"
columns={columns}
data={data}
customStyles={customStyles}
progressPending={loading}
pagination
/> */}



{/* </div> */}
    </>
    
 
  )
}

export default App;





