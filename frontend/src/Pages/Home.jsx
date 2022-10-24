import React from 'react'
import { useDispatch } from 'react-redux'
import { setAccessToken } from '../Redux/user'

const Home = () => {
    const dispatch=useDispatch()

    const logout=()=>{
        dispatch(setAccessToken(""))
    }

    return (
        <div>
            Home

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home