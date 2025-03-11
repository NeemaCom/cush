import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RootLayout from "./Layout/RootLayout";
import User from "./pages/User";
import UserLayout from "./Layout/UserLayout";
import NotFound from "./pages/NotFound";
import Form from "./components/Form";
import PrivateRouteLayout from "./Layout/PrivateRouteLayout";
import AdminLayout from "./Layout/AdminLayout";
import Admin from "./pages/Admin";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Login />} />
          <Route path='signup' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route element={<PrivateRouteLayout />}>
          <Route path='user' element={<UserLayout />}>
            <Route index element={<User />} />
            <Route path='form' element={<Form />} />
          </Route>
          <Route path='admin' element={<AdminLayout />}>
            <Route index element={<Admin />} />
          </Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
