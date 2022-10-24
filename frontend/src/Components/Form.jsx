import React from 'react'

const Form = (props) => {
    const {name,children,...formother} = props

    const handleSubmit=(e)=>{
        e?.preventDefault()

        props?.onSubmit(e)
    }

    return (
        <>
            <h1 className='formName'>{name}</h1>

            <form 
                className='formMainTag'
                onSubmit={handleSubmit}
                {...formother}
            >
                {children}
            </form>
        </>
    )
}

export default Form