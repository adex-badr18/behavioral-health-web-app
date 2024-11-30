import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/landing/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{ index: true, element: <Home /> }],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
