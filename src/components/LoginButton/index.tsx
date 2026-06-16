import {Button} from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import {useAuth} from '../../context/AuthContext';

export function LoginButton() {
    const navigate = useNavigate();
    const location = useLocation();  
    const {isLogado} = useAuth(); 

    if (location.pathname === "/login") return null;
    if (isLogado) return null;

    return <Button onClick={() => navigate("/login")}>Login</Button>;
}