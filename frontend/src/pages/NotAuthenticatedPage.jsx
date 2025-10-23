import { useState, useEffect, useContext } from "react";
import { loginUser } from "../services/AuthContext";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";




function NotAuthenticatedPage (props) {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext)

    useEffect(() => { // se utente gia loggato mandi alla home
        if (isAuthenticated) {
      navigate("/");
        }
    }, [isAuthenticated, navigate]);


    const sendLoginData = (async(e) => {
        e.preventDefault()
        setEmail("")   
        setPassword("")  
        const inpuData = {
            email: email,
            password: password
        }
        const user = await loginUser(inpuData)  
        if (user.payload.status === "success") {
            setIsAuthenticated(true)
            navigate("/")

        }
        
    })


        //spostare tutto in componente login e Password

    return (
        <form action="">
            <label htmlFor="">email</label>
            <input
            value={email}
            required

            onChange={
                (e) => (setEmail(e.target.value))
            }
             type="email" name="" id="" />
            <label htmlFor="">Password</label>
            <input 
            required
            value={password}
            onChange={
                (e) => (setPassword(e.target.value))
            } 
            type="password" name="" id="" />
            <button onClick={sendLoginData}>Log in</button>
        </form>




    )
}


export default NotAuthenticatedPage;