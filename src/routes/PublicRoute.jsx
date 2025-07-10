import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
    const login = localStorage.getItem("Lagi Login");
    return login ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
