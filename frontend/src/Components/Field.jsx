import React from 'react'

const Field = (props) => {
    const {label,type,...inputothers} = props

    return (
        <>
            <label className='fieldLabel'>{label}</label>
            <input 
                className='fieldInput' 
                type={type}
                {...inputothers}
            />
        </>
    )
}

export default Field