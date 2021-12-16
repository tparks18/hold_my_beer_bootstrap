import {apiClientTokenAuth, apiClient} from "./apiClient"
import { useEffect, useState } from "react";
import errorMessages from "./errorStrings"


const endpoint = "/video";

function useGetVideos(){  
    const [res, setRes] = useState({})

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClient().get(endpoint)
            setRes({   
                    "data":response.data?.videos ?? null,
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

function useGetVideo(video_id){  
    const [res, setRes] = useState({})

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClient().get(endpoint+`/${video_id}`)
            setRes({   
                    "data":response.data ?? null,
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

function usePostVideo(data, token){  
    const [res, setRes] = useState({})

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
        }, [token, data]
    )
    return res
}

function usePutVideo(video_id,  data, token){  
    const [res, setRes] = useState({})

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClientTokenAuth(token).put(endpoint+`/${video_id}`, data)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [video_id, data, token]
    )
    return res
}

function useDeleteVideo(video_id, token){  
    const [res, setRes] = useState({})

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClientTokenAuth(token).delete(endpoint+`/${video_id}`, data)
            setRes({   
                    "data":response.data ?? null,
                    "response_code":response.status,
                    "error":errorMessages[response.status] ?? ''
                })
            }
            runHook()
            return
        }, [token, video_id]
    )
    return res
}

function useGetVideosByUserID(user_id){  
    const [res, setRes] = useState({})

    useEffect(()=>{
        const runHook=async ()=>{
            const response = await apiClient().get(endpoint+`/user/${user_id}`)
            setRes({   
                    "data":response.data?.videos ?? null,
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

export {
    useGetVideos,
    useGetVideo,
    usePostVideo,
    usePutVideo,
    useDeleteVideo,
    useGetVideosByUserID

}