// import React from 'react'

// import { ToastContainer, toast } from 'react-toastify';

// const Data = () => {
   
//     function Update(){
//         toast.info("Data updated successfully!");
//     }
//     function Delete(){
//         toast.warning("Data deleted successfully!");
//     }

// let data=[
//     {
//      "name":"ashutosh",
//      "Age": "22",
//      "id": "102",
//     },
//     {
//      "name":"mani",
//      "Age": "23",
//      "id": "201",
//     },
//     {
//      "name":"anmol",
//      "Age": "22",
//      "id": "301",
//     },
// ]

//   return (
//     <div>
        
//      <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">id</th>
//       <th scope="col">name</th>
//       <th scope="col">Age</th>
//         <th scope="col">update</th>
//         <th scope="col">delete</th>`0566`
      
//     </tr>
//   </thead>
//   <tbody>
//     {data.map((d)=>{
//         return(
//     <tr>
      
//       <td>{d.id}</td>
//       <td>{d.name}</td>
//       <td>{d.Age}</td>
//       <td> <button onClick={Update}>Update</button>
//         <ToastContainer /></td>
//          <td> <button onClick={Delete}>Delete</button>
//         <ToastContainer /></td>
//     </tr>
//         )
//     }
//     )
// }

//     </tbody>
//     </table> 
    
                    
  
                   
      
//     </div>
    
//   )

// }

     
// export default Data





// react form
// import { useState } from "react";

// function MyForm() {
//   const [formData, setFormData] = useState({
//     name: "",
    

//   });

//   const [data, setdata] = useState(null);

  
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//     const handleSubmit = (e) => {
//     e.preventDefault(); 
//     setdata(formData); // store submitted data
//   };
//    const Delete = (id) => {

//     const filteredData = data.filter((item) => item.id !== id);
//     setdata(filteredData);  
//    };  
//   return (
//     <div>
//       <h2>React Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="id"
//           placeholder="Enter ID"
//           value={formData.id}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
        

//         <button type="submit">Submit</button>
//       </form>

      
//       {data && (
//         <div>
//           <h3>Submitted Data:</h3>

        
//           <tr>
//             < td>{data.id}</td>
//             <td>{data.name}</td>
//              <button
//                   className="btn btn-danger btn-sm"
//                   onClick={() => Delete(data.id)}
//                 >
//                   Delete
//                 </button>
//           </tr>
          
         
         
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyForm;

// import { useState } from "react";

// function MyForm() {
//   const [formData, setFormData] = useState({
//     id: "",
//     name: "",
//   });

//   const [data, setData] = useState([]); // MUST be array

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setData([...data, formData]); // add new record

//     setFormData({
//       id: "",
//       name: "",
//     });
//   };

//   const handleDelete = (id) => {
//     const updatedData = data.filter((d) => d.id !== id);
//     setData(updatedData);
//   };
//   let addData=(i)=>{
//     const newData = {
//      alert: `Data with ID ${i} added successfully!`
//     };
//     setData([...data, newData]);
//   }
  

//   return (
//     <div>
//       <h2>React Form</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="id"
//           placeholder="Enter ID"
//           value={formData.id}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <button type="submit">Submit</button>
//       </form>

//       {data && (
//         <table border="1">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map((d) => (
//               <tr key={d.id}>
//                 <td>{d.id}</td>
//                 <td>{d.name}</td>
//                 <td>
//                   <button onClick={() => handleDelete(d.id)}>
//                     Delete
//                   </button>
//                   <button onClick={() =>addData(d.id)}>
//                     Add
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default MyForm;


import { useState } from "react";

function MyForm() {

  const [formData, setFormData] = useState([]);
  const[name,setName]=useState("");
  const[id,setId]=useState("");

  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      // UPDATE
      const updatedData = data.map((d) =>
        d.id === editId ? formData : d
      );
      setData(updatedData);
      setEditId(null);
      alert("Data Updated Successfully");
    } else {
     
      setData([...data, formData]);
      
    }

    setFormData({
      id: "",
      name: ""
    });
  };

  const Delete = (id) => {
    const updatedData = data.filter((d) => d.id !== id);
    setData(updatedData);
    
  };

  const update = (d) => {
    setFormData(d);
    setEditId(d.id);
  };

  return (
    <div>
      <h2>React Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="Enter ID"
          value={formData.id}
          onChange={(e) => setFormData({...formData, id: e.target.value})}
        />

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />

        <button type="submit">
          {editId !== null ? "Update" : "Submit"}
        </button>
      </form>

      <table border="1" margin-top="10px" cellPadding="5" cellSpacing="0" >
        <thead>
          <tr>
              <th>Sr.No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((d,index) => (
            <tr key={d.id}>
              <td>{index + 1}</td>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>
                <button onClick={() => Delete(d.id)}>
                  Delete
                </button>
                <button onClick={() => update(d)}>
                  Update
                </button>

               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );


export default MyForm;