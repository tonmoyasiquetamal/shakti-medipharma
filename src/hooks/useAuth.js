import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthProvider"

/*<-----UseAuth using Returned AuthContext */
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;