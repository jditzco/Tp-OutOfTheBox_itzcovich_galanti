import { Outlet } from "react-router-dom";
import NavBarra from "./NavBar";


function Layout() {
  return (
    <>
        <NavBarra/>
        <Outlet />
    </>
  )
}

export default Layout;