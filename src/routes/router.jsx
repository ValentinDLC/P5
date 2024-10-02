import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Header from "../components/Header/Header";
import Main from "../Layout/Main/Main";
import Footer from "../Layout/Footer/Footer";
import Apartment from "../Pages/Apartmentrental/Apartmentrental";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const HeaderFooterLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cards",
        element: <Apartment />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/ErrorPage",
        element: <ErrorPage />,
      },
    ],
  },
]);
