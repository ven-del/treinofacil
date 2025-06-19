import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getUsuarioLogado } from "../../services/authService";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const usuario = getUsuarioLogado();
  return usuario ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
