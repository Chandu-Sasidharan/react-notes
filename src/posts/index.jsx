import { useNavigate } from "react-router-dom";

const blogPosts = [
    { id: 1, title: "Blog Post 1", content: "This is the content of blog post 1." },
    { id: 2, title: "Blog Post 2", content: "This is the content of blog post 2." },
    { id: 3, title: "Blog Post 3", content: "This is the content of blog post 3." },
    { id: 4, title: "Blog Post 4", content: "This is the content of blog post 4." },
    { id: 5, title: "Blog Post 5", content: "This is the content of blog post 5." },
    { id: 6, title: "Blog Post 6", content: "This is the content of blog post 6." }
];

export default function Posts() {
    const navigate = useNavigate();

    return (
        <div className="m-10 flex flex-wrap gap-5 items-center justify-center">
            {blogPosts.map(post => (
                <div 
                    className="card w-96 bg-base-100 shadow-xl cursor-pointer"
                    key={post.id}
                    onClick={() => navigate(`/posts/${post.id}`)}
                >
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                </div>
            ))}
        </div>
    )
}