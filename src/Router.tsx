import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import Jokes from "./pages/Jokes";
import Games from "./pages/Games";
import Study from "./pages/Study";
import CheckIn from "./pages/CheckIn";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<Index/>}/>
                <Route path="jokes" element={<Jokes/>}/>
                <Route path="games" element={<Games/>}/>
                <Route path="study" element={<Study/>}/>
                <Route path="checkin" element={<CheckIn/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router