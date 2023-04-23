import { Link } from "react-router-dom";
import '../App.css';

const Nav = () => {
    return ( 
        <div className="nav d-flex justify-content-between p-2 bg-primary">
            <div className="logo ms-5">
                <h3 id="h3" className="text-warning ">Pavan</h3>
                {/* <img width={100} height={50} src="" alt="" /> */}
            </div>
            <div className="logout me-5">
            <Link className="btn btn bg-warning" to="/">Logout</Link>
            </div>
        </div>
     );
}
 
export default Nav;