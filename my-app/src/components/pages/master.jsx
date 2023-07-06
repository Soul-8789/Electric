import React, { useState, useEffect } from "react";
// import DataTable from 'react-data-table-component';
import axios from "axios";
// import Navbar from "./navbar/navbar"

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "blue",
      color: "white",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
    },
  },
};

const Master = async () => {
  const [data,setData]=useState('');
  use

  
  return (
    <>
      {/* <Navbar/> */}
      <div style={{ padding: "50px 10%", background: "gray" }}>
        

        {/* //Method2 */}

        <div className='search' style={{display:'flex', justifyContent:'right'}}>
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
</table>
        
      </div>
    </>
  );
};

export default Master;




// // Method 1
//   //  const [column,setColumn] =useState([])
//   // const [record,setRow]=useState([]);

//   //  const fetchUsers=async () =>{
//   //   try{
//   //     const res=await fetch(url);
//   //     const data=await res.json();
//   //     console.log(data);
//   //   }
//   //   catch(err){
//   //   console.error(err);
//   //   }
//   //  }

//   // const res = await fetch("api/home/master", {
//   //   method: "GET",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     "Authorization":
//   //       " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoicml0aWsiLCJlbWFpbCI6InJpdGlrMUBnbWFpbC5jb20iLCJpZCI6IjY0YTY1NjI0ZDdkOWQ1MjM0ZDM4MzdmYiJ9LCJpYXQiOjE2ODg2MjQ0NTEsImV4cCI6MTY4ODYyNDUxMX0.sNYigpkRXeEBlX-cQY5D3sptaT-4uuVwZ7b-gCgmonU",
//   //   },
    
//   // });
//   // const data = await res.json() ;
//   // console.log(data);

//   // useEffect( ()=>{
//   //   fetch('http://localhost:5000/Data.json')
//   //   .then(res=>res.json())
//   //   .then(data =>{
//   //     setColumn(Object.keys(data.users[0]))
//   //     setRow(data.users)
//   //   })
//   // },[])

//   // Method2
//   // const [loading ,setLoading]=useState(false);
//   // const [data,setData] =useState([]);

//   // const columns=[

//   // {
//   //   name:"ID",
//   // selector:(row)=>row.id,
//   // sortable:true
//   // },
//   // {
//   //   name:"User ID",
//   // selector:(row)=>row.username,
//   // sortable:true
//   // },
//   // {
//   //   name:"Email",
//   // selector:(row)=>(row.email),
//   // sortable:true
//   // },

//   //   {
//   //     name:"Code",
//   //   selector:(row)=>row.Code,
//   //   sortable:true
//   //   },
//   //   {
//   //     name:"Title",
//   //   selector:(row)=>row.Name,
//   //   sortable:true
//   //   },
//   //   {
//   //     name:"Completed",
//   //   selector:(row)=>row.Dept,
//   //   sortable:true
//   //   },

//   // ]

//   // useEffect (()=> {

//   //   fetchTableData();
//   // },[])

//   // async function fetchTableData(){
//   //   setLoading(true)
//   //   const URL ="http://localhost:5000/api/home/master"
//   //   const response=await fetch(URL)

//   //   const users =await response.json()
//   //   setData(users)
//   //   setLoading(false)
//   // }
//   // const [records,setRecords] =useState([]);
//   // const [filterRecord,setFilterRecords] =useState([]);
//   // const handleFilter = (event) =>{
//   //   const newData =records.filter(row =>row.name.toLowerCase().includes(event.target.value.toLowerCase()))
//   //   setRecords(newData);
//   // }

//   // useEffect (()=> {
//   //   const fetchTableData = async ()=>{
//   //     axios.get("http://jsonplaceholder.typicode.com/todos")
//   //     .then(res=> {setRecords(res.data)})
//   //     .catch(err =>console.log(err));
//   //   }
//   //   fetchTableData();
//   // },[])
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/home/master")
//       .then((users) => setUsers(users.data))
//       .catch((err) => console.log(err));
//   }, []);
