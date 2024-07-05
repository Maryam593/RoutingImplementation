import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Category from "./Pages/Category";
// import Error from "./Components/Error";
import React from "react";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import UserAuthPage from "./Pages/UserAuthPage";
import DefaultLayout from "./Layouts/DefaultLayout";
import PrivateRouter from "./Routing/PrivateRouter";
import Profile from "./Pages/profile";







function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/PrivateRouter" element = {<PrivateRouter>
          <DefaultLayout><Profile/></DefaultLayout>
        </PrivateRouter>}/>
        
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        {/* after colons  it is a property define here... its a param actually i could be URL or query
        ? means its optional */}
        <Route path="/Product/:CategoryName?" element={<DefaultLayout><Products /></DefaultLayout>} />
        <Route path="/Category" element={<DefaultLayout><Category /></DefaultLayout>} />
        <Route path="/UserAuth" element = {<UserAuthPage/>} >
        {/* <Route index element = {<h1>Hi</h1>} /> */}
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
        </Route>
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
