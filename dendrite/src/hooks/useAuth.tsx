
import { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";
const client = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
});
const useAuth = () => {
    const isRun = useRef(false);
    const [isLogin, setLogin] = useState(false);
    useEffect(() => {
        if(isRun.current) return;
        isRun.current = true;
       
        client.init({onLoad:"login-required"}).then((res)=>setLogin(res))

    }, [])



    return isLogin;
}
export default useAuth;
