import Greetings from '../greetings/Greetings';

export default function Hero() {
    const firstName = 0;

    return (
        <main className="pt-[60px] flex flex-col gap-5 justify-center items-center min-h-screen">
            <Greetings name={firstName} />
        </main>
    )
}

