import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    let name = useRef("")
    let email = useRef("")
    let password = useRef("")
    let tocken = useRef("")
    let [kind, setkind] = useState("")
    let [tock, settock] = useState(false)
    let nevigate=useNavigate()  

    let submit = (e) => {
        e.preventDefault();
        let data = { name: name.current.value, email: email.current.value, password: password.current.value, tocken: tocken.current.value, kind }
        console.log(data);

        let config = {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(data)
        }
        let api = kind == "admin" ? 'http://localhost:7000/Admin' : 'http://localhost:7000/Customer'
        
        fetch(api, config).then(() => {
            alert("Signup successfull");
            nevigate('/')
        })
    }

    return (
        <div className="signup d-flex justify-content-evenly p-2  m-5 ms-5">
            <div className="img mt-5">
                <img src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.webp" alt="" />
                {/* <img src="https://i.gifer.com/origin/0c/0c928224e981a44014280dd496d3c6e1_w200.webp" alt="" /> */}
                {/* <img src="https://i.gifer.com/origin/b9/b9341a7cdc9dabd29d5e29e0065a0a90_w200.webp" alt="" /> */}
            </div>
            <form className="form w-50  p-5" onSubmit={submit}>
                <label >Username : </label><input className="ms-3" type="text" ref={name} placeholder="enter username" required /><br /><br />
                <label>Email : </label><input className="ms-5" type="email" ref={email} placeholder="enter email" required /><br /><br />
                <label>Password : </label><input className="ms-3" type="password" ref={password} placeholder="enter password" required /><br /><br />

                {tock && <div className="tocken">
                    <label>Tocken id   :  </label><input className="ms-3" type="text" placeholder="enter tocken" ref={tocken} required /><br /><br />
                </div>}

                <div className="radio  ">
                    <label>UserKind : </label>
                    <input className="ms-3" type="radio" value={kind} onClick={() => { setkind("customer", settock(false)) }} name="radio" required /> <label>Customer</label>
                    <input className="ms-3" type="radio" value={kind} onClick={() => { setkind("admin", settock(true)) }} name="radio" required /> <label>Admin</label>
                </div><br />
                <button className="btn btn bg-success ms-5" >Signup</button><br /><br />
                <lable>Alredy have on Account ? </lable><Link className="btn btn bg-warning" to="/">Login</Link>
            </form>
            
        </div>
    );
}
export default Signup;