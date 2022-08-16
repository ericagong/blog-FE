import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import My from "../pages/user/My";
import Create from "../pages/post/Create";
import Detail from "../pages/post/Detail";
import Edit from "../pages/post/Edit";
import NotFound from "../pages/NotFound";

// TODO protected router for login
const Routers = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/my' element={<My />} />
        <Route path='/create' element={<Create />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
