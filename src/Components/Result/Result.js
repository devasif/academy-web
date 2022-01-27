import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import MaterialTable from "material-table";
const Result =()=>{
   const {id,} = useParams();
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           setUser(data)
        })
    },[])
    console.log(user);
    const data = [
        {name:"sucona", gpa:5, class:"Eight",marks:45},
        {name:"srity", gpa:5, class:"Eight",marks:45},
        {name:"rita", gpa:5, class:"Eight" ,marks:45},
        {name:"rifat", gpa:5, class:"Eight" ,marks:45},
    ];
    const column = [
        {title:'Name', field:'name',
        cellStyle: {
            backgroundColor: '#039be5',
            color: '#FFF'
          },
          headerStyle: {
            backgroundColor: '#039be5',
          }},
        {title:'Gpa', field:'gpa'},
        {title:'Total Marks', field:'marks'},
        {title:'Class', field:'class'},
        
    ];
    
       return(
        <div className="container">
            <div className="row">
            <MaterialTable title="Student Result"
            data={data}
            columns={column}
            options={{
                filtering: true,
                exportButton:true,
                paginationType:"stepped",
                paging:false,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                  }
              }}
            />
            </div>
        </div>
    )
}

export default Result; 