import { Link } from 'react-router-dom';
import useUser from '../../store/use-user';

export default function Header() {
    const { userState, signOutUser } = useUser();

    return (
        <div className="bg-slate-200 h-[60px] text-sm flex justify-between items-center pl-3 pr-3">
            <nav>
                <ul className="flex gap-3">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>
            {!userState ? (
                <button className="btn btn-sm bg-slate-300 hover:bg-slate-400 text-white">
                    <Link to="/login">Login</Link>
                </button>
            ) : (
                <button
                    onClick={signOutUser}
                    className="btn btn-sm bg-slate-300 hover:bg-slate-400 text-white"
                >
                    Logout
                </button>
            )}
        </div>
    );
}
