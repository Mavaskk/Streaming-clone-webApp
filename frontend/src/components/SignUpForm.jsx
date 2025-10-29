import { useState, useEffect, useContext } from "react";
import { registerUser } from "../services/AuthContext";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../css/Form.css"
import { register } from "swiper/element";


function SignUpForm(props) {

    const formRef = useRef("")
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")

    const navigate = useNavigate()





    const sendSingUpData = (async(e) => {
        e.preventDefault()
        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity()
        }
        else {
            setEmail("")   
                    setPassword("")  
                    const inpuData = {
                        email: email,
                        password: password,
                        firstName: name,
                        lastName : lastName

                    }
                    inpuData.extraData = {};
                    const user = await registerUser(inpuData)  
                    if (user.payload.status === "success") { // se login avviene con successo manda home
                        navigate("/authentication/login")
                    }                        
        }
        
      
        
    })






    return (
        <div className="container-fluid d-flex justify-content-center mt-5">
                <form ref={formRef} className="form-container d-flex flex-column ps-5 pe-5 pb-3 pt-3" action="">
                        <label className="form-label">Name</label>
                        <input
                            value={name}
                            required
                            placeholder="Jhon"
                            onChange={
                                (e) => (setName(e.target.value))
                            }
                            type="text" className="mb-3 form-input"  
                        />

                        <label className="form-label">Last name</label>
                        <input
                            value={lastName}
                            required
                            placeholder="Smith"
                            onChange={
                                (e) => (setLastName(e.target.value))
                            }
                            type="text" className="mb-3 form-input"  
                        />

                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        required
                        placeholder="name@example.com"
                        onChange={
                            (e) => (setEmail(e.target.value))
                        }
                        type="email" name="" className="mb-3 form-input"  />
                    <label className="form-label">Password</label>
                    <input 
                    required
                    min={6}
                    value={password}
                    onChange={
                        (e) => (setPassword(e.target.value))
                    } 
                    type="password" name=""  className="mb-3 form-input" />
                    <button onClick={sendSingUpData} className="btn-form p-2">Sign up </button>
                    <button onClick={() => (navigate("/authentication/login"))} className="btn-secondary" >Or log in</button>
                </form>    
        </div>        
    )
    
}

export default SignUpForm;