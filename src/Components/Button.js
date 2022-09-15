import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from './context/Context'

const Button = () => {

    const context = useContext(Context)
    const { logInSuccess, login } = context

    const status = () => {
        login(false)
    }

    return (
        <>
            {(logInSuccess === true) ? <Link className='btn btn-success' to='/' onClick={status} >Log Out</Link> : <Link className='btn btn-success' to='/auth' >LogIn</Link>}
        </>
    )
}

export default Button
