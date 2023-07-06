import React, { useState,useEffect } from 'react';
import DataTable from 'react-data-table-component';
// import axios from 'axios';
// import Navbar from "./components/navbar/navbar"


const customStyles ={
  headRow:{
    style:{
      backgroundColor:"blue",
      color:'white'
    }
  },
  headCells:{
    style:{
      fontSize:'16px',
      fontWeight:'600',
      textTransform:'uppercase'
    },
  },
  cells:{
    style:{
      fontSize:'15px'
    },
  },
};




const Pay = () => {


  // Method 1
  //  const [column,setColumn] =useState([])
  // const [record,setRow]=useState([]);


  //  const fetchUsers=async () =>{
  //   try{
  //     const res=await fetch(url);
  //     const data=await res.json();
  //     console.log(data);
  //   }
  //   catch(err){
  //   console.error(err);
  //   }
  //  }



  // useEffect( ()=>{
  //   fetch('http://localhost:3000/Data.json')
  //   .then(res=>res.json())
  //   .then(data =>{
  //     setColumn(Object.keys(data.users[0]))
  //     setRow(data.users)
  //   })
  // },[])

  // Method2
  const [loading ,setLoading]=useState(false);
  const [data,setData] =useState([]);
  


  const columns=[

    // {
    //   name:"ID",
    // selector:(row)=>row.id,
    // sortable:true
    // },
    // {
    //   name:"User ID",
    // selector:(row)=>row.username,
    // sortable:true
    // },
    // {
    //   name:"Email",
    // selector:(row)=>(row.email),
    // sortable:true
    // },

    {
      name:"User ID",
    selector:(row)=>row.id,
    sortable:true
    },
    {
      name:"Title",
    selector:(row)=>row.title,
    sortable:true
    },
    {
      name:"Completed",
    selector:(row)=>(row.completed?"YES":"NO"),
    sortable:true
    },

  ]


  useEffect (()=> {
   
    fetchTableData();
  },[])

  async function fetchTableData(){
    setLoading(true)
    const URL ="http://jsonplaceholder.typicode.com/todos"
    const response=await fetch(URL)
      
    const users =await response.json()
    setData(users)
    setLoading(false)
  }
  // const [records,setRecords] =useState([]);
  // const [filterRecord,setFilterRecords] =useState([]);
  // const handleFilter = (event) =>{
  //   const newData =records.filter(row =>row.name.toLowerCase().includes(event.target.value.toLowerCase()))
  //   setRecords(newData);
  // }
  
  // useEffect (()=> {
  //   const fetchTableData = async ()=>{
  //     axios.get("http://jsonplaceholder.typicode.com/todos")
  //     .then(res=> {setRecords(res.data)})
  //     .catch(err =>console.log(err));
  //   }
  //   fetchTableData();
  // },[])


  return (
    <>
    {/* <Navbar/> */}
    <div style={{padding:"50px 10%",background:"gray"}}>

{/* method-1  */}
{/*       
<div className='search' style={{display:'flex', justifyContent:'right'}}>
   <input type="text" placeholder="Search..." onChange={handleFilter}  style={{padding:'6px 10px'}}/>
</div> */}
<DataTable
title="Payment Table Data"
columns={columns}
data={data}
customStyles={customStyles}
progressPending={loading}
//  selectableRows
pagination
/>

{/* //Method2 */}

{/* <div className='search' style={{display:'flex', justifyContent:'right'}}>
   <input type="text" placeholder="Search..."  style={{padding:'6px 10px'}}/>
</div>
<table className="table">
<thead>
  <tr>
    {column.map((c,i)=>(
      <th key={i}>{c}</th>
    ))}
  </tr>
</thead>
<tbody>
  {
    record.map((record,i)=>(
      <tr key={i}>
         <td>{record.id}</td>
         <td>{record.name}</td>
         <td>{record.username}</td>
         <td>{record.email}</td>
         <td>{record.phone}</td>
         <td>{record.website}</td>
      </tr>
    ))
  }
</tbody>
</table> */}

</div>
    </>
    
 
  )
}

export default Pay;

