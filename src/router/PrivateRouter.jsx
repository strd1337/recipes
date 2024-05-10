import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const isUserExist = true;

  return (
    <div>
      {isUserExist ? <Outlet /> : <Navigate to="/login" />}
    </div>
  )
}

export default PrivateRouter;