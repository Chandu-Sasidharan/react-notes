
export default function Header() {
    return (
        <div 
            className="flex justify-between bg-slate-400 p-2 fixed w-full"
        >
            <span>LOGO</span>
            <nav>
                <ul className="flex gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}