import React, { memo, useRef } from 'react'
import { login } from '../API/authAPI'
import Field from './Field'
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux'
import { setAccessToken } from '../Redux/user'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit=async(e)=>{
        e?.preventDefault()
        const values=e?.target?.elements
        const params={
            username: values?.username?.value,
            password: values?.password?.value
        }

        const res=await login(params)
        if(res?.status === "Success"){
            dispatch(setAccessToken(res?.accessToken))
            navigate(from, { replace: true });
            e.target.reset()
        }
    }

    const handleReset=(e)=>{
        e.target.reset()
    }

    return (
        <>
            <Form
                name="Sign In"
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                <Field
                    label="Username"
                    type="text"
                    name="username"
                    autoComplete="off"
                    required
                />
                <Field
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="off"
                    required
                />
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </Form>
        </>
    )
}

export default memo(Login)