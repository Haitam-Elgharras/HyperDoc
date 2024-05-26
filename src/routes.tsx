import { createBrowserRouter } from "react-router-dom";
import Hyper from "./components/hyper";
import Essays from "./components/Essays";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Hyper /> },
      { path: "essays", element: <Essays /> },
    ],
  },
]);

export default router;
