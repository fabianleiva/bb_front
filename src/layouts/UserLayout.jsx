import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"
import { storeBulkBuddies } from "../state/state"
import { Navigate, Outlet } from 'react-router-dom';


export const UserLayout = () => {
  const isAuth = storeBulkBuddies((state) => state.isAuth)
  return (
    <>
      <div className="flex flex-col h-screen" >
        <div className="flex-0">
          <Navbar />
        </div>

        <div className="flex-1">
          {isAuth ? <Outlet /> : <Navigate to="/auth/login" />}
        </div>
        <div className="flex-0">
          <Footer />
        </div>
      </div>
    </>
  )
}
