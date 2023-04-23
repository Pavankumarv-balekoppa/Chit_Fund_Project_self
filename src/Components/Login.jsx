import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {


    let[kind,setkind]=useState('')

    let name=useRef('')
    let password=useRef('')
    let nevigate=useNavigate()

    let submit1 = async(e) => {
        e.preventDefault()
        let api = kind == "admin" ? 'http://localhost:7000/Admin' : 'http://localhost:7000/Customer'
        let response=await fetch(api)
        let data1=await response.json()
        
        let search=data1.find(x=>{ return x.email == name.current.value})
        console.log(search.email);
        console.log(search.password);

        if(search=="undefine")
        {
            alert('invalid credential')
        }
        else if(search.password!=password.current.value)
        {
            alert("invalid email or password")
        }
        else
        {
            alert("login succesfully")
            nevigate(kind=="admin" ? "/admin" : "/customer")
        }
    }


    return (
        <div className="login p-2 d-flex justify-content-evenly m-5 ms-5">
            <div className="img mt-5">
                <img src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.webp" alt="" />
                {/* <img src="https://i.gifer.com/origin/10/108ac686886133567e0c31a1d92b89c1_w200.webp" alt="" /> */}
            </div>
            <form className="form p-5" onSubmit={submit1}>
                <label>Email : </label><input className="ms-5" ref={name} type="email" placeholder="enter email" required /><br /><br />
                <label>Password : </label><input className="ms-3" ref={password} type="password" placeholder="enter password" required /><br /><br />
                <div className="radio ">
                    <label>UserKind : </label>
                    <input className="ms-3" type="radio" name="radio" onClick={()=>{setkind("customer")}} required/> <label>Customer</label>
                    <input className="ms-3" type="radio" name="radio" onClick={()=>{setkind("admin")}} required /> <label>Admin</label>
                </div><br />
                <div className="">
                    <button type="submit" className="btn btn bg-success ms-5">Login</button>
                </div><br />
                <lable>don't have on Account ? </lable> <Link className="btn btn bg-warning" to="/signup">Signup</Link>
            </form>
        </div>
    );
}

export default Login;