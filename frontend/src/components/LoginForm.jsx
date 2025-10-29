import { useState, useEffect, useContext, useRef } from "react";
import { loginUser } from "../services/AuthContext";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";
import "../css/Form.css"

function LoginForm(props) {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [messageError,setMessageError] = useState(false)

    const navigate = useNavigate()

    const formRef = useRef(null)


    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

    useEffect(() => { // se utente gia loggato mandi alla home
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);



    const sendLoginData = (async(e) => {
        e.preventDefault()
        if (!formRef.current.checkValidity()) {
            formRef.current.reportValidity()
        }
        else {
            setEmail("")   
            setPassword("")  
            const inpuData = {
                email: email,
                password: password
            }
            const user = await loginUser(inpuData)  
            if (user.payload.status === "success") { // se login avviene con successo manda home
                setIsAuthenticated(true)
                navigate("/")
                setMessageError(false)

            }         
            else {
                setMessageError(true)

            }   
        }

        
    })

    useEffect(() => {
        console.log(messageError);
        
    },[messageError])


    return(
        <div className="container-fluid d-flex justify-content-center mt-5">
                <form ref={formRef} className="form-container d-flex flex-column ps-5 pe-5 pb-3 pt-3" action="">
                    <label htmlFor="" className="form-label">Email</label>
                    <input
                    value={email}
                    required
                    placeholder="name@example.com"
                    onChange={
                        (e) => (setEmail(e.target.value))
                    }
                    type="email" name="" className="mb-3 form-input"  />
                    <label htmlFor="" className="form-label">Password</label>
                    <input 
                    required
                    value={password}
                    onChange={
                        (e) => (setPassword(e.target.value))
                    } 
                    type="password" name=""  className="mb-3 form-input" />
                     {messageError && <p className="error-msg">Email or Password are incorrect </p>}
                    <button  onClick={sendLoginData} className="btn-form p-2">Log in</button>
                    <button onClick={() => (navigate("/authentication/signup"))} className="btn-secondary" >Or sign in with</button>
                </form>    
        </div>


    )
    
}


export default LoginForm;