import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar"
import Home from "../pages/home/Home"
import Detail from "../pages/detail/Detail"
import About from "../pages/about/About"
import Login from "../pages/login/Login"
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>
          <Route path="detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter;