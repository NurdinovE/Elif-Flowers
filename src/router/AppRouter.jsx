import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home/Home.jsx";


const pagesData = [
    {
        path: "",
        title: "home",
        element: <Home/>
    },
];

const AppRouter = () => {
    const pageRoutes = pagesData.map(({ path, title, element }) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Switch>{pageRoutes}</Switch>;
};
export default AppRouter;