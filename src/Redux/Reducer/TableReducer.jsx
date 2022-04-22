
import { TableData_Loading,TableData_Success } from "../Action/TableData";
 
const initState = {
    loading:false,
    tableData:[],

}
export const tableReducer = (store=initState,{type,payload}) => {
  switch(type){

    case  TableData_Loading: 
    return {...store,loading:true}

    case TableData_Success:
     return{...store,loading:false,
         tableData:[...store.tableData,payload]
    }

    default:return {...store}
  }
  


}