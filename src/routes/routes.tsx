import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";




export function AppRoutes() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/"/>
      <Route path="/login"/>
    </Routes>
   </BrowserRouter>
   
  );
}
