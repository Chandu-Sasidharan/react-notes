import { useUser } from "../../store/user-context"

export default function Login() {
    const { signInUser } = useUser();

    return (
        <div className="flex justify-center mt-20">
            {/* In real case, you take the form data and pass to to the siginfunc */}
            <button
                className="btn btn-primary"
                onClick={signInUser}
            >
                Login
            </button>
        </div>
    )
}