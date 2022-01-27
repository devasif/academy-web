import  {React, useState} from"react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./singup.css"
const SignUp =()=>{

    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    });
const [error,setError] = useState("");
const navigate = useNavigate()
    const handleChange =({currentTarget: input})=>{
        setData({...data,[input.name]:[input.value]})
    };

    const handleSubmit = async(e)=>{
        console.log(data)
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/register/";
            const {data:res} = await axios.post(url,data); 
            navigate("/login")
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
    return <div className="singup_container">
        <div className="singup_form_container">
            <div className="left">
                <h1>Welcome Back</h1>
                <Link to="/login" >
                    <button type="button" className="white_btn">
                        Sing In
                    </button>
                </Link>
            </div>
            <div className="right">
                <form  onSubmit={handleSubmit} className="form-container">
                    <h1>Create Account</h1>
                    <input type="text" 
                    placeholder="inter your first name"
                    name="firstName"
                    defaultValue={data.firstName}
                    required
                    className="input"
                    onChange={handleChange}
                    />
                    <input type="text" 
                    placeholder="inter your last name"
                    name="lastName"
                    defaultValue={data.lastName}
                    required
                    className="input"
                    onChange={handleChange}
                    />
                     <input type="email" 
                    placeholder="inter your email"
                    name="email"
                    defaultValue={data.email}
                    required
                    className="input"
                    onChange={handleChange}
                    />
                     <input type="password" 
                    placeholder="inter your password"
                    name="password"
                    defaultValue={data.password}
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
        </div>
    </div>
}

export default SignUp;