import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext=React.AuthContext();


export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}){
    const [currentuser,setcurrentuser]=useState(null)
    const [userLoggedIn,setUserLoggedIn]=useState(false);
    const [loading,setloading]=useState(true);

    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,initializeUser);
        return unsub;
    },[])

    async function initializeUser(user){
        if(user){
            setcurrentuser({...user});
            setUserLoggedIn(true);
        }
        else{
            setcurrentuser(null);
            setUserLoggedIn(false);
        }
        setloading(false);
    }

    const value={
        currentuser,
        userLoggedIn,
        loading
    }

    return <AuthContext.AuthProvider value={value}>{!loading &&children}</AuthContext.AuthProvider>
}