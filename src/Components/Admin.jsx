import { Route, Routes } from "react-router-dom";
import Adminnav from "./Adminnav";
import Viewfill from "./Viewbill";

const Admin = () => {
    return ( 
        <div className="admin">
            <Routes>
                <Route path="/" element={<Adminnav/>}/>
                <Route path="/viewbill" element={<Viewfill/>}/>
                {/* <Route path="/viewbill" element={<Viewfill/>}/>
                <Route path="/viewbill" element={<Viewfill/>}/> */}
            </Routes>
        </div>
     );
}
 
export default Admin;