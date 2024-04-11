import { useNavigate } from "react-router-dom";

export default function ContactUs() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the form submission
        const isError = false;

        if (isError) {
            // show error message and stay here
            return
        }

        navigate('/success');
    }
    return (
        <div className='flex flex-col items-center mt-20'>
            <form onSubmit={handleSubmit}>
                {/* form fields */}
                <h1>Contact Us Page</h1>
                <button
                    className="btn btn-primary m-5"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}