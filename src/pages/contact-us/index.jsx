import { useNavigate } from "react-router-dom";
import TextInputField from "../../components/text-input";

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
            <form 
                onSubmit={handleSubmit}
                className="mt-10 space-y-5"
            >
                <h1>Contact Us Page</h1>
                <TextInputField />
                <button
                    className="btn btn-primary w-full"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}