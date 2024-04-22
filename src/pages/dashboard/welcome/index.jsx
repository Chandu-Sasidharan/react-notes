import useUser from "../../../store/use-user";

export default function Welcome() {
    const { user } = useUser()

    return <h1>{`Welcome ${user?.name}`}</h1>
}