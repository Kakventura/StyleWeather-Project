import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const useAppContext = () => {
    const contexto = useContext(AppContext);
    return(contexto);
};

export { useAppContext };