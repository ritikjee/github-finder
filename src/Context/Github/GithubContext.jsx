import { createContext,useReducer} from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext()

export const GithubProvider=({children})=>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading :true,
    }

    const [state,dispatch] =useReducer(githubReducer,initialState)
    const clearUsers=()=>{
        dispatch({type:"CLEAR_USERS"})
    }
    const fetchUsers=async(text)=>{
        const response=await fetch(`https://api.github.com/search/users?q=${text}`,{
            headers:{
                Authorization:`token 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`
            }
        })

        const {items} = await response.json()
        dispatch({
            type:"GET_USERS",
            payload:items,
        })
    }
    const getUser=async(login)=>{
        console.log(login)
        const response=await fetch(`https://api.github.com/users/${login}`,{
            headers:{
                Authorization:`token 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`
            }
        })
        if(response.status===404){
            window.location='/notfound'
        }
        else{

            const data = await response.json()
            dispatch({
                type:"GET_USER",
                payload:data,
            })
        }
    }
    const getUsersRepos=async(login)=>{
        const param=new URLSearchParams({
            sort:'created',
            per_page:10,
        })
        const response=await fetch(`https://api.github.com/users/${login}/repos?${param}`,{
            headers:{
                Authorization:`token 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`
            }
        })

        

        const data = await response.json()
        dispatch({
            type:"GET_USERS_REPOS",
            payload:data,
        })
    }

    return <GithubContext.Provider value={{
        users:state.users, 
        loading:state.loading,
        user:state.user,
        repos:state.repos,
        fetchUsers,
        clearUsers,
        getUser,
        getUsersRepos}}>
        
                {children}
    </GithubContext.Provider>
}

export default GithubContext