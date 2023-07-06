import React, { useState } from "react";
import './form.css'

//Method 02 using Spread Operator

function Form() {
  const [details, setDetail] = useState({
    fName:"",
    lName:"",
    email:"",
  });

  function handleChange(event) {
    const { value,name } = event.target;
    // console.log(value);
    setDetail(prevValue => {
        return {
          ...prevValue,
          [name]:value,

      };
    });
  }

  return (
    <>
      <h1 className="heading">
        Hello ,Welcome to Electric App
      </h1>
    <div className="container">
    
      {/* <p>{details.email}</p> */}
      <form>
       
        <div class="myname">
                <label for="code">Code</label>
                <input
                  type="text"
                  // class="form-control"
                  id="code"
                  name="Code"
                />
              </div>
              <div class="myname">
                <label for="name">Name</label>
                <input
                  type="text"
                  // class="form-control"
                  id="name"
                  name="Name"
                />
              </div>
              <div class="myname">
                <label for="Dept">Dept</label>
                    <input
                        type="text"
                        // class="form-control"
                        id="dept"
                        name="Dept"
                    />
              </div>
              <div class="myname">
                <label for="pbal">Prev Dues</label>
                <input
                  type="number"
                  // class="form-control"
                  id="pbal"
                  name="PrevBalance"
                  step="any"
                />
              </div>
              <div class="myname">
                <label for="location">Location</label>
                <input
                  type="text"
                  // class="form-control"
                  id="loc"
                  name="Location"
                />
              </div>
              <div class="myname">
                <label for="lread">Last Reading</label>
                <input
                  type="number"
                  // class="form-control"
                  id="lread"
                  name="LastReading"
                />
              </div>
              <div class="myname">
                <label for="mch">Meter Charge</label>
                <input
                  type="number"
                  // class="form-control"
                  id="mch"
                  name="MeterCharge"
                  step="any"
                />
              </div>
              <div class="myname">
                <label for="urate">Unit Rate</label>
                <input
                  type="number"
                  // class="form-control"
                  id="urate"
                  name="UnitRate"
                  step="any"
                />
              </div>
              <div class="myname">
                <label for="ldate">Last Reading Date</label>
                <input
                  type="month"
                  // class="form-control"
                  id="ldate"
                  name="LastDate"
                />
              </div>
              <div class="myname">
                <label for="allocation">Allocation Date</label>
                <input
                  type="month"
                  // class="form-control"
                  id="allo"
                  name="Allocation"
                />
              </div>
              <div class="myname">
                <label for="lpaydate">Last Payment Date</label>
                <input
                  type="month"
                  // class="form-control"
                  id="lpaydate"
                  name="LastPaymentDate"
                />
              </div>
        <button>Submit</button>
      </form>
    </div>
    </>
    
  );
}

export default Form;

//Method 01 Simple Approach

// function App() {
//   const [details, setDetail] = useState({
//     fName:"",
//     lName:"",
//     email:"",
//   });

//   function handleChange(event) {
//     const { value,name } = event.target;
//     // console.log(value);
//     setDetail(prevValue => {
//       if(name === "fName"){
//         return {
//           fName: value,
//           lName: prevValue.lName,
//           email: prevValue.email,
//         };
//       } 
//       else if(name === "lName"){
//         return {
//           fName: prevValue.fName,
//           lName: value,
//           email: prevValue.email,
//         };
//       }
//       else if(name === "email"){
//         return{
//             fName: prevValue.fName,
//             lName: prevValue.lName,
//             email:value,
//         };
//       }
//     });
//   }

//   return (
//     <div className="container">
//       <h1>
//         Hello {details.fName} {details.lName}
//       </h1>
//       <p>{details.email}</p>
//       <form>
//         <input
//           name="fName"
//           onChange={handleChange}
//           placeholder="First Name"
//           value={details.fName}
//         />
//         <input
//           name="lName"
//           onChange={handleChange}
//           placeholder="Last Name"
//           value={details.lName}
//         />
//         <input
//           name="email"
//           onChange={handleChange}
//           placeholder="Last Name"
//           value={details.email}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;