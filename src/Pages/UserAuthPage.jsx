import React from 'react'
import { Outlet } from 'react-router-dom'

const UserAuthPage = () => {
  return (
    <div>
        <h1>user outlet</h1>
        {/* outlet is use for nested routing */}
      <Outlet/>
    </div>
  )
}

export default UserAuthPage
