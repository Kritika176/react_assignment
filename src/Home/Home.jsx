
import axios from "axios";
import {useEffect, useState} from "react"
import "./home.css"
import {tableDataLoading,tableDataSuccess} from "../Redux/Action/TableData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const Home = () => {
 const dispatch = useDispatch();
  const data = useSelector(store => store);
  console.log(data)
    const [tableData,setTableData] = useState([]);
  useEffect(() => {
     dispatch(tableDataLoading())
      axios.get(("http://localhost:3001/data")).then((res) => {setTableData(res.data)
       dispatch(tableDataSuccess(res.data))}
      ).catch((err) => {
          console.log(err.message)
      })
  },[])
 
  return(
      <div>
   <table className="table">
       
  <tr className="tableRow">
    <th>id</th>
    <th>Name</th>
    <th>City</th>
    <th>Address</th>
    <th>Capacity</th>
    <th>Cost per day</th>
    <th>Verified</th>
    <th>Rating</th>
  </tr>
  {tableData.map((e) => <tr>
      <td>{e.id}</td>
      <td>{e.name}</td>
      <td>{e.city}</td>
      <td>{e.address}</td>
      <td>{e.capacity}</td>
      <td>{`Rs.${e.cost_per_day}`}</td>
      <td>{e.verification}</td>
      <td>{e.rating}</td>
  </tr>)}
</table>


      </div>
  )     



}