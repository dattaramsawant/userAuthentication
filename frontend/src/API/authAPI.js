import { setAccessToken } from "../Redux/user"
import { LOGIN } from "./APIURL"
import axios from "./axios"

const headers={
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
}

export const login=async(payload)=>{
    try{
        const response = await axios.post(LOGIN,payload,headers)
        const accessToken = response?.data?.accessToken
        return{
            status: "Success",
            accessToken
        }
    }catch(error){
        if(error?.response?.status === 401){
            return{
                status: 'Failed',
                message: "Unauthorized"
            }
        }else if(!error?.response){
            return{
                status: "Failed",
                message: "No Server Response"
            }
        }else if(error?.response?.status === 400){
            return{
                status: "Failed",
                message: "Missing Username or Password"
            }
        }else{
            return{
                status: "Failed",
                message: "Login Failed"
            } 
        }
    }
}