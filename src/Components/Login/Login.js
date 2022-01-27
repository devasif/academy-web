import  {React, useState} from"react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css"
const Login =()=>{

    const [data,setData] = useState({
        email:"",
        password:""
    });
const [error,setError] = useState("");
const navigate = useNavigate()
    const handleChange =({currentTarget: input})=>{
        setData({...data,[input.name]:[input.value]})
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/auth";
            const {data:res} = await axios.post(url,data); 
            localStorage.setItem("token",res.data);
            window.location("/")
            console.log(res.message)
        } catch (error) {
            if(error.response && error.response.status
                >=400 &&
                error.response >=500)
                {
                    setError(error.data.response.message)
                }
        }
    }
    return <div className="login_container">
        <div className="login_form_container">
            <div className="left">
            <form  onSubmit={handleSubmit} className="form-container">
                    <h1>Login to your account</h1>
                   
                   
                     <input type="email" 
                    placeholder="inter your email"
                    name="email"
                    value={data.email}
                    required
                    className="input"
                    onChange={handleChange}
                    />
                     <input type="password" 
                    placeholder="inter your password"
                    name="password"
                    value={data.password}
                    required
                    className="input"
                    onChange={handleChange}
                    />
                    {error &&<div className="error_msg">{error}</div>}
                    <button type="submit" className="green_btn">
                        Sign Up
                    </button>
                </form>
            </div>
            <div className="right">
            <h1>New Here</h1>
                <Link to="/signup" >
                    <button type="button" className="white_btn">
                        Sign Up
                    </button>
                </Link>
               
            </div>
        </div>
    </div>
}

export default Login;