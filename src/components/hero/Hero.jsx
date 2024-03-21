import Greetings from '../greetings/Greetings';

export default function Hero() {
    const firstName = 'Mickey';

    const list = [
        'Koala',
        'Elephant',
        'Giraffe',
        'Zebra',
        'Monkey'
    ];

    return (
        <main className="pt-[60px] flex flex-col gap-5 justify-center items-center min-h-screen">
            <Greetings name={firstName} />
            <ul>
                { list.map(item => <li key={item}>{item}</li>) }
            </ul>
        </main>
    )
}

