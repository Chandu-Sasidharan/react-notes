import useUser from "../../../store/use-user";

export default function Welcome() {
    const { userState } = useUser()

    return <h1>{`Welcome ${userState.username}`}</h1>
}