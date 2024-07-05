import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRouter = (props) => {
    const isLoggedIn = true;
  return (
    <div>
      {
        isLoggedIn?(props.children) : <>
        <Navigate to = "/UserAuth/Login" />
        </>
      }
    </div>
  )
}

export default PrivateRouter
