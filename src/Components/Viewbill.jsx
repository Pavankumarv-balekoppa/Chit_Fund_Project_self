import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"


const Viewfill = () => {
    let [files, setfile] = useState([])
    let branch = useRef('')

   let path=useLocation('')
   
    useEffect(() => {
        let fecthing = async () => {
            let res = await fetch('http://localhost:7000/Pay')
            let data = await res.json()
            setfile(data)
        }
        fecthing()
    }, [])


    let ok = () => {
        let fecthing = async () => {
            let res = await fetch('http://localhost:7000/Pay')
            let data = await res.json()
            if (branch.current.value === "All") 
            {
                setfile(data)
            }
            else if (branch.current.value === branch.current.value) 
            {
                let filterr = data.filter((x) => x.Branch === branch.current.value)
                setfile(filterr)
            }
        }
        fecthing()
    }


    return (
        <div className="viewfile ">
            <div className="bu d-flex justify-content-around mb-4 mt-3">
                <h2 className="text-center">View All Bills </h2>
                <div className="branch m-3">
                    <label>Branch :</label><select className="ms-4" ref={branch} name="branch" id="">
                        <option value="All">All</option>
                        <option value="Bagalkot">Bagalkot </option>
                        <option value="Ballari">Ballari </option>
                        <option value="Bangalore Rural">Bangalore Rural </option>
                        <option value="Belagavi">Belagavi </option>
                        <option value="Bengaluru">Bengaluru </option>
                        <option value="Bidar">Bidar </option>
                        <option value="Chamarajanagar">Chamarajanagar</option>
                        <option value="Chikballapur">Chikballapur</option>
                        <option value="Chikkamagaluru">Chikkamagaluru</option>
                        <option value="Chitradurga">Chitradurga</option>
                        <option value="Dakshina Kannada">Dakshina Kannada</option>
                        <option value="Davanagere">Davanagere</option>
                        <option value="Dharwad">Dharwad</option>
                        <option value="Gadaga">Gadaga</option>
                        <option value="Hasana">Hasana</option>
                        <option value="Haveri">Haveri</option>
                        <option value="Kalaburgi">Kalaburgi</option>
                        <option value="Kodagu">Kodagu</option>
                        <option value="Kolar">Kolar</option>
                        <option value="Koppala">Koppala</option>
                        <option value="Mandya">Mandya</option>
                        <option value="Mysore">Mysore</option>
                        <option value="Raichur">Raichur</option>
                        <option value="Ramanagara">Ramanagara</option>
                        <option value="Shivamogga">Shivamogga</option>
                        <option value="Tumakur">Tumakur</option>
                        <option value="Udupi">Udupi</option>
                        <option value="Uttara Kannada">Uttara Kannada</option>
                        <option value="Vijayapura">Vijayapura</option>
                        <option value="Yadgiri">Yadgiri</option>
                    </select>
                    <button className="btn btn bg-dark text-light ms-1" onClick={ok}>Filter</button>
                </div>
                <div className="bu">
                    {path.pathname==='/customer/viewbill' ? 
                    <Link to='/customer' className="btn btn bg-danger">Back</Link> : 
                    <Link to='/admin' className="btn btn bg-danger">Back</Link> }
                </div>
            </div><hr />
            <div className="all  d-flex flex-wrap">
                {files.map((x) => (
                    <div style={{ width: 430 }} className="bill bg-success text-warning p-3 m-2 border border-warning rounded-4 text-start">
                        <h3>Customer Name : {x.C_name}</h3>
                        <h3>Amount : {x.Amount}</h3>
                        <h3>Reasion :{x.Reasion}</h3>
                        <h3>Branch : {x.Branch}</h3>
                        <h3>Unicid : {x.id}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Viewfill;