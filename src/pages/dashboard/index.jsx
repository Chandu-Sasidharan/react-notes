import { Link, Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <>
            <div className="fixed top-[64px] left-0 h-screen w-[200px] bg-slate-200 p-2">
                <nav className="flex flex-col gap-2">
                    <Link to="/dashboard">Dashboard Home</Link>
                    <Link to="profile">Profile</Link>
                    <Link to="settings">Settings</Link>
                </nav>
            </div>

            <main className="ml-[200px]">
                <Outlet />
            </main>
        </>
    )
}