import { Link } from "react-router-dom";
import "../App.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
        <h2>ZEUS TASK MANAGER</h2>
        <div className="menu-title">Menu</div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Calendar</Link>
            <Link to="/settings">Settings</Link>
        </nav>
        </aside>
    );
}