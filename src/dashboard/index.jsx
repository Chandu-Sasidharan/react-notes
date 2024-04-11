import { Link, Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <div className="fixed top-[80px] left-0 h-full bg-slate-100 w-[200px] p-3">
                <nav className="flex flex-col gap-3">
                    <Link to="/dashboard">Dashboard Home</Link>
                    <Link to="profile">Profile</Link>
                    <Link to="settings">Settings</Link>
                </nav>
            </div>

            <main className="ml-[200px] mt-[20px]">
                <Outlet />
            </main>
        </>
    )
}