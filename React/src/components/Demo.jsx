import React, { useEffect, useState } from 'react'
import Data from './Data'


const demo = () => {
 const[data,setData]=useState([]);

 useEffect(()=>{
    setData(Data);
 },[]);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>id</th>
                    <th>name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d,index) =>{
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.age}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
      
    </div>
  )
}

export default demo
