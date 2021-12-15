import {apiClient, apiClientTokenAuth} from "./apiClient"
import { useEffect, useState } from "react";
import errorMessages from "./errorStrings"

const endpoint = "/user";



function useGetUsers(){  
    const [res, setRes] = useState()

    useEffect(
        ()=>{
            const runHook=async ()=>{
            const response = await apiClient().get(endpoint)
            setRes({   
                    "data":response.data.users ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, []
    )
    return res
}

function useGetUser(user_id){  
    const [res, setRes] = useState({})

    useEffect(
        ()=>{const runHook=async ()=>{
            const response = await apiClient().get(endpoint+`/${user_id}`)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [user_id]
    )
    return res
}

function usePostUser(data){  
    const [res, setRes] = useState({})

    useEffect(
        ()=>{
            if (!data) return;
            const runHook=async ()=>{
            const response = await apiClient().post(endpoint, data)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [data]
    )
    return res
}

function usePutUser(user_id, data, token){  
    const [res, setRes] = useState({})

    useEffect(
        ()=>{const runHook=async ()=>{
            const response = await apiClientTokenAuth(token).put(endpoint+`/${user_id}`, data)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [user_id, data, token]
    )
    return res
}

function useDeleteUser(user_id, token){  
    const [res, setRes] = useState({})

    useEffect(
        ()=>{const runHook=async ()=>{
            const response = await apiClientTokenAuth(token).delete(endpoint+`/${user_id}`)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [user_id, token]
    )
    return res
}


export {
    useGetUsers,
    useGetUser,
    usePostUser,
    usePutUser,
    useDeleteUser
    
}