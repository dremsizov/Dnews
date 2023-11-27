import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export default function AuthGuard(props){

    const{ isLogin } = useContext(AuthContext);

    if(!isLogin) {
        return <Navigate to="/login" />
    }

    return (
        <>
        
        {props.children}
        </>
        )
        
    
}