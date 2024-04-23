import useUser from "../../store/use-user"

export default function Login() {
    const { signInUser } = useUser();

    return (
        <div className="flex justify-center mt-20">
            {/* In real case, you take the form data and pass to to the siginfunc */}
            <button
                className="btn btn-primary"
                onClick={() =>signInUser('Alfred Hicthcock')}
            >
                Login with Email and Password
            </button>
        </div>
    )
}