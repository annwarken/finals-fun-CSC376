import { Outlet, Link } from "react-router";
import "../styles/Index.css";

const MainLayout = () => (
    <div>
        <header>
            <h1>Welcome to Finals Fun!</h1>
        </header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/jokes">Need a Laugh?</Link>
            <Link to="/games">Games</Link>
            <Link to="/study">Study</Link>
            <Link to="/checkin">Check In</Link>
        </nav>
        <Outlet/>
    </div>
)

export default MainLayout