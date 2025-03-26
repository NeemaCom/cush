import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RootLayout from "./Layout/RootLayout";
import UserLayout from "./Layout/UserLayout"; // Import UserLayout
import NotFound from "./pages/NotFound";
import Form from "./components/Form";
import PrivateRouteLayout from "./Layout/PrivateRouteLayout";
import AdminLayout from "./Layout/AdminLayout";
import Admin from "./pages/Admin";
import Dashboard from "./components/user/Dashboard";
import Product from "./components/user/Product";
import { Settings } from "lucide-react";
import UserProfile from "./components/user/UserProfile";

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
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='products' element={<Product />} />
            <Route path='profile' element={<UserProfile />} />
            <Route path='settings' element={<Settings />} />
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