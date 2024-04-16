import { useUser } from "../../../store/user-context";

export default function Welcome() {
    const { user } = useUser()

    return <h1>{`Welcome ${user?.name}`}</h1>
}