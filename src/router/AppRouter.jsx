import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import ProductPage from "../pages/product-page/ProductPage.jsx";
import Error from "../pages/error/Error.jsx";


const pagesData = [
    {
        path: "/",
        title: "home",
        element: <Home/>
    },{
        path: "/product/:name",
        title: "product-page",
        element: <ProductPage/>
    },
    {
        path: "*",
        element: <Error/>,
        title: "error"
    },
];

const AppRouter = () => {
    const pageRoutes = pagesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Switch>{pageRoutes}</Switch>;
};
export default AppRouter;