import { useParams } from 'react-router-dom';

export default function PostDetails() {
    const { postId } = useParams();

    return(
        <div>
            <h1>{`Post details page for the post ID: ${postId}`}</h1>
            {/* WIth this setup, you can use post id to fetch full details about that post and render it here */}
        </div>
    )
}