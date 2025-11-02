
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Impressum from "../pages/impressum/page";
import Datenschutz from "../pages/datenschutz/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/impressum",
    element: <Impressum />,
  },
  {
    path: "/datenschutz", 
    element: <Datenschutz />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
