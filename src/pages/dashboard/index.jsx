import { NavLink, Link, Outlet, Navigate } from "react-router-dom"
import { useUser } from "../../store/user-context";

// import "./index.css";

const isActive = ({ isActive }) => (
    { backgroundColor: isActive ? "antiquewhite" : "" }
);

export default function Dashboard() {
    const { user } = useUser();

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return (
        <>
            <div className="fixed top-[80px] left-0 h-full bg-slate-100 w-[200px] p-3">
                <nav className="flex flex-col gap-3">
                    <Link to="/dashboard">Dashboard Home</Link>
                    <NavLink 
                        className="p-1 rounded-md"
                        to="profile"
                        style={isActive}
                    >
                        Profile
                    </NavLink>
                    <NavLink 
                        className="p-1 rounded-md"
                        to="settings"
                        style={isActive}
                    >
                        Settings
                    </NavLink>
                </nav>
            </div>

            <main className="ml-[200px] mt-[20px]">
                <Outlet />
            </main>
        </>
    )
}