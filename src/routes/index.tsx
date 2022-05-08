import Numbers from "../pages/Numbers";
import Home from "../pages/Home";
import Number from "../pages/Number";

const routes = [
  {
    path: "companies/:companyId",
    element: <Numbers />,
    index: false,
  },
  {
    path: "number/:numberId",
    element: <Number />,
    index: false,
  },
  {
    path: "/",
    element: <Home />,
    index: true,
  },
];

export default routes;
