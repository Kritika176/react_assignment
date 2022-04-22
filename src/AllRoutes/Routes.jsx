import {Route,Routes} from "react-router-dom";
import { Create } from "../Create/Create";
import { Detail } from "../DetailPage/Detail";
import { Home } from "../Home/Home";


export const AllRoutes = () => {
return(
<Routes>
    <Route path="/listing/create" element={<Create></Create>}></Route>
    <Route path="/" element={<Home></Home>}/>
    <Route path="/listing/:id" element={<Detail/>}/>
</Routes>
)
}