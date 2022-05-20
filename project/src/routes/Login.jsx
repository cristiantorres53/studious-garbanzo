import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const Login = () => {

    const {user} = useContext(UserContext);

  return (
    <div>Login</div>
  )
}

export default Login