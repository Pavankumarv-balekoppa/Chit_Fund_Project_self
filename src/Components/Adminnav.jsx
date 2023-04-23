import { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Adminnav = () => {
    let [cust, setcust] = useState([])
    let [adm, setadmin] = useState([])
    let[set,setset]=useState(false)

    let customer=() => {
        let fecting = async () => {
            let resp = await fetch('http://localhost:7000/Customer')
            let data = await resp.json()
            setcust(data)
        }
        fecting()
        setset(true)
    }
    
    let admin=() => {
        let fecting = async () => {
            let resp = await fetch('http://localhost:7000/Admin')
            let data = await resp.json()
            setadmin(data)
        }
        fecting()
        setset(false)
    }
    return (
        <div className="adminnav">
            <div className="nav d-flex justify-content-around m-2">
                <button className="btn btn bg-danger" onClick={customer}>Customers</button>
                <button className="btn btn bg-danger" onClick={admin}>Admins</button>
                <Link to='/admin/viewbill' className="btn btn bg-danger">Bills</Link>
            </div><hr />
            <div className="view m-4">
                {set==true ?
                    <Table striped bordered hover variant="success">
                    <thead className="bg-success ">
                        <th>Id</th>
                        <th>Kind</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </thead>
                    <tbody>
                        {cust.map((x) => (
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.kind}</td>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>{x.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table> :
                <Table striped bordered hover variant="success">
                    <thead className="bg-success ">
                        <th>Id</th>
                        <th>Kind</th>
                        <th>Name</th>
                        <th>Tocken</th>
                        <th>Email</th>
                        <th>Password</th>
                    </thead>
                    <tbody>
                        {adm.map((x) => (
                            <tr>
                                <td>{x.id}</td>
                                <td>{x.kind}</td>
                                <td>{x.name}</td>
                                <td>{x.tocken}</td>
                                <td>{x.email}</td>
                                <td>{x.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table> }
            </div>
        </div>
    );
}

export default Adminnav;