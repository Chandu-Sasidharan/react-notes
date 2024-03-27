import { useState, useEffect } from "react";
import Spinner from "../spinner";
export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => setPosts(posts))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
        }, 3000);
    }, []);

    if (isLoading)
        return <Spinner />

    return (
        <div className="m-5">
            <ul className="space-y-3">
                { posts.map(post => (
                    <li 
                        key={post.id}
                        className="bg-slate-200 p-2 rounded-sm"
                    >
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}