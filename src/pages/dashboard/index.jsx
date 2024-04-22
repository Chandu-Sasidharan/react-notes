import { NavLink, Outlet, Navigate } from "react-router-dom"
import useUser from "../../store/use-user";
import classNames from "classnames";

// import "./index.css";

const classname = ({ isActive }) => {
    return classNames({
        "p-1 rounded-md": true,
        "bg-slate-200": isActive
    })
}

export default function Dashboard() {
    const { user } = useUser();

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return (
        <div 
            className="flex"
            style={{ height: 'calc(100vh - 60px'}}
        >
            <div className=" bg-slate-100 w-[200px] p-3">
                <nav className="flex flex-col gap-3">
                    <NavLink 
                        className={classname}
                        to="/dashboard"
                        end
                    >
                        Dashboard Home
                    </NavLink>
                    <NavLink 
                        className={classname}
                        to="profile"
                    >
                        Profile
                    </NavLink>
                    <NavLink 
                        className={classname}
                        to="settings"
                    >
                        Settings
                    </NavLink>
                </nav>
            </div>

            <main className="p-3">
                <Outlet />
            </main>
        </div>
    )
}