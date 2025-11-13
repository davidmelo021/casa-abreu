import {Button} from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

export function LoginButton() {
    const navigate = useNavigate();
    const location = useLocation();   

    if (location.pathname === "/login") return null;

    return <Button onClick={() => navigate("/login")}>Login</Button>;
}