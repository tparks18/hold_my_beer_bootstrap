import {apiClient, apiClientTokenAuth} from "./apiClient"
import { useEffect, useState } from "react";
import errorMessages from "./errorStrings"

const endpoint = "/vote";



function useGetVotes(){  
    const [res, setRes] = useState()

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClient().get(endpoint)
            setRes({   
                    "data":response.data.votes ?? null,
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

function useGetVote(vote_id){  
    const [res, setRes] = useState()

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClient().get(endpoint+`/${vote_id}`)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [vote_id]
    )
    return res
}


function usePostVote(data, token){  
    const [res, setRes] = useState()

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClientTokenAuth(token).post(endpoint, data)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [data, token]
    )
    return res
}


function usePutVote(vote_id, data, token){  
    const [res, setRes] = useState()

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClientTokenAuth(token).put(endpoint+`/${vote_id}`, data)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [data, token]
    )
    return res
}

function useDeleteVote(vote_id, token){  
    const [res, setRes] = useState()

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClientTokenAuth(token).delete(endpoint+`/${vote_id}`)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [data, token]
    )
    return res
}


function useGetUserVotes(user_id){  
    const [res, setRes] = useState()

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClient().get(`/vote/user/${user_id}`)
            setRes({   
                    "data":response.data.votes ?? null,
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

function useGetUserVotesVerbose(user_id){  
    const [res, setRes] = useState()

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClient().get(`/vote/user/video/${user_id}`)
            setRes({   
                    "data":response.data.votes ?? null,
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

export {
    useGetVotes,
    useGetVote,
    usePostVote,
    usePutVote,
    useDeleteVote,
    useGetUserVotes,
    useGetUserVotesVerbose
}