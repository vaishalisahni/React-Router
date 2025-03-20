import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Layout from "./Layout.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  Routes,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";
import { createFilter } from "vite";
import Github from "./components/Github/Github.jsx";
import User from "./components/User/User.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path="about" element={<About /> } />
      <Route path="contact" element={<Contact /> } />
      <Route path="user/:userid" element={<User /> } />
      <Route path="github" element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
   </StrictMode>
 )

// <BrowserRouter>
    {/* <RouterProvider router={router}/> */}
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes> */}
    {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter> */}
