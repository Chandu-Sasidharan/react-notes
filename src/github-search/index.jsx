import { useState } from "react"

export default function GithubSearch() {
    const [repos, setRepos] = useState([]);
    const [formData, setFormData] = useState({
        searchQuery: '',
        username: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`https://api.github.com/search/repositories?q=${formData.searchQuery}%20user:${formData.username}`);
        const data = await response.json();
        setRepos(data.items);
    }

    return (
        <div className="m-5 flex items-start gap-5">
            <form 
                className="flex flex-col gap-3 items-start"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    placeholder="Search Query"
                    className="input input-bordered w-full max-w-xs"
                    value={formData.searchQuery}
                    onChange={handleInputChange}
                    name="searchQuery"
                />
                  <input 
                    type="text"
                    placeholder="Username"
                    className="input input-bordered w-full max-w-xs"
                    value={formData.username}
                    onChange={handleInputChange}
                    name="username"
                />
                <button 
                    className="btn btn-primary"
                    type="submit"
                >
                    Search Github
                </button>
            </form>

            {
                !!repos.length &&
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={`${repos[0].owner.avatar_url}`} />
                    </div>
                </div>
            }
        </div>
    )
}