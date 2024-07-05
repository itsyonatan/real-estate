import Footer from "../../components/footer/footer";
import { Outlet } from "react-router-dom";
import Nav from "../nav/nav";

export default function Layout() {


  return (
    <div className="layout">
      <div className="paddings" style={{backgroundColor: "var(--black)"}}>
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}