import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RootLayout from "./Layout/RootLayout";
import User from "./pages/User";
import UserLayout from "./Layout/UserLayout";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='signup' element={<Register />} />
          <Route path='login' element={<Login />} />

          <Route path='user' element={<UserLayout />}>
            <Route index element={<User />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
