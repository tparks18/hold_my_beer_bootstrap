import {apiClientBasicAuth} from "./apiClient"
import { useEffect, useState } from "react";
import errorMessages from "./errorStrings"


const endpoint = "/login";

function useLogin(email, password){  
    const [res, setRes] = useState({})

    useEffect(()=>{
        const runHook=async ()=>{
            if (!email || !password) return
            const response = await apiClientBasicAuth(email, password).get(endpoint)
            setRes({   
                    "data":response.data,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }
        , [email, password]
    )
    return res
}

export {
    useLogin
}