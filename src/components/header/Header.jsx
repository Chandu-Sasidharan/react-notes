import reactLogo from '../../assets/react.svg';

export default function Header() {
    return (
        <div className='h-[60px] flex justify-between p-3 bg-slate-500 text-white fixed w-full'>
            <img src={reactLogo} alt="react logo" />
            <ul className='flex gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}